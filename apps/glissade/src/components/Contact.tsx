import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = 'Name is required.'
    if (!email.trim()) errs.email = 'Email is required.'
    else if (!/^\S+@\S+\.\S+$/.test(email.trim())) errs.email = 'Valid email required.'
    if (!message.trim()) errs.message = 'Message is required.'
    return errs
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <section className="bg-gradient-to-b from-brand-start to-brand-end py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Keep in Touch</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/90">
            Most people who work in an office environment, buy computer products, or have a computer
            at home have had the experience of dealing with support issues.
          </p>
        </div>

        {submitted ? (
          <p className="mt-10 text-center text-lg text-white">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mx-auto mt-10 max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  aria-invalid={Boolean(errors.name)}
                  className="w-full rounded border border-transparent bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                />
                {errors.name ? (
                  <p role="alert" className="mt-1 text-xs text-white/80">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  aria-invalid={Boolean(errors.email)}
                  className="w-full rounded border border-transparent bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                />
                {errors.email ? (
                  <p role="alert" className="mt-1 text-xs text-white/80">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows={5}
                aria-invalid={Boolean(errors.message)}
                className="w-full rounded border border-transparent bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
              />
              {errors.message ? (
                <p role="alert" className="mt-1 text-xs text-white/80">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-7 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/20"
              >
                Send Message
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
