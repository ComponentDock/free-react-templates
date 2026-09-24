import { Phone, Mail, MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface TopBarProps {
  className?: string
}

export function TopBar({ className }: TopBarProps) {
  return (
    <div className={cn('bg-brand-blue text-white text-xs', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={12} aria-hidden="true" />
              +1 234 567 8900
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Mail size={12} aria-hidden="true" />
              info@healix.com
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={12} aria-hidden="true" />
            <span>123 Medical Center Dr, Health City, HC 12345</span>
          </div>
        </div>
      </div>
    </div>
  )
}
