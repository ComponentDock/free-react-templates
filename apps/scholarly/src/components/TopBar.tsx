import { Mail, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function TopBar() {
  return (
    <div className="bg-navy-900 text-sm text-gray-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-6">
          <a href="mailto:info@scholarly.edu" className="flex items-center gap-1 hover:text-white">
            <Mail className="h-3.5 w-3.5" />
            info@scholarly.edu
          </a>
          <a href="tel:+15551234567" className="flex items-center gap-1 hover:text-white">
            <Phone className="h-3.5 w-3.5" />
            +1 (555) 123-4567
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#alumni" className="hover:text-white">
            Alumni
          </a>
          <a href="#calendar" className="hover:text-white">
            Calendar
          </a>
          <a href="#portal" className="hover:text-white">
            Portal
          </a>
          <Button className="rounded bg-primary-400 px-4 py-1 text-xs font-medium text-white hover:bg-primary-500">
            Support
          </Button>
        </div>
      </div>
    </div>
  )
}
