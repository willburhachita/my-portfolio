import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Github, Linkedin, Mail, Phone, ExternalLink, Trophy, BarChart3, Home } from 'lucide-react'
import { ProjectCard } from './components/ProjectCard'
import { ContactForm } from './components/ContactForm'
import { HeroIntro } from './components/HeroIntro'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)

  const projects = [
    {
      name: 'ClashSphere',
      description: 'Battle with content. Win with creativity. Earn real rewards in epic social media duels. A platform where creators compete and earn through their creativity.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://lively-integrity-production.up.railway.app',
      stats: {
        prize: '$50K+',
        battles: '1,234'
      },
      icon: Trophy
    },
    {
      name: 'FeedTag',
      description: 'Track your social media influence across platforms. Real-time analytics and insights for content creators with cross-platform integration.',
      tech: ['React', 'Express', 'MongoDB'],
      liveUrl: 'https://feedtag-production.up.railway.app',
      stats: {
        platforms: '4+',
        features: 'End-time'
      },
      icon: BarChart3
    },
    {
      name: 'HoloHeaven',
      description: 'Find your perfect long-term stay with verified hosts and secure payments. Advanced property search with smart filters for premium accommodations worldwide.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://holoheaven-production.up.railway.app',
      stats: {
        properties: '1000+',
        locations: 'Global'
      },
      icon: Home
    }
  ]

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <AnimatePresence>
        {!introComplete && (
          <HeroIntro onFinish={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      {introComplete && (
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Theme Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 backdrop-blur-sm hover:bg-yellow-400/10 transition-all duration-300 z-50"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6" />}
          </motion.button>

          {/* Hero Section */}
          <motion.section 
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-gray-800/50 to-blue-900/30"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15)_0%,transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-center md:text-left md:flex-1">
                <motion.div 
                  className="mb-6 inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-sm font-medium px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                    Hi, I'm Wilbur
                  </span>
                </motion.div>
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-gray-300 to-yellow-400 bg-clip-text text-transparent animate-gradient"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Software Engineer & Web3 Developer
                </motion.h1>
                <motion.p 
                  className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Bridging the gap between Web2 and Web3 technologies, creating innovative solutions for the decentralized future.
                </motion.p>
                <motion.div 
                  className="flex gap-4 justify-center md:justify-start mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <a
                    href="https://www.linkedin.com/in/wilbur-hachita-345aa4203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/80 to-blue-800/80 text-white rounded-full hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/willburhachita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700/80 to-gray-900/80 text-white rounded-full hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    GitHub
                  </a>
                </motion.div>
              </div>
              
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: "spring", damping: 15 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-300"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-yellow-400/30 shadow-2xl shadow-yellow-400/20">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHJ44qNAvJpHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716079174782?e=1752710400&v=beta&t=W3xmi821cVQq2LaymG1D7nQKa3tFTT-SeKZ_ASdf484"
                    alt="Wilbur Hachita"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent"></div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/50 to-transparent blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="w-6 h-10 rounded-full border-2 border-yellow-400/30 flex items-start justify-center p-1">
                <div className="w-1 h-2 rounded-full bg-yellow-400/50 animate-bounce"></div>
              </div>
            </motion.div>
          </motion.section>

          {/* About Section */}
          <motion.section 
            className="py-20 px-4 md:px-8 relative overflow-hidden"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/50 to-transparent"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.1)_0%,transparent_50%)]"></div>
            </div>
            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent">About Me</h2>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
                <p className="text-lg mb-8 leading-relaxed text-gray-300">
                  As a passionate Backend Developer at Baboons.nl, I specialize in building robust and scalable applications
                  that bridge Web2 and Web3 technologies. With expertise in blockchain development and traditional web technologies,
                  I create solutions that are ready for the future of the internet.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Python', 'Django', 'JavaScript', 'TypeScript', 'Docker', 'Git', 'Smart Contracts', 'Web3.js', 'Node.js'].map((skill, index) => (
                    <motion.div 
                      key={skill} 
                      className="group relative p-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg shadow-lg border border-gray-700/50 text-center hover:border-yellow-400/30 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/5 group-hover:to-yellow-400/10 rounded-lg transition-all duration-300"></div>
                      <span className="relative z-10">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section 
            className="py-20 px-4 md:px-8 relative"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.05)_0%,transparent_50%)]"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
              <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent">Featured Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 2 + index * 0.2 }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section 
            className="py-20 px-4 md:px-8 relative"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.05)_0%,transparent_50%)]"></div>
            </div>
            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent">Experience</h2>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 shadow-lg border border-gray-700/50 backdrop-blur-sm hover:border-yellow-400/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100">Backend Developer</h3>
                    <p className="text-gray-300">Baboons.nl</p>
                  </div>
                  <a 
                    href="https://baboons.tech" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Visit 
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Developed and maintained scalable backend systems, implemented RESTful APIs, and integrated Web3 technologies.
                  Collaborated with cross-functional teams to deliver high-quality solutions for clients.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section 
            className="py-20 px-4 md:px-8 relative"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.05)_0%,transparent_50%)]"></div>
            </div>
            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent">Get in Touch</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <div className="space-y-6">
                    <a 
                      href="tel:+260974381445" 
                      className="flex items-center gap-3 text-lg text-gray-300 hover:text-yellow-400 transition-colors group"
                    >
                      <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                      +260 974 381 445
                    </a>
                    <a 
                      href="mailto:wilburhachita@gmail.com" 
                      className="flex items-center gap-3 text-lg text-gray-300 hover:text-yellow-400 transition-colors group"
                    >
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                      wilburhachita@gmail.com
                    </a>
                    <div className="flex gap-4">
                      <a 
                        href="https://www.linkedin.com/in/wilbur-hachita-345aa4203/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors group"
                      >
                        <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </a>
                      <a 
                        href="https://github.com/willburhachita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-yellow-400 transition-colors group"
                      >
                        <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </div>
  )
}

export default App