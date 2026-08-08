import { Mail, MapPin, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const details: ReadonlyArray<{
  label: string
  value: string
  icon: LucideIcon
  href?: string
}> = [
  {
    label: 'Address',
    value: '198 West 21th Street, Suite 721 New York NY 10016',
    icon: MapPin,
  },
  {
    label: 'Contact Number',
    value: '+ 1235 2355 98',
    icon: Phone,
    href: 'tel:+1235235598',
  },
  {
    label: 'Email Address',
    value: 'info@yoursite.com',
    icon: Mail,
    href: 'mailto:info@yoursite.com',
  },
] as const

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact us"
      className="bg-paper py-20 dark:bg-gray-900 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[3px] text-brand">Get in touch</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white">
          Contact Us
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {details.map((detail) => (
            <article
              key={detail.label}
              className="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-950"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
                <detail.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink dark:text-white">
                {detail.label}
              </h3>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="mt-2 block text-sm text-mist transition-colors hover:text-brand dark:text-white/60"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="mt-2 text-sm text-mist dark:text-white/60">{detail.value}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
