'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBuilding, FaHome, FaIndustry, FaEye, FaRoad } from 'react-icons/fa'
import CTASection from '@/components/CTASection'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'industrial', label: 'Industrial' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Manhattan Tech Tower',
      category: 'commercial',
      location: 'New York, NY',
      value: '$250M',
      duration: '24 months',
      description: 'A 40-story commercial office building featuring advanced BIM coordination and sustainable construction practices.',
      highlights: ['LEED Platinum Certified', 'BIM Level 3 Implementation', '30% Energy Efficiency Improvement'],
      icon: <FaBuilding />,
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Hudson River Bridge Modernization',
      category: 'infrastructure',
      location: 'New York, NY',
      value: '$180M',
      duration: '18 months',
      description: 'Major bridge rehabilitation project utilizing digital twin technology and real-time monitoring systems.',
      highlights: ['3D Laser Scanning', 'Digital Twin Implementation', 'Zero Safety Incidents'],
      icon: <FaRoad />,
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Luxury Residential Complex',
      category: 'residential',
      location: 'Brooklyn, NY',
      value: '$95M',
      duration: '20 months',
      description: 'High-end residential development with 200+ units featuring smart home integration and sustainable design.',
      highlights: ['Smart Building Technology', 'Modular Construction', '98% Client Satisfaction'],
      icon: <FaHome />,
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Industrial Manufacturing Facility',
      category: 'industrial',
      location: 'New Jersey',
      value: '$120M',
      duration: '16 months',
      description: 'State-of-the-art manufacturing plant with automated construction monitoring and quality control systems.',
      highlights: ['Automated Quality Control', 'Drone Surveying', '20% Under Budget'],
      icon: <FaIndustry />,
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 5,
      title: 'Financial District Office Renovation',
      category: 'commercial',
      location: 'New York, NY',
      value: '$65M',
      duration: '12 months',
      description: 'Complete renovation of historic office building with modern amenities while preserving architectural heritage.',
      highlights: ['Historic Preservation', 'Occupied Building Renovation', 'Zero Downtime Achievement'],
      icon: <FaBuilding />,
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      id: 6,
      title: 'Sustainable Housing Development',
      category: 'residential',
      location: 'Queens, NY',
      value: '$75M',
      duration: '22 months',
      description: 'Eco-friendly residential community featuring solar panels, rainwater harvesting, and green building materials.',
      highlights: ['Net-Zero Energy Design', 'Sustainable Materials', 'Community Integration'],
      icon: <FaHome />,
      image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 7,
      title: 'Metro Line Extension',
      category: 'infrastructure',
      location: 'New York, NY',
      value: '$320M',
      duration: '36 months',
      description: 'Complex underground metro construction with advanced tunneling technology and BIM coordination.',
      highlights: ['Underground Construction', 'Real-time Progress Tracking', 'Community Impact Minimization'],
      icon: <FaRoad />,
      image: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)'
    },
    {
      id: 8,
      title: 'Distribution Center Complex',
      category: 'industrial',
      location: 'Pennsylvania',
      value: '$140M',
      duration: '18 months',
      description: 'Large-scale logistics facility with automated systems and cutting-edge construction management technology.',
      highlights: ['Fast-Track Delivery', 'Automated Systems Integration', '15% Early Completion'],
      icon: <FaIndustry />,
      image: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'
    }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>

        <div className="container-custom section-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing successful projects that demonstrate innovation, expertise, and exceptional results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">$1.2B+</div>
              <div className="text-gray-600">Total Project Value</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600">Awards Won</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="card overflow-hidden h-full flex flex-col">
                    {/* Project Image Placeholder with Gradient */}
                    <div
                      className="h-48 flex items-center justify-center text-white text-6xl relative overflow-hidden"
                      style={{ background: project.image }}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          📍 {project.location}
                        </span>
                      </div>

                      <p className="text-gray-700 mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* Project Metrics */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-primary-50 rounded-lg p-2 text-center">
                          <div className="text-sm text-gray-600">Value</div>
                          <div className="font-bold text-primary-600">{project.value}</div>
                        </div>
                        <div className="bg-accent-50 rounded-lg p-2 text-center">
                          <div className="text-sm text-gray-600">Duration</div>
                          <div className="font-bold text-accent-600">{project.duration}</div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-1 mb-4">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <span className="text-accent-600 mr-2">✓</span>
                            {highlight}
                          </div>
                        ))}
                      </div>

                      {/* View Details Button */}
                      <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold
                                       transition-all duration-300 hover:bg-primary-700 hover:shadow-lg
                                       flex items-center justify-center gap-2 group-hover:scale-105">
                        <FaEye />
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Client Testimonials</h2>
            <p className="section-subtitle">
              What clients say about working with me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Michael Chen',
                role: 'CEO, GlobalBuild Corp',
                text: 'Outstanding project management and technical expertise. Delivered beyond expectations.'
              },
              {
                name: 'Sarah Williams',
                role: 'Director, UrbanDev Inc.',
                text: 'Innovative solutions and seamless BIM implementation. A true professional.'
              },
              {
                name: 'David Rodriguez',
                role: 'Project Lead, MetroConstruct',
                text: 'Exceptional attention to detail and commitment to quality. Highly recommended.'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="text-4xl text-accent-500 mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Next Project?"
        description="Let's collaborate to turn your construction vision into reality with innovative technology and expert management."
        primaryButtonText="Discuss Your Project"
        secondaryButtonText="Download Case Studies"
      />
    </>
  )
}
