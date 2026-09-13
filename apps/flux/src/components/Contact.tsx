import { type FormEvent, useState } from 'react'
import { Button } from '@free-react-templates/ui'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold text-section-heading">Get In Touch</h2>
          <div className="mx-auto h-0.5 w-12 bg-brand-orange" />
        </div>

        <form onSubmit={handleSubmit} className="mx-auto flex max-w-2xl flex-col gap-5 text-center">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full rounded-sm border border-gray-300 px-4 py-3 text-sm text-heading placeholder-gray-400 outline-none focus:border-brand-blue"
            aria-label="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="w-full rounded-sm border border-gray-300 px-4 py-3 text-sm text-heading placeholder-gray-400 outline-none focus:border-brand-blue"
            aria-label="Email"
          />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="w-full rounded-sm border border-gray-300 px-4 py-3 text-sm text-heading placeholder-gray-400 outline-none focus:border-brand-blue"
            aria-label="Subject"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            rows={5}
            className="w-full resize-none rounded-sm border border-gray-300 px-4 py-3 text-sm text-heading placeholder-gray-400 outline-none focus:border-brand-blue"
            aria-label="Message"
          />
          <div>
            <Button
              type="submit"
              className="rounded-none bg-brand-orange px-8 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-brand-blue hover:shadow-lg"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
