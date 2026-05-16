import { motion } from 'framer-motion'
import { ArrowDown, Cog, Zap, TrendingUp, Factory, Target, Leaf, ArrowRight } from 'lucide-react'
import CountUp from '../components/CountUp'
import ContactForm from '../components/ContactForm'

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      icon: Cog,
      title: '煤矸石精深加工选铁',
      description: '采用先进磁选工艺，生产高纯度还原铁粉，铁粉纯度≥85%',
      highlight: '纯度≥85%',
      bgImage: '/images/services/service1.jpg',
    },
    {
      icon: Zap,
      title: '煤矸石提取硫金沙',
      description: '通过重力分选和浮选技术，高效提取煤矸石中的硫金元素',
      highlight: '回收率高',
      bgImage: '/images/services/service2.jpg',
    },
    {
      icon: TrendingUp,
      title: '铅锌矿渣选铁与固废资源化',
      description: '综合利用铅锌矿渣，实现废渣无害化处理和资源再利用',
      highlight: '环保达标',
      bgImage: '/images/services/service3.jpg',
    },
  ]

  const stats = [
    { value: 10, suffix: '万吨', label: '年处理煤矸石' },
    { value: 95, suffix: '%', label: '固废资源化率', decimals: 1 },
    { value: 3, suffix: '条', label: '生产线' },
    { value: 98, suffix: '%', label: '产品销售率', decimals: 1 },
  ]

  const advantages = [
    {
      icon: Target,
      title: '技术优势',
      description: '拥有多项专利技术，精细化利用全流程系统，产品附加值高',
    },
    {
      icon: TrendingUp,
      title: '市场优势',
      description: '上中下游全链条布局，稳定供应链，客户覆盖多行业',
    },
    {
      icon: Factory,
      title: '成本优势',
      description: '规模效应显著，毛利率15%-20%，价格竞争力强',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-teal-50">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-white to-teal-100/50" />
        
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 30%),
            radial-gradient(circle at 60% 60%, rgba(20, 184, 166, 0.15) 0%, transparent 30%)
          `,
        }} />

        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d399' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.6,
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-neon-emerald/10 text-neon-emerald rounded-full text-sm font-cyber font-medium mb-6 border border-neon-emerald/30">
              省级专精特新企业
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-gray-800" style={{textShadow: '0 0 30px rgba(0,0,0,0.1)'}}>煤矸石综合利用</span>
            <br />
            <span 
              className="font-cyber"
              style={{
                background: 'linear-gradient(135deg, #22c55e, #10b981, #14b8a6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none'
              }}
            >
              固废变资源
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            煤矸石选铁、煤矸石选硫金沙、铅锌矿渣选铁、固废资源化处理
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="relative bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-[length:200%_100%] text-white font-cyber font-bold px-10 py-4 rounded-lg transition-all duration-500 shadow-lg"
              style={{
                boxShadow: '0 4px 25px rgba(22, 163, 74, 0.5)',
                animation: 'shimmer 3s ease-in-out infinite',
              }}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-white drop-shadow-md">立即咨询</span>
              <motion.div 
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400 bg-[length:200%_100%] opacity-0"
                style={{ animation: 'shimmer 3s ease-in-out infinite' }}
                whileHover={{ opacity: 100 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('services')}
              className="relative border-2 border-neon-emerald text-gray-800 font-cyber font-bold px-10 py-4 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-neon-emerald hover:text-white"
              style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.2)' }}
              whileHover={{ 
                scale: 1.08, 
                y: -3,
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              了解技术
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('services')}
            className="cursor-pointer"
          >
            <ArrowDown className="w-8 h-8 text-neon-emerald/60" />
          </motion.div>
        </motion.div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-white via-green-50 to-teal-50 relative">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Core Business</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4 cyber-line">三大核心业务板块</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative rounded-xl p-6 overflow-hidden group hover:shadow-2xl transition-all duration-500 min-h-[350px]"
                style={{ 
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  background: service.bgImage 
                    ? `linear-gradient(rgba(255, 255, 255, 0.95), rgba(240, 253, 244, 0.9)), url(${service.bgImage})` 
                    : 'linear-gradient(to bottom right, #ffffff, #f0fdf4)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                whileHover={{ 
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.3), 0 0 60px rgba(20, 184, 166, 0.2)',
                  borderColor: 'rgba(16, 185, 129, 0.4)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-emerald/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-neon-teal/10 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                
                <motion.div
                  className="relative w-16 h-16 bg-gradient-to-br from-neon-emerald/20 to-neon-teal/20 rounded-xl flex items-center justify-center mb-6 border border-neon-emerald/40 backdrop-blur-sm"
                  style={{ boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)' }}
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-neon-emerald" style={{ filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.8))' }} />
                </motion.div>
                
                <h3 className="relative text-xl font-semibold text-gray-800 mb-3 font-cyber" style={{textShadow: '0 0 10px rgba(0,0,0,0.1)'}}>
                  {service.title}
                </h3>
                <p className="relative text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <motion.span 
                  className="relative inline-block px-4 py-2 bg-gradient-to-r from-neon-emerald/20 to-neon-teal/20 text-neon-emerald text-sm font-cyber font-medium rounded-full border border-neon-emerald/40 backdrop-blur-sm"
                  style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.2)' }}
                  whileHover={{ scale: 1.05 }}
                >
                  {service.highlight}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-emerald/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-teal/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Data Dashboard</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4 cyber-line">经营数据</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-white to-green-50 rounded-xl p-6 text-center overflow-hidden group"
                style={{ 
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)'
                }}
                whileHover={{ 
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)',
                  borderColor: 'rgba(16, 185, 129, 0.5)',
                  y: -5
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-emerald via-neon-teal to-neon-cyan" />
                <div className="absolute inset-0 bg-grid opacity-20" />
                
                <div className="relative text-4xl sm:text-5xl font-bold font-cyber mb-3" style={{
                  background: 'linear-gradient(135deg, #22c55e, #10b981, #14b8a6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(16, 185, 129, 0.3)'
                }}>
                  <CountUp 
                    end={stat.value} 
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <p className="relative text-gray-600 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white via-green-50 to-teal-50 relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Competitive Advantages</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4 cyber-line">我们的核心竞争力</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-white to-green-50 rounded-xl p-8 overflow-hidden border border-gray-200 group hover:border-neon-emerald/50 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-emerald/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-neon-emerald/20 to-neon-teal/20 rounded-xl flex items-center justify-center mb-6 border border-neon-emerald/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <advantage.icon className="w-8 h-8 text-neon-emerald" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-cyber">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-white via-green-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-neon-emerald/30 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">Contact Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">在线咨询</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              如有任何疑问或合作意向，请填写以下表单，我们将在24小时内与您联系
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 mb-6 border border-gray-200 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 font-cyber">联系方式</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-neon-emerald/10 rounded-lg flex items-center justify-center border border-neon-emerald/30">
                      <Leaf className="w-5 h-5 text-neon-emerald" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">公司地址</p>
                      <p className="font-medium text-gray-800">贵州省六盘水市水城区</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-neon-emerald/10 rounded-lg flex items-center justify-center border border-neon-emerald/30">
                      <svg className="w-5 h-5 text-neon-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">联系电话</p>
                      <p className="font-medium text-gray-800">13800138000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-neon-emerald/10 rounded-lg flex items-center justify-center border border-neon-emerald/30">
                      <svg className="w-5 h-5 text-neon-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">电子邮箱</p>
                      <p className="font-medium text-gray-800">contact@xinchenqi.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <ArrowRight className="w-4 h-4 text-neon-emerald" />
                <span className="text-sm">立即填写表单，获取专业报价</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-xl">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
