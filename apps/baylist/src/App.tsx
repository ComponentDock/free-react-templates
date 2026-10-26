import { useState } from 'react'
import { LISTINGS, initialSavedIds, type Listing } from './data/listings'
import { ListingGrid } from './components/ListingGrid'
import { ListingHead } from './components/ListingHead'
import { PageFooter } from './components/PageFooter'

/**
 * Baylist — one head over three property listings on a warm paper ground. The
 * only behaviour is the save heart per card: the pressed heart is the whole
 * feedback, so the page has no counter, no announcement and no form. The
 * pre-saved middle card comes from data, not from an effect.
 */
export function App() {
  const [savedIds, setSavedIds] = useState<string[]>(initialSavedIds)

  function toggleSave(listing: Listing) {
    setSavedIds((ids) =>
      ids.includes(listing.id) ? ids.filter((id) => id !== listing.id) : [...ids, listing.id],
    )
  }

  return (
    <main className="mx-auto max-w-[1212px] px-4 py-[clamp(32px,6vw,72px)] text-ink">
      <ListingHead />
      <ListingGrid listings={LISTINGS} savedIds={savedIds} onToggle={toggleSave} />
      <PageFooter />
    </main>
  )
}
