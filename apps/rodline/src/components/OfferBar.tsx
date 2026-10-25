import { useState } from 'react'
import { X } from 'lucide-react'
import { contact, offer } from '../content'

/**
 * 44 px strip above the sticky header: the whole offer in one line, a phone
 * number and a dismissal that removes the node without remembering it.
 */
export function OfferBar() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) {
    return null
  }

  return (
    <div data-offer-bar className="bg-ink-800 text-white">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-2.5 lg:px-8">
        <p className="min-w-0 text-sm">
          <span className="font-bold">{offer.lead}</span>
          <span className="ml-2 hidden text-white/70 sm:inline">{offer.qualifier}</span>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <a href={contact.phoneHref} className="text-sm font-bold hover:text-primary-300">
            {contact.phone}
          </a>
          <button
            type="button"
            aria-label="Dismiss offer"
            onClick={() => setDismissed(true)}
            className="rounded p-1 text-white/50 transition-colors hover:text-white"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
