import { type FormEvent, useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section id="contact" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold uppercase md:text-4xl">Contact Us</h2>
          <p className="mx-auto max-w-2xl text-mist">
            Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
            temporibus culpa dolore molestias blanditiis.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="mb-1 font-display text-sm font-bold uppercase">Address</h4>
                <p className="text-sm text-mist">2811 City Street, New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="mb-1 font-display text-sm font-bold uppercase">Phone</h4>
                <p className="text-sm text-mist">+1 (234) 567-8900</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="mb-1 font-display text-sm font-bold uppercase">Email</h4>
                <p className="text-sm text-mist">info@adept.com</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded border border-divider bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded border border-divider bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded border border-divider bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
            <textarea
              placeholder="Message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded border border-divider bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
            <Button
              type="submit"
              variant="primary"
              className="rounded bg-brand px-8 py-3 font-semibold uppercase text-white transition-colors hover:bg-brand/90"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
