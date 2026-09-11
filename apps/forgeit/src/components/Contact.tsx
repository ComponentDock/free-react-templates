import type { FormEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <section id="contact-section" className="bg-surface-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Contact Us</h2>
        </div>
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit} className="rounded bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-dark">Contact Form</h3>
              <div className="mb-4 flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <label htmlFor="fname" className="mb-1 block text-sm font-medium text-dark">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lname" className="mb-1 block text-sm font-medium text-dark">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-dark">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="mb-1 block text-sm font-medium text-dark">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-dark">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={7}
                  placeholder="Write your notes or questions here..."
                  className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                />
              </div>
              <button type="submit" className="btn-brand w-full">
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:w-5/12">
            <div className="space-y-6">
              <div className="rounded bg-white p-6 shadow-sm">
                <div className="mb-2 flex items-center gap-2">
                  <MapPin size={18} className="text-brand" />
                  <p className="font-bold text-dark">Address</p>
                </div>
                <p className="text-sm text-body">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
              <div className="rounded bg-white p-6 shadow-sm">
                <div className="mb-2 flex items-center gap-2">
                  <Phone size={18} className="text-brand" />
                  <p className="font-bold text-dark">Phone</p>
                </div>
                <a href="tel:+12323235324" className="text-sm text-brand hover:underline">
                  +1 232 3235 324
                </a>
              </div>
              <div className="rounded bg-white p-6 shadow-sm">
                <div className="mb-2 flex items-center gap-2">
                  <Mail size={18} className="text-brand" />
                  <p className="font-bold text-dark">Email Address</p>
                </div>
                <a
                  href="mailto:youremail@domain.com"
                  className="text-sm text-brand hover:underline"
                >
                  youremail@domain.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
