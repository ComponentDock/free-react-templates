import { Alert } from './components/Alert'
import { PageFooter } from './components/PageFooter'
import { NOTICES, PANEL } from './data/alerts'

/**
 * Noticeboard — one centred 680 px panel on a cool grey ground: a three-line
 * head and the four standard notices (info, success, warning, danger). There is
 * no state, no effect and no handler here: the reference has no script and
 * nothing focusable, so the ladder is static markup driven by data.
 */
export function App() {
  return (
    <main className="box-border flex min-h-screen flex-col items-center px-4 py-[clamp(24px,7vw,88px)]">
      <section
        aria-labelledby="noticeboard-title"
        className="grid w-full max-w-[680px] content-start gap-[14px] leading-[1.5] text-ink"
      >
        <header className="mb-[14px]">
          <p className="m-0 mb-[6px] text-[13px] font-semibold tracking-[.04em] text-muted uppercase">
            {PANEL.eyebrow}
          </p>
          <h1
            id="noticeboard-title"
            className="m-0 text-[clamp(24px,4vw,30px)] leading-[1.5] font-bold tracking-[-.02em]"
          >
            {PANEL.title}
          </h1>
          <p className="mt-2 mr-0 mb-0 ml-0 text-[15px] leading-[1.5] text-muted">
            {PANEL.intro}
          </p>
        </header>
        {NOTICES.map((notice) => (
          <Alert key={notice.severity} notice={notice} />
        ))}
      </section>
      <PageFooter />
    </main>
  )
}
