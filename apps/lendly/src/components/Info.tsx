import { Mail, Phone } from 'lucide-react'
import { contact, info } from '../data'

export function Info() {
  return (
    <section className="bg-white py-[102px] pb-[90px]">
      <div className="mx-auto grid max-w-[1176px] items-center gap-10 px-4 lg:grid-cols-12">
        <img src={info.image} alt={info.imageAlt} className="w-full lg:col-span-5" />
        <div className="lg:col-span-7">
          <h2 className="mb-4 text-4xl font-bold text-ink">{info.heading}</h2>
          <p className="mb-4 text-lg text-ink">{info.hours}</p>
          <p className="mb-6 text-sm leading-7 text-muted">{info.paragraph}</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-ink">
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              {contact.supportPhone}
            </li>
            <li className="flex items-center gap-3 text-sm text-ink">
              <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
              {contact.email}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
