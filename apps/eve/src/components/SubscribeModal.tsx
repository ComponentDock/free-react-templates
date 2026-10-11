import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type RefObject } from 'react'
import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { trapTab } from '../lib/focusTrap'
import { SubscribeForm } from './SubscribeForm'

/** Matches the design's teardown: fade out, then remove after 150 ms. */
const CLOSE_MS = 150

export interface SubscribeModalProps {
  className?: string
  /** Unmounts the dialog. Called ~150 ms after a close request. */
  onClose: () => void
  /** Element that opened the dialog — focus returns here once it is gone. */
  returnFocusTo: RefObject<HTMLElement | null>
}

/**
 * The subscribe dialog: a fixed, scrollable overlay holding a white card that
 * fades in and slides down from `-25%`. It locks body scroll (compensating the
 * scrollbar gap), focuses the first field, keeps Tab inside, and closes on the
 * close button, a click outside the card, or Escape — always restoring focus to
 * the element that opened it. Clicks inside the card never close it.
 */
export function SubscribeModal({ className, onClose, returnFocusTo }: SubscribeModalProps) {
  const firstFieldRef = useRef<HTMLInputElement>(null)
  const closing = useRef(false)
  const [shown, setShown] = useState(false)

  // Reveal one tick after mount so the entry transition actually runs.
  useEffect(() => {
    const frame = window.setTimeout(() => setShown(true), 0)

    return () => window.clearTimeout(frame)
  }, [])

  // Body scroll lock while the dialog is open, plus the scrollbar-gap padding.
  useEffect(() => {
    const opener = returnFocusTo
    const gap = window.innerWidth - document.documentElement.clientWidth
    const overflow = document.body.style.overflow
    const padding = document.body.style.paddingRight

    document.body.style.overflow = 'hidden'
    if (gap > 0) document.body.style.paddingRight = `${gap}px`

    return () => {
      document.body.style.overflow = overflow
      document.body.style.paddingRight = padding
      opener.current?.focus()
    }
  }, [returnFocusTo])

  // The design puts focus straight into the first field.
  useEffect(() => {
    firstFieldRef.current?.focus()
  }, [])

  const requestClose = useCallback(() => {
    if (closing.current) return

    closing.current = true
    setShown(false)
    window.setTimeout(onClose, CLOSE_MS)
  }, [onClose])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      requestClose()
      return
    }

    if (event.key !== 'Tab') return

    const focusable = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    )

    trapTab(event.nativeEvent, focusable)
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[1160] overflow-y-auto transition-opacity duration-150 ease-linear',
        shown ? 'opacity-100' : 'opacity-0',
        className,
      )}
      onKeyDown={handleKeyDown}
    >
      <div
        className="flex min-h-full w-full items-center justify-center px-[15px] py-[50px]"
        onClick={(event) => {
          if (event.target !== event.currentTarget) return
          requestClose()
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="eve-subscribe-title"
          className={cn(
            'relative w-[686px] max-w-full rounded-card bg-white px-[15px] pt-[54px] pb-[100px]',
            'transition-transform duration-300 ease-out',
            shown ? 'translate-y-0' : '-translate-y-1/4',
          )}
        >
          <button
            type="button"
            data-dismiss="modal"
            aria-label="Close subscribe dialog"
            onClick={requestClose}
            className={cn(
              'absolute -top-[40px] right-[5px] text-white/50',
              'transition-colors duration-[400ms] hover:text-white',
            )}
          >
            <X className="size-[26px]" aria-hidden="true" />
          </button>

          <SubscribeForm firstFieldRef={firstFieldRef} />
        </div>
      </div>
    </div>
  )
}
