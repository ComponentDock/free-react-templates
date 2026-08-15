import { footer, header } from '../data'
import { BrandIcon } from './BrandIcon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-section pt-[100px] pb-[60px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <a
              href="#home"
              className="font-display text-2xl font-bold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {header.brand}
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-secondary">{footer.blurb}</p>
            <ul className="mt-6 flex gap-3">
              {footer.socials.map((social) => (
                <li key={social}>
                  <a
                    href={`#${social}`}
                    aria-label={social}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-muted/60 text-muted transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <BrandIcon name={social} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {footer.columns.map((column, index) => (
            <div key={index}>
              {column.heading ? (
                <h4 className="mb-10 text-[17px] font-bold text-darkblue">{column.heading}</h4>
              ) : (
                <h4 aria-hidden="true" className="mb-10 text-[17px] font-bold text-darkblue">
                  &nbsp;
                </h4>
              )}
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#latest"
                      className="text-sm text-secondary transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-[45px] border-t border-edge pt-8 text-center text-sm text-secondary">
          <p>
            © {year} {header.brand}. All rights reserved. ·{' '}
            <a
              href={footer.componentDockHref}
              className="text-brand transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {footer.componentDockLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
