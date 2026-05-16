import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Magnet, Gem, Atom, ChevronRight } from 'lucide-react'

const services = [
  {
    id: 'iron',
    icon: Magnet,
    title: '煤矸石选铁',
    description: '采用先进的磁选+重选联合工艺，高效提取煤矸石中的铁元素',
    techPrinciples: [
      '磁选技术：利用磁铁矿的磁性差异进行分选',
      '重选技术：根据矿物密度差异进行重力分选',
      '联合工艺：将磁选与重选相结合，提高分选效率',
    ],
    process: ['原料预处理', '磁选作业', '重选作业', '精矿脱水', '成品包装'],
    specifications: [
      { label: '铁精矿品位', value: 'TFe 65%以上' },
      { label: '粒度', value: '-0.074mm 占90%以上' },
      { label: '水分', value: '≤10%' },
      { label: '硫含量', value: '≤0.3%' },
    ],
    applications: ['钢铁厂', '铸造厂', '建材行业'],
    cases: [
      { name: '山西某煤矿', capacity: '年处理50万吨', result: '铁精矿品位66%' },
      { name: '陕西某矿业公司', capacity: '年处理30万吨', result: '回收率95%' },
    ],
    color: 'bg-primary',
  },
  {
    id: 'gold',
    icon: Gem,
    title: '煤矸石选流金沙',
    description: '利用重力分选+浮选技术，从煤矸石中提取珍贵的流金沙资源',
    techPrinciples: [
      '重力分选：利用金与脉石的密度差异进行分离',
      '浮选技术：通过药剂作用使金矿物附着于气泡',
      '精选工艺：多次精选提高金品位',
    ],
    process: ['原料破碎', '重力分选', '浮选作业', '精矿富集', '成品提纯'],
    specifications: [
      { label: '金沙纯度', value: '99.9%以上' },
      { label: '回收率', value: '≥90%' },
      { label: '粒度', value: '-0.037mm 占80%以上' },
    ],
    applications: ['贵金属冶炼厂', '珠宝加工', '电子工业'],
    cases: [
      { name: '内蒙古某矿业集团', capacity: '年处理20万吨', result: '金回收率92%' },
    ],
    color: 'bg-yellow-500',
  },
  {
    id: 'lead-zinc',
    icon: Atom,
    title: '铅锌矿渣选铁',
    description: '运用湿法冶金+磁选工艺，从铅锌矿渣中回收铁精矿',
    techPrinciples: [
      '湿法冶金：通过化学方法溶解有价金属',
      '磁选工艺：回收铁矿物',
      '废渣无害化：处理后的废渣达到环保标准',
    ],
    process: ['矿渣预处理', '湿法浸出', '固液分离', '磁选回收', '废渣处理'],
    specifications: [
      { label: '铁精矿品位', value: 'TFe 62%以上' },
      { label: '有害元素含量', value: '符合国家标准' },
      { label: '回收率', value: '≥85%' },
    ],
    applications: ['钢铁厂', '建材行业'],
    cases: [
      { name: '云南某铅锌矿', capacity: '年处理40万吨', result: '铁精矿品位63%' },
      { name: '湖南某有色金属公司', capacity: '年处理35万吨', result: '废渣无害化' },
    ],
    color: 'bg-secondary',
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState('iron')
  const [currentProcessStep, setCurrentProcessStep] = useState(0)

  const currentService = services.find(s => s.id === activeService)!

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-r from-primary to-secondary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">业务范围</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            专注工业固废资源化利用，提供专业的选铁、选金解决方案
          </p>
        </div>
      </motion.section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => {
                  setActiveService(service.id)
                  setCurrentProcessStep(0)
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeService === service.id
                    ? `${service.color} text-white shadow-lg`
                    : 'bg-gray-100 text-dark-gray hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <service.icon className="w-5 h-5" />
                <span>{service.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <motion.div
                  className={`w-20 h-20 ${currentService.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <currentService.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold text-dark-gray mb-4">{currentService.title}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">{currentService.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h3 className="text-xl font-semibold text-dark-gray mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </span>
                  技术原理
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentService.techPrinciples.map((principle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-sm"
                    >
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-600">{principle}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h3 className="text-xl font-semibold text-dark-gray mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </span>
                  工艺流程
                </h3>
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {currentService.process.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.15 }}
                        className={`relative flex items-center gap-4 ${
                          index < currentService.process.length - 1 ? 'pr-8' : ''
                        }`}
                      >
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center font-semibold transition-colors ${
                            index <= currentProcessStep
                              ? `${currentService.color} text-white`
                              : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {index + 1}
                        </div>
                        <span className="text-dark-gray font-medium">{step}</span>
                        {index < currentService.process.length - 1 && (
                          <motion.div
                            className="absolute right-0 top-1/2 -translate-y-1/2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: index < currentProcessStep ? 1 : 0.3 }}
                          >
                            <ChevronRight className={`w-6 h-6 ${index < currentProcessStep ? 'text-primary' : 'text-gray-300'}`} />
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h3 className="text-xl font-semibold text-dark-gray mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">3</span>
                  </span>
                  产品规格
                </h3>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-4 text-left text-gray-600 font-medium">参数</th>
                        <th className="px-6 py-4 text-left text-gray-600 font-medium">指标</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentService.specifications.map((spec, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="border-b border-gray-100"
                        >
                          <td className="px-6 py-4 text-gray-800">{spec.label}</td>
                          <td className="px-6 py-4 text-primary font-medium">{spec.value}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h3 className="text-xl font-semibold text-dark-gray mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">4</span>
                  </span>
                  应用领域
                </h3>
                <div className="flex flex-wrap gap-4">
                  {currentService.applications.map((app, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-6 py-3 bg-white rounded-full shadow-sm text-dark-gray font-medium"
                    >
                      {app}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-dark-gray mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">5</span>
                  </span>
                  成功案例
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentService.cases.map((caseItem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-sm"
                    >
                      <h4 className="text-lg font-semibold text-dark-gray mb-4">{caseItem.name}</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">处理量</p>
                          <p className="text-dark-gray font-medium">{caseItem.capacity}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">效果</p>
                          <p className="text-primary font-medium">{caseItem.result}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
