import { MapPin, Phone, Mail, Globe, Share2, Camera, Play } from 'lucide-react'

export function HeaderBar() {
  return (
    <div className="bg-brand text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-2 sm:flex-row sm:px-6">
        <div className="flex items-center gap-6 text-xs">
          <a
            href="tel:+103672672678"
            className="flex items-center gap-1 hover:text-accent transition-colors"
          >
            <Phone className="h-3 w-3" aria-hidden="true" />
            +10 367 267 2678
          </a>
          <span className="hidden items-center gap-1 sm:flex">
            <MapPin className="h-3 w-3" aria-hidden="true" />
            200, A-block, Green road, USA
          </span>
          <a
            href="mailto:info@homeward.com"
            className="flex items-center gap-1 hover:text-accent transition-colors"
          >
            <Mail className="h-3 w-3" aria-hidden="true" />
            info@homeward.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {[
              { icon: Globe, label: 'Facebook' },
              { icon: Share2, label: 'Twitter' },
              { icon: Camera, label: 'Instagram' },
              { icon: Play, label: 'YouTube' },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-white hover:text-accent transition-colors"
              >
                <s.icon className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs">
            <a href="#login" className="hover:text-accent transition-colors">
              Login
            </a>
            <span className="text-white/40">|</span>
            <a href="#register" className="hover:text-accent transition-colors">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
