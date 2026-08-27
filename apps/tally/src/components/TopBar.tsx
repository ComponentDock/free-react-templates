import { Phone, Mail } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './SocialIcons'

export function TopBar() {
  return (
    <aside className="bg-dark text-white/70 text-sm" role="complementary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <div className="flex items-center gap-6">
          <a
            href="tel:+10123456789"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone size={14} />
            <span>01 234 567 89</span>
          </a>
          <a
            href="mailto:info@tally.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail size={14} />
            <span>info@tally.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-white transition-colors"
          >
            <FacebookIcon size={14} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-white transition-colors"
          >
            <TwitterIcon size={14} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="hover:text-white transition-colors"
          >
            <InstagramIcon size={14} />
          </a>
        </div>
      </div>
    </aside>
  )
}
