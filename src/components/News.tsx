import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import Card from './Card'
import { Link } from 'react-router-dom'

const newsItems = [
  {
    id: 1,
    title: '公司成功研发新型煤矸石选铁技术',
    date: '2024-01-15',
    summary: '经过三年研发，公司成功推出新一代高效煤矸石选铁技术，回收率提升至98%。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    id: 2,
    title: '与XX大学合作建立研发中心',
    date: '2024-01-10',
    summary: '公司与XX大学签署战略合作协议，共同建立固废资源化利用研发中心。',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
  },
  {
    id: 3,
    title: '荣获国家高新技术企业认定',
    date: '2024-01-05',
    summary: '公司凭借强大的技术创新能力，成功通过国家高新技术企业认定。',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
  },
]

export default function News() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-sm uppercase tracking-widest font-medium">新闻资讯</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-gray mt-4">
              最新动态
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/news"
              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
            >
              查看更多
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-dark-gray">{news.date}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-dark-gray mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{news.summary}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
