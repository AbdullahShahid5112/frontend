"use client"
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-700 mb-6">Get in Touch</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Ready to start your journey? Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-stone-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-stone-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-stone-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-stone-700 font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="online-therapy">Online Therapy</option>
                    <option value="corporate-workshop">Corporate Workshop</option>
                    <option value="business-psychology">Business Psychology</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-stone-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about what you're looking for and how I can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-rose-300 hover:bg-rose-400 text-stone-700 py-4 px-8 rounded-xl font-medium transition-colors duration-300 shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-8">
            <div className="bg-stone-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-medium text-stone-700 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-stone-500 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="font-medium text-stone-700">Email</div>
                    <div className="text-stone-600">info@nereapsychology.com</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-stone-500 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div className="font-medium text-stone-700">Phone</div>
                    <div className="text-stone-600">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-stone-500 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-stone-700">Office Hours</div>
                    <div className="text-stone-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br/>
                      Saturday: 10:00 AM - 2:00 PM<br/>
                      Sunday: Closed
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-stone-500 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-stone-700">Location</div>
                    <div className="text-stone-600">
                      Online sessions available worldwide<br/>
                      In-person consultations by appointment
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h4 className="font-medium text-stone-700 mb-3">Emergency Support</h4>
              <p className="text-stone-600 text-sm mb-3">
                If you're experiencing a mental health emergency, please contact:
              </p>
              <ul className="text-stone-600 text-sm space-y-1">
                <li>• Emergency Services: 911</li>
                <li>• Crisis Text Line: Text HOME to 741741</li>
                <li>• National Suicide Prevention Lifeline: 988</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
