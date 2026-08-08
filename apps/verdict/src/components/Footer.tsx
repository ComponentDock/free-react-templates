import { Clock, Mail, Phone, Shield } from 'lucide-react'

const practiceLinks = [
  'Corporate Law',
  'Litigation',
  'Real Estate',
  'Family Law',
  'Estate Planning',
  'Criminal Defense',
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#services' },
  { label: 'Attorneys', href: '#attorneys' },
  { label: 'Contact', href: '#contact' },
]

const contactDetails = [
  { label: 'Phone', value: '(555) 234-5678', icon: Phone },
  { label: 'Email', value: 'hello@verdictlaw.com', icon: Mail },
  { label: 'Hours', value: 'Mon - Fri: 8:00 AM - 6:00 PM', icon: Clock },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-primary-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3" aria-label="Verdict home">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-accent-400">
                <Shield className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Verdict
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              At Verdict, we combine decades of experience with a client-focused approach to deliver
              exceptional legal representation. Your success is our priority.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Practice Areas
            </h3>
            <ul className="mt-4 space-y-3">
              {practiceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 transition-colors hover:text-accent-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-center gap-2 text-sm text-gray-400">
                  <detail.icon className="h-4 w-4 text-accent-400" aria-hidden="true" />
                  {detail.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 max-w-3xl text-xs leading-relaxed text-gray-500">
          The information on this website is for general information purposes only. Nothing on this
          site should be taken as legal advice.
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Verdict. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-xs text-gray-500 transition-colors hover:text-accent-400"
            >
              Privacy Policy
            </a>
            <a
              href="#home"
              className="text-xs text-gray-500 transition-colors hover:text-accent-400"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
