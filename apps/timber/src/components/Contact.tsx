import { useState, type FormEvent } from 'react'

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section id="contact" className="bg-white px-4 py-20 font-['Quicksand',sans-serif]">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-dark">Get in Touch!</h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted">
          We would love to hear from you. Reach out to us for any inquiries about your next project.
        </p>
        <form
          onSubmit={handleSubmit}
          aria-label="Contact form"
          className="mx-auto max-w-lg space-y-4"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-dark focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-dark focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={5}
              className="w-full resize-none rounded border border-gray-300 px-4 py-3 text-sm text-dark focus:border-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-primary py-3 font-semibold text-dark transition-colors hover:bg-primary-dark"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
