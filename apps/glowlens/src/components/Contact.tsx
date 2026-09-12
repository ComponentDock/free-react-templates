import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import {
  contactPhone,
  contactEmail,
  contactAddress,
  contactFormNameLabel,
  contactFormEmailLabel,
  contactFormSubjectLabel,
  contactFormMessageLabel,
  contactFormSubmitLabel,
} from '../data'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative py-[130px]"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/glowlens-contact/1920/800)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex-1 text-white">
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <Phone className="h-5 w-5 text-white/80" aria-hidden="true" />
              <span className="text-sm">{contactPhone}</span>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <Mail className="h-5 w-5 text-white/80" aria-hidden="true" />
              <span className="text-sm">{contactEmail}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-white/80" aria-hidden="true" />
              <span className="text-sm">{contactAddress}</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          {submitted ? (
            <p className="text-center text-lg font-semibold text-white">
              Thank you! Your message has been sent.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder={contactFormNameLabel}
                className="border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none"
              />
              <input
                type="email"
                placeholder={contactFormEmailLabel}
                className="border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none"
              />
              <input
                type="text"
                placeholder={contactFormSubjectLabel}
                className="border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none"
              />
              <textarea
                placeholder={contactFormMessageLabel}
                rows={5}
                className="border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-block min-w-[135px] self-start border-y-2 border-white py-3 text-center text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-dark"
              >
                {contactFormSubmitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
