function GooglePlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M7.635 10.909v2.619h4.339c-.173 1.125-1.31 3.295-4.335 3.295-2.604 0-4.732-2.16-4.732-4.823 0-2.664 2.122-4.826 4.728-4.826 1.485 0 2.479.633 3.045 1.178l2.073-1.995C11.397 5.235 9.712 4.5 7.635 4.5 3.273 4.5 0 7.69 0 11.999s3.273 7.5 7.635 7.5c4.416 0 7.349-3.109 7.349-7.49 0-.504-.054-.886-.12-1.276H7.635z" />
    </svg>
  )
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  )
}

function RedditIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socials = [
  { Icon: GooglePlusIcon, label: 'Google Plus' },
  { Icon: PinterestIcon, label: 'Pinterest' },
  { Icon: RedditIcon, label: 'Reddit' },
  { Icon: TwitterIcon, label: 'Twitter' },
] as const

const footerLinks = [
  'Home',
  'About',
  'Case Studies',
  'Services',
  'Consulting',
  'Commodities',
  'Insurance',
  'Trades',
  'Planning',
  'Finance',
  'Crypto',
] as const

const copyrightLinks = ['Home', 'About us', 'Services', 'Blog', 'Contact'] as const

export function Footer() {
  return (
    <footer className="bg-footer-bg pt-16" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo & about */}
          <div>
            <div className="mb-4 text-lg font-bold">
              <span className="text-brand">in</span>
              <span className="text-white">vest</span>
              <div className="text-[10px] font-normal uppercase tracking-widest text-white">
                Blockchain
              </div>
            </div>
            <p className="text-sm leading-relaxed text-body-text">
              Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas
              sem. Morbi ut dapibus dui. Sed ut iaculis elit.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-body-text transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
              Subscribe to our newsletter
            </h3>
            <form className="mb-6 flex gap-2">
              <input
                type="email"
                placeholder="Your E-mail"
                className="flex-1 border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-brand"
                required
              />
              <button
                type="submit"
                className="bg-brand px-6 py-3 text-xs font-semibold uppercase text-dark transition-colors hover:bg-brand-hover"
              >
                subscribe
              </button>
            </form>
            <p className="mb-6 text-sm leading-relaxed text-body-text">
              Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas
              sem. Morbi ut dapibus dui. Sed ut iaculis elit.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center border border-white/10 text-body-text transition-colors hover:border-white hover:text-white"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="mt-12 bg-copyright-bg">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 md:flex-row">
          <p className="text-xs text-body-text">
            &copy; {new Date().getFullYear()} Vestly. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand"
            >
              Component Dock
            </a>
          </p>
          <nav>
            <ul className="flex gap-4">
              {copyrightLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-body-text transition-colors hover:text-brand">
                    {link}
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
