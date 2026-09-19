import { Phone, Mail, HelpCircle, LogIn, Users } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-paper py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="hidden items-center gap-6 text-sm text-mist lg:flex">
          <a href="#" className="flex items-center gap-1 hover:text-brand">
            <HelpCircle className="h-4 w-4" aria-hidden="true" />
            Have a question?
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-brand">
            <Phone className="h-4 w-4" aria-hidden="true" />
            10 20 123 456
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-brand">
            <Mail className="h-4 w-4" aria-hidden="true" />
            info@mydomain.com
          </a>
        </div>
        <div className="flex items-center gap-3 text-sm lg:ml-auto">
          <a href="#login" className="flex items-center gap-1 text-mist hover:text-brand">
            <LogIn className="h-4 w-4" aria-hidden="true" />
            Log In
          </a>
          <a
            href="#register"
            className="flex items-center gap-1 rounded-none bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            <Users className="h-4 w-4" aria-hidden="true" />
            Register
          </a>
        </div>
      </div>
    </div>
  )
}
