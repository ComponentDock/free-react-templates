import { Globe, MessageCircle, Send } from 'lucide-react'

const socials = [
  { name: 'Twitter', icon: <Send className="h-5 w-5" />, href: 'https://twitter.com' },
  { name: 'GitHub', icon: <Globe className="h-5 w-5" />, href: 'https://github.com' },
  { name: 'LinkedIn', icon: <MessageCircle className="h-5 w-5" />, href: 'https://linkedin.com' },
] as const

export function Footer() {
  return (
    <footer data-testid="footer" className="bg-gray-900 text-white dark:bg-gray-950">
      {/* CTA Section */}
      <div className="border-b border-gray-800 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-xl font-bold text-white sm:text-2xl">
            Have a project in mind? Let&apos;s work together.
          </p>
          <p className="mx-auto mt-3 max-w-md text-gray-400">
            I&apos;m always open to new opportunities and interesting projects. Whether you need a
            full redesign or just a fresh perspective, I&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-block rounded-full bg-brand-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              Let&apos;s Talk
            </a>
            <a
              href="#"
              className="inline-block rounded-full border border-gray-600 px-8 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-brand-400 hover:text-brand-400"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold tracking-tight text-white">Calypso</p>
          <p className="mt-1 text-sm text-gray-400">
            Digital Product Designer crafting meaningful experiences.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-brand-400 hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Calypso. Built with React &amp; Tailwind CSS. Template by{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-400 underline transition-colors hover:text-brand-300"
        >
          Component Dock
        </a>
        .
      </div>
    </footer>
  )
}
