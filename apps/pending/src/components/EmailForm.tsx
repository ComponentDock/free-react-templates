import { cn } from '@free-react-templates/ui'
import { useEmailValidation } from '../hooks/useEmailValidation'
import { EmailField } from './EmailField'
import { SubmitLane } from './SubmitLane'
import { ValidationBubble } from './ValidationBubble'

export interface EmailFormProps {
  className?: string
}

const EMAIL_ID = 'pending-email'
const ERROR_ID = `${EMAIL_ID}-error`

/**
 * The e-mail capture: a 280×50 transparent well holding the underline field, the
 * 35px arrow lane at its right end and — only after a rejected submit — the
 * red-outlined bubble. There is no success state and no request; the submit is
 * always prevented, so the page never navigates away.
 */
export function EmailForm({ className }: EmailFormProps) {
  const { value, error, change, focus, submit } = useEmailValidation()

  return (
    <form
      data-testid="email-form"
      className={cn('my-[10px] max-w-full', className)}
      onSubmit={submit}
      noValidate
    >
      <div
        data-testid="email-well"
        className="group/well relative h-[50px] w-[280px] max-w-full bg-transparent"
      >
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
