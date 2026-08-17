import { Leaf } from 'lucide-react'
import { brandName, tagline, topBarContacts } from '../data'

export function TopBar() {
  return (
    <header className="bg-ink text-faint">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6">
        <div className="flex items-center gap-3">
          <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-white">
            <Leaf aria-hidden="true" className="h-6 w-6 text-brand" />
            {brandName}
          </a>
          <span className="mt-1 text-sm">{tagline}</span>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {topBarContacts.map((contact) => {
            const Icon = contact.icon
            return (
              <li key={contact.label} className="flex items-center gap-2 text-sm">
                <Icon aria-hidden="true" className="h-5 w-5 text-brand" />
                <span>
                  <span className="text-brand">{contact.label}</span> {contact.value}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
