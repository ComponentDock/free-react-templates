import { MapPin, Phone, Bus, Utensils } from 'lucide-react'
import { FOOTER } from '../data'

const ICON_MAP = {
  'map-pin': MapPin,
  phone: Phone,
  bus: Bus,
  utensils: Utensils,
} as const

/** Footer — dark background, 4-column contact info with icons, and
    a copyright bar linking to Component Dock. */
export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER.columns.map((col) => {
            const Icon = ICON_MAP[col.icon]
            return (
              <div key={col.title}>
                <div className="mb-4 flex items-center gap-2">
                  <Icon className="h-5 w-5 text-brand" />
                  <h3 className="font-heading text-lg font-bold">{col.title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  {col.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-sm text-white/50 sm:flex-row">
          <p>{FOOTER.copyright}</p>
          <a
            href={FOOTER.dockLink.href}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            {FOOTER.dockLink.label}
          </a>
        </div>
      </div>
    </footer>
  )
}
