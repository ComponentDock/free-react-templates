import { Phone, Mail } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm text-mist">
        <ul className="flex items-center gap-6">
          <li className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" />
            <a href="tel:+1231231209" className="hover:text-brand transition-colors">
              +1 231 231 209
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5" />
            <a href="mailto:support@rankly.com" className="hover:text-brand transition-colors">
              support@rankly.com
            </a>
          </li>
        </ul>
        <a
          href="#service"
          className="font-medium text-brand hover:text-brand-dark transition-colors"
        >
          Free SEO Analysis
        </a>
      </div>
    </div>
  )
}
