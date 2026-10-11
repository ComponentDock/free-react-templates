import { cn } from '@free-react-templates/ui'

export interface SubmitButtonProps {
  className?: string
}

/**
 * The dark pill action. Its label sits over a gradient overlay that fades in on
 * hover while the base fill turns transparent, so the pill appears to change
 * colour underneath the pointer.
 */
export function SubmitButton({ className }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={cn(
        'group isolate relative mx-[10px] mb-[20px] flex h-[50px] w-[280px] max-w-[calc(100%_-_20px)]',
        'cursor-pointer items-center justify-center overflow-hidden rounded-pill bg-action px-5',
        'font-heading text-[15px] leading-[1.4] font-bold text-white',
        'transition-colors duration-[400ms] hover:bg-transparent',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-accent-solid bg-[linear-gradient(to_bottom,var(--color-accent-a),var(--color-accent-b))] opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
      />
      Get Updates
    </button>
  )
}
