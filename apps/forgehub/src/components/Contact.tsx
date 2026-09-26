import { type FormEvent } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function Contact() {
  return (
    <section id="contact-section" className="bg-light-bg py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full lg:w-7/12">
            <form onSubmit={handleSubmit} className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-gray-900">Contact Form</h3>
              <div className="mb-4 flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="fname" className="mb-1 block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lname" className="mb-1 block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={7}
                  placeholder="Write your notes or questions here..."
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded bg-primary py-3 font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4">
                <p className="mb-1 font-bold text-gray-900">Address</p>
                <p className="text-gray-600">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
              <div className="mb-4">
                <p className="mb-1 font-bold text-gray-900">Phone</p>
                <a href="tel:+12323235324" className="text-primary hover:underline">
                  +1 232 3235 324
                </a>
              </div>
              <div>
                <p className="mb-1 font-bold text-gray-900">Email Address</p>
                <a href="mailto:youremail@domain.com" className="text-primary hover:underline">
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
