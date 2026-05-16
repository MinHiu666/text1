import { motion } from 'framer-motion'
import { Magnet, Gem, Atom } from 'lucide-react'
import Card from './Card'

const services = [
  {
    icon: Magnet,
    title: '煤矸石选铁',
    description: '采用先进的磁选+重选联合工艺，高效提取煤矸石中的铁元素，实现资源再利用。',
    data: '回收率达95%',
    color: 'bg-primary',
  },
  {
    icon: Gem,
    title: '煤矸石选流金沙',
    description: '利用重力分选+浮选技术，从煤矸石中提取珍贵的流金沙资源，变废为宝。',
    data: '纯度99.9%',
    color: 'bg-yellow-500',
  },
  {
    icon: Atom,
    title: '铅锌矿渣选铁',
    description: '运用湿法冶金+磁选工艺，从铅锌矿渣中回收铁精矿，实现废渣无害化处理。',
    data: '年处理50万吨',
    color: 'bg-secondary',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium">核心业务</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-gray mt-4 mb-6">
            三大核心业务板块
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            专注工业固废资源化利用，通过先进技术实现"变废为宝"，推动循环经济发展
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8">
                <motion.div
                  className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-dark-gray mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-gold font-semibold">{service.data}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
