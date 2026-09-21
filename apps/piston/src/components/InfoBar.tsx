import { Phone, MapPin, Clock } from 'lucide-react'

export function InfoBar() {
  return (
    <section className="relative z-20 bg-accent py-4">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 text-center text-dark md:grid-cols-3">
        <div className="flex items-center justify-center gap-2">
          <Phone size={18} />
          <span>10-367-5501</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <MapPin size={18} />
          <span>198 West 21th Street, Suite 721 New York NY 10016</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Clock size={18} />
          <span>09AM — 09PM</span>
        </div>
      </div>
    </section>
  )
}
