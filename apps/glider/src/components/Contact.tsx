import { type FormEvent, useState } from 'react'
import { Send } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-[#3e69fe] to-[#4cd4e3] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-semibold text-white">Keep in Touch</h2>
        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl" aria-label="Contact form">
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-[3px] border border-white/30 bg-transparent px-5 py-3 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
              aria-label="Your name"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-[3px] border border-white/30 bg-transparent px-5 py-3 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
              aria-label="Your email"
            />
          </div>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="mb-6 w-full resize-none rounded-[3px] border border-white/30 bg-transparent px-5 py-3 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
            aria-label="Your message"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className={cn(
                'inline-flex items-center gap-2 rounded-full border border-white px-8 py-3',
                'text-sm font-medium text-white transition-all duration-300',
                'hover:bg-white hover:text-[#3e69fe]',
              )}
            >
              Send Message
              <Send size={14} />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
