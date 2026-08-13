import { useState, type FormEvent } from 'react'
import { consultation } from '../data'

/** Photo consultation band with a translucent gold overlay, white heading,
 *  and a four-field transparent form with a dark "Send message" submit. */
export function Consultation() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const fieldClasses =
    'w-full rounded border border-white/30 bg-transparent px-4 py-3 text-base text-white placeholder:text-white/60 focus:border-white focus:outline-none'

  return (
    <section id="contact" aria-label="Free consultation" className="relative overflow-hidden py-24">
      <img
        src={consultation.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-brand/80" />

      <div className="relative z-10 mx-auto grid max-w-7xl justify-end px-6">
        <div className="w-full max-w-xl rounded bg-transparent p-3 py-5 pl-5">
          <p className="text-[15px] font-extrabold uppercase tracking-wide text-white/50">
            {consultation.eyebrow}
          </p>
          <h2 className="mt-4 text-[30px] font-bold text-white">{consultation.headline}</h2>
          <p className="mt-5 text-base leading-relaxed text-white/85">{consultation.description}</p>

          {submitted ? (
            <p role="status" className="mt-8 rounded bg-white/15 px-5 py-4 text-base text-white">
              {consultation.successMessage}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-4"
              aria-label="Consultation form"
            >
              <div>
                <label htmlFor="counsely-name" className="sr-only">
                  {consultation.fields.name}
                </label>
                <input
                  id="counsely-name"
                  name="name"
                  required
                  placeholder={consultation.fields.name}
                  className={fieldClasses}
                />
              </div>
              <div>
                <label htmlFor="counsely-email" className="sr-only">
                  {consultation.fields.email}
                </label>
                <input
                  id="counsely-email"
                  name="email"
                  type="email"
                  required
                  placeholder={consultation.fields.email}
                  className={fieldClasses}
                />
              </div>
              <div>
                <label htmlFor="counsely-subject" className="sr-only">
                  {consultation.fields.subject}
                </label>
                <input
                  id="counsely-subject"
                  name="subject"
                  required
                  placeholder={consultation.fields.subject}
                  className={fieldClasses}
                />
              </div>
              <div>
                <label htmlFor="counsely-message" className="sr-only">
                  {consultation.fields.message}
                </label>
                <textarea
                  id="counsely-message"
                  name="message"
                  rows={7}
                  required
                  placeholder={consultation.fields.message}
                  className={fieldClasses}
                />
              </div>
              <button
                type="submit"
                className="w-fit rounded bg-ink px-6 py-3 text-base font-medium text-white transition-colors hover:bg-ink/90"
              >
                {consultation.submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
