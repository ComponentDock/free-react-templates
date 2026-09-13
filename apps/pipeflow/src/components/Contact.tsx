import { useState } from 'react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Map area */}
          <div className="w-full lg:w-1/2">
            <div
              className="h-[400px] rounded-lg bg-cover bg-center lg:h-full"
              style={{
                backgroundImage: 'url(https://picsum.photos/seed/pipeflow-map/800/600)',
              }}
            />
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">Contact us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-brand-400 focus:ring-2 focus:ring-brand-400 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-brand-400 focus:ring-2 focus:ring-brand-400 focus:outline-none"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-brand-400 focus:ring-2 focus:ring-brand-400 focus:outline-none"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-brand-400 px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
