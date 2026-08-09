import { Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
]

const services = [
  'General Auto Repair',
  'Brake Repair & Replacement',
  'Air Conditioning Repair',
  'Tire Repair & Replacement',
  'Oil Change & Tune Up',
] as const

const recentPosts = [
  'Tips on How to Maintain Your Brand New Car',
  '5 Signs Your Brakes Need Attention',
  'Why Regular Oil Changes Matter',
] as const

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/fixly-footer/1920/800')" }}
    >
      <div className="absolute inset-0 bg-coal/95" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-display text-lg font-black uppercase tracking-wide">
              Fixly Auto Repair Shop
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
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

          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white/80">
              Services
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-white/60">
              {services.map((item) => (
                <li key={item}>
                  <a href="#services" className="transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white/80">
              Recent Posts
            </h2>
            <ul className="mt-5 space-y-2 text-sm text-white/60">
              {recentPosts.map((item) => (
                <li key={item}>
                  <a href="#blog" className="transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white/80">
              Have a Questions?
            </h2>
            <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              203 Fake St. Mountain View
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/60">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> +2 392 3929 210
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/60">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              info@yourdomain.com
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>© 2026 Fixly. All rights reserved.</p>
          <p>recreation of ColorLib Carepair</p>
        </div>
      </div>
    </footer>
  )
}
