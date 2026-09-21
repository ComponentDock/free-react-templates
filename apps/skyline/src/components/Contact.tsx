import { MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex items-center justify-center rounded-lg bg-gray-200 py-24 dark:bg-gray-800">
            <MapPin className="h-12 w-12 text-mist" aria-hidden="true" />
          </div>

          <div>
            <h2 className="font-display text-4xl font-bold text-ink">
              Skyline
              <br />
              Fine Dining
              <br />
              Restaurant
            </h2>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <p className="text-mist">432 Wyandotte Ave, Lakewood, OH 44107</p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div className="text-mist">
                  <p>(216) 785-9346</p>
                  <p>(216) 785-9347</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div className="text-mist">
                  <p>info@skylinerestaurant.com</p>
                  <p>reservations@skylinerestaurant.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
