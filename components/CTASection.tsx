'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

const CTASection = ({
  title = "Ready to Build Something Amazing?",
  description = "Let's discuss your construction project and explore how innovative technology can bring your vision to life.",
  primaryButtonText = "Start a Project",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View Portfolio",
  secondaryButtonLink = "/portfolio"
}: CTASectionProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={primaryButtonLink}
              className="bg-accent-600 text-white px-10 py-4 rounded-lg font-semibold text-lg
                       transition-all duration-300 hover:bg-accent-700 hover:shadow-2xl
                       hover:scale-105 active:scale-95 flex items-center gap-2 group"
            >
              {primaryButtonText}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={secondaryButtonLink}
              className="bg-white text-primary-700 px-10 py-4 rounded-lg font-semibold text-lg
                       transition-all duration-300 hover:bg-primary-50 hover:shadow-2xl
                       hover:scale-105 active:scale-95"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
