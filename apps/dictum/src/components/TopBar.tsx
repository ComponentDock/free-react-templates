import { Phone, Mail } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

export function TopBar() {
  return (
    <div className="bg-mist py-3 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex gap-2">
            <a
              href="#"
              className="text-primary-300 hover:text-primary-400 p-2"
              aria-label="Facebook"
            >
              <BrandIcon name="facebook" />
            </a>
            <a
              href="#"
              className="text-primary-300 hover:text-primary-400 p-2"
              aria-label="Twitter"
            >
              <BrandIcon name="twitter" />
            </a>
            <a
              href="#"
              className="text-primary-300 hover:text-primary-400 p-2"
              aria-label="Instagram"
            >
              <BrandIcon name="instagram" />
            </a>
            <a
              href="#"
              className="text-primary-300 hover:text-primary-400 p-2"
              aria-label="LinkedIn"
            >
              <BrandIcon name="linkedin" />
            </a>
          </div>
          <div className="flex gap-6 text-sm text-smoke">
            <a href="tel:+11234567890" className="flex items-center gap-2 hover:text-primary-300">
              <Phone size={14} />
              <span>+1 (123) 456-7890</span>
            </a>
            <a
              href="mailto:info@dictum.com"
              className="flex items-center gap-2 hover:text-primary-300"
            >
              <Mail size={14} />
              <span>info@dictum.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
