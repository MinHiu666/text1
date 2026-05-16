import { motion } from 'framer-motion'
import { Award, Calendar, Users, Building2, Star, CheckCircle2, Briefcase } from 'lucide-react'

export default function About() {
  const timeline = [
    { year: '2020', title: '公司成立', description: '贵州鑫辰启科技有限公司正式成立，专注于煤矸石综合利用' },
    { year: '2023', title: '技术突破', description: '成功研发煤矸石选铁新工艺，铁粉纯度突破85%' },
    { year: '2025', title: '创新型企业', description: '获得贵州省省级创新型中小企业认定' },
    { year: '2026', title: '专精特新', description: '荣获贵州省省级专精特新企业称号' },
  ]

  const achievements = [
    '省级专精特新企业',
    '省级创新型中小企业',
    '一次性制备还原铁粉辅助装置专利',
    '新型建筑材料研发服务软件著作权',
    '固废资源化率≥95%',
    '年处理煤矸石10万吨',
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
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">About Us</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">关于我们</h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              专注煤矸石精深加工与固废资源综合利用，致力于变废为宝，实现绿色循环经济
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-cyber">企业概况</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  贵州鑫辰启科技有限公司成立于2020年12月4日，位于贵州省六盘水市水城区。公司专注于煤矸石精深加工和固废资源综合利用领域，是一家集研发、生产、销售于一体的高新技术企业。
                </p>
                <p>
                  公司拥有3条现代化生产线，年处理煤矸石能力达10万吨，固废资源化率≥95%，产品销售率达98%。主要产品包括还原铁粉（纯度≥85%）、硫金沙、粉煤灰和煤制品。
                </p>
                <p>
                  公司始终坚持"诚信为本、质量至上"的经营理念，致力于推动固废资源化利用，助力绿色低碳发展。
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-cyber">实控人介绍</h2>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-neon-emerald to-neon-teal rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">尹超荣</h3>
                    <p className="text-neon-emerald font-cyber text-sm mb-3">创始人 / 实际控制人</p>
                    <p className="text-gray-600 leading-relaxed">
                      尹超荣先生自2005年起从事固废回收加工行业，拥有近20年的行业经验。他带领团队不断创新，攻克多项技术难题，成功研发出煤矸石选铁新工艺，使公司成为行业内的领军企业。
                    </p>
                  </div>
                </div>
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
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Development History</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">发展历程</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-emerald via-neon-teal to-neon-cyan" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block bg-white rounded-xl p-6 border border-gray-200 shadow-lg ${index % 2 === 0 ? 'ml-auto' : ''} max-w-md`}>
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5 text-neon-emerald" />
                        <span className="text-2xl font-bold font-cyber text-neon-emerald">{item.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-neon-emerald to-neon-teal rounded-full border-4 border-white" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
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
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Achievements</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">资质荣誉</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:border-neon-emerald/50 transition-colors shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-neon-emerald flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
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
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Corporate Culture</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">企业文化</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-neon-emerald/10 rounded-xl flex items-center justify-center mx-auto mb-6 border border-neon-emerald/30">
                <Star className="w-8 h-8 text-neon-emerald" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 font-cyber">企业使命</h3>
              <p className="text-gray-600">
                致力于煤矸石资源化利用，推动绿色循环经济发展，为建设美丽中国贡献力量
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-neon-teal/10 rounded-xl flex items-center justify-center mx-auto mb-6 border border-neon-teal/30">
                <Building2 className="w-8 h-8 text-neon-teal" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 font-cyber">企业愿景</h3>
              <p className="text-gray-600">
                成为国内领先的固废资源综合利用企业，打造行业标杆品牌
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-emerald/20 to-neon-teal/20 rounded-xl px-8 py-4 border border-neon-emerald/30">
              <Briefcase className="w-6 h-6 text-neon-emerald" />
              <span className="text-xl font-semibold text-gray-800 font-cyber">诚信为本 · 质量至上</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
