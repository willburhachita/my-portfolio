import React, { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-colors h-32"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-[1.01] active:scale-[0.99] duration-200"
      >
        Send Message
      </button>
    </form>
  )
}