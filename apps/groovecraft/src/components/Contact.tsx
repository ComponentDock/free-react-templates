import { useState } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative bg-cover bg-fixed py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/groove-contact/1920/800')" }}
    >
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/60">
            See what&apos;s new
          </p>
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
        </div>

        {submitted ? (
          <p className="text-center text-lg text-white">Thank you! We&apos;ll be in touch soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <input
                type="text"
                placeholder="Name"
                aria-label="Name"
                required
                className="border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/50"
              />
              <input
                type="email"
                placeholder="E-mail"
                aria-label="E-mail"
                required
                className="border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/50"
              />
              <input
                type="text"
                placeholder="Subject"
                aria-label="Subject"
                required
                className="border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/50"
              />
            </div>
            <textarea
              placeholder="Message"
              aria-label="Message"
              rows={6}
              required
              className="w-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/50"
            />
            <div className="text-center">
              <button
                type="submit"
                className="bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-gray-200"
              >
                Send
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
