import { useCallback, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Attribution } from './Attribution'
import { Countdown } from './Countdown'
import { Headline } from './Headline'
import { ModalTrigger } from './ModalTrigger'
import { SubscribeModal } from './SubscribeModal'

export interface ComingSoonProps {
  className?: string
}

/**
 * The whole page: one full-viewport diagonal gradient holding an empty spacer,
 * the centred block (headline, countdown, trigger) and the attribution line, so
 * the block lands at the optical centre of the screen. No navbar, no imagery,
 * no scrolling sections — the gradient is the design.
 */
export function ComingSoon({ className }: ComingSoonProps) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)

  const openModal = useCallback(() => {
    setOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <div
      className={cn(
        'flex min-h-screen w-full flex-col items-center justify-between',
        'bg-grad-b bg-[linear-gradient(-45deg,var(--color-grad-a),var(--color-grad-b),var(--color-grad-c))]',
        'px-[15px] pt-[55px] pb-[35px] max-[576px]:pt-[35px]',
        className,
      )}
    >
      <span aria-hidden="true" />

      <div className="flex flex-col items-center py-[50px]">
        <Headline />
        <Countdown />
        <ModalTrigger ref={triggerRef} onOpen={openModal} />
      </div>

      <Attribution />

      {open ? <SubscribeModal onClose={closeModal} returnFocusTo={triggerRef} /> : null}
    </div>
  )
}
