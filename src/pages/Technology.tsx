import { motion } from 'framer-motion'
import { Cog, FlaskConical, FileText, Shield, ArrowRight, Lightbulb, Zap } from 'lucide-react'

export default function Technology() {
  const processes = [
    { step: '01', name: '碎料', description: '将煤矸石原料进行粉碎处理，达到合适的粒度要求', icon: Cog },
    { step: '02', name: '浮选脱炭', description: '采用浮选技术去除煤矸石中的炭质成分', icon: FlaskConical },
    { step: '03', name: '烘干', description: '对物料进行烘干处理，降低含水率', icon: Zap },
    { step: '04', name: '熟料制粉', description: '将熟料研磨成细粉，提高反应活性', icon: Cog },
    { step: '05', name: '磁选', description: '利用磁选技术分离出铁精矿', icon: Shield },
  ]

  const patents = [
    { name: '一次性制备还原铁粉辅助装置', type: '专利', year: '2024' },
    { name: '新型建筑材料研发服务软件', type: '软著', year: '2025' },
  ]

  const rndInfo = {
    investment: '40余万元',
    team: '12人',
    labs: '3个',
    collaborations: ['贵州大学', '昆明理工大学', '贵州省材料研究设计院'],
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
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Technology</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">核心技术</h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              拥有多项专利技术和软件著作权，专注于煤矸石综合利用技术的研发与应用
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
            className="text-center mb-16"
          >
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Process Flow</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">全流程工艺</h2>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-neon-emerald to-teal-500 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {processes.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:border-neon-emerald/50 transition-all duration-300 group shadow-lg">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-neon-emerald/10 to-teal-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-neon-emerald/30"
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <process.icon className="w-8 h-8 text-neon-emerald" />
                    </motion.div>
                    <div className="text-3xl font-bold font-cyber text-neon-emerald mb-2">{process.step}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{process.name}</h3>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </div>
                  
                  {index < processes.length - 1 && (
                    <motion.div
                      className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6 text-neon-emerald" />
                    </motion.div>
                  )}
                </motion.div>
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
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">R&D Strength</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">研发实力</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: rndInfo.investment, label: '研发投入', icon: Lightbulb, color: 'text-neon-emerald' },
              { value: rndInfo.team, label: '研发团队', icon: FlaskConical, color: 'text-neon-teal' },
              { value: rndInfo.labs, label: '实验室', icon: Cog, color: 'text-neon-emerald' },
              { value: rndInfo.collaborations.length, label: '合作院校', icon: FileText, color: 'text-neon-teal' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-lg"
              >
                <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-3`} />
                <div className={`text-3xl font-bold font-cyber ${item.color} mb-1`}>{item.value}</div>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6 font-cyber">产学研合作</h3>
            <div className="flex flex-wrap gap-4">
              {rndInfo.collaborations.map((collab) => (
                <span key={collab} className="px-4 py-2 bg-green-50 rounded-lg text-gray-700 border border-green-200">
                  {collab}
                </span>
              ))}
            </div>
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
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Intellectual Property</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">专利与软著</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patents.map((patent, index) => (
              <motion.div
                key={patent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-neon-emerald/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-2 py-1 bg-neon-emerald/10 rounded text-xs text-neon-emerald mb-3 border border-neon-emerald/30">
                      {patent.type}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{patent.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {patent.type === '专利' 
                        ? '一次性制备还原铁粉辅助装置专利，有效提升铁粉制备效率和品质'
                        : '新型建筑材料研发服务软件著作权，助力建材研发数字化转型'}
                    </p>
                  </div>
                  <span className="text-2xl font-bold font-cyber text-gray-400">{patent.year}</span>
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
            <span className="text-neon-cyan text-sm font-cyber uppercase tracking-widest font-medium">Quality Control</span>
            <h2 className="text-3xl font-bold text-white mt-4">质量控制</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '原料检验', description: '严格把控原材料质量，确保符合生产标准', icon: Shield },
              { title: '过程监控', description: '实时监测生产过程，确保工艺参数稳定', icon: Cog },
              { title: '成品检测', description: '多维度检测产品质量，确保符合客户要求', icon: FlaskConical },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-cyberGray/50 rounded-xl p-6 border border-gray-700/30 text-center hover:border-neon-cyan/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-neon-cyan/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-neon-cyan/30">
                  <item.icon className="w-7 h-7 text-neon-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
