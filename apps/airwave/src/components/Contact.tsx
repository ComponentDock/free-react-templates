import { useState, type FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'
import { Reveal } from './Reveal'

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
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
    if (!values.subject.trim()) {
      nextErrors.subject = 'Subject is required.'
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

  const inputClass =
    'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white'

  return (
    <section id="contact" className="bg-gray-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-500">
            Get in Touch
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let&rsquo;s Connect
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-gray-400">
            Have a guest suggestion, sponsorship inquiry, or just want to say hello? We read every
            message.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-2xl">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-semibold text-gray-300">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange('name')}
                    placeholder="Jane Listener"
                    className={inputClass}
                  />
                  {errors.name && (
                    <p role="alert" className="mt-1.5 text-xs font-semibold text-primary-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm font-semibold text-gray-300">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange('email')}
                    placeholder="jane@example.com"
                    className={inputClass}
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1.5 text-xs font-semibold text-primary-400">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-subject" className="text-sm font-semibold text-gray-300">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={values.subject}
                    onChange={handleChange('subject')}
                    placeholder="Guest suggestion"
                    className={inputClass}
                  />
                  {errors.subject && (
                    <p role="alert" className="mt-1.5 text-xs font-semibold text-primary-400">
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className="text-sm font-semibold text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange('message')}
                    placeholder="Tell us what's on your mind..."
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1.5 text-xs font-semibold text-primary-400">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-500"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </button>
              {sent && (
                <p role="status" className="mt-4 text-sm font-semibold text-primary-400">
                  Message sent! We&rsquo;ll get back to you within two business days.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-gray-400">
              <Mail className="h-4 w-4 text-primary-500" aria-hidden="true" />
              Or email us directly at{' '}
              <span className="font-semibold text-gray-300">hello@airwave.fm</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
