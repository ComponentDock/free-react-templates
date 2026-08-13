import { useState, type FormEvent } from 'react'
import { Heart } from 'lucide-react'
import { brand, footer, navLinks } from '../data'

/** Dark #1d1d1d footer: newsletter form, three link widgets, a "From the
 *  Blog" column, and a copyright bar with footer menu. */
export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-dark pt-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <form onSubmit={handleSubmit} className="relative mb-16" aria-label="Newsletter form">
          <label htmlFor="hoodly-newsletter-email" className="sr-only">
            Your email
          </label>
          {subscribed ? (
            <p
              role="status"
              className="bg-input-dark px-8 py-5 text-base italic font-bold text-brand"
            >
              {footer.newsletterSuccess}
            </p>
          ) : (
            <div className="flex flex-col sm:flex-row">
              <input
                id="hoodly-newsletter-email"
                type="email"
                required
                placeholder={footer.newsletterPlaceholder}
                className="h-[66px] w-full border border-[#7E7E7E] bg-input-dark pl-8 text-base italic font-bold text-white placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-brand sm:flex-1"
              />
              <button
                type="submit"
                className="h-[66px] border border-brand bg-brand px-8 text-lg font-bold text-white transition-colors hover:bg-transparent hover:text-brand sm:w-[292px]"
              >
                {footer.newsletterButton}
              </button>
            </div>
          )}
        </form>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Useful links">
            <h2 className="mb-10 text-lg font-bold text-white">Usefull Links</h2>
            <ul className="space-y-1">
              {footer.usefulLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#home"
                    className="inline-block py-0.5 text-base text-footer-muted transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Support">
            <h2 className="mb-10 text-lg font-bold text-white">Support</h2>
            <ul className="space-y-1">
              {footer.supportLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#home"
                    className="inline-block py-0.5 text-base text-footer-muted transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Categories">
            <h2 className="mb-10 text-lg font-bold text-white">Categories</h2>
            <ul className="space-y-1">
              {footer.categoryLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#categories"
                    className="inline-block py-0.5 text-base text-footer-muted transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-10 text-lg font-bold text-white">From the Blog</h2>
            <ul className="space-y-4">
              {footer.blogPosts.map((post) => (
                <li key={post.title} className="flex gap-4 overflow-hidden">
                  <img src={post.image} alt="" className="h-16 w-20 shrink-0 object-cover" />
                  <div>
                    <h3 className="text-sm font-bold leading-snug text-white">
                      <a href="#blog" className="transition-colors hover:text-brand">
                        {post.title}
                      </a>
                    </h3>
                    <span className="text-sm text-brand">{post.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-10 md:flex-row">
          <p className="text-sm text-copyright-grey">
            © 2026 {brand.name} — Local Directory · All rights reserved · Made with{' '}
            <Heart className="inline h-3.5 w-3.5 fill-brand text-brand" aria-hidden="true" /> ·{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-bold text-brand transition-colors hover:text-white"
            >
              More templates at Component Dock
            </a>
          </p>
          <nav aria-label="Footer menu">
            <ul className="flex flex-wrap gap-5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-white transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
