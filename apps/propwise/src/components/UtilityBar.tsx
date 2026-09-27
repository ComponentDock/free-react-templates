import { Phone } from 'lucide-react'

export function UtilityBar() {
  return (
    <div className="hidden border-b border-gray-100 bg-white text-xs text-body md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-end gap-6 px-4 py-2 sm:px-6">
        <a
          href="tel:+1231231209"
          className="flex items-center gap-1.5 hover:text-heading transition-colors"
        >
          <Phone className="h-3 w-3" aria-hidden="true" />
          +12312-3-1209
        </a>
        <a href="#sell" className="hover:text-heading transition-colors">
          SELL / RENT PROPERTY
        </a>
        <a href="#login" className="hover:text-heading transition-colors">
          LOGIN / REGISTER
        </a>
      </div>
    </div>
  )
}
