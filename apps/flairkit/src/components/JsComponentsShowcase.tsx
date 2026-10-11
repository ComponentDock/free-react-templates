import { useCallback, useEffect, useState } from 'react'
import { Calendar, MessageSquare, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Band, GroupHeading, SectionHeading } from './Band'
import { IconField } from './IconField'
import { KitButton } from './KitButton'

type Placement = 'top' | 'right' | 'bottom' | 'left'

const PLACEMENTS: Placement[] = ['top', 'right', 'bottom', 'left']

const PLACEMENT_CLASSES: Record<Placement, string> = {
  top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
  right: 'top-1/2 left-full ml-2 -translate-y-1/2',
  bottom: 'top-full left-1/2 mt-2 -translate-x-1/2',
  left: 'top-1/2 right-full mr-2 -translate-y-1/2',
}

const PLACEMENT_LABELS: Record<Placement, string> = {
  top: 'Top',
  right: 'Right',
  bottom: 'Bottom',
  left: 'Left',
}

const POPOVER_BODY = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'

const MODAL_PARAGRAPHS = [
  'The workshop door stayed open all afternoon, and the scent of cut pine drifted down the lane towards the empty harbour steps.',
  'By the time the last light slipped behind the headland, every instrument on the bench had been tuned and put quietly away.',
]

/** Datetime picker, modal, popovers and tooltips — all rebuilt with React state. */
export function JsComponentsShowcase() {
  const [modalOpen, setModalOpen] = useState(false)
  const [openPopover, setOpenPopover] = useState<Placement | null>(null)
  const [openTooltip, setOpenTooltip] = useState<Placement | null>(null)
  // Callback ref: focuses the dialog as soon as it mounts (and does nothing
  // when it unmounts) without an effect that re-runs on unrelated renders.
  const focusDialog = useCallback((node: HTMLDivElement | null) => {
    node?.focus()
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModalOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <Band>
      <SectionHeading className="mb-5">Javascript Components</SectionHeading>

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <div className="mb-10">
            <GroupHeading>Datetime Picker</GroupHeading>
            <label className="mb-3 block" htmlFor="flairkit-datetime">
              Datetime Picker
            </label>
            <IconField
              id="flairkit-datetime"
              icon={<Calendar className="h-4 w-4" />}
              type="datetime-local"
              shape="underline"
            />
          </div>
          <GroupHeading>Modal</GroupHeading>
          <KitButton
            color="info"
            variant="solid"
            size="md"
            className="py-2"
            onClick={() => setModalOpen(true)}
          >
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            Basic Modal
          </KitButton>
        </div>

        <div>
          <GroupHeading>Popovers</GroupHeading>
          <div className="mb-10 flex flex-wrap gap-4">
            {PLACEMENTS.map((placement) => (
              <div key={placement} className="relative">
                <KitButton
                  color="info"
                  variant="solid"
                  size="md"
                  aria-expanded={openPopover === placement}
                  onClick={() =>
                    setOpenPopover((previous) => (previous === placement ? null : placement))
                  }
                >
                  Popover on {placement}
                </KitButton>
                {openPopover === placement && (
                  <div
                    role="dialog"
                    aria-label={`Popover on ${PLACEMENT_LABELS[placement]}`}
                    className={cn(
                      'absolute z-10 w-56 rounded bg-white shadow-popover',
                      PLACEMENT_CLASSES[placement],
                    )}
                  >
                    <p className="bg-flair-light px-3 py-2 font-normal text-flair-dark">
                      Popover on {PLACEMENT_LABELS[placement]}
                    </p>
                    <p className="px-3 py-2 text-[0.9rem]">{POPOVER_BODY}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <GroupHeading>Tooltips</GroupHeading>
          <div className="flex flex-wrap gap-4">
            {PLACEMENTS.map((placement) => (
              <div key={placement} className="relative">
                <KitButton
                  color="secondary"
                  variant="solid"
                  size="md"
                  aria-describedby={openTooltip === placement ? `tooltip-${placement}` : undefined}
                  onMouseEnter={() => setOpenTooltip(placement)}
                  onMouseLeave={() => setOpenTooltip(null)}
                  onFocus={() => setOpenTooltip(placement)}
                  onBlur={() => setOpenTooltip(null)}
                >
                  Tooltip on {placement}
                </KitButton>
                {openTooltip === placement && (
                  <span
                    role="tooltip"
                    id={`tooltip-${placement}`}
                    className={cn(
                      'absolute z-10 w-max rounded bg-flair-dark px-2 py-1 text-[0.75rem] text-white shadow-tooltip',
                      PLACEMENT_CLASSES[placement],
                    )}
                  >
                    Tooltip on {PLACEMENT_LABELS[placement]}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div
            className="absolute inset-0"
            aria-hidden="true"
            onClick={() => setModalOpen(false)}
          />
          <div
            ref={focusDialog}
            role="dialog"
            aria-modal="true"
            aria-label="Modal title"
            tabIndex={-1}
            className="relative z-10 w-full max-w-lg rounded-none bg-white shadow-modal"
          >
            <div className="flex items-center border-b border-gray-200 px-6 py-4">
              <h5 className="text-[1.25rem]">Modal title</h5>
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setModalOpen(false)}
                className="ml-auto cursor-pointer text-flair-secondary"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="space-y-4 px-8 py-5">
              {MODAL_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </Band>
  )
}
