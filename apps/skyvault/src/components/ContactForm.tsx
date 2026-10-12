import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Button, cn } from '@free-react-templates/ui'

interface ContactValues {
  name: string
  email: string
  message: string
}

interface ContactErrors {
  name?: string
  email?: string
  message?: string
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INPUT_CLASS =
  'w-full rounded-[12px] border-none bg-plum-mid pl-[29px] text-[12px] text-white placeholder:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint'

const LABEL_CLASS = 'mb-[6px] block text-[12px] font-medium text-white'

/**
 * The footer's contact form: name, e-mail and message on violet fields with a
 * mint submit. It is local-only — submitting validates per field, answers in a
 * polite live region and never navigates away.
 */
export function ContactForm() {
  const [values, setValues] = useState<ContactValues>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<ContactErrors>({})
  const [confirmation, setConfirmation] = useState('')

  const update =
    (field: keyof ContactValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((previous) => ({ ...previous, [field]: event.target.value }))
    }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const next: ContactErrors = {}
    if (values.name.trim() === '') {
      next.name = 'Tell us your name.'
    }
    if (!EMAIL.test(values.email.trim())) {
      next.email = 'Enter a valid e-mail address.'
    }
    if (values.message.trim() === '') {
      next.message = 'Let us know what you need.'
    }
    setErrors(next)

    if (Object.keys(next).length > 0) {
      setConfirmation('')
      return
    }

    setConfirmation(`Thanks ${values.name.trim()} — we will reply to ${values.email.trim()} shortly.`)
  }

  return (
    <form noValidate onSubmit={onSubmit} className="mt-[38px]">
      <div className="flex flex-wrap gap-[21px]">
        <div className="w-full min-[576px]:w-[calc(50%-11px)]">
          <label htmlFor="contact-name" className={LABEL_CLASS}>
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            value={values.name}
            onChange={update('name')}
            placeholder="Ada Lovelace"
            aria-invalid={errors.name !== undefined}
            aria-describedby={errors.name === undefined ? undefined : 'contact-name-error'}
            className={cn(INPUT_CLASS, 'h-[49px]')}
          />
          {errors.name === undefined ? null : (
            <p id="contact-name-error" className="mt-1 text-[12px] text-mint">
              {errors.name}
            </p>
          )}
        </div>

        <div className="w-full min-[576px]:w-[calc(50%-11px)]">
          <label htmlFor="contact-email" className={LABEL_CLASS}>
            Your e-mail
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={update('email')}
            placeholder="you@example.com"
            aria-invalid={errors.email !== undefined}
            aria-describedby={errors.email === undefined ? undefined : 'contact-email-error'}
            className={cn(INPUT_CLASS, 'h-[49px]')}
          />
          {errors.email === undefined ? null : (
            <p id="contact-email-error" className="mt-1 text-[12px] text-mint">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-[21px]">
        <label htmlFor="contact-message" className={LABEL_CLASS}>
          How can we help?
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update('message')}
          placeholder="Tell us about the site you want to move."
          aria-invalid={errors.message !== undefined}
          aria-describedby={errors.message === undefined ? undefined : 'contact-message-error'}
          className={cn(INPUT_CLASS, 'h-[142px] pt-[15px]')}
        />
        {errors.message === undefined ? null : (
          <p id="contact-message-error" className="mt-1 text-[12px] text-mint">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="mt-[23px] h-[52px] w-[108px] rounded-[12px] bg-mint text-[16px] font-bold text-ink-on-mint hover:bg-surface hover:text-plum-mid"
      >
        Send
      </Button>

      {confirmation === '' ? null : (
        <p role="status" className="mt-4 text-[14px] font-medium text-mint">
          {confirmation}
        </p>
      )}
    </form>
  )
}
