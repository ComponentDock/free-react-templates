import { footerData } from '../data'

/* Photo-background footer (the reference's .footer-section): about column
   with the logo wordmark, a Discover link column, a Talk to us + Location
   column, and a copyright bar crediting Component Dock. */
export function Footer() {
  return (
    <footer id="contact" data-testid="footer" className="relative overflow-hidden">
      <img src={footerData.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-[1240px] px-6 pb-[130px] pt-[116px]">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="inline-block border border-white px-3 py-1 text-lg font-bold uppercase tracking-widest text-white">
              Obscura
            </span>
            <p className="mt-8 max-w-[470px] text-sm uppercase leading-relaxed text-white/25">
              {footerData.aboutText}
            </p>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-sm font-medium uppercase tracking-[3px] text-white">
              {footerData.discoverTitle}
            </h3>
            <ul className="mt-7 space-y-[15px]">
              {footerData.discoverLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm uppercase text-white/25 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-sm font-medium uppercase tracking-[3px] text-white">
              {footerData.talkTitle}
            </h3>
            <ul className="mt-7 space-y-[15px] text-sm uppercase text-white/25">
              <li>{footerData.phone}</li>
              {footerData.emails.map((email) => (
                <li key={email}>{email}</li>
              ))}
            </ul>
            <h3 className="mt-10 text-sm font-medium uppercase tracking-[3px] text-white">
              {footerData.locationTitle}
            </h3>
            <ul className="mt-7 space-y-[15px] text-sm uppercase text-white/25">
              {footerData.locationLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-white/60 sm:flex-row">
          <p>{footerData.copyright}</p>
          <p>
            {footerData.creditPrefix}{' '}
            <a
              href={footerData.creditHref}
              className="font-medium text-white transition-colors hover:text-white/70"
            >
              {footerData.creditLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
