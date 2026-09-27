import { Heart } from 'lucide-react'

type SocialPlatform = 'twitter' | 'behance' | 'dribbble' | 'facebook'

const SOCIAL_LINKS: { name: string; href: string; icon: SocialPlatform }[] = [
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'Behance', href: '#', icon: 'behance' },
  { name: 'Dribbble', href: '#', icon: 'dribbble' },
  { name: 'Facebook', href: '#', icon: 'facebook' },
]

const ICON_PATHS: Record<SocialPlatform, string> = {
  twitter:
    'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
  behance:
    'M1 12.5h8.5c2.5 0 4-1.5 4-3.5s-1.5-3.5-4-3.5H1v10.5zm0-8.5h7.5c1.5 0 2.5 1 2.5 2.5S9 9 7.5 9H1V4zm12.5 1h5.5l1.5 5.5 1.5-5.5h5l-3 10.5h-2l-1.5-7-1 3.5h-2L14.5 4zm8 0h5v1.5h-5V4z',
  dribbble:
    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0 1 12 3.475zm-3.633.803a53.896 53.896 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715z',
  facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
}

function SocialIcon({ icon }: { icon: SocialPlatform }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d={ICON_PATHS[icon]} />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 bg-white py-8 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <p className="flex items-center gap-1 text-sm text-muted dark:text-gray-400">
          &copy; {year} All rights reserved | Made with{' '}
          <Heart className="inline h-3 w-3 text-brand" aria-hidden="true" /> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand hover:underline"
          >
            Component Dock
          </a>
        </p>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-brand"
              aria-label={link.name}
            >
              <SocialIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
