import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { contactDetails, footerBio, socials } from '../data'
import { btnSolid, inputBase } from './buttonClasses'
import { socialIcons } from './icons'

type FormValues = Record<'name' | 'email' | 'subject' | 'message', string>
type FormErrors = Partial<FormValues>

const emptyValues: FormValues = { name: '', email: '', subject: '', message: '' }

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.'
  if (!values.message.trim()) errors.message = 'Please write a message.'
  return errors
}

/**
 * Green footer (reference: .footer-wrappr) with the freelancer bio, the
 * validated "Drop a Line" contact form, contact details, socials, and a
 * copyright bar linking to Component Dock (replaces the source attribution).
 */
export function Footer() {
  const [values, setValues] = useState<FormValues>(emptyValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  const handleChange =
    (field: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current))
      setSent(false)
    }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSent(true)
  }

  const year = new Date().getFullYear()
  const errorClass = 'mt-1 text-xs font-medium text-red-700'
  const inputId = (field: string) => `contact-${field}`

  return (
    <footer aria-label="Footer" className="bg-brand-green">
      <div className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 max-w-md font-heading text-[28px] font-normal leading-snug text-ink">
              {footerBio}
            </h2>
            <div className="mb-8">
              <h3 className="mb-4 font-sans text-[20px] font-bold uppercase tracking-wide text-ink">
                Contact Me
              </h3>
              <ul className="space-y-2 text-sm text-ink/80">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {contactDetails.address}
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 transition-colors hover:text-link-blue"
                    href={`tel:${contactDetails.phone.replace(/[^+\d]/g, '')}`}
                  >
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {contactDetails.phone}
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 transition-colors hover:text-link-blue"
                    href={`mailto:${contactDetails.email}`}
                  >
                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {contactDetails.email}
                  </a>
                </li>
              </ul>
            </div>
            <a href="#contact" className={`inline-flex ${btnSolid}`}>
              Download Resume
            </a>
          </div>

          <div id="contact">
            <h3 className="mb-6 font-sans text-[20px] font-bold uppercase tracking-wide text-ink">
              Drop a Line
            </h3>
            <form onSubmit={handleSubmit} noValidate className="grid gap-5" data-contact-form>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor={inputId('name')} className="sr-only">
                    Your name
                  </label>
                  <input
                    id={inputId('name')}
                    type="text"
                    placeholder="Your name"
                    value={values.name}
                    onChange={handleChange('name')}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? `${inputId('name')}-error` : undefined}
                    className={cn(inputBase, errors.name && 'ring-2 ring-red-400')}
                  />
                  {errors.name && (
                    <p id={`${inputId('name')}-error`} role="alert" className={errorClass}>
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor={inputId('email')} className="sr-only">
                    Email
                  </label>
                  <input
                    id={inputId('email')}
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange('email')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? `${inputId('email')}-error` : undefined}
                    className={cn(inputBase, errors.email && 'ring-2 ring-red-400')}
                  />
                  {errors.email && (
                    <p id={`${inputId('email')}-error`} role="alert" className={errorClass}>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor={inputId('subject')} className="sr-only">
                  Subject
                </label>
                <input
                  id={inputId('subject')}
                  type="text"
                  placeholder="Subject"
                  value={values.subject}
                  onChange={handleChange('subject')}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? `${inputId('subject')}-error` : undefined}
                  className={cn(inputBase, errors.subject && 'ring-2 ring-red-400')}
                />
                {errors.subject && (
                  <p id={`${inputId('subject')}-error`} role="alert" className={errorClass}>
                    {errors.subject}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor={inputId('message')} className="sr-only">
                  Message
                </label>
                <textarea
                  id={inputId('message')}
                  placeholder="Message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange('message')}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? `${inputId('message')}-error` : undefined}
                  className={cn(
                    'w-full resize-none bg-light px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink/30',
                    errors.message && 'ring-2 ring-red-400',
                  )}
                />
                {errors.message && (
                  <p id={`${inputId('message')}-error`} role="alert" className={errorClass}>
                    {errors.message}
                  </p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-ink px-10 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                >
                  Send Message
                </button>
                {sent && (
                  <p role="status" className="mt-3 text-sm font-medium text-ink">
                    Thanks, {values.name} — your message has been sent. We'll reply soon.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-ink/20 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <ul className="flex gap-3">
              {socials.map((name) => {
                const Icon = socialIcons[name]
                return (
                  <li key={name}>
                    <a
                      href="#contact"
                      aria-label={name}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                )
              })}
            </ul>
            <p className="text-sm text-ink/75">
              © {year} Dossier · All rights reserved · Made with{' '}
              <a
                href="https://www.componentdock.com/"
                className="font-bold text-ink underline underline-offset-2 transition-colors hover:text-link-blue"
              >
                Component Dock
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
