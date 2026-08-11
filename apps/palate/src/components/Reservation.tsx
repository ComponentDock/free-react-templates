import { useState, type FormEvent } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'
import {
  RESERVATION_FIELDS,
  RESERVATION_PERSON_OPTIONS,
  RESERVATION_SCRIPT,
  RESERVATION_SUBMIT,
  RESERVATION_SUCCESS,
  RESERVATION_TITLE,
} from '../data'
import { SectionHeading } from './SectionHeading'
import { BTN_PRIMARY } from '../buttons'

/* .makereservation — split section: left half = "Make Reservation" form
   (2-column field grid, 600-weight black labels, full-width orange
   submit; success state on submit), right half = muted map placeholder
   (the source embeds Google Maps; replaced with a static grid pattern +
   pin so no third-party dependency is needed). */
export function Reservation() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservation" className="px-4 pb-28">
      <div className="mx-auto grid max-w-[1320px] lg:grid-cols-2">
        {/* Left half — booking form. */}
        <div className="px-4 py-4 md:p-8">
          <SectionHeading script={RESERVATION_SCRIPT} title={RESERVATION_TITLE} />

          {submitted ? (
            <p role="status" className="text-[17px] font-medium text-ink">
              {RESERVATION_SUCCESS}
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                {RESERVATION_FIELDS.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={`reservation-${field.id}`}
                      className="mb-2 block text-[15px] font-semibold text-ink"
                    >
                      {field.label}
                    </label>
                    {field.kind === 'select' ? (
                      <div className="relative">
                        <select
                          id={`reservation-${field.id}`}
                          name={field.id}
                          defaultValue={RESERVATION_PERSON_OPTIONS[0]}
                          className="w-full appearance-none rounded-[2px] border border-gray-300 bg-white px-4 py-3 text-[15px] text-body focus:border-brand focus:outline-none"
                        >
                          {RESERVATION_PERSON_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          aria-hidden="true"
                          className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-body"
                        />
                      </div>
                    ) : (
                      <input
                        id={`reservation-${field.id}`}
                        name={field.id}
                        type={field.type ?? 'text'}
                        placeholder={field.placeholder}
                        className="w-full rounded-[2px] border border-gray-300 bg-white px-4 py-3 text-[15px] text-body placeholder:text-gray-400 focus:border-brand focus:outline-none"
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <input
                  type="submit"
                  value={RESERVATION_SUBMIT}
                  className={`${BTN_PRIMARY} w-full px-5 py-3.5`}
                />
              </div>
            </form>
          )}
        </div>

        {/* Right half — map placeholder. */}
        <div className="relative min-h-[320px] overflow-hidden rounded-[2px] bg-gray-100 max-lg:mt-10">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(#d1d5db 1px, transparent 1px), linear-gradient(90deg, #d1d5db 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex flex-col items-center gap-2 text-gray-500">
              <MapPin aria-hidden="true" className="h-10 w-10 text-brand" />
              <span className="text-[15px]">Palate Restaurant — City Center</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
