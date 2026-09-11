import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!name.trim()) newErrors.name = 'Name is required.'
    if (!email.trim()) newErrors.email = 'Email is required.'
    else if (!EMAIL_PATTERN.test(email.trim())) newErrors.email = 'Please enter a valid email.'
    if (!subject) newErrors.subject = 'Please select a subject.'
    if (!message.trim()) newErrors.message = 'Message is required.'
    return newErrors
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="bg-gray-50 py-20" aria-label="Contact">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="rounded-lg bg-white p-12 shadow-sm">
            <h2 className="text-2xl font-bold text-heading">Thank you!</h2>
            <p className="mt-4 text-mist">
              Your message has been sent. We will get back to you shortly.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-gray-50 py-20" aria-label="Contact">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-heading md:text-4xl">Contact Us</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-mist">
          Have a project in mind? Get in touch with us.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-heading">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-heading focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
            {errors.name && (
              <p id="contact-name-error" role="alert" className="mt-1 text-xs text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-heading">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-heading focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
            {errors.email && (
              <p id="contact-email-error" role="alert" className="mt-1 text-xs text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-heading">
              Subject
            </label>
            <select
              id="contact-subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-heading focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="project">Project Consultation</option>
              <option value="quote">Request a Quote</option>
              <option value="support">Customer Support</option>
            </select>
            {errors.subject && (
              <p id="contact-subject-error" role="alert" className="mt-1 text-xs text-red-500">
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-heading">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-heading focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
            {errors.message && (
              <p id="contact-message-error" role="alert" className="mt-1 text-xs text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Send Message
            <Send className="ml-2 h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}
