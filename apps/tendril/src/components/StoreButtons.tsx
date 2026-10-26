import type { ReactNode } from 'react'
import { STORES, type Store } from '../data/site'

/** Generic outline glyphs — a rounded phone and a play triangle, no trademarks. */
const ICONS: Record<Store['icon'], ReactNode> = {
  phone: (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="6"
        y="2.5"
        width="12"
        height="19"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M10.5 18.5h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  play: (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 3.8v16.4a1 1 0 0 0 1.5.9l13-8.2a1 1 0 0 0 0-1.7l-13-8.2A1 1 0 0 0 6 3.8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

/**
 * Two 190px store buttons. The width is a `min-width` floor, so the two label
 * lines can change without moving the row: only the sheet's `max-width: 520`
 * block ever stacks them.
 */
export function StoreButtons() {
  return (
    <div className="td-stores">
      {STORES.map((store) => (
        <a key={store.name} href={store.href} className="td-store">
          {ICONS[store.icon]}
          <span>
            <small className="td-store-top">{store.top}</small>
            <span className="td-store-name">{store.name}</span>
          </span>
        </a>
      ))}
    </div>
  )
}
