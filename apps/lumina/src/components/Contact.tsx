import { type FormEvent, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-medium text-ink">Keep in Touch</h2>
          <p className="mx-auto max-w-xl text-mist">
            Most people who work in an office environment, buy computer products, or have a computer
            at home have
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
          <div className="mb-5 flex flex-col gap-5 md:flex-row">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-full border border-gray-300 px-6 py-3 text-sm text-ink outline-none transition focus:border-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-full border border-gray-300 px-6 py-3 text-sm text-ink outline-none transition focus:border-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="mb-5 w-full rounded-2xl border border-gray-300 px-6 py-3 text-sm text-ink outline-none transition focus:border-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full border border-brand bg-brand px-8 py-3 text-sm font-medium uppercase text-white transition hover:bg-brand-dark"
            >
              Send Message
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
