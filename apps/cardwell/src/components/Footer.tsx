import { Mail, MapPin, Phone } from 'lucide-react'

const blogEntries = [
  {
    title: 'Web Design Trends 2025',
    date: 'March 15, 2025',
    image: 'https://picsum.photos/seed/cardwell-footer-blog-1/80/80',
  },
  {
    title: 'Building Scalable Apps',
    date: 'February 28, 2025',
    image: 'https://picsum.photos/seed/cardwell-footer-blog-2/80/80',
  },
  {
    title: 'Creative Process Tips',
    date: 'January 10, 2025',
    image: 'https://picsum.photos/seed/cardwell-footer-blog-3/80/80',
  },
]

const socials = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z',
  },
  {
    label: 'Twitter',
    href: '#',
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  {
    label: 'Dribbble',
    href: '#',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.15-.12-.298-.184-.445a25.424 25.424 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0 1 12 3.475zm-3.633.803a53.896 53.896 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715z',
  },
  {
    label: 'Google',
    href: '#',
    path: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z',
  },
]

export function Footer() {
  return (
    <footer className="bg-black text-white" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Column 1: Let's Talk */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">
              Let&apos;s Talk
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to
              be part of your vision.
            </p>
            <a
              href="mailto:hello@cardwell.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-brand transition-colors hover:text-white"
            >
              <Mail size={14} />
              hello@cardwell.com
            </a>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={14} />
              San Francisco, CA
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
              <Phone size={14} />
              +1 (555) 123-4567
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-brand hover:text-brand"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Latest Blog */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">
              Latest Blog
            </h3>
            <ul className="mt-4 space-y-4">
              {blogEntries.map((entry, i) => (
                <li key={i} className="flex gap-4">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="h-14 w-14 shrink-0 rounded object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-xs text-gray-500">{entry.date}</p>
                    <p className="mt-1 text-sm text-white transition-colors hover:text-brand">
                      {entry.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">Newsletter</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Subscribe to my newsletter to get the latest updates on projects, articles, and design
              inspiration.
            </p>
            <form className="mt-6 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 rounded-[30px] border border-gray-700 bg-transparent px-5 py-3 text-sm text-white placeholder-gray-500 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-[1px] bg-brand px-6 py-3 text-[13px] font-semibold uppercase tracking-[2px] text-white transition-colors hover:bg-transparent hover:text-brand"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2025 All rights reserved | Made with <span aria-label="love">&hearts;</span> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="text-brand transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
