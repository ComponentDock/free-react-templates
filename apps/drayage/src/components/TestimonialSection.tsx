import { useState, type FormEvent } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data/content'
import { callbackSchema, fieldErrors, type CallbackValues } from '../lib/forms'
import { SkewedButton } from './SkewedButton'

const initialValues: CallbackValues = {
  name: '',
  email: '',
  phone: '',
  services: 'Services',
  message: '',
}

function TestimonialSlider() {
  const [index, setIndex] = useState(0)
  const active = TESTIMONIALS[index] as (typeof TESTIMONIALS)[number]
  return (
    <div>
      <Quote aria-hidden="true" className="mb-5 h-10 w-10 text-brand" />
      <blockquote className="font-body text-lg leading-8 text-white/90">
        &ldquo;{active.quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-4">
        <img
          src={`https://picsum.photos/seed/${active.seed}/96/96`}
          alt={`${active.name} portrait`}
          className="h-14 w-14 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <h3 className="font-display text-base font-bold uppercase tracking-[1.5px] text-white">
            {active.name}
          </h3>
          <span className="font-body text-sm text-brand">{active.role}</span>
        </div>
      </div>
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setIndex((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
          className="border border-white/40 p-2 text-white transition-colors hover:border-brand hover:text-brand"
        >
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setIndex((index + 1) % TESTIMONIALS.length)}
          className="border border-white/40 p-2 text-white transition-colors hover:border-brand hover:text-brand"
        >
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

function CallBackForm() {
  const [values, setValues] = useState<CallbackValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof CallbackValues, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  function updateField(field: keyof CallbackValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = callbackSchema.safeParse(values)
    if (!result.success) {
      setErrors(fieldErrors(result))
      setConfirmation('')
      return
    }
    setConfirmation(
      `Thanks ${result.data.name}! Your call-back request has been received — we will ring you shortly.`,
    )
    setValues(initialValues)
    setErrors({})
  }

  const inputClasses =
    'w-full border border-formborder bg-black/30 px-5 py-3.5 font-body text-sm text-white outline-none transition-colors placeholder:text-body focus:border-brand'

  return (
    <div id="contacts">
      <span className="font-display text-sm font-bold uppercase tracking-[4px] text-brand">
        Contacts Us
      </span>
      <h2 className="mt-2.5 font-display text-3xl font-bold uppercase leading-[48px] text-white md:text-4xl">
        Request A Call Back
      </h2>
      <form onSubmit={handleSubmit} noValidate className="mt-8">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="callback-name" className="sr-only">
              Your Name
            </label>
            <input
              id="callback-name"
              type="text"
              placeholder="Your Name"
              value={values.name}
              onChange={(event) => updateField('name', event.target.value)}
              aria-invalid={errors.name ? true : undefined}
              className={inputClasses}
            />
            {errors.name && (
              <p role="alert" className="mt-2 font-body text-sm text-brand">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="callback-email" className="sr-only">
              Your Email
            </label>
            <input
              id="callback-email"
              type="email"
              placeholder="Your Email"
              value={values.email}
              onChange={(event) => updateField('email', event.target.value)}
              aria-invalid={errors.email ? true : undefined}
              className={inputClasses}
            />
            {errors.email && (
              <p role="alert" className="mt-2 font-body text-sm text-brand">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="callback-phone" className="sr-only">
              Your Phone
            </label>
            <input
              id="callback-phone"
              type="tel"
              placeholder="Your Phone"
              value={values.phone}
              onChange={(event) => updateField('phone', event.target.value)}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="callback-services" className="sr-only">
              Services
            </label>
            <select
              id="callback-services"
              value={values.services}
              onChange={(event) => updateField('services', event.target.value)}
              className={inputClasses}
            >
              <option value="Services">Services</option>
              <option value="Services 1">Services 1</option>
            </select>
          </div>
        </div>
        <div className="mt-5">
          <label htmlFor="callback-message" className="sr-only">
            Message
          </label>
          <textarea
            id="callback-message"
            placeholder="Message"
            rows={5}
            value={values.message}
            onChange={(event) => updateField('message', event.target.value)}
            aria-invalid={errors.message ? true : undefined}
            className={inputClasses}
          />
          {errors.message && (
            <p role="alert" className="mt-2 font-body text-sm text-brand">
              {errors.message}
            </p>
          )}
        </div>
        <SkewedButton type="submit" className="mt-7">
          Submit Now
        </SkewedButton>
        {confirmation && (
          <p role="status" className="mt-5 font-body text-sm text-white">
            {confirmation}
          </p>
        )}
      </form>
    </div>
  )
}

export function TestimonialSection() {
  return (
    <section
      className="bg-navy bg-cover bg-center px-4 py-16 md:py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/drayage-testimonial/1920/1000)',
      }}
      aria-label="Testimonials and call-back request"
    >
      <div className="mx-auto grid max-w-6xl gap-12 bg-navy/80 p-8 md:grid-cols-2 md:p-12">
        <div>
          <span className="font-display text-sm font-bold uppercase tracking-[4px] text-brand">
            Testimonials
          </span>
          <h2 className="mt-2.5 font-display text-3xl font-bold uppercase leading-[48px] text-white md:text-4xl">
            Our customer reviews
          </h2>
          <div className="mt-10">
            <TestimonialSlider />
          </div>
        </div>
        <CallBackForm />
      </div>
    </section>
  )
}
