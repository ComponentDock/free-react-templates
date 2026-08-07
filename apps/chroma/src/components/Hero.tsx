import { ChevronDown } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const

export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="overflow-hidden bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 lg:py-32">
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Hello folks, we are <span className="text-primary-400">Chroma Studio.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
          A creative studio crafting beautiful digital experiences for brands that want to stand
          out.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border-2 border-primary-400 px-7 py-2.5 font-semibold text-primary-400 transition-colors hover:bg-primary-400 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-6">
          <SocialLinks />
        </div>
        <a
          href="#about"
          className="mt-12 inline-flex items-center gap-2 font-semibold text-gray-400 transition-colors hover:text-primary-400"
        >
          Scroll Down
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
