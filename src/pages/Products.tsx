import { motion } from 'framer-motion'
import { Layers, Gem, Cloud, Flame, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Products() {
  const products = [
    {
      icon: Layers,
      name: '还原铁粉',
      subtitle: '纯度≥85%',
      description: '采用先进磁选工艺生产，铁粉纯度高达85%以上，具有良好的冶金性能和化学稳定性。',
      specs: [
        { label: '铁含量', value: '≥85%' },
        { label: '硫含量', value: '≤0.05%' },
        { label: '磷含量', value: '≤0.03%' },
        { label: '粒度', value: '0-2mm' },
        { label: '水分', value: '≤3%' },
      ],
      applications: ['冶金行业', '焊条制造', '粉末冶金', '化工催化剂'],
      advantages: ['高纯度', '低杂质', '性能稳定', '价格优势'],
      color: 'pink',
    },
    {
      icon: Gem,
      name: '硫金沙',
      subtitle: '高回收率',
      description: '通过重力分选和浮选技术从煤矸石中提取，硫含量高，品质优良。',
      specs: [
        { label: '硫含量', value: '≥45%' },
        { label: '铁含量', value: '≤35%' },
        { label: '水分', value: '≤8%' },
        { label: '粒度', value: '0-1mm' },
        { label: '回收率', value: '≥90%' },
      ],
      applications: ['贵金属冶炼', '化工原料', '农业肥料', '橡胶工业'],
      advantages: ['回收率高', '品质稳定', '环保达标', '市场需求大'],
      color: 'cyan',
    },
    {
      icon: Cloud,
      name: '粉煤灰',
      subtitle: '环保建材',
      description: '煤矸石燃烧后的固体废弃物，经过加工处理后可作为新型建筑材料使用。',
      specs: [
        { label: '细度', value: '45μm筛余≤15%' },
        { label: '需水量比', value: '≤105%' },
        { label: '活性指数', value: '≥70%' },
        { label: '烧失量', value: '≤8%' },
        { label: '含水量', value: '≤1%' },
      ],
      applications: ['水泥生产', '混凝土掺合料', '墙体材料', '道路工程'],
      advantages: ['成本低廉', '性能优异', '绿色环保', '应用广泛'],
      color: 'purple',
    },
    {
      icon: Flame,
      name: '煤制品',
      subtitle: '热值稳定',
      description: '精选优质原煤加工而成，热值稳定，硫含量低，是工业锅炉的理想燃料。',
      specs: [
        { label: '发热量', value: '≥5000kcal/kg' },
        { label: '硫含量', value: '≤1.5%' },
        { label: '灰分', value: '≤25%' },
        { label: '挥发分', value: '25-35%' },
        { label: '水分', value: '≤10%' },
      ],
      applications: ['工业锅炉', '热电联产', '钢铁冶炼', '民用取暖'],
      advantages: ['热值高', '硫含量低', '燃烧稳定', '价格实惠'],
      color: 'gold',
    },
  ]

  const getColorClass = (color: string, type: string) => {
    const colors: Record<string, Record<string, string>> = {
      pink: {
        bg: 'bg-neon-pink',
        bg2: 'bg-neon-pink/20',
        border: 'border-neon-pink',
        text: 'text-neon-pink',
        shadow: 'shadow-neon-pink',
      },
      cyan: {
        bg: 'bg-neon-cyan',
        bg2: 'bg-neon-cyan/20',
        border: 'border-neon-cyan',
        text: 'text-neon-cyan',
        shadow: 'shadow-neon-cyan',
      },
      purple: {
        bg: 'bg-neon-purple',
        bg2: 'bg-neon-purple/20',
        border: 'border-neon-purple',
        text: 'text-neon-purple',
        shadow: '',
      },
      gold: {
        bg: 'bg-neon-gold',
        bg2: 'bg-neon-gold/20',
        border: 'border-neon-gold',
        text: 'text-neon-gold',
        shadow: 'shadow-neon-gold',
      },
    }
    return colors[color]?.[type] || colors.pink[type]
  }

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
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Products</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">产品中心</h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              专注煤矸石精深加工，生产高品质还原铁粉、硫金沙、粉煤灰和煤制品
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-neon-emerald/10 rounded-xl flex items-center justify-center border border-neon-emerald/30">
                        <product.icon className="w-7 h-7 text-neon-emerald" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 font-cyber">{product.name}</h2>
                        <span className="text-sm text-neon-emerald">{product.subtitle}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="w-1 h-5 bg-neon-emerald rounded-full" />
                        技术参数
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {product.specs.map((spec) => (
                          <div key={spec.label} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                            <p className="text-gray-500 text-xs mb-1">{spec.label}</p>
                            <p className="font-semibold text-neon-emerald">{spec.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-1 h-5 bg-neon-emerald rounded-full" />
                          应用领域
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app) => (
                            <span key={app} className="px-3 py-1 bg-green-50 rounded-full text-sm text-gray-700 border border-green-200">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-1 h-5 bg-neon-emerald rounded-full" />
                          产品优势
                        </h3>
                        <div className="space-y-2">
                          {product.advantages.map((adv) => (
                            <div key={adv} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-neon-emerald" />
                              <span className="text-sm text-gray-600">{adv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-neon-emerald/5" />
                    <motion.div
                      className="relative z-10 w-48 h-48 bg-neon-emerald/10 rounded-full flex items-center justify-center border border-neon-emerald/20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      style={{ transformOrigin: 'center' }}
                    >
                      <product.icon className="w-20 h-20 text-neon-emerald opacity-50" />
                    </motion.div>
                    <motion.div
                      className="absolute z-20 w-24 h-24 bg-neon-emerald rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <product.icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">对我们的产品感兴趣？</h2>
            <p className="text-gray-600 mb-6">立即联系我们，获取专业报价和产品样品</p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-cyber font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
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
