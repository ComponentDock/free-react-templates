import { type FormEvent } from 'react'

const categories = ['Buy & Sell', 'Merchant', 'Giving back', 'Help & Support'] as const
const tags = ['dish', 'menu', 'food', 'sweet', 'tasty', 'delicious', 'desserts', 'drinks'] as const

function ArrowRightIcon() {
  return (
    <svg
      className="ml-1 inline-block h-3 w-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg
      className="mx-1 inline-block h-4 w-4 text-brand-accent"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export function Footer() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer className="bg-footer-bg font-['Nunito_Sans',sans-serif]" role="contentinfo">
      {/* Main footer content */}
      <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div>
            <h2 className="mb-4 text-[16px] font-normal capitalize text-footer-heading">
              <a href="#" className="text-white transition-colors hover:text-brand-accent">
                Topaz
              </a>
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-footer-text">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm text-brand-accent transition-colors hover:opacity-80"
            >
              read more <ArrowRightIcon />
            </a>
          </div>

          {/* Categories column */}
          <div>
            <h3 className="mb-8 text-[13px] font-semibold uppercase tracking-wide text-footer-heading">
              Categories
            </h3>
            <ul className="space-y-1">
              {categories.map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="block py-1 text-sm text-footer-link transition-colors hover:text-brand-accent"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tag cloud column */}
          <div>
            <h3 className="mb-8 text-[13px] font-semibold uppercase tracking-wide text-footer-heading">
              Tag cloud
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="inline-block border border-footer-tag-border px-3 py-1 text-sm text-white transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Subscribe + Social column */}
          <div>
            <h3 className="mb-8 text-[13px] font-semibold uppercase tracking-wide text-footer-heading">
              Subscribe
            </h3>
            <form onSubmit={handleSubmit} className="mb-8 flex" aria-label="Email subscription">
              <input
                type="email"
                placeholder="Enter email address"
                aria-label="Email address"
                className="flex-1 border-none bg-footer-input-bg px-4 py-3 text-sm text-footer-text outline-none placeholder:text-footer-text"
              />
              <button
                type="submit"
                className="flex h-[52px] w-[52px] shrink-0 items-center justify-center bg-brand-accent text-white transition-colors hover:opacity-90"
                aria-label="Subscribe"
              >
                <SendIcon />
              </button>
            </form>

            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-footer-heading">
              Follow us
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center border border-footer-tag-border text-white transition-colors hover:border-brand-accent hover:text-brand-accent"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-footer-tag-border text-white transition-colors hover:border-brand-accent hover:text-brand-accent"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-footer-tag-border text-white transition-colors hover:border-brand-accent hover:text-brand-accent"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-footer-bottom bg-footer-bottom py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <p className="text-sm text-footer-copyright-link">
            &copy; {new Date().getFullYear()} All rights reserved | Made with
            <HeartIcon />
            by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-brand-accent underline transition-colors hover:opacity-80"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            {['Terms', 'Privacy', 'Compliances'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-footer-copyright-link transition-colors hover:text-brand-accent"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
