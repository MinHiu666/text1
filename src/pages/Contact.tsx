import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Building2, ArrowRight } from 'lucide-react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const departments = [
    { name: '销售部', phone: '13800138001', email: 'sales@xinchenqi.com', description: '产品销售咨询、报价洽谈' },
    { name: '技术部', phone: '13800138002', email: 'tech@xinchenqi.com', description: '技术支持、工艺咨询' },
    { name: '售后部', phone: '13800138003', email: 'service@xinchenqi.com', description: '售后服务、问题反馈' },
    { name: '人事部', phone: '13800138004', email: 'hr@xinchenqi.com', description: '人才招聘、简历投递' },
  ]

  const traffic = [
    { type: '自驾', description: '导航至贵州省六盘水市水城区，公司位于工业园区内' },
    { type: '公交', description: '乘坐市区公交至水城客运站，转乘园区专线' },
    { type: '火车', description: '抵达六盘水站，打车约30分钟到达公司' },
    { type: '飞机', description: '抵达贵阳龙洞堡机场，转乘高铁至六盘水' },
  ]

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-white via-green-50 to-teal-50">
      <section className="py-16 bg-gradient-to-br from-white via-green-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Contact Us</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">联系我们</h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              欢迎通过以下方式与我们取得联系，我们将竭诚为您服务
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-cyber">详细联系方式</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-200 hover:border-neon-emerald/50 transition-all shadow-lg">
                  <div className="w-12 h-12 bg-neon-emerald/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-neon-emerald/30">
                    <MapPin className="w-6 h-6 text-neon-emerald" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">公司地址</h3>
                    <p className="text-gray-600">贵州省六盘水市水城区工业园区</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-200 hover:border-neon-emerald/50 transition-all shadow-lg">
                  <div className="w-12 h-12 bg-neon-emerald/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-neon-emerald/30">
                    <Phone className="w-6 h-6 text-neon-emerald" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">联系电话</h3>
                    <p className="text-gray-600">13800138000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-200 hover:border-neon-emerald/50 transition-all shadow-lg">
                  <div className="w-12 h-12 bg-neon-emerald/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-neon-emerald/30">
                    <Mail className="w-6 h-6 text-neon-emerald" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">电子邮箱</h3>
                    <p className="text-gray-600">contact@xinchenqi.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-200 hover:border-neon-emerald/50 transition-all shadow-lg">
                  <div className="w-12 h-12 bg-neon-emerald/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-neon-emerald/30">
                    <Clock className="w-6 h-6 text-neon-emerald" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">工作时间</h3>
                    <p className="text-gray-600">周一至周五：08:00 - 18:00</p>
                    <p className="text-gray-500 text-sm">周六：09:00 - 12:00（节假日除外）</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-cyber">在线留言</h2>
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-xl">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white via-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Departments</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">各部门联系方式</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-neon-emerald/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-neon-emerald/10 rounded-lg flex items-center justify-center border border-neon-emerald/30">
                    <Building2 className="w-5 h-5 text-neon-emerald" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{dept.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    <Phone className="w-4 h-4 inline mr-2 text-neon-emerald" />
                    {dept.phone}
                  </p>
                  <p className="text-sm text-gray-700">
                    <Mail className="w-4 h-4 inline mr-2 text-neon-teal" />
                    {dept.email}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Traffic Guide</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">交通指南</h2>
            <p className="text-gray-600 mt-4">如何到达我们公司</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {traffic.map((item, index) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-neon-emerald/50 transition-all shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ArrowRight className="w-5 h-5 text-neon-emerald" />
                  <h3 className="font-semibold text-gray-800">{item.type}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-xl"
          >
            <div className="aspect-video bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-neon-emerald opacity-60" />
                <p className="text-lg text-gray-800">腾讯地图嵌入区域</p>
                <p className="text-sm mt-2 text-gray-600">贵州省六盘水市水城区</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
