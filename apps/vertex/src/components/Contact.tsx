import { useState } from 'react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="bg-[#f8f9fa] py-20">
      <div className="mx-auto max-w-[1170px] px-6">
        <div className="mb-12 flex items-end gap-4">
          <span className="font-display text-6xl font-bold text-[#32DB8A] opacity-40">07</span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink">
            Contact
          </h2>
        </div>

        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-mist">
          Consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod.
          Lorem ipsum dolor sit amet consectetur est adipisicing elit, sed do eiusmod tempor.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name *"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded border border-gray-300 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-[#32DB8A]"
            />
            <input
              type="email"
              placeholder="Your Email *"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded border border-gray-300 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-[#32DB8A]"
            />
          </div>
          <input
            type="text"
            placeholder="Subject *"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-[#32DB8A]"
          />
          <textarea
            placeholder="Your Message *"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-none rounded border border-gray-300 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-[#32DB8A]"
          />
          <button
            type="submit"
            className="rounded bg-[#32DB8A] px-8 py-3 font-medium uppercase tracking-wide text-[#221C5A] transition-colors hover:bg-[#28b872]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
