import { Heart } from 'lucide-react'
import { SocialLinks } from './SocialLinks'
import { copyrightYear, creditLabel, creditUrl, footerNote, siteName } from '../data'

export function Footer() {
  return (
    <footer id="footer" className="bg-midnight text-white/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 sm:flex-row sm:justify-between">
        <p className="text-center text-sm sm:text-left">
          {siteName} © {copyrightYear}. {footerNote} | Made with{' '}
          <Heart className="inline h-3 w-3 text-brand" aria-hidden="true" /> by{' '}
          <a href={creditUrl} className="text-brand transition-colors hover:text-white">
            {creditLabel}
          </a>
        </p>
        <SocialLinks className="gap-2" itemClassName="px-2" />
      </div>
    </footer>
  )
}
