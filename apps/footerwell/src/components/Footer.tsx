import { type FormEvent } from 'react'

const discoverLinks = ['Investment', 'Marketing', 'Services', 'Insurance'] as const
const aboutLinks = ['Help Line Number', 'About Us', 'Community', 'Events'] as const
const resourceLinks = ['Sign Up', 'Press', 'Career', 'Team'] as const
const socialLinks = ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'] as const

const partners = [
  'Envato',
  'ThemeForest',
  'CodeCanyon',
  'GraphicRiver',
  'PhotoDune',
  '3D Ocean',
] as const

function ArrowRightIcon() {
  return (
    <svg
      className="ml-2 inline-block h-3 w-3"
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

export function Footer() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer className="bg-footer-bg font-['Poppins',sans-serif]" role="contentinfo">
      {/* Floating subscribe form */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative z-10 -mt-[105px]">
          <form
            onSubmit={handleSubmit}
            className="flex items-center rounded-[40px] bg-white p-[3px] shadow-[0px_-12px_21px_-15px_rgba(0,0,0,0.1)]"
            aria-label="Email subscription"
          >
            <input
              type="email"
              placeholder="Enter email address"
              aria-label="Email address"
              className="h-[56px] flex-1 rounded-[40px] border-none bg-transparent px-6 text-[16px] text-black/30 outline-none placeholder:text-black/30"
            />
            <button
              type="submit"
              className="h-[56px] w-[150px] shrink-0 rounded-[40px] bg-accent-light px-4 text-[14px] font-medium uppercase tracking-[1px] text-white transition-colors hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Brand column */}
          <div className="md:col-span-1">
            <h2 className="mb-4 text-[19px] font-semibold text-footer-heading">
              <span className="text-white uppercase">FooterWell</span>
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-footer-text">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm text-accent transition-colors hover:text-white"
            >
              Read more <ArrowRightIcon />
            </a>
          </div>

          {/* Discover column */}
          <div className="md:border-l md:border-divider md:pl-8">
            <h3 className="mb-4 text-[19px] font-normal text-footer-heading">Discover</h3>
            <ul className="space-y-2">
              {discoverLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="block text-sm text-footer-muted transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About column */}
          <div className="md:border-l md:border-divider md:pl-8">
            <h3 className="mb-4 text-[19px] font-normal text-footer-heading">About</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="block text-sm text-footer-muted transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div className="md:border-l md:border-divider md:pl-8">
            <h3 className="mb-4 text-[19px] font-normal text-footer-heading">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="block text-sm text-footer-muted transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social column */}
          <div className="md:border-l md:border-divider md:pl-8">
            <h3 className="mb-4 text-[19px] font-normal text-footer-heading">Social</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="block text-sm text-footer-muted transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partner strip */}
        <div className="mt-12 border-y border-divider py-4">
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="text-[14px] text-footer-muted">Our Partner:</h3>
            <ul className="flex flex-wrap items-center gap-4">
              {partners.map((partner) => (
                <li key={partner}>
                  <a
                    href="#"
                    className="text-[13px] uppercase text-footer-muted transition-colors hover:text-white"
                  >
                    {partner}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="ml-auto text-[14px] text-accent transition-colors hover:text-white"
            >
              See All <ArrowRightIcon />
            </a>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-[14px] text-footer-copyright">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-accent underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
          <ul className="flex gap-4">
            {['Terms', 'Privacy', 'Compliances'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[14px] text-accent transition-colors hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
