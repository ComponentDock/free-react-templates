import { BrandIcon } from './BrandIcon'

const socials = [
  { name: 'twitter' as const, label: 'Twitter' },
  { name: 'facebook' as const, label: 'Facebook' },
  { name: 'google' as const, label: 'Google' },
  { name: 'instagram' as const, label: 'Instagram' },
]

export function ContactCta() {
  return (
    <section id="contact" className="bg-brand py-16">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <ul className="flex items-center justify-center gap-4">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href="#"
                aria-label={social.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/20"
              >
                <BrandIcon name={social.name} className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
