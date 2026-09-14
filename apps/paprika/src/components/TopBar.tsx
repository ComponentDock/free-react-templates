import { Phone, Mail, Calendar, Table } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-[#1a1a1a] text-white text-sm">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between py-2 gap-2">
        <div className="flex items-center gap-4">
          <a
            href="tel:+11683145016"
            className="flex items-center gap-1.5 hover:text-[#b10400] transition-colors"
          >
            <Phone size={14} />
            <span>+1 (168) 314 5016</span>
          </a>
          <a
            href="mailto:info@paprika.com"
            className="flex items-center gap-1.5 hover:text-[#b10400] transition-colors"
          >
            <Mail size={14} />
            <span>info@paprika.com</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="flex items-center gap-1.5 bg-[#b10400] text-white px-3 py-1 rounded text-xs font-semibold uppercase hover:bg-[#8b0300] transition-colors"
          >
            <Table size={14} />
            Book a Table
          </a>
          <a
            href="#events"
            className="flex items-center gap-1.5 border border-white text-white px-3 py-1 rounded text-xs font-semibold uppercase hover:bg-white hover:text-[#1a1a1a] transition-colors"
          >
            <Calendar size={14} />
            Book an Event
          </a>
        </div>
      </div>
    </div>
  )
}
