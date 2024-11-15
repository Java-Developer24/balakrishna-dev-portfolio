'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, ShoppingCart, Video, Cloud, MessageSquare, Zap, Globe, GitBranch } from 'lucide-react'





export function PortfolioComponent() {
  const [activePhase, setActivePhase] = useState(1)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-md bg-gray-900">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Balakrishna
            </a>
            <div className="hidden md:flex space-x-4">
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              <a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming Concepts into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Seamless User Experiences</span>

          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Hi! I&apos;m Balakrishna, a Next.js Developer specializing in dynamic web applications.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Show my work <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Tech Stack & Projects Grid */}
      <section className="py-16 px-6" id="projects">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-2 bg-gradient-to-br from-purple-900 to-indigo-900">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">I prioritize client collaboration, fostering open communication</h3>
              <p className="text-gray-300 mb-4">Your vision, my expertise. Together, we create exceptional digital experiences.</p>
              <div className="flex items-center gap-4 mt-4">
                <MessageSquare className="w-12 h-12 text-purple-400" />
                <p className="text-gray-300">Always available to discuss your project, regardless of your location.</p>
              </div>

            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-900 to-purple-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">I&apos;m very flexible with time zone communications</h3>
              <Globe className="w-12 h-12 mb-4 text-blue-400" />
              <p className="text-gray-300">Always available to discuss your project, regardless of your location.</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-indigo-900 to-purple-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">My tech stack</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React.js</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Express.js</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Prisma</Badge>
                <Badge variant="secondary">Supabase</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Kubernetes</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-pink-900 to-purple-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Tech enthusiast with a passion for development</h3>
              <Zap className="w-12 h-12 mb-4 text-yellow-400" />
              <p className="text-gray-300">Constantly exploring new technologies to enhance my skills and deliver cutting-edge solutions.</p>
            </CardContent>
          </Card>
          <Card className="col-span-2 bg-gradient-to-br from-purple-900 to-pink-900">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Currently building a JS Animation library</h3>
              <p className="text-gray-300 mb-4">Pushing the boundaries of web animations to create captivating user experiences.</p>
              <div className="bg-black rounded-lg p-4">
                <code className="text-sm text-purple-400">
                  {`import { animate } from 'custom-anim-lib'
animate('#element', { 
  scale: [1, 1.5, 1],
  rotate: [0, 360],
  duration: 2000
})`}
                </code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-900 to-purple-900">
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2">E-Book Library</h3>
                <p className="text-gray-300 mb-4">A comprehensive digital library platform with advanced categorization and user tracking.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Prisma</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-900 to-pink-900">
              <CardContent className="p-6">
                <ShoppingCart className="w-12 h-12 mb-4 text-pink-400" />
                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-300 mb-4">A scalable and secure online shopping experience with real-time inventory management.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-indigo-900 to-blue-900">
              <CardContent className="p-6">
                <Video className="w-12 h-12 mb-4 text-indigo-400" />
                <h3 className="text-xl font-bold mb-2">VideoTube Backend</h3>
                <p className="text-gray-300 mb-4">A robust backend system for video streaming with advanced content management capabilities.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-900 to-blue-900">
              <CardContent className="p-6">
                <Cloud className="w-12 h-12 mb-4 text-green-400" />
                <h3 className="text-xl font-bold mb-2">Weather Application</h3>
                <p className="text-gray-300 mb-4">A sleek weather app providing real-time forecasts and interactive weather maps.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">OpenWeatherAPI</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-yellow-900 to-orange-900">
              <CardContent className="p-6">
                <MessageSquare className="w-12 h-12 mb-4 text-yellow-400" />
                <h3 className="text-xl font-bold mb-2">AI Chatbot</h3>
                <p className="text-gray-300 mb-4">An intelligent conversational AI with natural language processing capabilities.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">Flask</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6" id="testimonials">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Kind words from satisfied clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-purple-900 to-indigo-900">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4">
                  &quot;Balakrishna&apos;s professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. His enthusiasm for development truly stands out.&quot;
                </p>
                <div className="flex items-center">
                  <MessageSquare className="w-8 h-8 text-purple-400" />
                  <div>
                    <Badge variant="secondary" className="ml-2 mb-1">Abhishek</Badge>


                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900 to-purple-900">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4">
                  &quot;Working with Balakrishna was a game-changer for our startup. His technical expertise and ability to translate our vision into a functional product exceeded our expectations.&quot;
                </p>
                <div className="flex items-center">
                  <Globe className="w-8 h-8  text-blue-400" />
                  <div>
                    <Badge variant="secondary" className="ml-2 mb-1">Vishwa</Badge>


                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Planning & Strategy', 'Development & Testing', 'Deployment & Support'].map((phase, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer ${activePhase === index + 1 ? 'bg-gradient-to-br from-purple-900 to-pink-900' : 'bg-gray-800'} rounded-lg p-6`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActivePhase(index + 1)}
              >
                <h3 className="text-xl font-bold mb-2">{phase}</h3>
                {activePhase === index + 1 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-300"
                  >
                    {index === 0 && "We'll discuss your project's goals, target audience, and key functionalities. This phase includes wireframing, project scoping, and technology selection."}
                    {index === 1 && "Iterative development with regular check-ins. Rigorous testing ensures a bug-free, performant application that meets all requirements."}
                    {index === 2 && "Smooth deployment to your preferred hosting solution. Ongoing support and maintenance to ensure your project continues to excel."}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to take your digital presence to the next level?</h2>
          <p className="text-xl text-gray-400 mb-8">Let&apos;s discuss how I can help you achieve your goals.</p>
          <a href="mailto:balu2446madhu@gmail.com">
            <button
              className="px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600"
            >
              Get in touch
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Balakrishna. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white"><GitBranch /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Globe /></a>
            <a href="#" className="text-gray-400 hover:text-white"><MessageSquare /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}