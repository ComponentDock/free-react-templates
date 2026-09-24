import { brandName, footerBlurb, usefulLinks, topCategories, copyrightYear } from '../data'
import { SocialIcons } from './SocialIcons'
import { NewsletterForm } from './NewsletterForm'

export function Footer() {
  return (
    <footer className="bg-footer-bg">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Logo + blurb + social */}
        <div>
          <a href="#top" className="mb-4 inline-block text-2xl font-bold text-white">
            {brandName}
          </a>
          <p className="mb-4 text-sm leading-relaxed text-white/60">{footerBlurb}</p>
          <div className="[&_a]:text-white/50 [&_a]:hover:text-accent">
            <SocialIcons />
          </div>
        </div>

        {/* Column 2: Useful links */}
        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Useful Links</h4>
          <ul className="space-y-2">
            {usefulLinks.map((link) => (
              <li key={link}>
                <a
                  href="#top"
                  className="text-sm text-white/60 transition-colors hover:text-accent"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Top Categories */}
        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Top Categories</h4>
          <ul className="space-y-2">
            {topCategories.map((cat) => (
              <li key={cat}>
                <a
                  href="#top"
                  className="text-sm text-white/60 transition-colors hover:text-accent"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <NewsletterForm />
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-white/40">
          &copy; {copyrightYear} {brandName}. All rights reserved. Powered by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
