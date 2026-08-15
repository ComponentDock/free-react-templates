import {
  componentDockLabel,
  componentDockUrl,
  footerAboutText,
  footerAboutTitle,
  footerLinks,
  footerLinksTitle,
  footerSubscribeButton,
  footerSubscribeLabel,
  footerSubscribeText,
  footerSubscribeTitle,
  siteName,
} from '../data'

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-black uppercase text-ink">{footerAboutTitle}</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#989898]">{footerAboutText}</p>
        </div>
        <div>
          <h3 className="text-xl font-black uppercase text-ink">{footerLinksTitle}</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-[#989898] transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-black uppercase text-ink">{footerSubscribeTitle}</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#989898]">{footerSubscribeText}</p>
          <form className="mt-5 flex">
            <label htmlFor="footer-email" className="sr-only">
              {footerSubscribeLabel}
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              placeholder={footerSubscribeLabel}
              className="h-[50px] w-full rounded-none border-2 border-gray-300 bg-transparent px-4 text-sm text-ink transition-colors focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 bg-brand px-5 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-brand-2"
            >
              {footerSubscribeButton}
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-[#989898] sm:px-8">
          &copy; {new Date().getFullYear()} {siteName} &mdash;{' '}
          <a
            href={componentDockUrl}
            className="font-bold text-brand transition-colors hover:text-brand-2"
          >
            {componentDockLabel}
          </a>
        </p>
      </div>
    </footer>
  )
}
