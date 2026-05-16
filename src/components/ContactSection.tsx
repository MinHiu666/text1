import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium">联系我们</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-gray mt-4 mb-6">
            立即咨询
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            如有任何疑问或合作意向，请随时与我们联系，我们将竭诚为您服务
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-dark-gray mb-8">联系方式</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">公司地址</h4>
                    <p className="text-gray-600">山西省太原市高新区科技街88号</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">联系电话</h4>
                    <p className="text-gray-600">400-888-8888</p>
                    <p className="text-gray-600 mt-1">0351-1234567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">电子邮箱</h4>
                    <p className="text-gray-600">contact@recycling.com</p>
                    <p className="text-gray-600 mt-1">sales@recycling.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">工作时间</h4>
                    <p className="text-gray-600">周一至周六 8:00-18:00</p>
                    <p className="text-gray-600 mt-1">节假日休息</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-48 bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src="https://api.map.baidu.com/staticimage?center=112.549248,37.857014&width=400&height=200&zoom=15&markers=112.549248,37.857014"
                  alt="公司位置"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-dark-gray mb-6">在线咨询</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
