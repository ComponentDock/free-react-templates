import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const links = ['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'] as const

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-xl font-bold text-white">About Mosh</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              A free creative business template inspired by a ColorLib design — recreated with
              React, Tailwind CSS, and TypeScript.
            </p>
            <div className="mt-6">
              <SocialLinks inverted />
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white">Fast links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white">Blog</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                'Why we love stock photos',
                'Designin on grid. A few rules.',
                '2017 World Design Congress',
              ].map((post) => (
                <li key={post}>
                  <a href="#home" className="text-gray-400 transition-colors hover:text-white">
                    {post}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white">Contact Info</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                <span className="text-gray-400">43 Raymouth Rd. Baltemoer, London 3910</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                <span className="text-gray-400">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                <span className="text-gray-400">info@mosh.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-sm text-gray-400 sm:flex-row sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} Mosh. All rights reserved.</p>
          <p>
            Made with <span aria-hidden="true">♥</span> by Mosh
          </p>
        </div>
      </div>
    </footer>
  )
}
