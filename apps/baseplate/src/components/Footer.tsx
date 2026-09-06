const leftLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Policy', href: '#' },
] as const

const rightLinks = [
  { label: 'Home', href: '#' },
  { label: 'Our works', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
] as const

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

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

function BehanceIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.16-1.27.25-1.95.25H0v-14.94h6.938zm-.21 5.78c.607 0 1.1-.17 1.48-.505.38-.336.57-.82.57-1.44 0-.36-.07-.66-.21-.887a1.78 1.78 0 00-.59-.595 2.44 2.44 0 00-.85-.33 4.15 4.15 0 00-1.05-.13H3.53v3.887h3.198zm.18 6.08c.406 0 .79-.04 1.14-.12.35-.08.66-.21.92-.39.26-.18.47-.42.62-.71.15-.29.22-.66.22-1.11 0-.88-.24-1.52-.72-1.91-.48-.4-1.11-.59-1.89-.59H3.53v4.85h3.388zM15.454 14.91c.315.43.77.64 1.37.64.42 0 .78-.1 1.08-.31.3-.21.48-.4.54-.59h2.08c-.32 1.01-.99 1.71-2.01 2.1-.62.24-1.29.36-2.01.36-.55 0-1.05-.08-1.49-.25-.44-.17-.82-.41-1.13-.73-.31-.32-.55-.7-.71-1.15-.16-.45-.24-.95-.24-1.5 0-.53.08-1.01.25-1.44.17-.43.41-.8.72-1.1.31-.3.68-.53 1.12-.69.44-.16.93-.24 1.46-.24.62 0 1.16.1 1.63.31.47.21.86.5 1.18.87.31.37.55.81.71 1.32.16.51.24 1.07.24 1.69h-6.26c.03.62.21 1.1.52 1.46zm2.26-4.55c-.26-.35-.66-.53-1.2-.53-.36 0-.65.06-.87.19-.22.13-.4.3-.54.51-.14.21-.23.44-.28.7h3.27c-.06-.51-.22-.92-.38-1.08v-.01zM14.1 4.17h4.98v1.32h-4.98z" />
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const socials = [
  { name: 'Facebook', href: '#', icon: FacebookIcon, color: 'bg-[#3b579b]' },
  { name: 'Twitter', href: '#', icon: TwitterIcon, color: 'bg-[#00a0fb]' },
  { name: 'Instagram', href: '#', icon: InstagramIcon, color: 'bg-[#c31574]' },
  { name: 'Behance', href: '#', icon: BehanceIcon, color: 'bg-[#394cff]' },
  { name: 'Dribbble', href: '#', icon: DribbbleIcon, color: 'bg-[#ff2e6e]' },
  { name: 'YouTube', href: '#', icon: YouTubeIcon, color: 'bg-[#fa2614]' },
] as const

export function Footer() {
  return (
    <footer
      className="border-t border-[#efefef] bg-white font-['Poppins',sans-serif]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Row 1: Logo + Social Icons */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <a href="#" className="text-3xl font-black text-black">
              Baseplate
            </a>
          </div>
          <ul className="flex list-none gap-2">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity hover:opacity-80 ${social.color}`}
                >
                  <social.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2: Navigation Links */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row">
          <ul className="flex list-none gap-2">
            {leftLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-[#777] transition-colors hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex list-none gap-2">
            {rightLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-[#777] transition-colors hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 3: Copyright */}
        <div className="border-t border-[#efefef] pt-12 text-center">
          <p className="text-sm text-[#777]">
            <small>Copyright {new Date().getFullYear()}. All Rights Reserved.</small>
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
              className="text-[#777] underline transition-colors hover:text-black"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
