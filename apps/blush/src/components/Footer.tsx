import { Apple, Play } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-14 text-center sm:px-6">
        <a href="#home" className="font-display text-2xl font-bold tracking-wide text-primary-400">
          Blush
        </a>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary-400 bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
          >
            <Play className="h-4 w-4 fill-current" aria-hidden="true" />
            available on Google Store
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary-400 px-6 py-3 text-sm font-semibold text-primary-400 transition-colors hover:bg-primary-400 hover:text-white"
          >
            <Apple className="h-4 w-4" aria-hidden="true" />
            available on Apple Store
          </a>
        </div>
        <SocialLinks />
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Blush. All rights reserved.
      </div>
    </footer>
  )
}
