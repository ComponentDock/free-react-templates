import { Clock, MapPin, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-brand py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              <h2 className="font-display text-3xl font-extrabold uppercase">Melbourne</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Email: info@terracotta.example
              <br />
              Phone no: 23 113 6456 888
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" aria-hidden="true" />
                <h3 className="font-display text-base font-bold uppercase">Call Directly</h3>
              </div>
              <p className="mt-2 font-display text-2xl font-extrabold">(23 131 65465 54)</p>
            </div>
            <div>
              <h3 className="font-display text-base font-bold uppercase">Brand Office</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                324 King Terracotta tower, House no, 15 King building, Melbourne VIC-222, Australia
              </p>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" aria-hidden="true" />
                <h3 className="font-display text-base font-bold uppercase">Working Hours</h3>
              </div>
              <p className="mt-2 text-sm text-white/80">Monday – Friday / 9.00 AM – 5.00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
