import { useState } from 'react'
import { Building2, Landmark, ShieldAlert, Users } from 'lucide-react'
import { z } from 'zod'
import { cn } from '@free-react-templates/ui'
import { PRACTICE_AREAS, PRACTICE_OPTIONS, QUOTE_FORM, type PracticeArea } from '../data'

const ICONS: Record<PracticeArea['icon'], typeof Users> = {
  users: Users,
  building: Building2,
  shield: ShieldAlert,
  landmark: Landmark,
}

const quoteSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Enter a valid email address'),
  message: z.string().min(1, 'Message is required'),
})

type QuoteValues = { name: string; email: string; message: string }
type QuoteErrors = Partial<Record<keyof QuoteValues, string>>

const initialValues: QuoteValues = { name: '', email: '', message: '' }

export function PracticeAreas() {
  const [values, setValues] = useState(initialValues)
  const [practice, setPractice] = useState(PRACTICE_OPTIONS[0]!)
  const [errors, setErrors] = useState<QuoteErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof QuoteValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const result = quoteSchema.safeParse(values)
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors as QuoteErrors)
      setSubmitted(false)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  return (
    <section id="practice" className="bg-section py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-normal text-ink md:text-5xl">
            Our Practice Area
          </h2>
          <p className="mt-4 text-base font-light text-body">
            Focused teams, proven results, and a partner who stays with you from consultation to
            conclusion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
            {PRACTICE_AREAS.map((area) => {
              const Icon = ICONS[area.icon]
              return (
                <article
                  key={area.title}
                  className="bg-white px-8 py-8 text-center transition-shadow hover:shadow-lg"
                >
                  <Icon className="mx-auto h-12 w-12 text-brand" aria-hidden="true" />
                  <h3 className="mt-5 text-2xl text-ink">{area.title}</h3>
                  <p className="mt-3 text-lg font-light leading-relaxed text-card-blurb">
                    {area.blurb}
                  </p>
                </article>
              )
            })}
          </div>

          {/* Red quote-form panel with clipped top-right corner (0 140px 0 0). */}
          <div className="rounded-tr-[140px] bg-brand px-8 py-10 md:px-10">
            <h3 className="font-serif text-4xl font-semibold text-white">{QUOTE_FORM.title}</h3>
            <p className="mt-3 text-base font-light leading-relaxed text-white/80">
              {QUOTE_FORM.subtitle}
            </p>

            {submitted ? (
              <p
                role="status"
                className="mt-8 rounded bg-white/10 px-5 py-6 text-lg leading-relaxed text-white"
              >
                {QUOTE_FORM.successMessage}
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-4">
                <div>
                  <input
                    type="text"
                    aria-label={QUOTE_FORM.nameLabel}
                    placeholder={QUOTE_FORM.nameLabel}
                    value={values.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                    className={cn(
                      'w-full rounded-full border border-white/25 bg-white px-5 py-3 text-ink placeholder:text-muted focus:outline-none',
                      errors.name && 'border-[#ffd9d9] ring-2 ring-[#ffd9d9]/50',
                    )}
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-[#ffd9d9]">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    aria-label={QUOTE_FORM.emailLabel}
                    placeholder={QUOTE_FORM.emailLabel}
                    value={values.email}
                    onChange={(event) => handleChange('email', event.target.value)}
                    className={cn(
                      'w-full rounded-full border border-white/25 bg-white px-5 py-3 text-ink placeholder:text-muted focus:outline-none',
                      errors.email && 'border-[#ffd9d9] ring-2 ring-[#ffd9d9]/50',
                    )}
                  />
                  {errors.email && <p className="mt-1.5 text-sm text-[#ffd9d9]">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="practice-select" className="sr-only">
                    {QUOTE_FORM.practiceLabel}
                  </label>
                  <select
                    id="practice-select"
                    value={practice}
                    onChange={(event) => setPractice(event.target.value)}
                    className="w-full rounded-full border border-white/25 bg-white px-5 py-3 text-ink focus:outline-none"
                  >
                    {PRACTICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    aria-label={QUOTE_FORM.messageLabel}
                    placeholder={QUOTE_FORM.messageLabel}
                    rows={4}
                    value={values.message}
                    onChange={(event) => handleChange('message', event.target.value)}
                    className={cn(
                      'w-full rounded-3xl border border-white/25 bg-white px-5 py-3 text-ink placeholder:text-muted focus:outline-none',
                      errors.message && 'border-[#ffd9d9] ring-2 ring-[#ffd9d9]/50',
                    )}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-[#ffd9d9]">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent px-10 py-3.5 font-serif text-lg text-white transition-colors hover:bg-[#e86400]"
                >
                  {QUOTE_FORM.submitLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
