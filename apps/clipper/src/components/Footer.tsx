import { Mail, MapPin, Phone, Scissors } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const posts = [
  { date: 'March 20, 2018', title: '7 Best Haircuts for Summer' },
  { date: 'March 20, 2018', title: '4 Grooming Habits Every Man Should Own' },
  { date: 'March 20, 2018', title: 'Why You Should Visit the Barbershop Today' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-paper transition-colors dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
              <Scissors className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-black uppercase tracking-tight text-ink dark:text-white">
              Clipper<span className="text-brand">.</span>
            </span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-mist dark:text-gray-400">
            Your neighborhood barbershop for classic cuts, modern styles, and honest advice.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-mist dark:text-gray-400">
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              34 Street Name, City Name Here, United States
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              +1 242 4942 290
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              webmaster@free-templates.cc
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink dark:text-white">
            Links
          </h3>
          <ul className="mt-5 space-y-2 text-sm text-mist dark:text-gray-400">
            {[
              { label: 'About', href: '#about' },
              { label: 'Hairstyle', href: '#services' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink dark:text-white">
            Latest Blog
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            {posts.map((post) => (
              <li key={post.title}>
                <a href="#about" className="block transition-colors hover:text-brand">
                  <span className="text-mist dark:text-gray-500">{post.date}</span>
                  <span className="mt-1 block font-medium text-ink dark:text-white">
                    {post.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink dark:text-white">
            Connect
          </h3>
          <div className="mt-5 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#contact"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-mist transition-colors hover:border-brand hover:bg-brand hover:text-white dark:border-gray-700 dark:text-gray-400"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-5 text-center text-sm text-mist dark:border-gray-800 dark:text-gray-500">
        Copyright © {new Date().getFullYear()} All rights reserved | Clipper
      </div>
    </footer>
  )
}
