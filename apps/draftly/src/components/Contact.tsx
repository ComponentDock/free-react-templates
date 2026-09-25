import { useState } from 'react'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-light uppercase tracking-widest text-brand-500">
            Get In Touch
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Have a Project?</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-900">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full rounded border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-brand-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-900">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full rounded border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-brand-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-gray-900">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="w-full rounded border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-brand-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-900">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Say hello to us"
              className="w-full resize-none rounded border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-brand-500"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-brand-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
