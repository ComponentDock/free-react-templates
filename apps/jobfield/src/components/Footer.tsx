import { Briefcase, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from './social-icons'

const columns = [
  {
    title: 'For Job Seekers',
    links: ['Browse Jobs', 'Companies', 'Career Tips', 'Salary Guide'],
  },
  {
    title: 'For Employers',
    links: ['Post a Job', 'Pricing', 'For Employers', 'Hiring Resources'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'About Us', 'Features', 'Style Guide'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'Privacy Policy', 'Terms of Service'],
  },
] as const

const socials = [
  { label: 'Jobfield on X', icon: XIcon },
  { label: 'Jobfield on LinkedIn', icon: LinkedinIcon },
  { label: 'Jobfield on Facebook', icon: FacebookIcon },
  { label: 'Jobfield on Instagram', icon: InstagramIcon },
] as const

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
                <Briefcase className="h-4 w-4" aria-hidden="true" />
              </span>
              Jobfield
            </a>
            <p className="mt-4 max-w-sm text-sm text-gray-400">
              Connect with your next career opportunity. Jobfield is the modern job board platform
              for top talent and leading employers.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-500" aria-hidden="true" />
                <a href="tel:+15554923847" className="transition-colors hover:text-white">
                  (555) 492-3847
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-500" aria-hidden="true" />
                <a href="mailto:hello@jobfield.com" className="transition-colors hover:text-white">
                  hello@jobfield.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gray-500" aria-hidden="true" />
                <span>200 Tech Boulevard, San Francisco, CA 94105</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#home"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-gray-800 pt-8 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-gray-400">© 2026 Jobfield. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a href="#home" className="text-sm text-gray-400 transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#home" className="text-sm text-gray-400 transition-colors hover:text-white">
                Terms of Service
              </a>
              <a href="#home" className="text-sm text-gray-400 transition-colors hover:text-white">
                Style Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
