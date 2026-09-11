import { footer } from '../data'

export function Footer() {
  return (
    <footer className="bg-footer-bg py-16">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* About */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">{footer.about.title}</h4>
            <p className="text-sm leading-relaxed text-footer-text">{footer.about.description}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">{footer.contact.title}</h4>
            <p className="mb-4 text-sm leading-relaxed text-footer-text">
              {footer.contact.description}
            </p>
            <div className="space-y-1">
              {footer.contact.phones.map((phone) => (
                <p key={phone} className="text-sm font-medium text-white">
                  {phone}
                </p>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">{footer.newsletter.title}</h4>
            <p className="mb-4 text-sm text-footer-text">{footer.newsletter.description}</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-brand px-4 py-2 text-white transition-colors hover:bg-brand/90"
                aria-label="Subscribe"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 flex flex-wrap items-center justify-between border-t border-white/10 pt-8">
          <p className="text-sm text-footer-text">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-brand">♥</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
          <div className="mt-4 flex gap-4 sm:mt-0">
            {['Facebook', 'Twitter', 'Dribbble', 'Behance'].map((name) => (
              <a
                key={name}
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs text-footer-text transition-colors hover:border-brand hover:text-white"
                aria-label={name}
              >
                {name[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
