import { MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Address */}
          <div className="flex gap-4">
            <div className="shrink-0 text-primary-400">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="mb-2 font-[Oswald] text-lg font-semibold uppercase text-white">
                Address
              </h3>
              <p className="font-[Muli] text-sm leading-relaxed text-white/70">
                333 Middle Winchendon Rd,
                <br />
                Rindge, NH 03461
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div className="shrink-0 text-primary-400">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="mb-2 font-[Oswald] text-lg font-semibold uppercase text-white">
                Phone
              </h3>
              <p className="font-[Muli] text-sm leading-relaxed text-white/70">
                125-711-811
                <br />
                125-668-886
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <div className="shrink-0 text-primary-400">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="mb-2 font-[Oswald] text-lg font-semibold uppercase text-white">
                Email
              </h3>
              <p className="font-[Muli] text-sm leading-relaxed text-white/70">
                Support@fitcraftcenter.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
