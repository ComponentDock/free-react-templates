import { Clock, MapPin, Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Intro() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="rounded-2xl bg-paper p-8 shadow-sm">
            <h2 className="font-display text-2xl font-black text-ink">Contact Details</h2>
            <ul className="mt-6 space-y-4 text-sm text-mist">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold text-ink">Call us now</p>
                  <p>+2 392 3929 210</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold text-ink">Location</p>
                  <p>203 Fake St. Mountain View, San Francisco</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold text-ink">Open hours</p>
                  <p>Mon – Fri: 8:00AM – 8:00PM</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand">
              About our shop
            </span>
            <h2 className="mt-2 font-display text-3xl font-black text-ink sm:text-4xl">
              Your Trusted Auto Repair &amp; Maintenance Experts
            </h2>
            <p className="mt-6 leading-relaxed text-mist">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#appointment" className="bg-brand text-white hover:bg-brand-dark">
                Make An Appointment
              </ButtonLink>
              <ButtonLink href="#services" variant="outline">
                Maintenance Services
              </ButtonLink>
              <ButtonLink href="#services" variant="outline">
                More Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
