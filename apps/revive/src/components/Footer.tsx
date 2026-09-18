import { Heart } from 'lucide-react'

const CATEGORIES = ['Branding', 'Fonts', 'Icons', 'Misc', 'Mockup', 'Play', 'Vectors', 'Video']
const NAV_LINKS = ['About', 'Features', 'Contact']

function TwitterIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function RssIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.37 20 6.18 20C5 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18zM4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44zm0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
    </svg>
  )
}

const SOCIAL_ICONS = [
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: DribbbleIcon, label: 'Dribbble' },
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: RssIcon, label: 'RSS' },
]

export function Footer() {
  return (
    <footer className="w-full bg-bg px-[15px] py-[60px] pb-[50px] text-center text-[16px] leading-[36px] text-text-footer">
      <div className="mx-auto flex max-w-[1170px] flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
        {/* Categories */}
        <div className="sm:w-[30.6%]">
          {CATEGORIES.map((cat) => (
            <span key={cat} className="inline-block pr-5">
              <a href="#" className="text-text-footer transition-colors hover:text-brand">
                {cat}
              </a>
            </span>
          ))}
        </div>

        {/* Navigation */}
        <div className="sm:w-[30.6%]">
          {NAV_LINKS.map((link) => (
            <span key={link} className="inline-block pr-5">
              <a href="#" className="text-text-footer transition-colors hover:text-brand">
                {link}
              </a>
            </span>
          ))}
        </div>

        {/* Social + Copyright */}
        <div className="sm:w-[30.6%]">
          <div className="flex justify-center gap-4 pb-2">
            {SOCIAL_ICONS.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                className="text-[23px] text-[#CACACA] transition-colors hover:text-brand"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className="text-[14px] leading-[25px]">
            Made with{' '}
            <Heart
              size={14}
              className="mx-0.5 inline-block animate-[pulse_1s_infinite] text-brand"
            />{' '}
            by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-text-footer transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
