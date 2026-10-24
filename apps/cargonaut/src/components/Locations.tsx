import { Mail, MapPin, Phone } from 'lucide-react'
import { brand } from '../data'

export function Locations() {
  return (
    <div id="contact" className="mt-16 grid gap-6 sm:grid-cols-2">
      <article className="border border-white/15 bg-white/5 p-8">
        <MapPin className="h-6 w-6 text-brand" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-normal text-white">Location</h3>
        {brand.address.map((line) => (
          <p key={line} className="text-sm leading-7 text-white/70">
            {line}
          </p>
        ))}
      </article>

      <article className="border border-white/15 bg-white/5 p-8">
        <Phone className="h-6 w-6 text-brand" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-normal text-white">Location</h3>
        <p className="text-sm leading-7 text-white/70">{brand.quotePhone}</p>
        <a
          href={`mailto:${brand.supportEmail}`}
          className="mt-2 inline-flex items-center gap-2 text-sm text-white/70 hover:text-brand"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {brand.supportEmail}
        </a>
      </article>
    </div>
  )
}
