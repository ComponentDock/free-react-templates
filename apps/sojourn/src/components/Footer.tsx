import { copyright, footerCredit, siteName } from '../data'
import { SocialIcons } from './SocialIcons'

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 sm:px-6 md:flex-row md:justify-between">
        <a href="#" className="font-serif text-xl font-bold text-ink">
          {siteName}
        </a>
        <p className="text-center text-xs text-meta">
          {copyright} | {footerCredit}
        </p>
        <SocialIcons className="text-ink" />
      </div>
    </footer>
  )
}
