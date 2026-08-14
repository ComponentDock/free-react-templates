import { useState } from 'react'
import type { FormEvent } from 'react'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CONTACT_BOXES } from '../data'
import type { ContactBox } from '../data'

const BOX_ICONS: Record<ContactBox['icon'], LucideIcon> = {
  map: MapPin,
  phone: Phone,
  mail: Mail,
  globe: Globe,
}

/* Contact section: four dark info panels (address / phone / email /
   website) plus a validated message form that swaps to a success
   message on submit (no backend). */
export function ContactSection() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-ink px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-base font-bold tracking-[0.2em] text-muted uppercase">Contact Me</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/90">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {CONTACT_BOXES.map((box) => {
            const Icon = BOX_ICONS[box.icon]
            return (
              <div key={box.label} className="bg-panel p-8 text-center">
                <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-brand">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-sm font-bold text-white">{box.label}</h3>
                <p className="text-sm text-white/70">{box.value}</p>
              </div>
            )
          })}
        </div>
        <div className="mx-auto mt-16 max-w-3xl bg-panel p-8 md:p-12">
          {sent ? (
            <p role="status" className="py-10 text-center text-sm text-white/90">
              Thanks! Your message has been sent.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-semibold tracking-wider text-white/70 uppercase"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-white/10 bg-ink px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-brand"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-semibold tracking-wider text-white/70 uppercase"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-white/10 bg-ink px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-brand"
                  placeholder="Your Email"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-semibold tracking-wider text-white/70 uppercase"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full border border-white/10 bg-ink px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-brand"
                  placeholder="Subject"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-semibold tracking-wider text-white/70 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none border border-white/10 bg-ink px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-brand"
                  placeholder="Message"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-brand px-5 py-3 text-[10px] font-bold tracking-wider text-ink uppercase transition hover:bg-white md:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
