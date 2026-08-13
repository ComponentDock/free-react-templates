import { useState, type FormEvent } from 'react'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { contact } from '../data'

const infoIcons = [MapPin, Phone, Mail, Globe]

/** Contact section: four labeled info blocks on the left (Address, Contact
 *  Number, Email Address, Website) and a contact form on the right (Your
 *  Name, Your Email, Subject, Message, Send Message). A valid submit swaps
 *  the form for a success message (source #contact-section). */
export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const update =
    (field: keyof typeof values) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
    if (
      values.name.trim() === '' ||
      !emailValid ||
      values.subject.trim() === '' ||
      values.message.trim() === ''
    ) {
      setError(contact.error)
      setSent(false)
      return
    }
    setError('')
    setSent(true)
  }

  return (
    <section id="contact-section" data-testid="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-4">
        <p className="section-eyebrow">{contact.eyebrow}</p>
        <h2 className="section-title">{contact.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted">{contact.intro}</p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <ul className="space-y-8">
            {contact.info.map((item, index) => {
              // infoIcons is indexed by contact.info position (both length 4).
              const Icon = infoIcons[index]!
              return (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-ink">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-muted">{item.value}</p>
                  </div>
                </li>
              )
            })}
          </ul>

          {sent ? (
            <div className="flex items-center justify-center rounded bg-light p-10 text-center">
              <p role="status" className="text-lg font-semibold text-brand">
                {contact.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="rounded bg-light p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1 block text-sm font-semibold text-ink"
                  >
                    {contact.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={values.name}
                    onChange={update('name')}
                    className="h-11 w-full rounded-[2px] border border-line bg-white px-3 text-sm text-ink outline-none placeholder:text-muted focus:border-brand"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1 block text-sm font-semibold text-ink"
                  >
                    {contact.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={values.email}
                    onChange={update('email')}
                    className="h-11 w-full rounded-[2px] border border-line bg-white px-3 text-sm text-ink outline-none placeholder:text-muted focus:border-brand"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="contact-subject"
                  className="mb-1 block text-sm font-semibold text-ink"
                >
                  {contact.subjectLabel}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={values.subject}
                  onChange={update('subject')}
                  className="h-11 w-full rounded-[2px] border border-line bg-white px-3 text-sm text-ink outline-none placeholder:text-muted focus:border-brand"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="contact-message"
                  className="mb-1 block text-sm font-semibold text-ink"
                >
                  {contact.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  rows={7}
                  value={values.message}
                  onChange={update('message')}
                  className="w-full rounded-[2px] border border-line bg-white px-3 py-2 text-sm text-ink outline-none placeholder:text-muted focus:border-brand"
                />
              </div>
              <Button
                type="submit"
                className="mt-6 rounded-[2px] bg-brand px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white"
              >
                {contact.sendLabel}
              </Button>
              {error && (
                <p role="status" className="mt-3 text-sm text-red-600">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
