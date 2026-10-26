import { useEffect, useRef, useState } from 'react'
import { Inbox } from 'lucide-react'
import { NoticeRow } from './components/NoticeRow'
import { PageFooter } from './components/PageFooter'
import { NOTICES, PANEL, dismissMessage, plural, type Notice } from './data/notices'

/** A row is either in the list, collapsing, or removed. */
type RowState = 'in' | 'leaving' | 'gone'

type FocusTarget = { kind: 'notice'; id: string } | { kind: 'restore' }

const freshRows = (): Record<string, RowState> =>
  Object.fromEntries(NOTICES.map((notice) => [notice.id, 'in']))

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

/** A browser that never fires `transitionend` still empties the row. */
const COLLAPSE_FALLBACK_MS = 600

/**
 * Allclear — one glass panel on a lavender-to-blue ground: a project head with a
 * dark count pill, four dismissible notices, a dashed empty state and a restore
 * pill.
 *
 * The reference sizes the panel `content-box` with a 620 px max-width, so it
 * measures 676 px outside its 28 px padding — and it shrinks to `vw − 32` only
 * because it sits on a *row* flex axis. This page holds the attribution line
 * under the panel, so the wrapper is a column: a content-box child would keep
 * its 100 % width plus padding and overflow by 56 px at every width under 708.
 * The same box is therefore declared `border-box` at 676 px, which measures
 * identically at 1440, 708/707, 481/480 and 320 (outer 676 / 675 / 449 / 448 /
 * 288) without leaning on main-axis shrink.
 */
export function App() {
  const [rows, setRows] = useState<Record<string, RowState>>(freshRows)
  const [live, setLive] = useState('')
  const [focusTarget, setFocusTarget] = useState<FocusTarget | null>(null)
  const dismissButtons = useRef(new Map<string, HTMLButtonElement>())
  const restoreButton = useRef<HTMLButtonElement>(null)

  /**
   * Focus moves after the commit rather than inside the click: the restore pill
   * only exists once the list is empty, and the first row only exists again
   * after a restore. It still lands long before the 380 ms collapse ends.
   */
  useEffect(() => {
    if (!focusTarget) return
    if (focusTarget.kind === 'restore') restoreButton.current!.focus()
    else dismissButtons.current.get(focusTarget.id)!.focus()
  }, [focusTarget])

  const visible = NOTICES.filter((notice) => rows[notice.id] === 'in')
  const remaining = visible.length

  const settle = (id: string) =>
    setRows((prev) => (prev[id] === 'gone' ? prev : { ...prev, [id]: 'gone' }))

  const dismiss = (notice: Notice) => {
    const index = visible.findIndex((visibleNotice) => visibleNotice.id === notice.id)
    // The row below takes focus, or the one above when the last row leaves.
    const next = visible[index + 1] ?? visible[index - 1]
    const left = remaining - 1
    const reduced = window.matchMedia(REDUCED_MOTION).matches

    setRows((prev) => ({ ...prev, [notice.id]: reduced ? 'gone' : 'leaving' }))
    setLive(dismissMessage(notice.title, left))
    setFocusTarget(next ? { kind: 'notice', id: next.id } : { kind: 'restore' })
    if (!reduced) window.setTimeout(() => settle(notice.id), COLLAPSE_FALLBACK_MS)
  }

  const restore = () => {
    setRows(freshRows())
    setLive(PANEL.restored)
    setFocusTarget({ kind: 'notice', id: NOTICES[0].id })
  }

  return (
    <main className="box-border flex min-h-screen flex-col items-center px-4 py-[clamp(24px,7vw,88px)] [background:radial-gradient(50%_45%_at_10%_0%,var(--color-bloom-a)_0%,transparent_70%),radial-gradient(45%_45%_at_100%_100%,var(--color-bloom-b)_0%,transparent_70%),var(--color-ground)]">
      <section
        aria-labelledby="allclear-title"
        className="w-full max-w-[676px] rounded-3xl bg-white/[.72] p-7 leading-[1.5] text-ink shadow-[0_30px_60px_-32px_rgba(60,40,160,.35),inset_0_0_0_1px_rgba(255,255,255,.8)] compact:rounded-[20px] compact:p-[20px_16px]"
      >
        <header className="mb-[18px] flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
          <div>
            <h1
              id="allclear-title"
              tabIndex={-1}
              className="m-0 rounded text-2xl leading-9 font-extrabold tracking-[-.02em] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              {PANEL.title}
            </h1>
            <p className="mt-0.5 mr-0 mb-0 ml-0 text-sm leading-[21px] text-muted">{PANEL.sub}</p>
          </div>
          <p className="m-0 rounded-full bg-ink px-3 py-1 text-[13px] font-bold text-white">
            <span data-count>{remaining}</span> {plural(remaining)}
          </p>
        </header>

        <ul aria-label={PANEL.listLabel} className="m-0 list-none p-0">
          {NOTICES.map((notice) =>
            rows[notice.id] === 'gone' ? null : (
              <NoticeRow
                key={notice.id}
                notice={notice}
                leaving={rows[notice.id] === 'leaving'}
                onDismiss={dismiss}
                onSettled={settle}
                register={(button) => {
                  if (button) dismissButtons.current.set(notice.id, button)
                  else dismissButtons.current.delete(notice.id)
                }}
              />
            ),
          )}
        </ul>

        {remaining === 0 && (
          <div className="flex items-center gap-3 rounded-2xl border border-dashed border-empty-line p-[22px] text-base leading-6 font-semibold text-muted">
            <Inbox aria-hidden="true" size={28} strokeWidth={1.8} className="block flex-none" />
            <p className="m-0">{PANEL.empty}</p>
          </div>
        )}

        <div className="mt-1.5 flex flex-wrap items-center gap-3">
          {remaining < NOTICES.length && (
            <button
              ref={restoreButton}
              type="button"
              onClick={restore}
              className="rounded-full bg-ink px-4 py-[9px] text-sm leading-[21px] font-bold text-white hover:bg-[#38345e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-focus"
            >
              {PANEL.restore}
            </button>
          )}
          <p role="status" data-live className="m-0 text-[13px] text-muted">
            {live}
          </p>
        </div>
      </section>
      <PageFooter />
    </main>
  )
}
