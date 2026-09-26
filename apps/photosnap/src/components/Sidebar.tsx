import { useState } from 'react'
import { Menu, X, Send } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { SocialIcon } from './SocialIcon'

const NAV_LINKS = ['Home', 'Collection', 'About Me', 'My Services', 'Blog', 'Contact']

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="fixed top-4 left-4 z-[1002] lg:hidden bg-brand text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[1000] lg:hidden"
          onClick={() => setIsOpen(false)}
          data-testid="sidebar-overlay"
        />
      )}

      {/* Sidebar */}
      <aside
        role="complementary"
        className={cn(
          'fixed top-0 left-0 h-full w-[270px] bg-[rgba(0,0,0,0.04)] z-[1001] overflow-y-auto',
          'lg:w-[22%] transition-transform duration-500 ease-in-out',
          'p-8 pt-12 flex flex-col items-center text-center',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        {/* Profile */}
        <div className="mb-6">
          <img
            src="https://picsum.photos/seed/photosnap-avatar/200/200"
            alt="Photosnap profile"
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
          <h1 className="mt-3 text-lg font-semibold font-display text-ink">Photosnap</h1>
        </div>

        {/* Navigation */}
        <nav role="navigation" className="mb-8">
          <ul className="space-y-3">
            {NAV_LINKS.map((link, i) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                  className={cn(
                    'text-sm tracking-wider uppercase transition-colors',
                    i === 0 ? 'text-brand font-semibold' : 'text-muted hover:text-brand',
                  )}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter */}
        <div className="w-full">
          <h3 className="text-xs uppercase tracking-[3px] text-muted mb-3">Newsletter</h3>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 px-3 py-2 text-sm bg-white border border-gray-200 focus:outline-none focus:border-brand"
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-brand text-white hover:bg-brand-dark transition-colors"
              aria-label="Subscribe to newsletter"
            >
              <Send size={16} />
            </button>
          </form>
        </div>

        {/* Social */}
        <div className="flex gap-4 mt-6">
          <a
            href="#"
            aria-label="Twitter"
            className="text-muted hover:text-brand transition-colors"
          >
            <SocialIcon name="twitter" size={18} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-muted hover:text-brand transition-colors"
          >
            <SocialIcon name="facebook" size={18} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-muted hover:text-brand transition-colors"
          >
            <SocialIcon name="instagram" size={18} />
          </a>
        </div>
      </aside>
    </>
  )
}
