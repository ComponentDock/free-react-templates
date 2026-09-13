import { useState } from 'react'
import { Phone, MapPin, Clock } from 'lucide-react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Reach Out to Us</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-[#3a4971]" />
              <div>
                <h4 className="font-bold text-gray-900">Phone</h4>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-[#3a4971]" />
              <div>
                <h4 className="font-bold text-gray-900">Address</h4>
                <p className="text-sm text-gray-600">123 Coaching Ave, Suite 100</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-[#3a4971]" />
              <div>
                <h4 className="font-bold text-gray-900">Hours</h4>
                <p className="text-sm text-gray-600">Mon - Fri: 9AM - 6PM</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-5 text-xl font-bold text-gray-900">Contact Form</h3>
            {submitted ? (
              <div className="rounded-lg bg-green-50 p-6 text-center text-green-700">
                Thank you! We will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="rounded border border-gray-300 px-4 py-2 text-sm focus:border-[#3a4971] focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="rounded border border-gray-300 px-4 py-2 text-sm focus:border-[#3a4971] focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-[#3a4971] focus:outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-[#3a4971] focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#3a4971] px-8 py-3 text-sm font-semibold text-white hover:bg-[#2d3a5c]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
