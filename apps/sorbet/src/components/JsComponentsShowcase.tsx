import { useEffect, useRef, useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
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
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'

const COLLAPSES = [
  { id: 'menu-1', label: 'Collapse Menu 1' },
  { id: 'menu-2', label: 'Collapse Menu 2' },
]

/** The interactive demos: modal, datetime picker, popovers, tooltips, accordion. */
export function JsComponentsShowcase() {
  const [modalOpen, setModalOpen] = useState(false)
  const [popover, setPopover] = useState<Placement | null>(null)
  const [openCollapse, setOpenCollapse] = useState<string | null>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!modalOpen) return
    const closeButton = closeRef.current!
    const trigger = triggerRef.current!
    closeButton.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModalOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      trigger.focus()
    }
  }, [modalOpen])

  return (
    <ShowcaseSection id="javascriptsComponents" className="bg-light py-24">
      <h2 className="text-[28px] font-medium text-heading">Javascripts Components</h2>

      <div>
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
              aria-labelledby="sorbet-modal-title"
              className="relative z-10 w-full max-w-md rounded bg-white shadow-menu"
            >
              <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                <h5 id="sorbet-modal-title" className="text-lg text-heading">
                  Modal title
                </h5>
                <button
                  ref={closeRef}
                  type="button"
                  aria-label="Dismiss modal"
                  onClick={() => setModalOpen(false)}
                  className="cursor-pointer text-body hover:text-heading"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <p className="px-4 py-4 text-sm">{MODAL_BODY}</p>
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

      <div>
        <SubHeading>Datetimepickers</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          <label htmlFor="sorbet-datetime" className="text-sm text-heading">
            Datetime picker
          </label>
          <input
            id="sorbet-datetime"
            type="datetime-local"
            className="h-12 rounded border-2 border-gray-200 bg-white px-3 text-input focus:border-primary-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
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
                    'absolute z-20 block w-56 rounded bg-white p-3 text-sm shadow-popover',
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

      <div>
        <SubHeading>Tooltip</SubHeading>
        <div role="group" aria-label="Tooltip" className="flex flex-wrap gap-3">
          {PLACEMENTS.map(({ id, label }) => (
            <span key={id} className="group relative inline-block">
              <button
                type="button"
                aria-describedby={`sorbet-tooltip-${id}`}
                className="cursor-pointer rounded border-2 border-gray-300 px-4 py-2 text-sm hover:bg-light"
              >
                {label}
              </button>
              <span
                role="tooltip"
                id={`sorbet-tooltip-${id}`}
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

      <div>
        <SubHeading>Accordion/Collapse</SubHeading>
        <div className="space-y-3">
          {COLLAPSES.map(({ id, label }) => (
            <div key={id}>
              <button
                type="button"
                aria-expanded={openCollapse === id}
                onClick={() => setOpenCollapse(openCollapse === id ? null : id)}
                className="flex w-full cursor-pointer items-center justify-between border-b border-gray-200 pb-2 text-left text-[20px] capitalize text-black"
              >
                {label}
                <ChevronDown
                  className={cn(
                    'h-5 w-5 transition-transform',
                    openCollapse === id && 'rotate-180',
                  )}
                  aria-hidden="true"
                />
              </button>
              {openCollapse === id && <p className="pt-3 text-sm">{MODAL_BODY}</p>}
            </div>
          ))}
        </div>
      </div>
    </ShowcaseSection>
  )
}
