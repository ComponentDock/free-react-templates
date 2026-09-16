import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'

const FIELDS = [
  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Doe' },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
  { id: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
] as const

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!values.name.trim()) newErrors.name = 'Name is required.'
    if (!EMAIL_PATTERN.test(values.email.trim())) newErrors.email = 'A valid email is required.'
    if (!values.message.trim()) newErrors.message = 'Message is required.'

    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="bg-paper py-20 transition-colors dark:bg-gray-900">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="rounded-2xl bg-white p-12 shadow-sm dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-ink dark:text-white">Thank You!</h2>
            <p className="mt-4 text-ink-light dark:text-gray-400">
              Your message has been sent. We&apos;ll get back to you shortly.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-paper py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink dark:text-white">Get In Touch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-light dark:text-gray-400">
            Have a question or ready to start? Send us a message.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {FIELDS.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-ink dark:text-gray-300"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  value={values[field.id as keyof typeof values]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  aria-invalid={Boolean(errors[field.id])}
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
                {errors[field.id] ? (
                  <p role="alert" className="mt-1 text-sm text-red-500">
                    {errors[field.id]}
                  </p>
                ) : null}
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-ink dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                placeholder="Tell us about your goals..."
                aria-invalid={Boolean(errors.message)}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              {errors.message ? (
                <p role="alert" className="mt-1 text-sm text-red-500">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
