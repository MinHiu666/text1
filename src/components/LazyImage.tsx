import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
}

export default function LazyImage({ src, alt, className = '' }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />
      
      <AnimatePresence>
        {isInView && (
          <motion.img
            key={src}
            src={src}
            alt={alt}
            initial={{ opacity: 0, scale: 1.05, filter: 'blur(20px)' }}
            animate={{ 
              opacity: isLoaded ? 1 : 0, 
              scale: isLoaded ? 1 : 1.05,
              filter: isLoaded ? 'blur(0px)' : 'blur(20px)'
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-300 hover:scale-103 ${className}`}
            onMouseEnter={() => setIsInView(true)}
            style={{ minHeight: '200px' }}
          />
        )}
      </AnimatePresence>
      
      <motion.div
        className="absolute inset-0"
        initial={{}}
        whileHover={{
          boxShadow: 'inset 0 0 30px rgba(0,0,0,0.3)'
        }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsInView(true)}
        onMouseLeave={() => {}}
      />
      
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
        onLoad={() => {
          setIsInView(true)
          setIsLoaded(true)
        }}
      />
    </div>
  )
}
