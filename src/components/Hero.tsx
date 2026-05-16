import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ParticleBackground from './ParticleBackground'

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('services')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-dark-gray">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
          poster="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-industrial-factory-robotic-arm-working-4398-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-gray/80 via-dark-gray/60 to-dark-gray" />
      </div>

      <ParticleBackground />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold text-sm uppercase tracking-widest mb-6"
          >
            工业固废资源化利用专家
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            工业固废变废为宝
            <br />
            <span className="text-gradient">循环经济绿色未来</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            专业煤矸石选铁 | 煤矸石选流金沙 | 铅锌矿渣选铁
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              className="bg-gold text-dark-gray px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 30px rgba(255, 215, 0, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              立即咨询
            </motion.a>
            <motion.a
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-dark-gray transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              了解技术
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            className="text-white/60 hover:text-gold transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
