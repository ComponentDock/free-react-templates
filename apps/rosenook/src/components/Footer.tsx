import { type FormEvent } from 'react'

const menLinks = ['Jeans', 'Jumpers', 'Leather', 'Shorts', 'Boots', 'Watches'] as const
const womenLinks = [
  'Dresses',
  'Jumpsuits',
  'Shirts',
  'T-shirts',
  'Sweatshirts',
  'Jackets',
  'Coats',
] as const
const kidsLinks = [
  'Shirts',
  'T-shirts',
  'Polos',
  'Sweaters',
  'Sweatshirts',
  'Jackets',
  'Watches',
] as const

const socialIcons = [
  {
    name: 'Twitter',
    path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
  },
  {
    name: 'Facebook',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    name: 'Instagram',
    path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z',
  },
  {
    name: 'LinkedIn',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  },
] as const

function LinkColumn({ heading, links }: { heading: string; links: readonly string[] }) {
  return (
    <div>
      <h3 className="mb-[30px] text-[14px] font-medium uppercase tracking-[2px] text-black/70">
        {heading}
      </h3>
      <ul className="list-none space-y-[12px] p-0">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-[14px] text-text-link transition-colors hover:text-accent">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer className="bg-footer-bg font-['Poppins',sans-serif]" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-[7em] sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left: Link columns */}
          <div>
            <div className="grid grid-cols-3 gap-6">
              <LinkColumn heading="Men" links={menLinks} />
              <LinkColumn heading="Women" links={womenLinks} />
              <LinkColumn heading="Kids" links={kidsLinks} />
            </div>
          </div>

          {/* Right: Social + Subscribe */}
          <div className="md:pl-[45px]">
            <h3 className="mb-[30px] text-[14px] font-medium uppercase tracking-[2px] text-black/70">
              Follow Us
            </h3>
            <div className="mb-10 flex flex-wrap gap-[10px]">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  aria-label={icon.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-input-bg text-accent transition-colors hover:bg-accent hover:text-white"
                >
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
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>

            <h3 className="mb-[30px] mt-5 text-[14px] font-medium uppercase tracking-[2px] text-black/70">
              Subscribe Us
            </h3>
            <form onSubmit={handleSubmit} className="flex" aria-label="Newsletter subscription">
              <input
                type="email"
                placeholder="Enter email address"
                aria-label="Email address"
                className="h-[52px] flex-1 border-none bg-input-bg px-4 text-[16px] text-black/40 outline-none placeholder:text-black/30"
              />
              <button
                type="submit"
                className="h-[52px] w-[130px] shrink-0 border-none bg-accent px-4 text-[16px] font-medium text-white transition-colors hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-[60px] flex flex-col items-center justify-between gap-4 border-t border-border-top pt-[30px] sm:flex-row">
          <p className="m-0 text-[14px] text-text-primary">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
          <ul className="m-0 flex list-none gap-4 p-0">
            <li>
              <a
                href="#"
                className="text-[14px] text-text-link transition-colors hover:text-accent"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[14px] text-text-link transition-colors hover:text-accent"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[14px] text-text-link transition-colors hover:text-accent"
              >
                More templates at Component Dock
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
