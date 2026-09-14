import { Mail } from 'lucide-react'
import { type FormEvent } from 'react'

const NAV_LINKS = ['Home', 'Services', 'Process', 'FAQ', 'Blog', 'Contact']
const GALLERY_IMAGES = Array.from({ length: 8 }, (_, i) => `renovo-insta-${i + 1}`)

function SocialIcon({ path, label }: { path: string; label: string }) {
  return (
    <a href="#" aria-label={label} className="hover:text-[#988fff] transition-colors">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={path} />
      </svg>
    </a>
  )
}

function handleSubscribe(e: FormEvent) {
  e.preventDefault()
}

export function Footer() {
  return (
    <footer className="bg-[#04091e] text-gray-400 pt-20 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h6 className="text-white uppercase text-sm font-semibold mb-5">About Renovo</h6>
          <p className="text-sm leading-relaxed">
            Professional tech repair services for computers, laptops, and mobile devices. Fast,
            reliable, and affordable solutions for all your repair needs.
          </p>
        </div>
        {/* Navigation */}
        <div>
          <h6 className="text-white uppercase text-sm font-semibold mb-5">Navigation Links</h6>
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm hover:text-[#988fff] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        {/* Newsletter */}
        <div>
          <h6 className="text-white uppercase text-sm font-semibold mb-5">Newsletter</h6>
          <p className="text-sm mb-4">
            Stay updated with our latest repair tips and service offers.
          </p>
          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-3 py-2 bg-transparent border border-gray-700 text-sm text-gray-400 placeholder-gray-500 focus:outline-none focus:border-[#988fff] rounded-l"
            />
            <button
              type="submit"
              className="bg-[#988fff] text-white px-4 py-2 rounded-r text-sm hover:bg-[#7b6fe0] transition-colors"
            >
              <Mail size={16} />
            </button>
          </form>
        </div>
        {/* InstaFeed */}
        <div>
          <h6 className="text-white uppercase text-sm font-semibold mb-5">InstaFeed</h6>
          <div className="grid grid-cols-4 gap-1">
            {GALLERY_IMAGES.map((img) => (
              <img
                key={img}
                src={`https://picsum.photos/seed/${img}/80/80`}
                alt="Insta feed"
                className="w-full h-14 object-cover rounded hover:opacity-80 transition-opacity"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="container mx-auto px-4 mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Renovo Repair. Made with{' '}
          <svg className="inline w-4 h-4 text-[#988fff]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>{' '}
          by{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-[#988fff] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </p>
        <div className="flex gap-4">
          <SocialIcon
            path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            label="Facebook"
          />
          <SocialIcon
            path="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
            label="Twitter"
          />
          <SocialIcon
            path="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V17h-2v-6h2v.91c.38-.69 1.07-1.11 1.83-1.11 1.38 0 1.67 1.12 1.67 2.56V17z"
            label="LinkedIn"
          />
        </div>
      </div>
    </footer>
  )
}
