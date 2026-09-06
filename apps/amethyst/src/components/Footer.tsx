import { useState, type FormEvent } from 'react'

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

const newsArticles = [
  {
    title: 'Even the all-powerful Pointing has no control about',
    date: 'Oct. 16, 2019',
    author: 'Admin',
    comments: 19,
    image: 'https://picsum.photos/seed/amethyst-news1/80/80',
  },
  {
    title: 'Even the all-powerful Pointing has no control about',
    date: 'Oct. 16, 2019',
    author: 'Admin',
    comments: 19,
    image: 'https://picsum.photos/seed/amethyst-news2/80/80',
  },
] as const

const infoLinks = [
  { label: 'About', href: '#' },
  { label: 'Products', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Help & Support', href: '#' },
] as const

const instagramPhotos = Array.from({ length: 6 }, (_, i) => ({
  alt: `Instagram photo ${i + 1}`,
  src: `https://picsum.photos/seed/amethyst-insta${i + 1}/200/200`,
}))

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="mr-2.5 flex h-10 w-10 items-center justify-center rounded-full border border-footer-accent text-footer-accent">
      {children}
    </span>
  )
}

function MapPinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4Z" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer
      className="bg-[linear-gradient(45deg,#2a1a5e_0%,#5126a7_100%)] px-4 py-16 font-['Poppins',sans-serif] text-footer-text sm:px-6"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About column */}
          <div>
            <h2 className="mb-6 flex items-center text-[22px] font-semibold text-footer-heading">
              <IconBadge>
                <MapPinIcon />
              </IconBadge>
              About
            </h2>
            <ul className="mb-6 space-y-3 text-sm text-footer-text-secondary">
              <li className="flex items-start gap-2">
                <MapPinIcon />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 transition-colors hover:text-footer-link-hover"
                >
                  <PhoneIcon />
                  <span>+1 234 567 890</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 transition-colors hover:text-footer-link-hover"
                >
                  <SendIcon />
                  <span>info@yourdomain.com</span>
                </a>
              </li>
            </ul>
            <form onSubmit={handleSubmit} aria-label="Newsletter subscription" className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                aria-label="Email address for newsletter"
                className="flex-1 border-2 border-footer-accent-light bg-black/5 px-4 py-3 text-sm text-white/80 placeholder:text-white/30 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Submit"
                className="flex items-center justify-center border-none bg-footer-accent-light px-4 text-white transition-colors hover:bg-footer-accent"
              >
                <SendIcon />
              </button>
            </form>
          </div>

          {/* Latest News column */}
          <div>
            <h2 className="mb-6 flex items-center text-[22px] font-semibold text-footer-heading">
              <IconBadge>
                <ListIcon />
              </IconBadge>
              Latest News
            </h2>
            <div className="space-y-6">
              {newsArticles.map((article, i) => (
                <div key={i} className="flex gap-4">
                  <img
                    src={article.image}
                    alt=""
                    className="h-20 w-20 flex-shrink-0 rounded object-cover"
                  />
                  <div>
                    <h3 className="mb-2 text-sm font-medium text-footer-text-secondary hover:text-footer-link-hover">
                      <a href="#">{article.title}</a>
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-footer-text">
                      <span className="flex items-center gap-1">
                        <CalendarIcon />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <UserIcon />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <ChatIcon />
                        {article.comments}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Information column */}
          <div>
            <h2 className="mb-6 flex items-center text-[22px] font-semibold text-footer-heading">
              <IconBadge>
                <DocumentIcon />
              </IconBadge>
              Information
            </h2>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-1 text-sm text-footer-text-secondary transition-colors hover:text-footer-link-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram column */}
          <div>
            <h2 className="mb-6 flex items-center text-[22px] font-semibold text-footer-heading">
              <IconBadge>
                <InstagramIcon />
              </IconBadge>
              Instagram
            </h2>
            <div className="grid grid-cols-3 gap-1">
              {instagramPhotos.map((photo) => (
                <a key={photo.alt} href="#" className="block">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="aspect-square w-full rounded object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-footer-border pt-6 sm:flex-row">
          <p className="text-sm text-footer-text">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-sm text-footer-text">
            Made with <span className="text-footer-accent">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-footer-accent transition-colors hover:text-footer-link-hover"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
