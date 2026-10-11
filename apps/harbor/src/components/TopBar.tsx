import { Mail, MessageCircle, Phone, UserCheck } from 'lucide-react'

/**
 * Thin contact/auth strip that sits above the logo row on the navy shell.
 */
export function TopBar() {
  return (
    <div className="border-b border-navy-700 py-2.5">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-[13px] text-white sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex items-center gap-6">
          <li className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            <a href="tel:+15550142290" className="transition-colors hover:text-brand">
              +1 (555) 014-2290
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            <a href="mailto:support@harbor.example" className="transition-colors hover:text-brand">
              support@harbor.example
            </a>
          </li>
        </ul>
        <ul className="flex items-center gap-6">
          <li className="flex items-center gap-2">
            <MessageCircle className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            <a href="#contact" className="transition-colors hover:text-brand">
              Live chat
            </a>
          </li>
          <li className="flex items-center gap-2">
            <UserCheck className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            <a href="#contact" className="transition-colors hover:text-brand">
              Login / Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
