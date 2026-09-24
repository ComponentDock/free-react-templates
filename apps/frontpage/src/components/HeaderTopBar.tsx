import { Cloud } from 'lucide-react'
import { TwitterIcon, InstagramIcon, PinterestIcon } from './social-icons'

export function HeaderTopBar() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs sm:px-6">
        <div className="flex items-center gap-2">
          <Cloud className="h-4 w-4" aria-hidden="true" />
          <span>San Francisco, CA</span>
          <span className="mx-1">|</span>
          <time dateTime="2026-09-24">September 24, 2026</time>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-brand"
          >
            <TwitterIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-brand"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="hover:text-brand"
          >
            <PinterestIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
