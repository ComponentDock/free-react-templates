import { Phone, Mail } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-bg-dark text-white text-sm" data-testid="topbar">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-2">
          <div className="flex items-center gap-4">
            <a
              href="tel:+001234567"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Phone size={14} />
              <span>+00 1234 567</span>
            </a>
            <a
              href="mailto:youremail@email.com"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Mail size={14} />
              <span>youremail@email.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            {['Twitter', 'Facebook', 'Instagram', 'Dribbble'].map((name) => (
              <a
                key={name}
                href="#"
                aria-label={`topbar-${name}`}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-xs"
              >
                {name[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
