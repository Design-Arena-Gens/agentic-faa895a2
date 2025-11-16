'use client'

import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHardHat } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Me', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Resume', path: '/resume' },
    { name: 'Portfolio', path: '/portfolio' },
  ]

  const socialLinks = [
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaGithub />, url: '#', label: 'GitHub' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaHardHat className="text-3xl text-accent-500" />
              <span className="text-xl font-bold text-white">ConstructTech Pro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Expert in Construction Technology & Management. Building the future of construction with innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="text-2xl text-gray-400 hover:text-accent-500 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-accent-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Project Management</li>
              <li>BIM Implementation</li>
              <li>Construction Planning</li>
              <li>Technology Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="text-accent-500" />
                <span>info@constructtech.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="text-accent-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-accent-500" />
                <span>New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} ConstructTech Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-accent-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-accent-500 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
