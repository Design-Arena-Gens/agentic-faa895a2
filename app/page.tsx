'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaAward, FaProjectDiagram, FaUsers, FaChartLine, FaRocket, FaCheckCircle } from 'react-icons/fa'
import CTASection from '@/components/CTASection'

export default function Home() {
  const stats = [
    { icon: <FaProjectDiagram />, value: '150+', label: 'Projects Completed' },
    { icon: <FaUsers />, value: '50+', label: 'Happy Clients' },
    { icon: <FaAward />, value: '25+', label: 'Awards Won' },
    { icon: <FaChartLine />, value: '98%', label: 'Success Rate' },
  ]

  const features = [
    {
      icon: <FaRocket />,
      title: 'Innovative Solutions',
      description: 'Cutting-edge construction technology and methodologies to deliver exceptional results.'
    },
    {
      icon: <FaProjectDiagram />,
      title: 'Project Excellence',
      description: 'Comprehensive project management from conception to completion with proven success.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensuring the highest standards in every project.'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-400" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-600" />
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-semibold border border-accent-500/30">
                  Construction Technology Expert
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-6 mb-6 leading-tight"
              >
                Building the
                <span className="block gradient-text bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                  Future of Construction
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Innovative construction technology and management solutions that transform complex projects into remarkable achievements.
                Specializing in BIM, digital construction, and cutting-edge project delivery methods.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/portfolio" className="btn-primary flex items-center justify-center gap-2 group">
                  View My Work
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Right side - Feature highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-3xl text-accent-400 mb-3">{feature.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-300">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl text-accent-400 mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Expertise Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Choose Me?</h2>
            <p className="section-subtitle">
              Combining technical expertise with innovative thinking to deliver outstanding results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group"
              >
                <div className="text-5xl text-primary-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
