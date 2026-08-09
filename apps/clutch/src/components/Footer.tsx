import { Car, Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const columns = [
  {
    title: 'Infomation',
    links: ['Purchase', 'Payment', 'Shipping', 'Return'] as const,
  },
  {
    title: 'Cars',
    links: ['Hatchback', 'Sedan', 'SUV', 'Crossover'] as const,
  },
  {
    title: 'Top Brand',
    links: [
      'Abarth',
      'Acura',
      'Alfa Romeo',
      'Audi',
      'BMW',
      'Chevrolet',
      'Ferrari',
      'Honda',
    ] as const,
  },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-coal text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-black uppercase">Contact Us Now!</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">
          Any questions? Let us know in store at 625 Gloria Union, California, United States, or
          call us on (+1) 96 123 8888.
        </p>

        <div className="mt-10 grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
                <Car className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-black uppercase tracking-tight">
                Clutch<span className="text-brand">.</span>
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                (+12) 345 678 910
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                webmaster@free-templates.cc
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                625 Gloria Union, California, United States
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white/80">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-2 text-sm text-white/60">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#contact" className="transition-colors hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        Copyright © {new Date().getFullYear()} All rights reserved | Clutch
      </div>
    </footer>
  )
}
