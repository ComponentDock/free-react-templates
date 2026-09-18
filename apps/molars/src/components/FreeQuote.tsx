import { useState } from 'react'
import type { FormEvent } from 'react'

export function FreeQuote() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className="flex flex-col bg-primary-400 md:flex-row">
      {/* Form */}
      <div className="flex-1 px-6 py-12 sm:px-10 md:py-16 lg:px-16">
        <h2 className="mb-3 font-display text-2xl font-bold text-white sm:text-3xl">
          Get A <span className="font-extrabold">Free Quote</span>
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-white/80">
          Fill out the form below and our team will get back to you with a personalized treatment
          plan and cost estimate.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name *"
              className="w-full border border-white/40 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address *"
              className="w-full border border-white/40 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
            />
          </div>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message *"
            className="w-full resize-none border border-white/40 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
          />
          <button
            type="submit"
            className="border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary-400"
          >
            Get a quote now
          </button>
        </form>
      </div>
      {/* Image */}
      <div className="hidden flex-1 md:block">
        <img
          src="https://picsum.photos/seed/molars-quote/800/600"
          alt="Dental clinic interior"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  )
}
