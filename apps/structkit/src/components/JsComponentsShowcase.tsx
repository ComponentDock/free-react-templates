import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { ShowcaseSection, SubHeading } from './section'

const DIRECTIONS = ['On top', 'On right', 'On bottom', 'On left'] as const
const MODAL_BODY =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

/** The kit's interactive components: modal, datetime picker, popovers, tooltips. */
export function JsComponentsShowcase() {
  const [modalOpen, setModalOpen] = useState(false)
  const [popover, setPopover] = useState<string | null>(null)
  const [tooltip, setTooltip] = useState<string | null>(null)

  useEffect(() => {
    if (!modalOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModalOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [modalOpen])

  return (
    <ShowcaseSection id="javascriptsComponents" title="Javascripts Components">
      <div>
        <SubHeading>Modals</SubHeading>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="cursor-pointer rounded border border-primary bg-primary px-4 py-2 text-white hover:bg-primary-hover"
        >
          Launch demo modal
        </button>
      </div>

      <div>
        <SubHeading>Datetimepickers</SubHeading>
        <label htmlFor="datetime" className="mb-1 block text-sm">
          Datetime picker
        </label>
        <input
          id="datetime"
          type="datetime-local"
          className="rounded border border-line px-3 py-[6px] text-input outline-none focus:border-primary"
        />
      </div>

      <div>
        <SubHeading>Popovers</SubHeading>
        <div className="flex flex-wrap gap-3">
          {DIRECTIONS.map((direction) => (
            <div key={direction} className="relative">
              <button
                type="button"
                aria-expanded={popover === direction}
                onClick={() => setPopover(popover === direction ? null : direction)}
                className="cursor-pointer rounded bg-secondary px-3 py-1 text-white"
              >
                {direction}
              </button>
              {popover === direction && (
                <div
                  role="note"
                  aria-label={`Popover ${direction}`}
                  className="absolute left-0 top-full z-20 mt-2 w-56 rounded bg-white p-3 text-sm shadow-popover"
                >
                  Popover content shown {direction.toLowerCase()}.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <SubHeading>Tooltip</SubHeading>
        <div className="flex flex-wrap gap-3">
          {DIRECTIONS.map((direction) => (
            <span key={direction} className="relative">
              <button
                type="button"
                aria-describedby={tooltip === direction ? `tip-${direction}` : undefined}
                onMouseEnter={() => setTooltip(direction)}
                onMouseLeave={() => setTooltip(null)}
                onFocus={() => setTooltip(direction)}
                onBlur={() => setTooltip(null)}
                className="cursor-pointer rounded bg-info px-3 py-1 text-white"
              >
                {direction}
              </button>
              {tooltip === direction && (
                <span
                  id={`tip-${direction}`}
                  role="tooltip"
                  className="absolute left-0 top-full z-20 mt-2 w-40 rounded bg-heading p-2 text-xs text-white shadow-tooltip"
                >
                  Tooltip {direction.toLowerCase()}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button
            type="button"
            aria-label="Close modal overlay"
            onClick={() => setModalOpen(false)}
            className="absolute inset-0 cursor-pointer bg-black/50"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Modal title"
            className="relative z-10 w-full max-w-lg rounded bg-white p-6 shadow-raised"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-2xl font-normal text-heading">Modal title</h3>
              <button
                type="button"
                autoFocus
                aria-label="Close modal"
                onClick={() => setModalOpen(false)}
                className="cursor-pointer text-muted hover:text-heading"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <p>{MODAL_BODY}</p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="cursor-pointer rounded border border-line px-4 py-2 hover:bg-light"
              >
                Close
              </button>
              <button
                type="button"
                className="cursor-pointer rounded border border-primary bg-primary px-4 py-2 text-white hover:bg-primary-hover"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </ShowcaseSection>
  )
}
