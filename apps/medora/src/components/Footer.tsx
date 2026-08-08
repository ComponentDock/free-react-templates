import { BrandIcon, type BrandName } from './BrandIcon'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const quickLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Appointment', href: '#appointment' },
]

const departmentLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Cardiology', href: '#departments' },
  { label: 'Pediatrics', href: '#departments' },
  { label: 'Orthopedics', href: '#departments' },
  { label: 'Neurology', href: '#departments' },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <a href="#home" className="text-2xl font-extrabold tracking-tight text-white">
            Medora
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Compassionate, patient-first medical care for you and your family — from routine
            check-ups to specialized treatment.
          </p>
          <h3 className="mt-8 text-sm font-bold uppercase tracking-widest text-white">Connect</h3>
          <ul className="mt-4 flex items-center gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#home"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Departments">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Departments</h3>
          <ul className="mt-4 space-y-2.5">
            {departmentLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              123 Wellness Avenue, Medical District
            </li>
            <li>
              <a
                href="tel:+15550199005"
                className="flex items-start gap-2.5 transition-colors hover:text-brand"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +1 (555) 019-9005
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@medora.clinic"
                className="flex items-start gap-2.5 transition-colors hover:text-brand"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                hello@medora.clinic
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              Mon–Sat: 8:00 AM – 8:00 PM
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black/40 py-5 text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center text-xs sm:flex-row sm:px-6 sm:text-left">
          <p>© 2026 Medora. All rights reserved.</p>
          <p>recreation of ColorLib Medical Wordpress Themes</p>
        </div>
      </div>
    </footer>
  )
}
