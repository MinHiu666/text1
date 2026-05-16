import { motion } from 'framer-motion'
import { Factory, Package, MapPin, Users } from 'lucide-react'
import CountUp from './CountUp'

const stats = [
  {
    icon: Factory,
    value: 1000,
    suffix: '万吨',
    label: '累计处理固废',
    color: 'text-primary',
  },
  {
    icon: Package,
    value: 200,
    suffix: '万吨',
    label: '回收铁精矿',
    color: 'text-secondary',
  },
  {
    icon: MapPin,
    value: 500,
    suffix: '亩',
    label: '节约土地',
    color: 'text-green-600',
  },
  {
    icon: Users,
    value: 200,
    suffix: '+',
    label: '合作企业',
    color: 'text-gold',
  },
]

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
