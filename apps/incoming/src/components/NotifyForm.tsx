import { useState, type ChangeEvent, type FormEvent } from 'react'
import { AlertTriangle } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { firstError, notifySchema } from '../lib/forms'

export interface NotifyFormProps {
  className?: string
}

/**
 * One compact grey field beside a purple button. An invalid submit raises the
 * design's warning bubble (revealed while the field container is hovered, and
 * always visible on narrow screens); focusing the field clears the message and
 * reveals the purple focus ring.
 */
export function NotifyForm({ className }: NotifyFormProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [focused, setFocused] = useState(false)
  const [notified, setNotified] = useState(false)

  const change = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const focus = () => {
    setFocused(true)
    setError(null)
  }

  const blur = () => {
    setFocused(false)
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = notifySchema.safeParse({ email })

    if (!result.success) {
      setError(firstError(result.error))
      setNotified(false)
      return
    }

    setError(null)
    setNotified(true)
  }

  return (
    <form
      className={cn('flex w-full flex-wrap items-center justify-center pt-[55px]', className)}
      noValidate
      onSubmit={submit}
    >
      <div className="group relative mx-[5px] mt-[20px] h-[40px] w-[220px] max-w-[calc(100%_-_10px)] rounded-field bg-well">
        <label className="sr-only" htmlFor="incoming-email">
          Email Address
        </label>
        <input
          id="incoming-email"
          name="email"
          type="text"
          placeholder="Your Email"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'incoming-email-error' : undefined}
          value={email}
          onChange={change}
          onFocus={focus}
          onBlur={blur}
          className={cn(
            'block size-full rounded-field bg-transparent px-[20px]',
            'font-sans text-[15px] leading-[1.4] text-brand outline-none',
          )}
        />

        <span
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute inset-0 rounded-field border border-brand',
            'transition-all duration-[400ms]',
            focused
              ? 'visible scale-100 opacity-100'
              : 'invisible scale-x-110 scale-y-120 opacity-0',
          )}
        />

        {error ? (
          <p
            id="incoming-email-error"
            role="alert"
            className={cn(
              'pointer-events-none absolute top-1/2 right-[12px] inline-flex max-w-[70%]',
              '-translate-y-1/2 items-center gap-[8px] rounded-bubble border border-error bg-white',
              'py-[4px] pr-[25px] pl-[10px] font-sans text-[13px] leading-[1.4] text-error',
              'invisible opacity-0 transition-opacity duration-[400ms]',
              'group-hover:visible group-hover:opacity-100',
              'max-[992px]:visible max-[992px]:opacity-100',
            )}
          >
            <AlertTriangle className="size-[14px] shrink-0" aria-hidden="true" />
            {error}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        className={cn(
          'mx-[5px] mt-[20px] inline-flex h-[40px] min-w-[120px] items-center justify-center',
          'rounded-field bg-brand px-[20px] font-sans text-[15px] leading-[1.4] font-normal text-white',
          'transition-all duration-[400ms] hover:bg-ink',
        )}
      >
        Get Notified
      </Button>

      {notified ? (
        <p
          role="status"
          className="w-full pt-[10px] text-center font-sans text-[14px] leading-[1.5] text-brand"
        >
          Thanks! We&rsquo;ll email you the moment we go live.
        </p>
      ) : null}
    </form>
  )
}
