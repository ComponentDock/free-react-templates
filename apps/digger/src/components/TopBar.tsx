import { AtSign, Camera, Mail, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function TopBar() {
  return (
    <div
      className={cn(
        'text-white text-sm py-2',
        'bg-gradient-to-r from-[#7a5e86] via-[#a75e67] to-[#f77b2e]',
      )}
    >
      <div className="mx-auto max-w-6xl px-4 flex justify-between items-center">
        <div className="flex gap-6">
          <a
            href="mailto:info@digger.com"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Mail size={14} />
            <span>info@digger.com</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone size={14} />
            <span>+1 234 567 890</span>
          </a>
        </div>
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
            <AtSign size={14} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
            <Camera size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
