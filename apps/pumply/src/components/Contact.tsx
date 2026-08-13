import { useState, type FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'

interface ContactForm {
  firstName: string
  lastName: string
  subject: string
  email: string
  message: string
}

const initialForm: ContactForm = {
  firstName: '',
  lastName: '',
  subject: '',
  email: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form: ContactForm): Partial<ContactForm> {
  const errors: Partial<ContactForm> = {}
  if (!form.firstName.trim()) errors.firstName = 'First name is required'
  if (!form.lastName.trim()) errors.lastName = 'Last name is required'
  if (!form.subject.trim()) errors.subject = 'Subject is required'
  if (!emailPattern.test(form.email)) errors.email = 'Enter a valid email address'
  if (!form.message.trim()) errors.message = 'Message is required'
  return errors
}

const inputClass =
  'w-full rounded-[4px] border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:border-primary focus:outline-none'

export function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [errors, setErrors] = useState<Partial<ContactForm>>({})
  const [submitted, setSubmitted] = useState(false)

  const setField = (field: keyof ContactForm) => (value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setForm(initialForm)
    }
  }

  return (
    <section id="contact-section" className="bg-contact py-16 lg:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="mb-3 text-3xl font-black text-primary">Contact Us</h2>
        <p className="mb-10 text-gray-400">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        {submitted && (
          <p
            role="status"
            className="mb-6 rounded-[4px] border border-primary/40 bg-primary/10 px-4 py-3 text-primary"
          >
            Message sent successfully. We will get back to you soon!
          </p>
        )}
        <form onSubmit={handleSubmit} noValidate className="text-left">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="mb-2 block text-sm text-white/70">
                First name
              </label>
              <input
                id="first-name"
                type="text"
                value={form.firstName}
                onChange={(e) => setField('firstName')(e.target.value)}
                aria-invalid={Boolean(errors.firstName)}
                className={inputClass}
              />
              {errors.firstName && <p className="mt-2 text-sm text-red-400">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="last-name" className="mb-2 block text-sm text-white/70">
                Last name
              </label>
              <input
                id="last-name"
                type="text"
                value={form.lastName}
                onChange={(e) => setField('lastName')(e.target.value)}
                aria-invalid={Boolean(errors.lastName)}
                className={inputClass}
              />
              {errors.lastName && <p className="mt-2 text-sm text-red-400">{errors.lastName}</p>}
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="subject" className="mb-2 block text-sm text-white/70">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={form.subject}
              onChange={(e) => setField('subject')(e.target.value)}
              aria-invalid={Boolean(errors.subject)}
              className={inputClass}
            />
            {errors.subject && <p className="mt-2 text-sm text-red-400">{errors.subject}</p>}
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="mb-2 block text-sm text-white/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setField('email')(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              className={inputClass}
            />
            {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="mb-2 block text-sm text-white/70">
              Message
            </label>
            <textarea
              id="message"
              rows={10}
              placeholder="Write your message here."
              value={form.message}
              onChange={(e) => setField('message')(e.target.value)}
              aria-invalid={Boolean(errors.message)}
              className={cn(inputClass, 'resize-y')}
            />
            {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-[4px] bg-primary px-5 py-3 font-bold text-btn-text transition-colors hover:bg-primary-hover hover:text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
