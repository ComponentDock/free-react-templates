import { Mail, MapPin, Phone } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8v3h2.7v7h2.8Z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M18.9 3h3.1l-6.8 7.8L23 21h-6.3l-4.9-6.4L6.2 21H3.1l7.3-8.3L2.5 3h6.4l4.4 5.9L18.9 3Zm-1.1 16.1h1.7L7.9 4.8H6.1l11.7 14.3Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2a3.8 3.8 0 0 1-.9 1.4c-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.8.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.3-.3.7-.3 1.8-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.1.7.3 1.8.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.8-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.3.3-.7.3-1.8.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.8a2.9 2.9 0 0 0-.7-1.1 2.9 2.9 0 0 0-1.1-.7c-.3-.1-.7-.3-1.8-.3-1.3-.1-1.7-.1-4.8-.1Zm0 3.1a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 8.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm7.9 4.6a8.3 8.3 0 0 0-6.8-3c-2.3 0-4.3.9-5.8 2.4a8.3 8.3 0 0 0-1.6 10.4 8.3 8.3 0 0 0 9.6 2.3 8.3 8.3 0 0 0 4.6-9.7ZM12 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8Zm5.5-4.5a6.8 6.8 0 0 0-3.2-.8c-1.8 0-3.4.8-4.5 2l-.5-.3c-.2-.1-.4 0-.5.2l-.2.4c-.5-.7-1.2-1.3-2-1.7l.2-.5c.1-.2 0-.4-.2-.5a6.8 6.8 0 0 0-2.3-1c-.5 1-.9 2.1-1 3.2a6.8 6.8 0 0 0 3.9 6.2c.8.3 1.6.5 2.5.5a6.8 6.8 0 0 0 6.4-4.3 6.8 6.8 0 0 0-.6-3.2Z" />
    </svg>
  )
}

const practiceAreaLinks = [
  'Business Law',
  'Family Law',
  'Criminal Law',
  'Real Estate Law',
  'Personal Injury',
  'Judicial Law',
] as const

const serviceLinks = [
  'Legal Consultation',
  'Case Evaluation',
  'Court Representation',
  'Legal Documentation',
  'Mediation Services',
  'Appeals',
] as const

export function Footer() {
  return (
    <footer className="bg-[#212529] text-[#b2b2b8]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Company info */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">Docket</h3>
          <p className="mb-4 text-sm leading-relaxed">
            Providing exceptional legal services with integrity and dedication. Our team is
            committed to fighting for justice and protecting your rights.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="transition-colors hover:text-white"
            >
              <FacebookIcon />
            </a>
            <a href="#twitter" aria-label="Twitter" className="transition-colors hover:text-white">
              <TwitterIcon />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="transition-colors hover:text-white"
            >
              <InstagramIcon />
            </a>
            <a
              href="#dribbble"
              aria-label="Dribbble"
              className="transition-colors hover:text-white"
            >
              <DribbbleIcon />
            </a>
          </div>
        </div>

        {/* Practice Areas */}
        <nav aria-label="Practice areas">
          <h3 className="mb-5 text-lg font-bold text-white">Practice Areas</h3>
          <ul className="space-y-3 text-sm">
            {practiceAreaLinks.map((link) => (
              <li key={link}>
                <a href="#practice-areas" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services">
          <h3 className="mb-5 text-lg font-bold text-white">Services</h3>
          <ul className="space-y-3 text-sm">
            {serviceLinks.map((link) => (
              <li key={link}>
                <a href="#services" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#007bff]" aria-hidden="true" />
              123 Legal Street, Suite 100, New York, NY 10001
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#007bff]" aria-hidden="true" />
              +00 1234 567
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#007bff]" aria-hidden="true" />
              youremail@email.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs sm:px-6">
          <p>
            © 2026 All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white underline-offset-2 transition-colors hover:text-[#007bff] hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
