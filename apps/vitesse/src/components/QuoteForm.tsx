import { useState, type FormEvent } from 'react'
import { QUOTE_EXTRA_SERVICES, QUOTE_FREIGHT_OPTIONS } from '../data/content'
import { fieldErrors, quoteSchema, type QuoteValues } from '../lib/forms'
import { SectionHeading } from './SectionHeading'

const TEXT_FIELDS = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'phone', label: 'Contact Number', type: 'tel' },
  { name: 'departure', label: 'City of Departure', type: 'text' },
  { name: 'incoterms', label: 'Incoterms', type: 'text' },
  { name: 'weight', label: 'Weight', type: 'text' },
  { name: 'height', label: 'Height', type: 'text' },
  { name: 'width', label: 'Width', type: 'text' },
  { name: 'length', label: 'Length', type: 'text' },
] as const

const EMPTY: QuoteValues = {
  name: '',
  email: '',
  phone: '',
  freight: '',
  departure: '',
  incoterms: '',
  weight: '',
  height: '',
  width: '',
  length: '',
}

export function QuoteForm() {
  const [values, setValues] = useState<QuoteValues>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteValues, string>>>({})
  const [sent, setSent] = useState(false)
  const [extra, setExtra] = useState(QUOTE_EXTRA_SERVICES[0]!)

  function update(name: keyof QuoteValues, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const parsed = quoteSchema.safeParse(values)
    if (!parsed.success) {
      setErrors(fieldErrors<keyof QuoteValues>(parsed.error))
      setSent(false)
      return
    }
    setErrors({})
    setSent(true)
  }

  return (
    <section id="quote" className="relative bg-soft bg-cover bg-fixed bg-center py-24">
      <img
        src="https://picsum.photos/seed/vitesse-quote-bg/1920/1080"
        loading="lazy"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-header/50" />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="rounded-lg bg-soft p-8 md:p-20">
          <SectionHeading eyebrow="Get An Estimate" title="Request a Free Quote" />
          {sent ? (
            <div role="status" className="mt-10 text-center">
              <p className="text-lg text-dark">
                Thanks! Your request is in — a coordinator will reply with a quote shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false)
                  setValues(EMPTY)
                }}
                className="btn mt-8 px-11 py-4"
              >
                <span>Send another request</span>
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-10 grid gap-6 md:grid-cols-2">
              {TEXT_FIELDS.slice(0, 3).map(({ name, label, type }) => (
                <div key={name}>
                  <label htmlFor={`quote-${name}`} className="mb-2 block font-medium text-dark">
                    {label}
                  </label>
                  <input
                    id={`quote-${name}`}
                    name={name}
                    type={type}
                    value={values[name]}
                    onChange={(e) => update(name, e.target.value)}
                    className="w-full rounded-[5px] border border-cardborder bg-white px-4 py-3 outline-none focus:border-accent"
                  />
                  {errors[name] ? (
                    <p role="alert" className="mt-1 text-sm font-medium text-red-600">
                      {errors[name]}
                    </p>
                  ) : null}
                </div>
              ))}

              <div>
                <label htmlFor="quote-freight" className="mb-2 block font-medium text-dark">
                  Freight Type
                </label>
                <select
                  id="quote-freight"
                  name="freight"
                  value={values.freight}
                  onChange={(e) => update('freight', e.target.value)}
                  className="w-full rounded-[5px] border border-cardborder bg-white px-4 py-3 outline-none focus:border-accent"
                >
                  <option value="">Select a freight type</option>
                  {QUOTE_FREIGHT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.freight ? (
                  <p role="alert" className="mt-1 text-sm font-medium text-red-600">
                    {errors.freight}
                  </p>
                ) : null}
              </div>

              {TEXT_FIELDS.slice(3).map(({ name, label, type }) => (
                <div key={name}>
                  <label htmlFor={`quote-${name}`} className="mb-2 block font-medium text-dark">
                    {label}
                  </label>
                  <input
                    id={`quote-${name}`}
                    name={name}
                    type={type}
                    value={values[name]}
                    onChange={(e) => update(name, e.target.value)}
                    className="w-full rounded-[5px] border border-cardborder bg-white px-4 py-3 outline-none focus:border-accent"
                  />
                  {errors[name] ? (
                    <p role="alert" className="mt-1 text-sm font-medium text-red-600">
                      {errors[name]}
                    </p>
                  ) : null}
                </div>
              ))}

              <fieldset className="md:col-span-2">
                <legend className="mb-3 font-medium text-dark">Extra services:</legend>
                <div className="flex flex-wrap gap-6">
                  {QUOTE_EXTRA_SERVICES.map((option) => (
                    <label key={option} className="flex items-center gap-2 text-body">
                      <input
                        type="radio"
                        name="extra"
                        value={option}
                        checked={extra === option}
                        onChange={() => setExtra(option)}
                        className="h-4 w-4 accent-[#ff5f13]"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="md:col-span-2">
                <button type="submit" className="btn w-full py-5">
                  <span>Request a Quote</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
