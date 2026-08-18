import { useState, type FormEvent } from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'
import { contactInfo } from '../data'
import { socialLinks } from './BrandIcons'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contactme" className="bg-paper py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-ink">Contact us</h3>
        <p className="mt-2 mb-10 text-body">{contactInfo.subtitle}</p>

        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand" />
            <p className="text-sm leading-relaxed text-body">
              <span className="mb-1 block font-semibold text-ink">My Address:</span>
              {contactInfo.address}
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand" />
            <p className="text-sm leading-relaxed text-body">
              <span className="mb-1 block font-semibold text-ink">My Email:</span>
              {contactInfo.email}
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand" />
            <p className="text-sm leading-relaxed text-body">
              <span className="mb-1 block font-semibold text-ink">My Phone:</span>
              {contactInfo.phone}
            </p>
          </div>
        </div>

        {submitted ? (
          <div role="status" className="rounded border border-brand/30 bg-light p-10 text-center">
            <p className="text-lg font-semibold text-ink">Message sent successfully!</p>
            <p className="mt-2 text-body">Thanks for reaching out — I will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="w-full rounded border border-light bg-light px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full rounded border border-light bg-light px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full rounded border border-light bg-light px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Create a message here"
                className="w-full rounded border border-light bg-light px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="rounded bg-brand px-8 py-3 font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand/90"
              >
                Send Message
              </button>
            </div>
          </form>
        )}

        <div className="mt-12">
          <h4 className="mb-4 text-lg font-medium text-ink">{contactInfo.followHeading}</h4>
          <ul className="flex flex-wrap gap-6">
            {socialLinks
              .filter((link) => contactInfo.followLinks.includes(link.label))
              .map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-brand"
                  >
                    <Icon className="size-4 text-brand" />
                    {label}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
