import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { Band, DemoPanel } from './Band'
import { KitButton } from './KitButton'

const PARAGRAPHS = [
  'Mist enveloped the ship three hours out from port, and the crew could barely make out the lanterns along the pier.',
  'A shining crescent hung far beneath the flying vessel while the instruments hummed their steady, patient rhythm.',
]

export function ModalShowcase() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const closeButton = closeRef.current!
    const trigger = triggerRef.current!
    closeButton.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        trigger.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <Band
      title="Modal"
      lead="Use the kit's modal dialog for lightboxes, user notifications, and fully custom content."
    >
      <DemoPanel>
        <KitButton
          ref={triggerRef}
          color="primary"
          variant="solid"
          size="md"
          onClick={() => setOpen(true)}
        >
          Launch Demo Modal
        </KitButton>
      </DemoPanel>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <button
            type="button"
            aria-label="Close modal backdrop"
            onClick={() => {
              setOpen(false)
              triggerRef.current!.focus()
            }}
            className="absolute inset-0 cursor-default bg-black/40"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modkit-modal-title"
            className="relative z-10 w-full max-w-lg rounded-none bg-white shadow-kit-modal"
          >
            <div className="flex items-center justify-between px-7 py-4">
              <h5 id="modkit-modal-title" className="text-[1.25rem]">
                Modal title
              </h5>
              <button
                ref={closeRef}
                type="button"
                aria-label="Dismiss modal"
                onClick={() => {
                  setOpen(false)
                  triggerRef.current!.focus()
                }}
                className="cursor-pointer text-body hover:text-heading"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            {PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="px-7 pb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </Band>
  )
}
