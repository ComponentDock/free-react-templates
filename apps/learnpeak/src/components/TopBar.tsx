import { Phone, Mail } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-dark text-white text-xs py-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-muted-light">Have any questions?</span>
          <a
            href="tel:+5334579532453"
            className="flex items-center gap-1 hover:text-brand transition-colors"
          >
            <Phone size={12} /> +53 345 7953 32453
          </a>
          <a
            href="mailto:info@learnpeak.com"
            className="flex items-center gap-1 hover:text-brand transition-colors"
          >
            <Mail size={12} /> info@learnpeak.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-brand transition-colors">
            Register
          </a>
          <a href="#" className="hover:text-brand transition-colors">
            Login
          </a>
        </div>
      </div>
    </div>
  )
}
