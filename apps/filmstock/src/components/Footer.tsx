import { componentDockLabel, componentDockUrl, footerText, siteName } from '../data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-footer-bg py-8">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <p className="text-sm text-footer-text">
          Copyright &copy; {year} {siteName}. {footerText} |{' '}
          <a
            href={componentDockUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-footer-link transition-colors hover:text-footer-link-hover"
          >
            {componentDockLabel}
          </a>
        </p>
      </div>
    </footer>
  )
}
