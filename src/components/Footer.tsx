import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-neon-emerald rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">鑫</span>
              </div>
              <span className="text-xl font-bold text-white">贵州鑫辰启科技</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              贵州鑫辰启科技有限公司成立于2020年，专注于煤矸石精深加工和固废资源综合利用，致力于实现"变废为宝"的绿色发展理念。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">快速链接</h3>
            <ul className="space-y-3">
              {['首页', '关于我们', '产品中心', '核心技术', '客户案例', '联系我们'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === '首页' ? '/' : `/${item.replace(/\s+/g, '').toLowerCase()}`}
                    className="text-gray-300 hover:text-neon-emerald transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-neon-emerald" />
                贵州省六盘水市水城区
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-neon-emerald" />
                13800138000
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-neon-emerald" />
                contact@xinchenqi.com
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">资质荣誉</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">2026 省级专精特新企业</li>
              <li className="text-gray-300 text-sm">2025 省级创新型中小企业</li>
              <li className="text-gray-300 text-sm">多项专利及软著</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              Copyright 2026 贵州鑫辰启科技有限公司 版权所有
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-300 hover:text-neon-emerald text-sm transition-colors">
                工信部备案号
              </a>
              <a href="#" className="text-gray-300 hover:text-neon-emerald text-sm transition-colors">
                公安备案号
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
