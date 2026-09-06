const navLinks = [
  { label: 'Features', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Services', href: '#' },
] as const

const legalLinks = [
  { label: 'Terms', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Contact', href: '#' },
] as const

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function PinterestIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
    </svg>
  )
}

const socials = [
  { name: 'Twitter', href: '#', icon: TwitterIcon },
  { name: 'Instagram', href: '#', icon: InstagramIcon },
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'Pinterest', href: '#', icon: PinterestIcon },
] as const

export function Footer() {
  return (
    <footer
      className="border-t border-[#efefef] bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#777]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl">
        {/* Top section: subscribe + nav + social */}
        <div className="mb-8 flex flex-col gap-8 border-b border-[#efefef] pb-8 md:flex-row md:items-center md:justify-between">
          {/* Email subscribe */}
          <form className="flex w-full max-w-sm items-center" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[45px] w-full rounded-none border-none bg-[#e6e6e6] px-4 text-sm text-[#777] placeholder-[#b3b3b3] outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="h-[45px] rounded-none border-none bg-[#3e64ff] px-6 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#2d52e0]"
            >
              Subscribe
            </button>
          </form>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex list-none flex-wrap justify-center gap-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="px-[10px] py-[10px] text-sm text-[#777] no-underline transition-colors duration-300 hover:text-[#3e64ff]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <ul className="flex list-none justify-center gap-0 md:justify-end">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="inline-block px-2.5 py-2.5 text-[#777] transition-colors duration-300 hover:text-[#3e64ff]"
                >
                  <social.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar: legal links + logo + copyright */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Legal links */}
          <ul className="flex list-none flex-wrap justify-center gap-0">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-block px-2.5 py-2.5 text-sm text-[#777] no-underline transition-colors duration-300 hover:text-[#3e64ff]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <a href="#" className="text-[30px] font-black text-[#3e64ff] no-underline">
            Cairn
          </a>

          {/* Copyright */}
          <p className="text-sm text-[#777]">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        {/* Component Dock Attribution */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#777]">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[#3e64ff] underline transition-colors hover:text-[#2d52e0]"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
