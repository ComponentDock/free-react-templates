import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { contact } from '../data'

const inputClass =
  'w-full border border-line bg-white px-5 py-4 text-sm text-ink placeholder:text-[#888888] focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30'

/** Contact section on a photo background: heading, paragraph, a three-field
 *  form with a full-width red submit button, and contact details. */
export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<Record<keyof typeof values, string>>>({})
  const [sent, setSent] = useState(false)

  const handleChange =
    (field: keyof typeof values) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Partial<Record<keyof typeof values, string>> = {}
    if (!values.name.trim()) {
      nextErrors.name = 'Name is required.'
    }
    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!values.message.trim()) {
      nextErrors.message = 'Message is required.'
    }
    setErrors(nextErrors)
    setSent(false)
    if (Object.keys(nextErrors).length === 0) {
      setSent(true)
    }
  }

  return (
    <section id="contact" aria-label="Contact" className="relative overflow-hidden bg-soft">
      <img
        src="https://picsum.photos/seed/resume-handshake/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/85" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-ink lg:text-[48px] lg:leading-tight">
            {contact.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">{contact.intro}</p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
          <form onSubmit={handleSubmit} noValidate className="bg-white p-8 shadow-xl lg:p-10">
            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-ink">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange('name')}
                  placeholder="Your full name"
                  className={inputClass}
                />
                {errors.name && (
                  <p role="alert" className="mt-1.5 text-xs font-semibold text-brand">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-ink">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  placeholder="you@example.com"
                  className={inputClass}
                />
                {errors.email && (
                  <p role="alert" className="mt-1.5 text-xs font-semibold text-brand">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange('message')}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                />
                {errors.message && (
                  <p role="alert" className="mt-1.5 text-xs font-semibold text-brand">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="mt-7 inline-flex h-[60px] w-full items-center justify-center gap-2 bg-brand px-6 text-base font-medium text-white transition-colors hover:bg-primary-700"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </button>
            {sent && (
              <p role="status" className="mt-4 text-center text-sm font-semibold text-ink">
                Thanks for your message — I&rsquo;ll get back to you soon!
              </p>
            )}
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink">Email Me</h3>
              <a
                href={`mailto:${contact.email}`}
                className="mt-3 inline-flex items-center gap-2 text-base text-muted transition-colors hover:text-brand"
              >
                <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                {contact.email}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink">Visit Me</h3>
              <p className="mt-3 flex items-start gap-2 text-base leading-relaxed text-muted">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  {contact.address1}
                  <br />
                  {contact.address2}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
