import { Phone, MapPin, Mail } from 'lucide-react'

export function InfoBar() {
  return (
    <div className="bg-white py-4 border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row lg:px-8">
        <a href="/" className="font-heading text-2xl font-bold text-[#19191a]">
          Terravault
        </a>
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-text">
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 text-gray-text hover:text-[#2cbdb8]"
          >
            <Phone size={16} className="text-[#2cbdb8]" />
            +1 (555) 123-4567
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-[#2cbdb8]" />
            123 Main Street, New York, NY
          </span>
          <a
            href="mailto:info@terravault.com"
            className="flex items-center gap-2 text-gray-text hover:text-[#2cbdb8]"
          >
            <Mail size={16} className="text-[#2cbdb8]" />
            info@terravault.com
          </a>
        </div>
      </div>
    </div>
  )
}
