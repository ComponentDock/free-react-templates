import { cn } from '@free-react-templates/ui'

export interface SubscribeButtonProps {
  className?: string
}

/** The full-width green pill action; its fill darkens on hover. */
export function SubscribeButton({ className }: SubscribeButtonProps) {
  return (
    <button
      type="submit"
      className={cn(
        'flex h-[50px] w-full items-center justify-center rounded-pill bg-brand px-[20px]',
        'font-heading text-[15px] leading-[1.2] font-bold text-white',
        'transition-all duration-[400ms] hover:bg-brand-hover',
        className,
      )}
    >
      Subscribe
    </button>
  )
}
