import { User, ShoppingCart } from 'lucide-react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Twitter', icon: TwitterIcon },
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'Youtube', icon: YoutubeIcon },
  { label: 'Pinterest', icon: PinterestIcon },
] as const

export function TopBar() {
  return (
    <div className="bg-brand-dark text-white text-sm">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-4 py-2">
        {/* Left: language / currency placeholders */}
        <div className="hidden items-center gap-4 md:flex">
          <select
            className="bg-transparent text-white text-xs focus:outline-none"
            aria-label="Select language"
          >
            <option value="en">English</option>
          </select>
          <select
            className="bg-transparent text-white text-xs focus:outline-none"
            aria-label="Select currency"
          >
            <option value="usd">USD</option>
          </select>
        </div>

        {/* Center: contact info */}
        <div className="flex flex-col items-center gap-0.5 text-center md:flex-row md:gap-6">
          <a href="tel:+84987654321" className="hover:text-brand-red transition-colors">
            +84 987 654 321
          </a>
          <a
            href="mailto:support@yourdomain.com"
            className="hover:text-brand-red transition-colors"
          >
            support@yourdomain.com
          </a>
        </div>

        {/* Right: social icons + user/cart */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#top"
                aria-label={social.label}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <a
            href="#account"
            aria-label="User account"
            className="ml-2 text-gray-300 hover:text-white transition-colors"
          >
            <User className="h-4 w-4" />
          </a>
          <a
            href="#cart"
            aria-label="Shopping cart"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
