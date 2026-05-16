import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Building2, Calendar, RefreshCw, Star } from 'lucide-react'

export default function Cases() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const cases = [
    {
      company: '贵州某大型煤矿',
      material: '煤矸石',
      capacity: '5万吨/年',
      period: '2023年至今',
      description: '为该煤矿提供煤矸石选铁服务，年处理煤矸石5万吨，生产还原铁粉8000吨',
      highlight: '铁粉纯度稳定在85%以上',
    },
    {
      company: '云南某冶金厂',
      material: '铅锌矿渣',
      capacity: '2万吨/年',
      period: '2024年至今',
      description: '承接铅锌矿渣选铁项目，实现废渣无害化处理和资源再利用',
      highlight: '固废资源化率98%',
    },
    {
      company: '四川某焊条厂',
      material: '还原铁粉',
      capacity: '1.2万吨/年',
      period: '2023年至今',
      description: '为焊条厂提供高纯度还原铁粉，产品质量稳定，供货及时',
      highlight: '客户满意度100%',
    },
    {
      company: '贵州某洗煤厂',
      material: '煤矸石',
      capacity: '3万吨/年',
      period: '2024年至今',
      description: '合作煤矸石综合利用项目，提取硫金沙和铁粉，实现资源最大化利用',
      highlight: '综合回收率95%',
    },
    {
      company: '广东某电厂',
      material: '粉煤灰',
      capacity: '4万吨/年',
      period: '2023年至今',
      description: '供应高品质粉煤灰，用于水泥生产和混凝土掺合料',
      highlight: '产品质量符合国家标准',
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cases.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, cases.length])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % cases.length)
  }

  const customerTypes = [
    { name: '煤矿', count: 23 },
    { name: '洗煤厂', count: 15 },
    { name: '冶金厂', count: 18 },
    { name: '焊条厂', count: 12 },
    { name: '电厂', count: 9 },
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
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Cases</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">客户案例</h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              与多家知名企业建立长期合作关系，共同推动固废资源化利用
            </p>
          </motion.div>
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
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Success Stories</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">典型合作案例</h2>
          </motion.div>

          <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
            <div className="relative h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-center"
                >
                  <div className="flex-1 text-center lg:text-left">
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-neon-emerald/10 rounded-full mb-6 border border-neon-emerald/30"
                    >
                      <Star className="w-4 h-4 text-neon-emerald" />
                      <span className="text-neon-emerald text-sm">成功案例</span>
                    </motion.div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 font-cyber">
                      {cases[currentIndex].company}
                    </h3>
                    
                    <p className="text-gray-600 mb-8 max-w-xl">
                      {cases[currentIndex].description}
                    </p>
                    
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Building2 className="w-5 h-5 text-neon-emerald" />
                        <span className="text-sm">处理物料：{cases[currentIndex].material}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <RefreshCw className="w-5 h-5 text-neon-teal" />
                        <span className="text-sm">处理量：{cases[currentIndex].capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-5 h-5 text-neon-emerald" />
                        <span className="text-sm">{cases[currentIndex].period}</span>
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-emerald/10 rounded-lg border border-neon-emerald/30">
                      <span className="text-neon-emerald text-sm font-semibold">核心亮点：</span>
                      <span className="text-gray-800 text-sm">{cases[currentIndex].highlight}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
                    <motion.div
                      className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-neon-emerald/10 to-teal-500/10 rounded-2xl flex items-center justify-center border border-neon-emerald/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      style={{ transformOrigin: 'center' }}
                    >
                      <Building2 className="w-20 h-20 lg:w-24 lg:h-24 text-neon-emerald opacity-50" />
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
              <motion.button
                onClick={goToPrev}
                className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-300 hover:border-neon-emerald/50 hover:bg-neon-emerald/10 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
              <motion.button
                onClick={goToNext}
                className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-300 hover:border-neon-emerald/50 hover:bg-neon-emerald/10 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </motion.button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-6 bg-neon-emerald' : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
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
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Customer Stats</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">客户分布</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {customerTypes.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-neon-emerald/50 transition-all duration-300 shadow-lg"
              >
                <div className="text-3xl font-bold font-cyber text-neon-emerald mb-2">{item.count}</div>
                <p className="text-gray-600 text-sm">{item.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-cyberGray/50 rounded-xl px-6 py-4 border border-gray-700/30">
              <div className="text-center">
                <div className="text-3xl font-bold font-cyber text-neon-cyan">77+</div>
                <p className="text-gray-400 text-sm">合作客户</p>
              </div>
              <div className="w-px h-12 bg-gray-700" />
              <div className="text-center">
                <div className="text-3xl font-bold font-cyber text-neon-purple">5年+</div>
                <p className="text-gray-400 text-sm">行业经验</p>
              </div>
              <div className="w-px h-12 bg-gray-700" />
              <div className="text-center">
                <div className="text-3xl font-bold font-cyber text-neon-gold">98%</div>
                <p className="text-gray-400 text-sm">客户满意度</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
