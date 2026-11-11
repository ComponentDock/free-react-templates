import { useState } from 'react'
import { HEADING_ID, HEADLINE, EYEBROW, LEDE, SECTION_ID } from './content'
import { DEFAULT_CALLS_INDEX, DEFAULT_STORAGE_INDEX, estimateFor } from './pricing'
import { BillCard } from './components/BillCard'
import { SiteFooter } from './components/SiteFooter'
import { UsageControls } from './components/UsageControls'

/**
 * Runrate — one band on an ink-navy ground: a prose head, then a two-column body
 * of a dark control panel and a light bill card.
 *
 * Three pieces of state, all raw control positions: the calls step index, the
 * storage step index and the support boolean. Every visible figure — the two
 * pills, the two `aria-valuetext`s, the two track fills, the four line amounts,
 * the four bar sizes, the total and the announced sentence — is derived from
 * those three in one pure call, so the panel and the card can never disagree.
 */
export function App() {
  const [callsIndex, setCallsIndex] = useState(DEFAULT_CALLS_INDEX)
  const [storageIndex, setStorageIndex] = useState(DEFAULT_STORAGE_INDEX)
  const [support, setSupport] = useState(false)

  const estimate = estimateFor(callsIndex, storageIndex, support)

  return (
    <>
      <main className="rr-main">
        <section className="rr-section" id={SECTION_ID} aria-labelledby={HEADING_ID}>
          <header className="rr-head">
            <p className="rr-eyebrow">{EYEBROW}</p>
            <h1 className="rr-title" id={HEADING_ID}>
              {HEADLINE}
            </h1>
            <p className="rr-lede">{LEDE}</p>
          </header>

          <div className="rr-body">
            <UsageControls
              estimate={estimate}
              callsIndex={callsIndex}
              storageIndex={storageIndex}
              support={support}
              onCallsChange={setCallsIndex}
              onStorageChange={setStorageIndex}
              onSupportChange={setSupport}
            />

            <BillCard estimate={estimate} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
