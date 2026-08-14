import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { contact } from '../data'

const infoIcons = [MapPin, Phone, Mail]

/* Contact: a light-gray band with a white contact form card (First Name,
 * Last Name, Email, Subject, Message + "Send Message" pill) beside contact
 * details (address / phone / email). A valid submit swaps the form for a
 * success message (source #contact-section). */
export function Contact() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })
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
      values.firstName.trim() === '' ||
      values.lastName.trim() === '' ||
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
    <section id="contact" data-testid="contact" className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-4">
        <span className="text-[13px] uppercase tracking-[0.2em] text-brand">{contact.eyebrow}</span>
        <h2 className="mt-2 text-4xl font-black leading-tight text-brand md:text-[40px]">
          {contact.heading}
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <ul className="space-y-8 lg:col-span-2">
            {contact.info.map((item, index) => {
              const Icon = infoIcons[index]!
              return (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-ink">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-smoke">{item.value}</p>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-ink">{contact.formTitle}</h3>
            {sent ? (
              <div className="mt-6 flex items-center justify-center rounded bg-white p-10 text-center">
                <p role="status" className="text-lg font-semibold text-brand">
                  {contact.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 bg-white p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-first-name"
                      className="mb-1 block text-sm font-semibold text-ink"
                    >
                      {contact.labels.firstName}
                    </label>
                    <input
                      id="contact-first-name"
                      type="text"
                      value={values.firstName}
                      onChange={update('firstName')}
                      className="h-[43px] w-full rounded-full border border-line bg-white px-5 text-sm text-ink outline-none placeholder:text-faint focus:border-brand"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-last-name"
                      className="mb-1 block text-sm font-semibold text-ink"
                    >
                      {contact.labels.lastName}
                    </label>
                    <input
                      id="contact-last-name"
                      type="text"
                      value={values.lastName}
                      onChange={update('lastName')}
                      className="h-[43px] w-full rounded-full border border-line bg-white px-5 text-sm text-ink outline-none placeholder:text-faint focus:border-brand"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="contact-email"
                    className="mb-1 block text-sm font-semibold text-ink"
                  >
                    {contact.labels.email}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={values.email}
                    onChange={update('email')}
                    className="h-[43px] w-full rounded-full border border-line bg-white px-5 text-sm text-ink outline-none placeholder:text-faint focus:border-brand"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="contact-subject"
                    className="mb-1 block text-sm font-semibold text-ink"
                  >
                    {contact.labels.subject}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={values.subject}
                    onChange={update('subject')}
                    className="h-[43px] w-full rounded-full border border-line bg-white px-5 text-sm text-ink outline-none placeholder:text-faint focus:border-brand"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="contact-message"
                    className="mb-1 block text-sm font-semibold text-ink"
                  >
                    {contact.labels.message}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={6}
                    value={values.message}
                    onChange={update('message')}
                    className="w-full rounded-[24px] border border-line bg-white px-5 py-3 text-sm text-ink outline-none placeholder:text-faint focus:border-brand"
                  />
                </div>
                <Button
                  type="submit"
                  className="mt-6 rounded-full bg-brand px-10 py-3 text-base text-white transition-colors hover:bg-brand/90"
                >
                  {contact.labels.sendMessage}
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
      </div>
    </section>
  )
}
