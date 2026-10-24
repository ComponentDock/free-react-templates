import { useState, type FormEvent } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import { btn } from './action'
import { SectionHeading } from './SectionHeading'
import {
  hours,
  hoursHeading,
  newsletterButton,
  newsletterHeading,
  newsletterHeadingLabel,
  newsletterNote,
  newsletterSuccess,
  siteName,
} from '../data'

interface Errors {
  name?: string
  email?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function HoursNewsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: Errors = {}
    if (!name.trim()) next.name = 'Please enter your name'
    if (!emailPattern.test(email.trim())) next.email = 'Please enter a valid email address'
    setErrors(next)
    setSubscribed(!next.name && !next.email)
  }

  return (
    <section aria-label="Opening hours and newsletter" className="pb-0 pt-[100px]">
      <div className="mx-auto grid max-w-[1170px] gap-[50px] px-4 pb-[60px] lg:grid-cols-2">
        <div>
          <SectionHeading label={siteName} title={hoursHeading} />
          <ul>
            {hours.map((row) => (
              <li
                key={row.day}
                className="flex items-center justify-between border-b border-rule py-[15px] text-[16px] font-semibold text-body transition-colors hover:text-brand"
              >
                <span>{row.day}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading label={newsletterHeadingLabel} title={newsletterHeading} />
          <p className="mb-[30px] text-[14px] leading-[2] text-body">{newsletterNote}</p>
          <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            <div>
              <label htmlFor="newsletter-name" className="mb-2 block text-[13px] font-bold uppercase text-ink">
                Name
              </label>
              <input
                id="newsletter-name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'newsletter-name-error' : undefined}
                className="h-[55px] w-full rounded-[10px] border-[3px] border-rule px-[40px] text-[14px] italic text-ink placeholder:text-body focus:border-brand focus:outline-none"
              />
              {errors.name && (
                <p id="newsletter-name-error" role="alert" className="mt-2 text-[13px] text-red-600">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="newsletter-email" className="mb-2 block text-[13px] font-bold uppercase text-ink">
                Email
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'newsletter-email-error' : undefined}
                className="h-[55px] w-full rounded-[10px] border-[3px] border-rule px-[40px] text-[14px] italic text-ink placeholder:text-body focus:border-brand focus:outline-none"
              />
              {errors.email && (
                <p id="newsletter-email-error" role="alert" className="mt-2 text-[13px] text-red-600">
                  {errors.email}
                </p>
              )}
            </div>
            <p className="text-[13px] italic text-body">We only email once a month — unsubscribe any time.</p>
            <Button type="submit" variant="ghost" className={cn(btn.base, btn.white, 'w-fit')}>
              {newsletterButton}
            </Button>
            {subscribed && (
              <p role="status" className="text-[13px] font-semibold text-brand">
                {newsletterSuccess}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
