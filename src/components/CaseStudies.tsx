import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const cases = [
  {
    id: 1,
    name: '山西某大型煤矿',
    material: '煤矸石',
    capacity: '年处理50万吨',
    duration: '2018年至今',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
  },
  {
    id: 2,
    name: '内蒙古某矿业集团',
    material: '铅锌矿渣',
    capacity: '年处理30万吨',
    duration: '2020年至今',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',
  },
  {
    id: 3,
    name: '河北某钢铁企业',
    material: '煤矸石选金',
    capacity: '年处理20万吨',
    duration: '2019年至今',
    image: 'https://images.unsplash.com/photo-1540569014014-a719042b55af?w=800&q=80',
  },
  {
    id: 4,
    name: '陕西某有色金属公司',
    material: '多金属矿渣',
    capacity: '年处理40万吨',
    duration: '2021年至今',
    image: 'https://images.unsplash.com/photo-1484641641847-7a43342d2576?w=800&q=80',
  },
]

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({})
  const autoPlayRef = useRef<number | null>(null)
  const isManualRef = useRef(false)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
  }

  const goToPrevious = useCallback(() => {
    isManualRef.current = true
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1))
  }, [])

  const goToNext = useCallback(() => {
    isManualRef.current = true
    setDirection(1)
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1))
  }, [])

  const goToIndex = useCallback((index: number) => {
    isManualRef.current = true
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }, [currentIndex])

  useEffect(() => {
    const loadImage = (index: number) => {
      if (imageLoaded[index]) return
      const img = new Image()
      img.src = cases[index].image
      img.onload = () => {
        setImageLoaded((prev) => ({ ...prev, [index]: true }))
      }
    }

    loadImage(currentIndex)
    loadImage((currentIndex + 1) % cases.length)
    loadImage((currentIndex - 1 + cases.length) % cases.length)
  }, [currentIndex, imageLoaded])

  useEffect(() => {
    if (isManualRef.current) {
      isManualRef.current = false
      return
    }

    autoPlayRef.current = window.setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrevious()
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrevious, goToNext])

  useEffect(() => {
    if (isManualRef.current) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
      autoPlayRef.current = window.setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1))
      }, 5000)
    }
  }, [currentIndex])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium">客户案例</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-gray mt-4 mb-6">
            典型合作案例
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            与众多知名企业建立长期合作关系，共同推动循环经济发展
          </p>
        </motion.div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl bg-dark-gray h-[300px] sm:h-[350px] lg:h-[400px]">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ 
                  duration: 0.4, 
                  ease: [0.25, 0.1, 0.25, 1],
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full w-full">
                  {!imageLoaded[currentIndex] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse" />
                  )}
                  <motion.img
                    src={cases[currentIndex].image}
                    alt={cases[currentIndex].name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: imageLoaded[currentIndex] ? 1 : 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/95 via-dark-gray/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                    <motion.h3 
                      className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {cases[currentIndex].name}
                    </motion.h3>
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        <p className="text-white/60 text-xs sm:text-sm">处理物料</p>
                        <p className="font-semibold text-sm sm:text-base">{cases[currentIndex].material}</p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-white/60 text-xs sm:text-sm">处理量</p>
                        <p className="font-semibold text-sm sm:text-base">{cases[currentIndex].capacity}</p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                      >
                        <p className="text-white/60 text-xs sm:text-sm">合作时间</p>
                        <p className="font-semibold text-sm sm:text-base">{cases[currentIndex].duration}</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            onClick={goToPrevious}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-105 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
          <motion.button
            onClick={goToNext}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-105 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>

          <div className="flex justify-center gap-2 mt-5">
            {cases.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToIndex(index)}
                className={`rounded-full transition-all ${
                  index === currentIndex ? 'bg-gold' : 'bg-gray-400 hover:bg-gray-500'
                }`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: index === currentIndex ? '24px' : '8px',
                  height: '8px',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
