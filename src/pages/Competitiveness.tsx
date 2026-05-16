import { motion } from 'framer-motion'
import { Target, TrendingUp, Factory, BarChart3, Link2, DollarSign, ArrowRight } from 'lucide-react'

export default function Competitiveness() {
  const advantages = [
    {
      icon: Target,
      title: '技术优势',
      subtitle: 'TECHNOLOGY',
      description: '拥有多项专利技术，精细化利用全流程系统，产品附加值高',
      points: [
        '自主研发的磁选工艺，铁粉纯度≥85%',
        '全流程自动化控制系统',
        '精细化分选技术，资源利用率高',
        '产品附加值提升30%以上',
      ],
      color: 'pink',
    },
    {
      icon: Link2,
      title: '市场优势',
      subtitle: 'MARKET',
      description: '上中下游全链条布局，稳定供应链，客户覆盖多行业',
      points: [
        '与多家煤矿建立长期合作关系',
        '产品直供冶金厂、焊条厂',
        '稳定的物流配送体系',
        '客户满意度98%以上',
      ],
      color: 'cyan',
    },
    {
      icon: DollarSign,
      title: '成本优势',
      subtitle: 'COST',
      description: '规模效应显著，毛利率15%-20%，价格竞争力强',
      points: [
        '年处理能力10万吨，规模效应明显',
        '毛利率维持在15%-20%',
        '生产成本低于行业平均水平',
        '价格竞争力强，市场份额稳步增长',
      ],
      color: 'purple',
    },
  ]

  const getColorClass = (color: string, type: string) => {
    const colors: Record<string, Record<string, string>> = {
      pink: {
        bg: 'bg-neon-pink',
        bg2: 'bg-neon-pink/20',
        border: 'border-neon-pink',
        text: 'text-neon-pink',
      },
      cyan: {
        bg: 'bg-neon-cyan',
        bg2: 'bg-neon-cyan/20',
        border: 'border-neon-cyan',
        text: 'text-neon-cyan',
      },
      purple: {
        bg: 'bg-neon-purple',
        bg2: 'bg-neon-purple/20',
        border: 'border-neon-purple',
        text: 'text-neon-purple',
      },
    }
    return colors[color]?.[type] || colors.pink[type]
  }

  const customerTypes = ['煤矿', '洗煤厂', '冶金厂', '焊条厂', '电厂']
  
  const paymentMethods = [
    { name: '现款现货', percentage: 40, description: '即时付款，快速发货' },
    { name: '账期结算', percentage: 60, description: '账期45-60天，灵活结算' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-teal-50 pt-24">
      <section className="py-16 bg-gradient-to-br from-white via-green-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Competitive Advantages</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">核心竞争力</h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              技术领先、市场稳固、成本可控，构建可持续发展的核心竞争优势
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-white to-green-50 rounded-2xl overflow-hidden border border-gray-200 group hover:border-neon-emerald/50 transition-all duration-500 shadow-lg"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-neon-emerald/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10 p-8">
                  <div className="w-16 h-16 bg-neon-emerald/10 rounded-xl flex items-center justify-center mb-6 border border-neon-emerald/30">
                    <advantage.icon className="w-8 h-8 text-neon-emerald" />
                  </div>
                  
                  <span className="text-sm text-neon-emerald font-cyber tracking-wider">
                    {advantage.subtitle}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-4">{advantage.title}</h2>
                  <p className="text-gray-600 mb-6">{advantage.description}</p>
                  
                  <ul className="space-y-3">
                    {advantage.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-neon-emerald rounded-full" />
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white via-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Customer Base</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">客户群体</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {customerTypes.map((customer, index) => (
              <motion.div
                key={customer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-neon-emerald/50 hover:shadow-lg transition-all duration-300 group"
              >
                <Factory className="w-10 h-10 text-neon-emerald mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-800 font-semibold">{customer}</span>
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
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Payment Terms</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">结算方式</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-white to-green-50 rounded-xl overflow-hidden border border-gray-200 shadow-lg"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{method.name}</h3>
                    <div className="text-3xl font-bold font-cyber text-neon-emerald">
                      {method.percentage}%
                    </div>
                  </div>
                  <p className="text-gray-600">{method.description}</p>
                </div>
                
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-emerald to-neon-teal" 
                     style={{ width: `${method.percentage}%` }} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600">账期说明：账期结算最长60天，具体根据合作情况协商确定</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-white via-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">了解更多合作详情</h2>
            <p className="text-gray-600 mb-6">我们提供灵活的合作方案，欢迎洽谈合作</p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-emerald to-neon-teal text-white font-cyber font-semibold px-6 py-3 rounded-lg hover:shadow-neon-emerald transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              联系我们
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
