import { Phone, Mail } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-sky-400 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <div className="flex items-center gap-1 text-xs font-medium">
          <select
            className="rounded bg-transparent text-xs text-white focus:outline-none"
            aria-label="Language"
          >
            <option value="en">English</option>
            <option value="de">Germany</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <a
            href="tel:+9530123654896"
            className="flex items-center gap-1 text-white/90 hover:text-white"
          >
            <Phone className="h-3 w-3" />
            <span>+953 012 3654 896</span>
          </a>
          <a
            href="mailto:support@vitala.com"
            className="flex items-center gap-1 text-white/90 hover:text-white"
          >
            <Mail className="h-3 w-3" />
            <span>support@vitala.com</span>
          </a>
          <a
            href="#appointment"
            className="rounded-full bg-white px-4 py-1 text-xs font-medium uppercase text-sky-400 transition-colors hover:bg-sky-50"
          >
            Appointment
          </a>
        </div>
      </div>
    </div>
  )
}
