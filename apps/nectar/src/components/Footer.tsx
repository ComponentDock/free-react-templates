import { Mail } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const services = [
  'Building Construction',
  'Home Renovation',
  'Interior Design',
  'Project Management',
  'Consulting Services',
  'Maintenance & Repair',
]

const recentBlogs = [
  {
    title: 'Modern Construction Trends to Watch',
    seed: 'nectar-blog-1',
  },
  {
    title: 'Tips for Home Renovation Success',
    seed: 'nectar-blog-2',
  },
]

const socialLinks = ['facebook', 'twitter', 'linkedin', 'instagram'] as const

export function Footer() {
  return (
    <footer className="bg-[#3c312e] pt-16 pb-8">
      <div className="container mx-auto grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo & Social */}
        <div>
          <a href="#home" className="inline-flex items-center gap-2" aria-label="Nectar Home">
            <svg
              className="h-7 w-7 text-brand"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.35 8 12 11.82 4.65 8 12 4.18z" />
            </svg>
            <span className="font-heading text-xl font-bold text-white">
              Nectar<span className="text-brand">.</span>
            </span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Professional construction services delivering quality results for residential and
            commercial projects.
          </p>
          <div className="mt-4 flex gap-2">
            {socialLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                aria-label={`Follow us on ${link}`}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs text-white/60 transition-colors hover:border-brand hover:bg-brand hover:text-white',
                )}
              >
                {link[0]!.toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading text-base font-bold text-white">Services</h3>
          <div className="mt-1 h-0.5 w-8 bg-brand" aria-hidden="true" />
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-brand"
                >
                  <span className="text-brand" aria-hidden="true">
                    ›
                  </span>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Blog */}
        <div>
          <h3 className="font-heading text-base font-bold text-white">Recent Blog</h3>
          <div className="mt-1 h-0.5 w-8 bg-brand" aria-hidden="true" />
          <ul className="mt-4 space-y-4">
            {recentBlogs.map((blog) => (
              <li key={blog.seed} className="flex gap-3">
                <img
                  src={`https://picsum.photos/seed/${blog.seed}/80/80`}
                  alt={blog.title}
                  className="h-16 w-16 shrink-0 rounded-sm object-cover"
                />
                <div>
                  <a
                    href="#blog"
                    className="text-sm font-medium text-white/80 transition-colors hover:text-brand"
                  >
                    {blog.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-heading text-base font-bold text-white">Newsletter</h3>
          <div className="mt-1 h-0.5 w-8 bg-brand" aria-hidden="true" />
          <p className="mt-4 text-sm text-white/60">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form
            className="mt-4"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter subscription"
          >
            <div className="flex">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="flex-1 border border-white/20 bg-transparent px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                aria-label="Subscribe"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-12 border-t border-white/10 px-4 pt-6">
        <div className="flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
          <p>&copy; 2026 Nectar. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-brand-dark"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
