import { Globe, MessageSquare, Share2, Mail } from 'lucide-react'
import { FOOTER } from '../data'

const SOCIAL_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook: Globe,
  Twitter: MessageSquare,
  Instagram: Share2,
  Pinterest: Mail,
}

/** Footer — dark background (#000), 3 columns (About, Quick Links,
    Contact), social icons, and copyright with Component Dock link. */
export function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* About column */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold">{FOOTER.about.heading}</h3>
            <p className="mb-4 text-sm text-white/70">{FOOTER.about.text}</p>
            <a
              href="#"
              className="inline-block rounded bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              {FOOTER.about.readMoreLabel}
            </a>
          </div>
          {/* Quick Links column */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {FOOTER.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact column */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold">{FOOTER.contact.heading}</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {FOOTER.contact.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Social icons */}
        <div className="mt-10 flex justify-center gap-4">
          {FOOTER.socialIcons.map((social) => {
            const Icon = SOCIAL_ICON_MAP[social.name]
            return (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
              >
                {Icon && <Icon className="h-5 w-5" />}
              </a>
            )
          })}
        </div>
      </div>
      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-sm text-white/50 sm:flex-row">
          <p>{FOOTER.copyright}</p>
          <a
            href={FOOTER.dockLink.href}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            {FOOTER.dockLink.label}
          </a>
        </div>
      </div>
    </footer>
  )
}
