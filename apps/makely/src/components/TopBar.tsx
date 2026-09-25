import { Phone, Mail } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

export function TopBar() {
  return (
    <div className="bg-black text-white text-sm py-2 px-4 flex flex-wrap justify-between items-center">
      <div className="flex items-center gap-4">
        <a
          href="tel:+18554960000"
          className="flex items-center gap-1 hover:text-primary transition-colors"
        >
          <Phone size={14} />
          <span>1(855)496-0000</span>
        </a>
        <a
          href="mailto:info@makely.com"
          className="flex items-center gap-1 hover:text-primary transition-colors"
        >
          <Mail size={14} />
          <span>info@makely.com</span>
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
          <FacebookIcon width={14} height={14} />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
          <TwitterIcon width={14} height={14} />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
          <InstagramIcon width={14} height={14} />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors">
          <LinkedinIcon width={14} height={14} />
        </a>
      </div>
    </div>
  )
}
