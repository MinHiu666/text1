import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = '请输入姓名'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = '请输入电话'
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入有效的手机号码'
    }
    
    if (!formData.requirement.trim()) {
      newErrors.requirement = '请选择需求类型'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', phone: '', requirement: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }))
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          姓名 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-800 transition-all focus:outline-none placeholder-gray-400 ${
            errors.name 
              ? 'border-red-500 focus:ring-2 focus:ring-red-500/30' 
              : 'border-gray-300 focus:border-neon-emerald focus:ring-2 focus:ring-neon-emerald/30'
          }`}
          placeholder="请输入您的姓名"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          电话 <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-800 transition-all focus:outline-none placeholder-gray-400 ${
            errors.phone 
              ? 'border-red-500 focus:ring-2 focus:ring-red-500/30' 
              : 'border-gray-300 focus:border-neon-emerald focus:ring-2 focus:ring-neon-emerald/30'
          }`}
          placeholder="请输入您的手机号码"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          需求类型 <span className="text-red-500">*</span>
        </label>
        <select
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-800 transition-all focus:outline-none ${
            errors.requirement 
              ? 'border-red-500 focus:ring-2 focus:ring-red-500/30' 
              : 'border-gray-300 focus:border-neon-emerald focus:ring-2 focus:ring-neon-emerald/30'
          }`}
        >
          <option value="" className="bg-gray-50 text-gray-800">请选择需求类型</option>
          <option value="purchase" className="bg-gray-50 text-gray-800">产品采购</option>
          <option value="cooperation" className="bg-gray-50 text-gray-800">合作洽谈</option>
          <option value="technology" className="bg-gray-50 text-gray-800">技术咨询</option>
          <option value="other" className="bg-gray-50 text-gray-800">其他</option>
        </select>
        {errors.requirement && (
          <p className="mt-1 text-sm text-red-400">{errors.requirement}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          留言内容
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:border-neon-emerald focus:ring-2 focus:ring-neon-emerald/30 transition-all focus:outline-none resize-none placeholder-gray-400"
          placeholder="请详细描述您的需求..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-neon-emerald to-neon-teal text-white font-cyber font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-neon-emerald/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            提交中...
          </span>
        ) : submitted ? (
          '提交成功！'
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            提交咨询
          </span>
        )}
      </motion.button>
    </motion.form>
  )
}
