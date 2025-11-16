'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaLightbulb, FaHandshake, FaTrophy, FaCheckCircle } from 'react-icons/fa'
import CTASection from '@/components/CTASection'

export default function About() {
  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and methodologies to push construction boundaries.'
    },
    {
      icon: <FaHandshake />,
      title: 'Collaboration',
      description: 'Working closely with stakeholders to ensure project success and client satisfaction.'
    },
    {
      icon: <FaTrophy />,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in every project, every time.'
    },
  ]

  const achievements = [
    'Led digital transformation of $500M+ construction projects',
    'Implemented BIM workflows reducing project costs by 25%',
    'Certified in Advanced Construction Management',
    'Published research on sustainable construction technologies',
    'Speaker at international construction technology conferences',
    'Mentored 30+ young professionals in the construction industry'
  ]

  const timeline = [
    {
      year: '2023 - Present',
      title: 'Senior Construction Technology Manager',
      company: 'GlobalBuild Corp',
      description: 'Leading digital innovation and BIM implementation for large-scale commercial projects.'
    },
    {
      year: '2019 - 2023',
      title: 'Project Manager - Technology Division',
      company: 'ConstructTech Solutions',
      description: 'Managed construction technology integration for residential and commercial developments.'
    },
    {
      year: '2016 - 2019',
      title: 'Construction Engineer',
      company: 'Metropolitan Construction Co.',
      description: 'Coordinated construction operations and quality control for urban infrastructure projects.'
    },
  ]

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
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate construction professional dedicated to revolutionizing the industry through technology and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                My Journey in Construction Technology
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  With over 8 years of experience in construction technology and management, I've dedicated my career
                  to bridging the gap between traditional construction practices and cutting-edge digital solutions.
                </p>
                <p>
                  My journey began with a fascination for how technology could transform an industry built on centuries
                  of tradition. Through hands-on experience managing complex projects and implementing innovative systems,
                  I've developed a unique perspective that combines practical construction knowledge with advanced
                  technological expertise.
                </p>
                <p>
                  Today, I specialize in BIM implementation, digital project management, and construction automation,
                  helping organizations optimize their operations and deliver projects more efficiently. My approach
                  focuses on practical, results-driven solutions that create real value for stakeholders.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white"
            >
              <FaGraduationCap className="text-5xl mb-6 text-accent-400" />
              <h3 className="text-2xl font-bold mb-4">Education & Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-accent-400 flex-shrink-0" />
                  <span>M.Sc. Construction Technology & Management</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-accent-400 flex-shrink-0" />
                  <span>B.Sc. Civil Engineering</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-accent-400 flex-shrink-0" />
                  <span>PMP - Project Management Professional</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-accent-400 flex-shrink-0" />
                  <span>Autodesk Certified Professional: Revit</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="mt-1 mr-3 text-accent-400 flex-shrink-0" />
                  <span>LEED Green Associate</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Core Values</h2>
            <p className="section-subtitle">
              Principles that guide my work and define my approach to every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-5xl text-primary-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">
              A track record of success in construction technology and management
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l-4 border-primary-600 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-600 rounded-full border-4 border-white" />
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-accent-600 font-semibold mb-2">{item.year}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <div className="text-primary-600 font-semibold mb-3">{item.company}</div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Key Achievements</h2>
            <p className="section-subtitle">
              Milestones that demonstrate commitment to excellence and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <FaCheckCircle className="text-2xl text-accent-600 mt-1 mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's Work Together"
        description="Interested in collaborating on your next construction project? Let's discuss how we can achieve excellence together."
        primaryButtonText="Contact Me"
        secondaryButtonText="View Projects"
      />
    </>
  )
}
