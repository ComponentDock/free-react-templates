import { cn } from '@free-react-templates/ui'

export interface SubscribeButtonProps {
  className?: string
}

/**
 * The 170px-minimum green action: hovering turns its fill transparent while a
 * magenta→indigo gradient fades in behind the still-white label.
 */
export function SubscribeButton({ className }: SubscribeButtonProps) {
  return (
    <button
      type="submit"
      className={cn(
        'group relative isolate mb-[20px] flex h-[50px] min-w-[170px] items-center justify-center',
        'overflow-hidden bg-brand px-[20px]',
        'font-sans text-[16px] leading-[1.333333] text-white',
        'transition-all duration-[400ms] hover:bg-transparent',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-0 -z-10 opacity-0 transition-opacity duration-[400ms]',
          'bg-[linear-gradient(to_bottom,var(--color-wash-bottom),var(--color-wash-top))]',
          'group-hover:opacity-100',
        )}
      />
      Subscribe
    </button>
  )
}
