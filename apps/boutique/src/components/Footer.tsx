import { componentDockName, componentDockUrl, footerAbout, footerColumns, siteName } from '../data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact-section" className="bg-footer">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 lg:grid-cols-5 lg:py-24">
        <div className="lg:col-span-1">
          <p className="text-2xl font-bold uppercase text-white">{siteName}</p>
          <p className="mt-5 text-sm leading-relaxed text-muted">{footerAbout}</p>
        </div>
        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h3 className="text-sm font-semibold uppercase text-white">{column.title}</h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#home-section"
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="bg-footerbar py-3">
        <p className="px-6 text-center text-sm text-muted">
          Copyright © {year} All rights reserved | This template is made with ♥ by{' '}
          <a
            href={componentDockUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline-offset-2 hover:underline"
          >
            {componentDockName}
          </a>
        </p>
      </div>
    </footer>
  )
}
