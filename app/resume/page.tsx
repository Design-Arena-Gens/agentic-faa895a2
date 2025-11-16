'use client'

import { motion } from 'framer-motion'
import { FaDownload, FaBriefcase, FaGraduationCap, FaAward, FaFileAlt } from 'react-icons/fa'
import CTASection from '@/components/CTASection'

export default function Resume() {
  const experience = [
    {
      period: '2023 - Present',
      title: 'Senior Construction Technology Manager',
      company: 'GlobalBuild Corporation',
      location: 'New York, NY',
      responsibilities: [
        'Lead digital transformation initiatives for $500M+ portfolio of construction projects',
        'Implement BIM workflows and standards across 15+ concurrent projects',
        'Manage team of 8 technology specialists and BIM coordinators',
        'Reduced project delivery time by 30% through technology optimization',
        'Established company-wide construction technology standards and best practices'
      ]
    },
    {
      period: '2019 - 2023',
      title: 'Project Manager - Technology Division',
      company: 'ConstructTech Solutions Inc.',
      location: 'New York, NY',
      responsibilities: [
        'Managed technology integration for 25+ residential and commercial projects',
        'Coordinated with architects, engineers, and contractors on BIM implementation',
        'Developed custom construction management software solutions',
        'Achieved 98% client satisfaction rate across all projects',
        'Trained 50+ construction professionals on digital construction tools'
      ]
    },
    {
      period: '2016 - 2019',
      title: 'Construction Engineer',
      company: 'Metropolitan Construction Co.',
      location: 'New York, NY',
      responsibilities: [
        'Supervised construction operations for urban infrastructure projects',
        'Performed quality control inspections and technical reviews',
        'Coordinated with subcontractors and managed project schedules',
        'Implemented digital documentation systems improving efficiency by 25%',
        'Managed project budgets ranging from $5M to $50M'
      ]
    }
  ]

  const education = [
    {
      degree: 'Master of Science in Construction Technology & Management',
      institution: 'Columbia University',
      location: 'New York, NY',
      year: '2016',
      details: 'Thesis: Digital Integration in Modern Construction Practices'
    },
    {
      degree: 'Bachelor of Science in Civil Engineering',
      institution: 'New York University',
      location: 'New York, NY',
      year: '2014',
      details: 'Graduated Magna Cum Laude, GPA: 3.8/4.0'
    }
  ]

  const certifications = [
    { name: 'Project Management Professional (PMP)', issuer: 'PMI', year: '2020' },
    { name: 'Autodesk Certified Professional: Revit', issuer: 'Autodesk', year: '2019' },
    { name: 'Construction Manager Certification (CMC)', issuer: 'CMAA', year: '2021' },
    { name: 'LEED Green Associate', issuer: 'USGBC', year: '2018' },
    { name: 'OSHA 30-Hour Construction Safety', issuer: 'OSHA', year: '2017' },
    { name: 'BIM Manager Certification', issuer: 'buildingSMART', year: '2022' }
  ]

  const awards = [
    { title: 'Construction Innovation Award', organization: 'National Construction Association', year: '2023' },
    { title: 'Excellence in Project Management', organization: 'PMI New York Chapter', year: '2022' },
    { title: 'Young Professional of the Year', organization: 'Construction Management Association', year: '2021' },
    { title: 'Best BIM Implementation', organization: 'AEC Technology Summit', year: '2020' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/2 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>

        <div className="container-custom section-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Resume
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A comprehensive overview of my professional journey, education, and achievements
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FaDownload />
              Download Resume PDF
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-6">
              <FaFileAlt className="text-4xl text-primary-600 mr-4" />
              <h2 className="text-4xl font-bold">Professional Summary</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dynamic Construction Technology & Management professional with 8+ years of experience driving
              digital transformation in the construction industry. Proven track record of leading complex
              projects, implementing innovative BIM solutions, and managing multi-disciplinary teams.
              Expertise in bridging traditional construction practices with cutting-edge technology to
              deliver projects on time, within budget, and exceeding quality standards. Passionate about
              sustainable construction and continuous improvement through technology adoption.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-4xl text-primary-600 mr-4" />
              <h2 className="text-4xl font-bold">Professional Experience</h2>
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card border-l-4 border-primary-600"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{job.title}</h3>
                    <div className="text-lg text-primary-600 font-semibold">{job.company}</div>
                    <div className="text-gray-600">{job.location}</div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">
                      {job.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-accent-600 mr-3 mt-1">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-4xl text-primary-600 mr-4" />
              <h2 className="text-4xl font-bold">Education</h2>
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card bg-gradient-to-r from-primary-50 to-transparent"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <div className="text-lg text-primary-600 font-semibold">{edu.institution}</div>
                    <div className="text-gray-600">{edu.location}</div>
                    <div className="text-gray-700 mt-2 italic">{edu.details}</div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-primary-600 text-white px-6 py-2 rounded-full font-bold text-lg">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <FaAward className="text-4xl text-primary-600 mr-4" />
                <h2 className="text-3xl font-bold">Certifications</h2>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{cert.issuer}</span>
                      <span className="text-primary-600 font-semibold">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <FaAward className="text-4xl text-accent-600 mr-4" />
                <h2 className="text-3xl font-bold">Awards & Recognition</h2>
              </div>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent-600"
                  >
                    <h3 className="font-bold text-gray-900 mb-1">{award.title}</h3>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{award.organization}</span>
                      <span className="text-accent-600 font-semibold">{award.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Impressed by My Credentials?"
        description="Let's discuss how my experience and expertise can contribute to your organization's success."
        primaryButtonText="Contact Me"
        secondaryButtonText="View Portfolio"
      />
    </>
  )
}
