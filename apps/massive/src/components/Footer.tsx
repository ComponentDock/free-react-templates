import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const links = ['Home', 'Features', 'App', 'Video', 'Screenshot', 'Team', 'Pricing'] as const

export function Footer() {
  return (
    <footer className="bg-navy py-16 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-xl font-bold text-white">About Massive</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              A free app landing template inspired by a ColorLib design — recreated with React,
              Tailwind CSS, and TypeScript.
            </p>
            <div className="mt-6">
              <SocialLinks inverted />
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {['Documentation', 'Support Center', 'Changelog', 'Status'].map((item) => (
                <li key={item}>
                  <a href="#home" className="text-gray-400 transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                <span className="text-gray-400">43 Raymouth Rd. Baltemoer, London 3910</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                <span className="text-gray-400">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                <span className="text-gray-400">info@massive.app</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-sm text-gray-400 sm:flex-row sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} Massive. All rights reserved.</p>
          <p>
            Made with <span aria-hidden="true">♥</span> by Massive
          </p>
        </div>
      </div>
    </footer>
  )
}
