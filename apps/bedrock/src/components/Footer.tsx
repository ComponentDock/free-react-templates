const blogPosts = [
  {
    title: 'Even the all-powerful Pointing has no control about',
    date: 'Oct. 16, 2019',
    author: 'Admin',
    comments: 19,
    image: 'https://picsum.photos/seed/bedrock-1/80/80',
  },
  {
    title: 'Even the all-powerful Pointing has no control about',
    date: 'Oct. 16, 2019',
    author: 'Admin',
    comments: 19,
    image: 'https://picsum.photos/seed/bedrock-2/80/80',
  },
] as const

const quickLinks = ['Home', 'About', 'Services', 'Works', 'Blog', 'Contact'] as const

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

const socials = [
  { name: 'Twitter', href: '#', icon: TwitterIcon },
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'Instagram', href: '#', icon: InstagramIcon },
] as const

function CalendarIcon() {
  return (
    <svg
      className="mr-1 inline-block h-3 w-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg
      className="mr-1 inline-block h-3 w-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg
      className="mr-1 inline-block h-3 w-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg
      className="mr-3 inline-block h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      className="mr-3 inline-block h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg
      className="mr-3 inline-block h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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
      className="mx-1 inline-block h-4 w-4 text-red-400"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer
      className="bg-footer-bg px-4 py-[7rem] font-['Poppins',sans-serif] text-footer-text sm:px-6"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <h2 className="mb-4 text-[1.125rem] font-semibold text-white after:mb-1 after:block after:h-[2px] after:w-10 after:bg-accent after:content-['']">
              Bedrock
            </h2>
            <p className="text-sm leading-relaxed text-footer-muted">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country.
            </p>
            <ul className="mt-4 flex list-none gap-2">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-opacity hover:opacity-80"
                  >
                    <social.icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Latest News */}
          <div>
            <h2 className="mb-4 text-[1.125rem] font-semibold text-white after:mb-1 after:block after:h-[2px] after:w-10 after:bg-accent after:content-['']">
              Latest News
            </h2>
            <div className="mb-4 flex gap-4">
              <img
                src={blogPosts[0].image}
                alt=""
                className="h-20 w-20 flex-shrink-0 rounded object-cover"
              />
              <div>
                <h3 className="text-sm font-normal leading-snug text-footer-text">
                  <a href="#" className="hover:text-white">
                    {blogPosts[0].title}
                  </a>
                </h3>
                <div className="mt-1 text-xs">
                  <span className="mr-2 text-accent">
                    <CalendarIcon />
                    {blogPosts[0].date}
                  </span>
                  <span className="mr-2 text-accent">
                    <UserIcon />
                    {blogPosts[0].author}
                  </span>
                  <span className="text-accent">
                    <ChatIcon />
                    {blogPosts[0].comments}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                src={blogPosts[1].image}
                alt=""
                className="h-20 w-20 flex-shrink-0 rounded object-cover"
              />
              <div>
                <h3 className="text-sm font-normal leading-snug text-footer-text">
                  <a href="#" className="hover:text-white">
                    {blogPosts[1].title}
                  </a>
                </h3>
                <div className="mt-1 text-xs">
                  <span className="mr-2 text-accent">
                    <CalendarIcon />
                    {blogPosts[1].date}
                  </span>
                  <span className="mr-2 text-accent">
                    <UserIcon />
                    {blogPosts[1].author}
                  </span>
                  <span className="text-accent">
                    <ChatIcon />
                    {blogPosts[1].comments}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h2 className="mb-4 text-[1.125rem] font-semibold text-white after:mb-1 after:block after:h-[2px] after:w-10 after:bg-accent after:content-['']">
              Quick Links
            </h2>
            <ul className="list-none space-y-1">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="block py-2 text-sm text-footer-text transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h2 className="mb-4 text-[1.125rem] font-semibold text-white after:mb-1 after:block after:h-[2px] after:w-10 after:bg-accent after:content-['']">
              Have a Questions?
            </h2>
            <ul className="list-none">
              <li className="mb-4 flex items-start text-footer-muted">
                <MapPinIcon />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="flex items-center text-footer-muted transition-colors hover:text-white"
                >
                  <PhoneIcon />
                  <span>+2 392 3929 210</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-footer-muted transition-colors hover:text-white"
                >
                  <SendIcon />
                  <span>info@yourdomain.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-footer-copyright">
            &copy; {new Date().getFullYear()} All rights reserved | Made with
            <HeartIcon />
            at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-footer-copyright underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
