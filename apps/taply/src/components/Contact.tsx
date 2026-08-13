import { Mail, MapPin, Phone } from 'lucide-react'
import { contact, phoneHref } from '../data'
import { BrandIcon } from './BrandIcon'

const socials = ['facebook', 'twitter', 'instagram'] as const

/** Contact block on lavender: address, email (mailto:), phone (tel: href
 *  computed at runtime) and social icons. */
export function Contact() {
  return (
    <section id="contact" className="bg-lavender px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
        <div>
          <p className="flex items-center justify-center gap-2 text-sm text-brand-purple lg:justify-start">
            <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
            {contact.address}
          </p>
          <div className="mt-2 flex flex-col items-center gap-2 sm:flex-row sm:justify-center lg:justify-start">
            <p className="flex items-center gap-2 text-sm text-brand-purple">
              <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-brand">
                {contact.email}
              </a>
            </p>
            <p className="flex items-center gap-2 text-sm text-brand-purple sm:ml-6">
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              <a
                href={phoneHref(contact.phoneDisplay)}
                className="transition-colors hover:text-brand"
              >
                {contact.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          {socials.map((social) => (
            <a
              key={social}
              href="#home"
              aria-label={`Taply on ${social}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-brand-purple transition-colors hover:bg-brand hover:text-white"
            >
              <BrandIcon name={social} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
