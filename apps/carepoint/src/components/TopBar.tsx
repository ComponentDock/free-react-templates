import { Phone } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-brand-blue text-white text-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-brand-green transition-colors">
              FAQ
            </a>
            <a href="#appointment" className="hover:text-brand-green transition-colors">
              Request an Appointment
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/90">
            <Phone className="w-4 h-4" />
            <span>For Emergencies: +563 47558 623</span>
          </div>
        </div>
      </div>
    </div>
  )
}
