import { useState, type ChangeEvent, type FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import { quote } from '../data'
import { fieldErrors, initialQuote, quoteSchema, type QuoteValues } from '../lib/forms'

/** Quote area (reference `.quote-area`): a white card floating over the
 *  dark services block, headed by a white headline. Two tabs ("Get an
 *  estimation" / "Track Shipment") swap the pane while sharing one ten-field
 *  form validated with zod; a red "Request a Quote" button submits it. */
export function Quote() {
  const [tab, setTab] = useState<string>(quote.tabs[0]!.key)
  const [values, setValues] = useState<QuoteValues>(initialQuote)
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof QuoteValues) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = quoteSchema.safeParse(values)
    if (!result.success) {
      setErrors(fieldErrors(result))
      setSubmitted(false)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  return (
    <section id={quote.id} aria-label="Quote" className="relative z-10 -mt-[280px] pb-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-normal tracking-[1px] text-brand uppercase">{quote.eyebrow}</p>
          <h2 className="mt-3 font-heading text-[32px] leading-tight font-bold text-white uppercase lg:text-[42px]">
            {quote.heading}
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-5xl bg-white shadow-[0px_10px_30px_-10px_rgba(231,39,39,0.2)]">
          <div role="tablist" aria-label="Quote options" className="flex border-b border-line">
            {quote.tabs.map(({ label, key }) => (
              <button
                key={key}
                type="button"
                role="tab"
                id={`quote-tab-${key}`}
                aria-selected={tab === key}
                aria-controls={`quote-panel-${key}`}
                onClick={() => setTab(key)}
                className={cn(
                  'border-b-[3px] px-[38px] py-2 font-heading text-base text-navy transition-colors',
                  tab === key
                    ? 'border-brand text-brand'
                    : 'border-transparent hover:border-brand hover:text-brand',
                )}
              >
                {label}
              </button>
            ))}
          </div>

          {quote.tabs.map(({ key }) => (
            <div
              key={key}
              id={`quote-panel-${key}`}
              role="tabpanel"
              aria-labelledby={`quote-tab-${key}`}
              hidden={tab !== key}
              className="px-[20px] py-[30px] md:px-10 md:pb-[50px]"
            >
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                  {quote.fields.map((field) => (
                    <div key={field} className="mb-2.5">
                      <label
                        htmlFor={`${key}-${field}`}
                        className="mb-1 block text-xs tracking-wide text-navy uppercase"
                      >
                        {field}
                      </label>
                      <input
                        id={`${key}-${field}`}
                        name={field}
                        type={field === 'Email Address' ? 'email' : 'text'}
                        placeholder={`Enter ${field.toLowerCase()}`}
                        value={values[field]}
                        onChange={update(field)}
                        aria-invalid={errors[field] ? true : undefined}
                        className="h-11 w-full border border-formline px-3 text-[13px] font-light text-navy placeholder:text-muted focus:outline-none"
                      />
                      {errors[field] ? (
                        <p role="alert" className="mt-1 text-xs text-brand">
                          {errors[field]}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <button type="submit" className="btn-main bg-brand text-white hover:bg-navy">
                    {quote.submit}
                  </button>
                </div>
                {submitted ? (
                  <p role="status" className="mt-6 text-center text-sm text-muted">
                    {quote.success}
                  </p>
                ) : null}
              </form>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
