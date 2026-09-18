import { Mail, Phone, MapPin } from 'lucide-react'

const FOOTER_NAV = ['Home', 'About', 'Menu', 'Gallery', 'Events', 'News', 'Contact']
const GALLERY_IMAGES = Array.from({ length: 6 }, (_, i) => `paprika-gallery-${i + 1}`)

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function RssIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h4 className="font-[family-name:var(--font-heading)] text-white text-lg mb-4">
            About Paprika
          </h4>
          <p className="text-sm leading-relaxed mb-4">
            A premium restaurant experience where every dish tells a story. Fresh ingredients, bold
            flavours, and unforgettable moments.
          </p>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-[#b10400] transition-colors">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#b10400] transition-colors">
              <TwitterIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#b10400] transition-colors">
              <LinkedinIcon />
            </a>
            <a href="#" aria-label="RSS" className="hover:text-[#b10400] transition-colors">
              <RssIcon />
            </a>
          </div>
        </div>
        {/* Contact */}
        <div>
          <h4 className="font-[family-name:var(--font-heading)] text-white text-lg mb-4">
            Contact Us
          </h4>
          <p className="text-sm mb-3">Have questions or want to make a reservation?</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <span>info@paprika.com</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <span>+88 01911 854 378</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>5001 E. Colorado Blvd, Suite 820, Pasadena, CA 91106</span>
            </li>
          </ul>
        </div>
        {/* Recent Posts */}
        <div>
          <h4 className="font-[family-name:var(--font-heading)] text-white text-lg mb-4">
            Recent Posts
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-[#b10400] transition-colors">
                The Art of Wood-Fired Cooking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b10400] transition-colors">
                Behind the Kitchen: Our Chef Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b10400] transition-colors">
                Seasonal Ingredients We Love
              </a>
            </li>
          </ul>
        </div>
        {/* Gallery */}
        <div>
          <h4 className="font-[family-name:var(--font-heading)] text-white text-lg mb-4">
            Gallery
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {GALLERY_IMAGES.map((img) => (
              <a key={img} href="#" className="block overflow-hidden rounded">
                <img
                  src={`https://picsum.photos/seed/${img}/100/100`}
                  alt="Gallery"
                  className="w-full h-16 object-cover hover:scale-110 transition-transform"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Paprika Restaurant. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-[#b10400] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
          <ul className="flex flex-wrap gap-4 text-xs text-gray-400">
            {FOOTER_NAV.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
