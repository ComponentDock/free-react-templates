import { MapPin, Send } from 'lucide-react'

const contact = {
  callLabel: 'Free Call',
  phone: '+1 234 456 78910',
  address: '198 West 21th Street, Suite 721 New York NY 10016',
  hoursLabel: 'Open Hours',
  hoursWeek: 'Mon - Sat: 8:00am - 9:00pm',
  hoursSunday: 'Sun: Closed',
}

/** Top contact bar: contact info left, centered brand logo, open hours
    right (the source .topper row above the navbar). */
export function TopBar() {
  return (
    <div className="border-b border-black/5 bg-white py-5">
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="flex items-center justify-center gap-3 text-center lg:justify-start lg:text-left">
          <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-black/5">
            <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-medium text-ink">{contact.callLabel}</span>
            <span className="block text-sm text-mist">{contact.phone}</span>
            <span className="block text-xs text-mist">{contact.address}</span>
          </span>
        </div>

        <div className="text-center">
          <p className="text-2xl font-medium text-ink">Enamel</p>
          <p className="text-xs uppercase tracking-[2px] text-mist">Dental Clinic</p>
        </div>

        <div className="flex items-center justify-center gap-3 lg:justify-end">
          <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-black/5">
            <Send className="h-5 w-5 text-primary" aria-hidden="true" />
          </span>
          <span className="text-left">
            <span className="block text-sm font-medium text-ink">{contact.hoursLabel}</span>
            <span className="block text-sm text-mist">{contact.hoursWeek}</span>
            <span className="block text-xs text-mist">{contact.hoursSunday}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
