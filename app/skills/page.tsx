'use client'

import { motion } from 'framer-motion'
import { FaTools, FaLaptopCode, FaChartLine, FaUsers, FaCube, FaClipboardCheck } from 'react-icons/fa'
import CTASection from '@/components/CTASection'

export default function Skills() {
  const skillCategories = [
    {
      icon: <FaLaptopCode />,
      title: 'Construction Technology',
      skills: [
        { name: 'BIM (Building Information Modeling)', level: 95 },
        { name: 'Autodesk Revit', level: 90 },
        { name: 'AutoCAD Civil 3D', level: 88 },
        { name: 'Navisworks', level: 85 },
        { name: 'Construction Software Integration', level: 92 },
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Project Management',
      skills: [
        { name: 'Project Planning & Scheduling', level: 95 },
        { name: 'Primavera P6', level: 88 },
        { name: 'Microsoft Project', level: 90 },
        { name: 'Risk Management', level: 87 },
        { name: 'Budget & Cost Control', level: 92 },
      ]
    },
    {
      icon: <FaCube />,
      title: 'Technical Expertise',
      skills: [
        { name: 'Structural Analysis', level: 85 },
        { name: 'Construction Methods', level: 93 },
        { name: 'Quality Assurance', level: 90 },
        { name: 'Site Supervision', level: 88 },
        { name: 'Technical Documentation', level: 91 },
      ]
    },
    {
      icon: <FaUsers />,
      title: 'Leadership & Collaboration',
      skills: [
        { name: 'Team Leadership', level: 94 },
        { name: 'Stakeholder Management', level: 92 },
        { name: 'Client Relations', level: 90 },
        { name: 'Cross-functional Collaboration', level: 93 },
        { name: 'Conflict Resolution', level: 88 },
      ]
    },
    {
      icon: <FaTools />,
      title: 'Digital Construction Tools',
      skills: [
        { name: 'Procore', level: 87 },
        { name: 'PlanGrid', level: 85 },
        { name: 'Bluebeam Revu', level: 90 },
        { name: 'Drone Surveying & Photogrammetry', level: 82 },
        { name: '3D Laser Scanning', level: 80 },
      ]
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Compliance & Safety',
      skills: [
        { name: 'Safety Management', level: 93 },
        { name: 'Building Codes & Regulations', level: 91 },
        { name: 'OSHA Standards', level: 89 },
        { name: 'Sustainable Construction (LEED)', level: 86 },
        { name: 'Quality Control Systems', level: 92 },
      ]
    },
  ]

  const softSkills = [
    'Strategic Thinking',
    'Problem Solving',
    'Communication',
    'Adaptability',
    'Time Management',
    'Critical Analysis',
    'Innovation',
    'Mentorship'
  ]

  const certifications = [
    'Project Management Professional (PMP)',
    'Autodesk Certified Professional: Revit',
    'LEED Green Associate',
    'Construction Manager Certification (CMC)',
    'OSHA 30-Hour Construction Safety',
    'BIM Manager Certification'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>

        <div className="container-custom section-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive skill set combining technical proficiency, management excellence, and innovative thinking
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Technical Competencies</h2>
            <p className="section-subtitle">
              Specialized skills developed through years of hands-on experience and continuous learning
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl text-primary-600 mr-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700">{skill.name}</span>
                        <span className="text-primary-600 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Professional Skills</h2>
            <p className="section-subtitle">
              Essential soft skills that complement technical expertise
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="skill-badge"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications & Credentials
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Professional certifications validating expertise and commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6
                         hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start">
                  <FaClipboardCheck className="text-2xl text-accent-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="font-semibold">{cert}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="section-title mb-6">Continuous Growth</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The construction industry is constantly evolving, and I'm committed to staying at the forefront
              of technological advancement. I regularly participate in professional development programs,
              attend industry conferences, and pursue new certifications to ensure I can deliver the most
              innovative and effective solutions to my clients.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600">Training Hours/Year</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600">Software Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Expertise for Your Project?"
        description="Let's discuss how my skills and experience can help bring your construction project to successful completion."
        primaryButtonText="Hire Me"
        secondaryButtonText="View Resume"
        secondaryButtonLink="/resume"
      />
    </>
  )
}
