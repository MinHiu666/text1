import { motion } from 'framer-motion'
import { Zap, Leaf, BarChart3, TrendingDown } from 'lucide-react'

const advantages = [
  {
    icon: Zap,
    title: '高效分选技术',
    description: '采用国际先进的分选设备和工艺，分选效率达到行业领先水平',
  },
  {
    icon: Leaf,
    title: '环保达标',
    description: '严格遵守环保法规，实现废渣零排放，通过ISO14001认证',
  },
  {
    icon: BarChart3,
    title: '资源利用率高',
    description: '资源回收率超过95%，最大限度挖掘固废中的有价成分',
  },
  {
    icon: TrendingDown,
    title: '成本优势',
    description: '优化工艺流程，降低运营成本，为客户提供高性价比服务',
  },
]

export default function TechnologyAdvantages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium">技术优势</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-gray mt-4 mb-6">
            我们的核心技术优势
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            依托强大的技术研发实力，为客户提供高效、环保、经济的固废处理解决方案
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-primary/5 transition-colors"
            >
              <motion.div
                className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <advantage.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-dark-gray mb-3">{advantage.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
