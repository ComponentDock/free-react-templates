import {
  BRAND,
  COMPONENT_DOCK_URL,
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICE_LINKS,
  FOOTER_CONTACT_LINKS,
} from '../data'

/* Footer — pure black footer with four widget columns (brand + about +
   "Learn More", Our Company 6 links, Our Services 3 links, Contact 5
   links) and a bottom copyright bar crediting Component Dock (replaces
   the source's attribution credit). */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-1.5">
            <span className="font-heading text-2xl font-bold uppercase tracking-wide">{BRAND}</span>
            <span className="inline-block h-3 w-3 bg-brand" aria-hidden="true" />
          </a>
          <p className="mt-4 text-[15px] leading-6 text-white/60">
            Gantry is a construction and engineering company building safe, modern structures for
            industrial, commercial and residential clients.
          </p>
          <a
            href="#home"
            className="mt-5 inline-block font-heading uppercase tracking-wide text-brand hover:text-white"
          >
            Learn More
          </a>
        </div>
        <div>
          <h3 className="font-heading text-base font-medium uppercase tracking-wide text-white">
            Our Company
          </h3>
          <ul className="mt-6 space-y-3">
            {FOOTER_COMPANY_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#home"
                  className="text-[15px] text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-base font-medium uppercase tracking-wide text-white">
            Our Services
          </h3>
          <ul className="mt-6 space-y-3">
            {FOOTER_SERVICE_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#home"
                  className="text-[15px] text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-base font-medium uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-6 space-y-3">
            {FOOTER_CONTACT_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#home"
                  className="text-[15px] text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-sm text-white/60 md:flex-row">
          <p>Copyright &copy; {year} All rights reserved</p>
          <p>
            This template is made with &hearts; by{' '}
            <a
              href={COMPONENT_DOCK_URL}
              className="text-brand transition-colors hover:text-white hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
