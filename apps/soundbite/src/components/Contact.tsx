import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

type FieldName = keyof FormState
type FormErrors = Partial<Record<FieldName, string>>

const fields: { name: FieldName; label: string; type: 'text' | 'email' | 'textarea' }[] = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'subject', label: 'Subject', type: 'text' },
  { name: 'message', label: 'Message', type: 'textarea' },
]

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  function validate(): FormErrors {
    const next: FormErrors = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!form.email.trim()) {
      next.email = 'Please enter your email address'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = 'Please enter a valid email address'
    }
    if (!form.subject.trim()) next.subject = 'Please enter a subject'
    if (!form.message.trim()) next.message = 'Please enter your message'
    return next
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return
    setSent(true)
  }

  function update(field: FieldName, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const inputClasses =
    'w-full rounded-xl border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500'

  return (
    <section id="contact" className="scroll-mt-24 bg-gray-900 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary-600/15 px-3 py-1 text-xs font-medium tracking-wide text-primary-300">
            Get in Touch
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&rsquo;s Connect
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Guest suggestion, sponsorship inquiry, or just want to say hello? We&rsquo;d love to
            hear from you.
          </p>
        </div>

        {sent ? (
          <p
            role="status"
            className="mt-10 rounded-2xl border border-green-800 bg-green-950/40 px-6 py-5 text-center font-medium text-green-300"
          >
            Thanks! Your message is on its way &mdash; we&rsquo;ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
            <div className="grid gap-6 sm:grid-cols-2">
              {fields.slice(0, 2).map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={`contact-${field.name}`}
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    {field.label}
                  </label>
                  <input
                    id={`contact-${field.name}`}
                    type={field.type}
                    value={form[field.name]}
                    onChange={(e) => update(field.name, e.target.value)}
                    aria-invalid={errors[field.name] !== undefined}
                    className={inputClasses}
                  />
                  {errors[field.name] && (
                    <p role="alert" className="mt-2 text-sm text-red-400">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {fields.slice(2).map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={`contact-${field.name}`}
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={`contact-${field.name}`}
                    rows={5}
                    value={form[field.name]}
                    onChange={(e) => update(field.name, e.target.value)}
                    aria-invalid={errors[field.name] !== undefined}
                    className={inputClasses}
                  />
                ) : (
                  <input
                    id={`contact-${field.name}`}
                    type="text"
                    value={form[field.name]}
                    onChange={(e) => update(field.name, e.target.value)}
                    aria-invalid={errors[field.name] !== undefined}
                    className={inputClasses}
                  />
                )}
                {errors[field.name] && (
                  <p role="alert" className="mt-2 text-sm text-red-400">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-8 py-3.5 font-medium text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-500"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </button>
          </form>
        )}

        <p className="mt-8 text-center text-gray-400">
          Or email us directly at{' '}
          <a
            href="mailto:hello@soundbite.fm"
            className="font-medium text-primary-400 transition-colors hover:text-primary-300"
          >
            hello@soundbite.fm
          </a>
        </p>
      </div>
    </section>
  )
}
