import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { consultation } from '../data'

/** Dark consultation section with a background photo, "Free Consultation"
 *  heading on the left, and a labeled contact form on the right. */
export function Consultation() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const inputClasses =
    'w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none'

  return (
    <section id="contact" aria-label="Free consultation" className="relative overflow-hidden py-24">
      <img
        src={consultation.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/90" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            {consultation.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white">{consultation.headline}</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            {consultation.description}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded bg-white p-8 shadow-xl"
          aria-label="Consultation form"
        >
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="gavel-name"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  {consultation.fields.name}
                </label>
                <input
                  id="gavel-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className={inputClasses}
                  placeholder={consultation.fields.name}
                />
              </div>
              <div>
                <label
                  htmlFor="gavel-email"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  {consultation.fields.email}
                </label>
                <input
                  id="gavel-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={inputClasses}
                  placeholder={consultation.fields.email}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="gavel-subject"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                {consultation.fields.subject}
              </label>
              <input
                id="gavel-subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                className={inputClasses}
                placeholder={consultation.fields.subject}
              />
            </div>
            <div>
              <label
                htmlFor="gavel-message"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                {consultation.fields.message}
              </label>
              <textarea
                id="gavel-message"
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className={inputClasses}
                placeholder={consultation.fields.message}
              />
            </div>
            <Button type="submit" className="w-full rounded bg-brand text-white hover:bg-brand/90">
              {consultation.submitLabel}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
