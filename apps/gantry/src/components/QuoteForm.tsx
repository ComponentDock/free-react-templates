import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { QUOTE_FORM_FIELDS } from '../data'

/* QuoteForm — the dark-navy "Get A Quote" panel: heading + a two-column
   form (name / phone / email / subject + full-width message textarea) with
   transparent underline inputs and a full-width orange "Send Message"
   submit. Presentational — on submit the form is replaced by a thank-you
   status. */
export function QuoteForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <section aria-label="Get A Quote" className="bg-navy py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-heading text-xl font-light uppercase tracking-[0.2em] text-brand">
            Get A Quote
          </p>
          <h2 className="mt-3 font-heading text-4xl font-light text-white">Request A Quote</h2>
          <p role="status" className="mt-8 text-2xl leading-8 text-white">
            Thank you — our team will get back to you shortly.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section aria-label="Get A Quote" className="bg-navy py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="font-heading text-xl font-light uppercase tracking-[0.2em] text-brand">
            Get A Quote
          </p>
          <h2 className="mt-3 font-heading text-4xl font-light text-white">Request A Quote</h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {QUOTE_FORM_FIELDS.map((field) => (
            <div key={field.name} className="flex flex-col">
              <label
                htmlFor={`quote-${field.name}`}
                className="mb-2 text-sm uppercase tracking-wider text-white/60"
              >
                {field.label}
              </label>
              <input
                id={`quote-${field.name}`}
                name={field.name}
                type={field.type}
                required={field.required}
                className="border-0 border-b-2 border-b-white/50 bg-transparent px-0 py-2.5 text-white outline-none transition-colors placeholder:text-white/40 focus:border-b-brand"
                placeholder={field.label}
              />
            </div>
          ))}
          <div className="flex flex-col sm:col-span-2">
            <label
              htmlFor="quote-message"
              className="mb-2 text-sm uppercase tracking-wider text-white/60"
            >
              Message
            </label>
            <textarea
              id="quote-message"
              name="message"
              required
              rows={7}
              placeholder="Message"
              className="resize-none border-0 border-b-2 border-b-white/50 bg-transparent px-0 py-2.5 text-white outline-none transition-colors placeholder:text-white/40 focus:border-b-brand"
            />
          </div>
          <div className="sm:col-span-2">
            <Button
              type="submit"
              className="w-full rounded-none bg-brand px-8 text-base font-heading font-normal uppercase tracking-[0.2em] text-white hover:bg-black"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
