import {
  componentDockLabel,
  componentDockUrl,
  footerAboutText,
  footerAboutTitle,
  footerAddress,
  footerContactTitle,
  footerEmail,
  footerLinks,
  footerLinksTitle,
  footerPhone,
  footerRecentPosts,
  footerRecentTitle,
  footerWebsite,
  siteName,
} from '../data'

export function Footer() {
  return (
    <footer id="footer-section" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold text-ink">{footerAboutTitle}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">{footerAboutText}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-ink">{footerLinksTitle}</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-ink">{footerRecentTitle}</h3>
          <div className="mt-4 space-y-4">
            {footerRecentPosts.map((post) => (
              <div key={post.title} className="flex gap-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-14 w-14 shrink-0 rounded object-cover"
                />
                <div>
                  <h4 className="text-sm font-medium text-ink">{post.title}</h4>
                  <p className="text-xs text-muted">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-ink">{footerContactTitle}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>{footerAddress}</li>
            <li>
              <a href={`tel:${footerPhone}`} className="transition-colors hover:text-brand">
                {footerPhone}
              </a>
            </li>
            <li>
              <a href={`mailto:${footerEmail}`} className="transition-colors hover:text-brand">
                {footerEmail}
              </a>
            </li>
            <li>
              <a href={`https://${footerWebsite}`} className="transition-colors hover:text-brand">
                {footerWebsite}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-muted sm:px-8">
          &copy; {new Date().getFullYear()} {siteName} &mdash;{' '}
          <a
            href={componentDockUrl}
            className="font-bold text-brand transition-colors hover:text-brand-dark"
          >
            {componentDockLabel}
          </a>
        </p>
      </div>
    </footer>
  )
}
