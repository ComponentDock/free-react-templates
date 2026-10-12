import { cn } from '@free-react-templates/ui'
import { useEmailValidation } from '../hooks/useEmailValidation'
import { EmailField } from './EmailField'
import { SubmitLane } from './SubmitLane'
import { ValidationBubble } from './ValidationBubble'

export interface EmailFormProps {
  className?: string
}

const EMAIL_ID = 'looming-email'
const ERROR_ID = `${EMAIL_ID}-error`

/**
 * The e-mail capture: a 500×80 flat white well with a soft shadow, holding the
 * address field, the invisible arrow lane at its right end and — only after a
 * rejected submit — the red-outlined bubble. There is no success state and no
 * request; the dedicated submit lane means the form is never navigated.
 */
export function EmailForm({ className }: EmailFormProps) {
  const { value, error, change, focus, submit } = useEmailValidation()

  return (
    <form
      data-testid="email-form"
      className={cn('mx-0 my-[10px] max-w-full', className)}
      onSubmit={submit}
      noValidate
    >
      <div data-testid="email-well" className="group/well relative h-[80px] w-[500px] max-w-full">
        <label className="sr-only" htmlFor={EMAIL_ID}>
          Your email address
        </label>

        <EmailField
          id={EMAIL_ID}
          value={value}
          hasError={error !== null}
          errorId={ERROR_ID}
          onChange={change}
          onFocus={focus}
        />

        <SubmitLane />

        {error ? <ValidationBubble id={ERROR_ID} message={error} /> : null}
      </div>
    </form>
  )
}
