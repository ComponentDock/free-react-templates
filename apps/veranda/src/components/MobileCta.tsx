import { cn } from '@free-react-templates/ui'

export interface MobileCtaProps {
  /** Hidden while the cookie strip owns the bottom of the screen. */
  hidden: boolean
}

/**
 * Two-button bar for phones. The reference stacks it under the cookie strip at
 * the same `bottom-0`; here only one of the two is ever mounted.
 */
export function MobileCta({ hidden }: MobileCtaProps) {
  if (hidden) {
    return null
  }

  return (
    <div
      data-testid="mobile-cta"
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-gray-200 bg-white p-3 shadow-lg lg:hidden',
      )}
    >
      <a
        href="#discussions"
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-center text-sm font-medium text-gray-700"
      >
        Read the threads
      </a>
      <a
        href="#pricing"
        className="flex-1 rounded-lg bg-primary-600 px-4 py-2.5 text-center text-sm font-medium text-white"
      >
        Join the Community
      </a>
    </div>
  )
}
