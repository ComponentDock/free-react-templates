import { useState } from 'react'
import type { FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import { footer, socials } from '../data'
import { SocialIcon } from './SocialIcon'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface Fields {
  name: string
  email: string
  subject: string
  message: string
}

type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>

export function validate(fields: Fields): FieldErrors {
  const errors: FieldErrors = {}
  if (fields.name.trim() === '') {
    errors.name = 'Please tell me your name.'
  }
  if (!emailPattern.test(fields.email.trim())) {
    errors.email = 'Please use a valid e-mail address.'
  }
  if (fields.message.trim() === '') {
    errors.message = 'A short message helps me reply properly.'
  }
  return errors
}

const emptyFields: Fields = { name: '', email: '', subject: '', message: '' }

const inputClass =
  'h-[50px] w-full border-0 border-b border-ink/40 bg-transparent capitalize text-ink placeholder:text-ink/60 focus:border-ink focus:outline-none'

/** Neon footer: statement, underlined-field form, contact list, socials, attribution. */
export function Footer() {
  const [fields, setFields] = useState<Fields>(emptyFields)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [sent, setSent] = useState(false)

  const update = (key: keyof Fields) => (value: string) => {
    setFields((previous) => ({ ...previous, [key]: value }))
    setErrors((previous) => ({ ...previous, [key]: undefined }))
    setSent(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(fields)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setSent(false)
      return
    }
    setSent(true)
    setFields(emptyFields)
  }

  return (
    <footer id="contact" className="bg-neon pt-[70px] text-ink lg:pt-[99px]">
      <h2 className="mx-auto max-w-[780px] px-5 text-center text-[26px] leading-[1.3] text-ink md:text-[32px] lg:text-[40px]">
        {footer.statement}
      </h2>

      <div className="mx-auto mt-14 max-w-[1320px] border-t border-ink/20 px-4 pt-12 pb-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="lg:w-6/12">
            <h3 className="mb-6 font-sans text-[20px] font-normal text-ink uppercase">
              {footer.formTitle}
            </h3>
            <form noValidate onSubmit={handleSubmit} aria-label={footer.formTitle}>
              <div className="mb-2">
                <label htmlFor="contact-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={fields.name}
                  onChange={(event) => update('name')(event.target.value)}
                  aria-invalid={errors.name !== undefined}
                  aria-describedby={errors.name === undefined ? undefined : 'error-name'}
                  className={cn(inputClass, errors.name !== undefined && 'border-ink')}
                />
                {errors.name === undefined ? null : (
                  <p id="error-name" role="alert" className="pt-1 text-[14px] text-ink">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="mb-2">
                <label htmlFor="contact-email" className="sr-only">
                  Your e-mail
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Your e-mail"
                  value={fields.email}
                  onChange={(event) => update('email')(event.target.value)}
                  aria-invalid={errors.email !== undefined}
                  aria-describedby={errors.email === undefined ? undefined : 'error-email'}
                  className={cn(inputClass, errors.email !== undefined && 'border-ink')}
                />
                {errors.email === undefined ? null : (
                  <p id="error-email" role="alert" className="pt-1 text-[14px] text-ink">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="mb-2">
                <label htmlFor="contact-subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={fields.subject}
                  onChange={(event) => update('subject')(event.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Message"
                  value={fields.message}
                  onChange={(event) => update('message')(event.target.value)}
                  aria-invalid={errors.message !== undefined}
                  aria-describedby={errors.message === undefined ? undefined : 'error-message'}
                  className={cn(inputClass, 'h-[76px] py-3 normal-case', errors.message !== undefined && 'border-ink')}
                />
                {errors.message === undefined ? null : (
                  <p id="error-message" role="alert" className="pt-1 text-[14px] text-ink">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-end gap-4">
                <button
                  type="submit"
                  className="bg-ink px-[58px] py-[19px] font-serif text-[18px] font-bold text-white transition-colors hover:bg-white hover:text-ink"
                >
                  Send message
                </button>
                {sent ? (
                  <p role="status" className="text-[16px] text-ink">
                    Thanks — your message is on its way.
                  </p>
                ) : null}
              </div>
            </form>
          </div>

          <div className="lg:w-4/12">
            <h3 className="mb-6 font-sans text-[20px] font-normal text-ink uppercase">
              {footer.contactTitle}
            </h3>
            <ul className="space-y-2">
              <li className="text-[16px] font-light text-ink">{footer.address}</li>
              <li>
                <a
                  href={footer.phone.href}
                  className="border-b border-ink/40 text-[16px] font-light text-ink hover:border-ink"
                >
                  {footer.phone.label}
                </a>
              </li>
              <li>
                <a
                  href={footer.email.href}
                  className="border-b border-ink/40 text-[16px] font-light text-ink hover:border-ink"
                >
                  {footer.email.label}
                </a>
              </li>
            </ul>
            <a
              href={footer.resume.href}
              className="mt-8 inline-block border border-ink px-9 py-4 text-[18px] tracking-[1px] text-ink uppercase transition-colors hover:bg-ink hover:text-white"
            >
              {footer.resume.label}
            </a>
            <ul className="mt-8 flex items-center">
              {socials.map((social) => (
                <li key={social.network} className="mr-[10px]">
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex size-[50px] items-center justify-center rounded-full bg-ink/10 text-white transition-colors hover:bg-ink hover:text-band"
                  >
                    <SocialIcon network={social.network} className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="border-t border-ink/20 px-5 py-[26px] text-center text-[15px] font-light text-ink">
        © {new Date().getFullYear()} Portray. More templates at{' '}
        <a href="https://www.componentdock.com/" className="underline">
          Component Dock
        </a>
      </p>
    </footer>
  )
}
