import { cn } from '@free-react-templates/ui'

export interface NotifyButtonProps {
  className?: string
}

/**
 * The 160px-minimum blue pill action: hovering inverts it over .4s, so the fill
 * turns white and the label picks up the brand blue.
 */
export function NotifyButton({ className }: NotifyButtonProps) {
  return (
    <button
      type="submit"
      className={cn(
        'mx-[5px] mt-[20px] flex h-[50px] min-w-[160px] items-center justify-center',
        'rounded-[25px] bg-brand px-[20px]',
        'font-sans text-[15px] leading-[1.2] text-white',
        'transition-all duration-[400ms] hover:bg-white hover:text-brand',
        className,
      )}
    >
      Notify Me
    </button>
  )
}
