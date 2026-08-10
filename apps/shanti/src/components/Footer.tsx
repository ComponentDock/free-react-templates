import { Flower2 } from 'lucide-react'
import { Facebook, Instagram, Twitter } from './social-icons'

const socials = [
  { label: 'Twitter', href: '#', Icon: Twitter },
  { label: 'Facebook', href: '#', Icon: Facebook },
  { label: 'Instagram', href: '#', Icon: Instagram },
] as const

export function Footer() {
  return (
    <footer className="bg-mauve-500 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex items-center gap-3">
            <Flower2 className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
            <h1 className="text-3xl font-extralight text-white">Shanti</h1>
          </div>
          <p className="max-w-xl text-lg text-white/90">
            <span className="block">203 Fake St. Mountain View, San Francisco,</span>
            <span className="block">California, USA</span>
          </p>
          <ul className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.Icon
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={`Visit our ${social.label} page`}
                    className="flex h-13 w-13 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/20"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="mt-16 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Shanti — a free React template from the
            free-react-templates collection.
          </p>
        </div>
      </div>
    </footer>
  )
}
