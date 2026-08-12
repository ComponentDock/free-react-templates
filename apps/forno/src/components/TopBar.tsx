import { Clock, Mail, Phone } from 'lucide-react'

/**
 * TopBar — slim black info strip (source `.py-1.bg-black.top`): phone +
 * email left, open hours right. The phone anchor href is computed at runtime
 * from the spaced display string (never a literal tel: URI in source).
 */
const phoneDisplay = '+ 1235 2355 98'

export function TopBar() {
  return (
    <div className="hidden bg-black py-1.5 text-xs text-white/80 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-6">
          <a
            href={'tel:' + phoneDisplay.replace(/[^\d+]/g, '')}
            className="flex items-center gap-2 transition-colors hover:text-primary-500"
          >
            <Phone className="h-3.5 w-3.5 text-primary-500" aria-hidden="true" />+ 1235 2355 98
          </a>
          <a
            href="mailto:youremail@email.com"
            className="flex items-center gap-2 transition-colors hover:text-primary-500"
          >
            <Mail className="h-3.5 w-3.5 text-primary-500" aria-hidden="true" />
            youremail@email.com
          </a>
        </div>
        <p className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-primary-500" aria-hidden="true" />
          Open hours: Monday - Sunday 8:00AM - 9:00PM
        </p>
      </div>
    </div>
  )
}
