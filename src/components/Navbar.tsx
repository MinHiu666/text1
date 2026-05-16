import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: '首页', path: '/' },
    { name: '关于我们', path: '/about' },
    { name: '产品中心', path: '/products' },
    { name: '核心技术', path: '/technology' },
    { name: '核心竞争力', path: '/competitiveness' },
    { name: '客户案例', path: '/cases' },
    { name: '联系我们', path: '/contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-2xl shadow-lg shadow-neon-emerald/10 py-3 border-b border-neon-emerald/20' 
            : 'bg-white/90 backdrop-blur-xl shadow-md shadow-neon-emerald/5 py-4 border-b border-neon-emerald/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3"
              animate={{ scale: isScrolled ? 0.95 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/40 border-2 border-green-400"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <Zap className="w-6 h-6 text-white drop-shadow-md" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg font-cyber font-bold tracking-wider text-gray-900 drop-shadow-sm">
                  鑫辰启科技
                </span>
                <span className="text-xs text-gray-700">
                  XINCHENQI TECH
                </span>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-neon-emerald' : 'text-gray-600 hover:text-neon-emerald'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-neon-emerald transition-all duration-300 hover:w-full" />
                </Link>
              ))}
            </div>

            <motion.a
              href="tel:13800138000"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold font-cyber tracking-wider transition-all duration-300 bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/60 border-2 border-green-400"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-4 h-4 text-white drop-shadow-md" />
              <span className="text-white drop-shadow-md">立即咨询</span>
            </motion.a>

            <button
              className="md:hidden text-gray-800 p-2 hover:text-neon-emerald transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/98 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-b from-white to-gray-50 border-l border-neon-emerald/30"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-neon-emerald to-neon-teal rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-cyber font-bold text-gray-900">鑫辰启科技</span>
                  </div>
                  <button
                    className="text-gray-500 hover:text-neon-emerald transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.Link
                      key={item.name}
                      to={item.path}
                      className="block text-lg text-gray-700 hover:text-neon-emerald transition-colors py-3 px-4 rounded-lg hover:bg-neon-emerald/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.Link>
                  ))}
                </div>
                <motion.a
                  href="tel:13800138000"
                  className="mt-8 block w-full text-center bg-gradient-to-r from-neon-emerald to-neon-teal text-white font-semibold font-cyber py-3 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  立即咨询
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
