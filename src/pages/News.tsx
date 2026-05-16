import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const categories = ['全部', '公司新闻', '行业动态', '政策法规']

const newsItems = [
  {
    id: 1,
    title: '公司成功研发新型煤矸石选铁技术',
    date: '2024-01-15',
    category: '公司新闻',
    summary: '经过三年研发，公司成功推出新一代高效煤矸石选铁技术，回收率提升至98%。',
    content: `
      经过三年的研发攻关，我公司成功推出新一代高效煤矸石选铁技术。该技术采用先进的磁选+重选联合工艺，
      结合智能化控制系统，使铁精矿回收率提升至98%，达到行业领先水平。
      
      新技术的主要特点：
      - 采用新型高梯度磁选设备，分选效率提高30%
      - 引入AI智能控制，实现生产过程自动化
      - 能耗降低20%，符合绿色环保要求
      
      该技术已在山西某煤矿投入试运行，效果显著，预计年处理能力将达到50万吨。
    `,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 2,
    title: '与XX大学合作建立研发中心',
    date: '2024-01-10',
    category: '公司新闻',
    summary: '公司与XX大学签署战略合作协议，共同建立固废资源化利用研发中心。',
    content: `
      近日，我公司与XX大学签署战略合作协议，共同建立固废资源化利用研发中心。
      
      根据协议，双方将在以下领域开展深入合作：
      - 共同研发新型固废处理技术
      - 建立产学研合作基地
      - 培养专业技术人才
      
      该研发中心的建立，将进一步提升公司的技术创新能力，推动行业技术进步。
    `,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  },
  {
    id: 3,
    title: '荣获国家高新技术企业认定',
    date: '2024-01-05',
    category: '公司新闻',
    summary: '公司凭借强大的技术创新能力，成功通过国家高新技术企业认定。',
    content: `
      经过严格的评审，我公司成功通过国家高新技术企业认定。这是对公司技术创新能力的充分肯定。
      
      公司将以此为契机，继续加大研发投入，不断提升技术水平，为行业发展做出更大贡献。
    `,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
  },
  {
    id: 4,
    title: '国家出台固废资源化利用新政策',
    date: '2024-01-12',
    category: '政策法规',
    summary: '国家发改委发布《关于加快推进工业固废资源化利用的指导意见》。',
    content: `
      国家发改委近日发布《关于加快推进工业固废资源化利用的指导意见》，
      明确了"十四五"期间工业固废资源化利用的目标和任务。
      
      政策要点：
      - 到2025年，工业固废综合利用率达到60%以上
      - 支持固废资源化利用技术研发
      - 建立固废资源化利用标准体系
      
      这将为行业发展提供良好的政策环境。
    `,
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',
  },
  {
    id: 5,
    title: '行业专家探讨固废资源化发展趋势',
    date: '2024-01-08',
    category: '行业动态',
    summary: '2024年固废资源化利用高峰论坛在京举行，专家学者共同探讨行业发展趋势。',
    content: `
      2024年固废资源化利用高峰论坛在北京举行，来自全国各地的专家学者齐聚一堂，
      共同探讨固废资源化利用的发展趋势和技术创新。
      
      论坛主要议题：
      - 固废资源化利用技术发展方向
      - 环保政策对行业的影响
      - 产学研合作模式创新
      
      本次论坛为行业交流提供了良好的平台。
    `,
    image: 'https://images.unsplash.com/photo-1540569014014-a719042b55af?w=800&q=80',
  },
]

export default function News() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null)

  const filteredNews = activeCategory === '全部' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-teal-50">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-br from-white via-green-50 to-teal-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-neon-emerald text-sm font-cyber uppercase tracking-widest font-medium">News</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">新闻资讯</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            了解公司最新动态和行业资讯
          </p>
        </div>
      </motion.section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-neon-emerald to-neon-teal text-white hover:shadow-lg hover:shadow-neon-emerald/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-neon-emerald'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedNews(news)}
              >
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-1 bg-neon-emerald/10 text-neon-emerald rounded border border-neon-emerald/30">
                      {news.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{news.summary}</p>
                  <div className="flex items-center gap-2 mt-4 text-neon-emerald text-sm font-medium">
                    阅读详情
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedNews && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedNews(null)}
        >
          <div className="absolute inset-0 bg-black/60" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="h-64 overflow-hidden">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                  {selectedNews.category}
                </span>
                <span className="text-gray-400 text-sm flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedNews.date}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-dark-gray mb-6">{selectedNews.title}</h2>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                {selectedNews.content}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
