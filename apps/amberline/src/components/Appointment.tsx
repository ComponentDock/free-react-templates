import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { faq, subjects } from '../data'

const bandImage = 'https://picsum.photos/seed/amberline-appointment/1920/900'

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) {
    errors.name = 'Please tell us your name.'
  }
  if (!emailPattern.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Please describe the work in at least 10 characters.'
  }
  return errors
}

const fieldClasses =
  'h-[50px] w-full rounded-[2px] border border-black/10 bg-white px-4 text-[15px] text-ink focus:border-brand focus:outline-none'

export function Appointment() {
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <img
        src={bandImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-white/90" />
      <div className="relative mx-auto grid max-w-[1320px] gap-12 px-4 lg:grid-cols-2">
        <div className="bg-white p-6 sm:p-[50px] lg:pr-[50px]">
          <span className="mb-1 block text-[14px] font-semibold uppercase tracking-[0.08em] text-deep-amber">
            Get in touch
          </span>
          <h2 className="text-[24px] font-semibold text-black/80">Request a quote</h2>
          <form
            className="mt-6 space-y-4"
            noValidate
            onSubmit={(event) => {
              event.preventDefault()
              /* Every field is always mounted, so the entries exist. */
              const form = new FormData(event.currentTarget)
              const values: FormValues = {
                name: form.get('name') as string,
                email: form.get('email') as string,
                subject: form.get('subject') as string,
                message: form.get('message') as string,
              }
              const next = validate(values)
              setErrors(next)
              setSent(Object.keys(next).length === 0)
            }}
          >
            <div>
              <label htmlFor="quote-name" className="mb-1 block text-[14px] font-medium text-ink">
                Full name
              </label>
              <input
                id="quote-name"
                name="name"
                type="text"
                className={fieldClasses}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'quote-name-error' : undefined}
              />
              {errors.name ? (
                <p id="quote-name-error" role="alert" className="mt-1 text-[13px] text-red-600">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="quote-email" className="mb-1 block text-[14px] font-medium text-ink">
                Email address
              </label>
              <input
                id="quote-email"
                name="email"
                type="email"
                className={fieldClasses}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'quote-email-error' : undefined}
              />
              {errors.email ? (
                <p id="quote-email-error" role="alert" className="mt-1 text-[13px] text-red-600">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="quote-subject" className="mb-1 block text-[14px] font-medium text-ink">
                Subject
              </label>
              <select id="quote-subject" name="subject" className={fieldClasses} defaultValue="New build">
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="quote-message" className="mb-1 block text-[14px] font-medium text-ink">
                Message
              </label>
              <textarea
                id="quote-message"
                name="message"
                rows={7}
                className="w-full rounded-[2px] border border-black/10 bg-white px-4 py-3 text-[15px] text-ink focus:border-brand focus:outline-none"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'quote-message-error' : undefined}
              />
              {errors.message ? (
                <p id="quote-message-error" role="alert" className="mt-1 text-[13px] text-red-600">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <Button
              type="submit"
              className="h-[53px] rounded-none border border-transparent bg-brand px-6 text-[12px] font-bold uppercase tracking-[1px] text-ink hover:border-brand hover:bg-transparent hover:text-brand"
            >
              Send message
            </Button>
            {sent ? (
              <p role="status" className="text-[14px] font-medium text-deep-amber">
                Thanks — your request is in. A surveyor will reply within one working day.
              </p>
            ) : null}
          </form>
        </div>

        <div>
          <span className="mb-1 block text-[14px] font-semibold uppercase tracking-[0.08em] text-deep-amber">
            Frequently asked questions
          </span>
          <h2 className="text-[32px] font-medium text-black/80 lg:text-[40px]">
            You Want To Ask Something From Us?
          </h2>
          <p className="mt-4">
            Everything we are asked before a site opens — pricing, permits and what happens after
            handover.
          </p>
          <div className="mt-8">
            {faq.map((item, index) => {
              const isOpen = openFaq === index
              return (
                <div key={item.question} className="mb-3 bg-white">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className={cn(
                        'flex w-full items-center justify-between px-[20px] py-[16px] text-left text-[18px] font-semibold',
                        isOpen ? 'bg-brand text-ink' : 'bg-white text-[#212529]',
                      )}
                    >
                      {item.question}
                      <ChevronDown
                        aria-hidden="true"
                        className={cn('size-5 transition-transform', isOpen && 'rotate-180')}
                      />
                    </button>
                  </h3>
                  {isOpen ? (
                    <div id={`faq-panel-${index}`} className="px-[20px] py-4 text-[16px] text-[#212529]">
                      {item.answer}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
