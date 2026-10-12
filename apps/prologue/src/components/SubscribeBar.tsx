import { cn } from '@free-react-templates/ui'
import { useEmailValidation } from '../hooks/useEmailValidation'
import { EmailField } from './EmailField'
import { SubmitArrow } from './SubmitArrow'
import { SubscribeLabel } from './SubscribeLabel'
import { ValidationBubble } from './ValidationBubble'

export interface SubscribeBarProps {
  className?: string
}

const EMAIL_ID = 'prologue-email'
const ERROR_ID = `${EMAIL_ID}-error`

/**
 * The subscribe control: a 650px-wide brand-coloured bar with a 10px block
 * margin, holding the field, the label tab at its left end and the arrow lane
 * at its right. Its width cap is the content width plus 110px, so on wide
 * screens the bar reaches 60px past the panel's right edge and the arrow lane
 * lands on the photograph; once the split stacks the cap collapses and nothing
 * overflows. There is no success state and no request.
 */
export function SubscribeBar({ className }: SubscribeBarProps) {
  const { value, error, change, focus, submit } = useEmailValidation()

  return (
    <form
      data-testid="subscribe-bar"
      className={cn('mx-0 my-[10px] max-w-full', className)}
      onSubmit={submit}
      noValidate
    >
      <div
        data-testid="subscribe-track"
        className="group/track relative h-[80px] w-[650px] max-w-[calc(100%_+_110px)] max-[992px]:max-w-full"
      >
        <EmailField
          id={EMAIL_ID}
          value={value}
          hasError={error !== null}
          errorId={ERROR_ID}
          onChange={change}
          onFocus={focus}
        />

        <SubscribeLabel htmlFor={EMAIL_ID} />

        <SubmitArrow />

        {error ? <ValidationBubble id={ERROR_ID} message={error} /> : null}
      </div>
    </form>
  )
}
