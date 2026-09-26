import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <img
            src="https://picsum.photos/seed/shuttercraft-contact/600/700"
            alt="Photography workspace"
            className="w-full rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-semibold text-ink">Send Me a Message</h2>
          <p className="mb-8 text-ink-light">
            Have a project in mind or just want to say hello? Fill out the form below and I&apos;ll
            get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-md border border-ink/20 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-light/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border border-ink/20 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-light/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full resize-none rounded-md border border-ink/20 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-light/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-green px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
