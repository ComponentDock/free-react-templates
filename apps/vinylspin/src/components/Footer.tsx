import { Send } from 'lucide-react'

const USEFUL_LINKS = ['Home', 'About us', 'Testimonials', 'Music', 'News']
const BRAND_LINKS = ['Music', 'PR & Marketing', 'Contact', 'About us', 'Testimonials']
const CONNECT_LINKS = ['Returns', 'Shippings', 'Jobs', 'Social Media', 'Soundcloud']

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-ink">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-muted transition-colors hover:text-ink">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-deep">
      {/* Newsletter */}
      <div className="border-b border-surface py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <h3 className="text-2xl font-bold text-ink">Subscribe to our newsletter</h3>
          <form className="flex w-full gap-3 md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your E-mail"
              required
              className="flex-1 rounded border border-surface bg-void px-4 py-3 text-sm text-ink placeholder-muted focus:border-primary-400 focus:outline-none md:w-64"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded bg-primary-400 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-primary-500"
            >
              Subscribe
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
          <FooterColumn title="Useful Links" links={USEFUL_LINKS} />
          <FooterColumn title="Vinylspin" links={BRAND_LINKS} />
          <FooterColumn title="Connect" links={CONNECT_LINKS} />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-surface py-6">
        <div className="mx-auto max-w-7xl px-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-primary-400 underline transition-colors hover:text-primary-300"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
