import { Mail, Phone } from 'lucide-react'
import { contact } from '../data'

/** Thin orange info strip above the main navigation. */
export function TopBar() {
  return (
    <div className="bg-accent-500">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-6 text-xs font-medium tracking-widest text-white uppercase">
          <span className="hidden items-center gap-2 sm:flex">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {contact.phone}
          </span>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 transition-colors hover:text-primary-500"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {contact.email}
          </a>
        </div>
        <a
          href="#pricing"
          className="inline-flex h-10 items-center bg-primary-500 px-10 text-xs font-medium tracking-widest text-white uppercase transition-colors hover:bg-primary-600"
        >
          Purchase Hosting
        </a>
      </div>
    </div>
  )
}
