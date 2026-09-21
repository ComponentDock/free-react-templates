import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function VisitUs() {
  return (
    <section id="contact" className="bg-midnight py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Details */}
          <div>
            <span className="font-script text-3xl text-brand">Visit Us</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
              Visit Our Tailor
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-1 shrink-0 text-brand" />
                <div>
                  <p className="font-display font-semibold text-white">71 Madison Ave</p>
                  <p className="text-mist">10013 New York</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="mt-1 shrink-0 text-brand" />
                <div>
                  <p className="font-display font-semibold text-white">914-309-701</p>
                  <p className="text-mist">914-329-211</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} className="mt-1 shrink-0 text-brand" />
                <div>
                  <p className="font-display font-semibold text-white">
                    reservations@sartorial.com
                  </p>
                  <p className="text-mist">office@sartorial.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} className="mt-1 shrink-0 text-brand" />
                <div>
                  <p className="font-display font-semibold text-white">
                    Mon – Thu: 10:00 am – 01:00 am
                  </p>
                  <p className="text-mist">Fri – Sun: 10:00 am – 02:00 am</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="overflow-hidden rounded-sm">
            <img
              src="https://picsum.photos/seed/sartorial-map/600/450"
              alt="Map location"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
