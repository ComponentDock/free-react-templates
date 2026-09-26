import type { FormEvent } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function Contact() {
  return (
    <section id="contact" data-testid="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-3xl font-bold text-maroon">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border border-gray-300 px-4 py-3 text-sm focus:border-maroon focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border border-gray-300 px-4 py-3 text-sm focus:border-maroon focus:outline-none"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="border border-gray-300 px-4 py-3 text-sm focus:border-maroon focus:outline-none"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            required
            className="w-full resize-none border border-gray-300 px-4 py-3 text-sm focus:border-maroon focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-none bg-maroon px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-maroon-dark"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
