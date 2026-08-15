import { componentDockLabel, componentDockUrl, copyrightPrefix, footerLinks } from '../data'

export function Footer() {
  return (
    <footer className="bg-cream">
      <div className="px-4 py-[73px] text-center">
        <ul className="flex flex-wrap items-center justify-center gap-x-[54px] gap-y-4 max-md:flex-col">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[15px] text-ink transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white py-8 text-center">
        <p className="px-4 text-[15px] text-body">
          Copyright &copy; {new Date().getFullYear()} {copyrightPrefix} &hearts; by{' '}
          <a
            href={componentDockUrl}
            className="font-semibold text-brand transition-colors hover:text-brand-hover"
          >
            {componentDockLabel}
          </a>
        </p>
      </div>
    </footer>
  )
}
