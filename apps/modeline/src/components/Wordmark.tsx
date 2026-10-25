import type { ReactNode } from 'react'
import { Gem } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface WordmarkProps {
  /** `light` sits on the navy bar, `dark` on the white footer. */
  tone?: 'light' | 'dark'
  children?: ReactNode
}

/**
 * The typographic brand: a crest glyph plus a tracked MODELINE wordmark. The
 * reference ships two 156x61 raster logos; this is type, so no asset is copied.
 */
export function Wordmark({ tone = 'light', children }: WordmarkProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2',
        tone === 'light' ? 'text-white' : 'text-ink',
      )}
    >
      <Gem aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
      <span className="text-[22px] leading-none font-bold tracking-[0.35em] uppercase">
        {children ?? 'Modeline'}
      </span>
    </span>
  )
}
