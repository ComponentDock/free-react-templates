import { cn } from '@free-react-templates/ui'
import { siteName } from '../data'

/** 85×85 double-ruled white box — the page's wordmark, centred in the header. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label={`${siteName} home`}
      className={cn(
        'flex h-[85px] w-[85px] shrink-0 items-center justify-center border-2 border-white p-[3px]',
        className,
      )}
    >
      <span className="flex h-full w-full items-center justify-center border border-white text-[12px] font-bold uppercase tracking-[0.16em] text-white">
        {siteName}
      </span>
    </a>
  )
}
