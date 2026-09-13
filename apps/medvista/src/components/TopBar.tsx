import { Phone, Send, User, LogIn } from 'lucide-react'

export function TopBar() {
  return (
    <div className="hidden bg-topbar text-white lg:block" data-testid="topbar">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center gap-6">
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-coral">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>+1 (234) 567 890</span>
          </a>
          <a href="mailto:info@medvista.com" className="flex items-center gap-2 hover:text-coral">
            <Send className="h-4 w-4" aria-hidden="true" />
            <span>info@medvista.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#signup" className="flex items-center gap-1 hover:text-coral">
            <User className="h-4 w-4" aria-hidden="true" />
            Sign Up
          </a>
          <a href="#signin" className="flex items-center gap-1 hover:text-coral">
            <LogIn className="h-4 w-4" aria-hidden="true" />
            Sign In
          </a>
        </div>
      </div>
    </div>
  )
}
