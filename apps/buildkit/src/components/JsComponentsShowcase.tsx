import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { ShowcaseSection, SubHeading } from './section'

const PLACEMENTS = [
  { id: 'top', label: 'On top' },
  { id: 'right', label: 'On right' },
  { id: 'bottom', label: 'On bottom' },
  { id: 'left', label: 'On left' },
] as const

type Placement = (typeof PLACEMENTS)[number]['id']

const FLOAT_POSITION: Record<Placement, string> = {
  top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
  right: 'left-full top-1/2 ml-2 -translate-y-1/2',
  bottom: 'top-full left-1/2 mt-2 -translate-x-1/2',
  left: 'right-full top-1/2 mr-2 -translate-y-1/2',
}

const MODAL_BODY =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export function JsComponentsShowcase() {
  const [modalOpen, setModalOpen] = useState(false)
  const [popover, setPopover] = useState<Placement | null>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!modalOpen) return
    const closeButton = closeRef.current!
    const trigger = triggerRef.current!
    closeButton.focus()
    return () => {
      trigger.focus()
    }
  }, [modalOpen])

  return (
    <ShowcaseSection id="javascriptsComponents" title="Javascripts Components" className="bg-light">
      <div className="space-y-4">
        <SubHeading>Modals</SubHeading>
        <Button ref={triggerRef} onClick={() => setModalOpen(true)}>
          Launch demo modal
        </Button>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <button
              type="button"
              aria-label="Close modal backdrop"
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 cursor-default bg-black/40"
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="buildkit-modal-title"
              className="relative z-10 w-full max-w-md rounded bg-white shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                <h5 id="buildkit-modal-title" className="text-lg text-heading">
                  Modal title
                </h5>
                <button
                  ref={closeRef}
                  type="button"
                  aria-label="Dismiss modal"
                  onClick={() => setModalOpen(false)}
                  className="cursor-pointer text-gray-400 hover:text-heading"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <p className="px-4 py-4 text-sm text-body">{MODAL_BODY}</p>
              <div className="flex justify-end gap-3 border-t border-gray-100 px-4 py-3">
                <Button variant="outline" onClick={() => setModalOpen(false)}>
                  Close
                </Button>
                <Button onClick={() => setModalOpen(false)}>Save changes</Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <SubHeading>Datetimepickers</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          <label htmlFor="buildkit-datetime" className="text-sm text-heading">
            Datetime picker
          </label>
          <input
            id="buildkit-datetime"
            type="datetime-local"
            className="h-12 rounded border border-gray-200 bg-white px-3 text-body focus:border-primary-600 focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-4">
        <SubHeading>Popovers</SubHeading>
        <div role="group" aria-label="Popovers" className="flex flex-wrap gap-3">
          {PLACEMENTS.map(({ id, label }) => (
            <span key={id} className="relative inline-block">
              <Button
                variant="outline"
                aria-expanded={popover === id}
                onClick={() => setPopover(popover === id ? null : id)}
              >
                {label}
              </Button>
              {popover === id && (
                <span
                  className={cn(
                    'absolute z-20 block w-56 rounded bg-white p-3 text-sm shadow-lg',
                    FLOAT_POSITION[id],
                  )}
                >
                  <strong className="block text-heading">Popover {label.toLowerCase()}</strong>A
                  short message shown when the button is activated.
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <SubHeading>Tooltip</SubHeading>
        <div role="group" aria-label="Tooltip" className="flex flex-wrap gap-3">
          {PLACEMENTS.map(({ id, label }) => (
            <span key={id} className="group relative inline-block">
              <button
                type="button"
                aria-describedby={`buildkit-tooltip-${id}`}
                className="cursor-pointer rounded border border-gray-300 px-4 py-2 text-sm text-body hover:bg-light"
              >
                Tooltip {label.toLowerCase()}
              </button>
              <span
                role="tooltip"
                id={`buildkit-tooltip-${id}`}
                className={cn(
                  'pointer-events-none absolute z-20 hidden w-44 rounded bg-heading px-3 py-2 text-xs text-white group-hover:block group-focus-within:block',
                  FLOAT_POSITION[id],
                )}
              >
                Tooltip {label.toLowerCase()}
              </span>
            </span>
          ))}
        </div>
      </div>
    </ShowcaseSection>
  )
}
