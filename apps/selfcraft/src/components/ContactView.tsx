import { FormEvent, useState } from 'react'

export function ContactView() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Form submission placeholder
  }

  return (
    <section aria-label="Contact">
      <h1 className="font-heading text-heading text-4xl sm:text-5xl mb-8">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Full Name
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-[50px] border-2 border-gray-300 px-4 text-sm outline-none focus:border-brand transition-colors duration-300 bg-white"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="sr-only">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[50px] border-2 border-gray-300 px-4 text-sm outline-none focus:border-brand transition-colors duration-300 bg-white"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="sr-only">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full h-[50px] border-2 border-gray-300 px-4 text-sm outline-none focus:border-brand transition-colors duration-300 bg-white"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>
          <textarea
            id="contact-message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full min-h-[120px] border-2 border-gray-300 p-4 text-sm outline-none focus:border-brand transition-colors duration-300 bg-white resize-y"
          />
        </div>

        <button
          type="submit"
          className="w-full h-[50px] bg-brand text-white text-xs uppercase tracking-[0.2em] border-2 border-brand hover:bg-brand-light hover:border-brand-light transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
