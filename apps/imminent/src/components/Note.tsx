import { cn } from '@free-react-templates/ui'

export interface NoteProps {
  className?: string
}

/** The small pale-grey spam note sitting just under the form row. */
export function Note({ className }: NoteProps) {
  return (
    <p
      className={cn(
        'pt-[5px] text-center font-sans text-[12px] leading-[1.333333] text-note',
        className,
      )}
    >
      And don’t worry, we hate spam too! You can unsubscribe at anytime.
    </p>
  )
}
