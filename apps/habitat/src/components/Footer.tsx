import { Clock, Home, Mail, MapPin, Phone } from 'lucide-react'
import { brandName, footer } from '../data'
import { BehanceIcon, DribbbleIcon, FacebookIcon, PinterestIcon, TwitterIcon } from './social-icons'

const socialLinks = [
  { label: 'Pinterest', Icon: PinterestIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Dribbble', Icon: DribbbleIcon },
  { label: 'Behance', Icon: BehanceIcon },
] as const

/* Reference: footer.footer-section — #30304e band: a full-width strip of
   five property photos, a centered circular logo + wordmark, three widget
   columns (About + socials, Latest Blog Posts with two rows, Get In
   Touch with address/email/phone/hours) and a centered copyright bar
   (attribution branded to Component Dock). */
export function Footer() {
  return (
    <footer id="contact" className="bg-navy">
      <ul className="grid grid-cols-5">
        {footer.photos.map((item) => (
          <li key={item.photo}>
            <img
              src={item.photo}
              alt={item.alt}
              loading="lazy"
              className="h-28 w-full object-cover"
            />
          </li>
        ))}
      </ul>
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <a href="#home" className="flex items-center justify-center gap-3 text-white">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-navy">
            <Home size={24} aria-hidden="true" />
          </span>
          <span className="text-[28px] font-bold tracking-tight">{brandName}.</span>
        </a>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-[18px] font-medium text-white">{footer.aboutTitle}</h3>
            <p className="mt-4 text-[14px] font-light leading-relaxed text-white/70">
              {footer.aboutText}
            </p>
            <ul className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    href="#contact"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-brand hover:text-white"
                  >
                    <Icon className="h-4 w-4 fill-current" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div id="blog">
            <h3 className="text-[18px] font-medium text-white">{footer.blogTitle}</h3>
            <ul className="mt-4 space-y-5">
              {footer.posts.map((post) => (
                <li key={post.title} className="flex items-start gap-4">
                  <img
                    src={post.photo}
                    alt={post.alt}
                    loading="lazy"
                    className="h-[70px] w-[70px] shrink-0 rounded object-cover"
                  />
                  <div>
                    <h4 className="text-[14px] font-medium leading-snug text-white">
                      {post.title}
                    </h4>
                    <p className="mt-1 inline-flex items-center gap-1 text-[12px] text-white/60">
                      <Clock size={12} aria-hidden="true" />
                      {post.time}
                    </p>
                    <a
                      href="#blog"
                      className="mt-1 block text-[12px] font-medium text-brand transition-colors hover:text-brand-dark"
                    >
                      {footer.readMoreLabel}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[18px] font-medium text-white">{footer.contactTitle}</h3>
            <ul className="mt-4 space-y-3 text-[14px] font-light text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} aria-hidden="true" className="mt-1 shrink-0 text-brand" />
                {footer.address}
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} aria-hidden="true" className="shrink-0 text-brand" />
                {footer.email}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} aria-hidden="true" className="shrink-0 text-brand" />
                {footer.phone}
              </li>
            </ul>
            <p className="mt-5 text-[13px] font-light text-white/60">{footer.hours[0]}</p>
            <p className="text-[13px] font-light text-white/60">{footer.hours[1]}</p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-[13px] font-light text-white/60">
            Copyright © {new Date().getFullYear()} All rights reserved |{' '}
            <a
              href={footer.dockHref}
              className="font-medium text-white/85 transition-colors hover:text-brand"
            >
              {footer.dockLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
