import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react'
import { brand, contact, footerMenu, recentPosts, socials } from '../data'
import { SocialIcon } from './SocialIcon'

export function Footer() {
  return (
    <footer className="bg-footer pt-28 text-[15px] text-white/70">
      <div className="mx-auto max-w-[1320px] px-4">
        <div className="grid gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[22px] font-extrabold uppercase tracking-[0.06em] text-white">
              {brand}
            </p>
            <p className="mt-4 max-w-[18rem]">
              Construction, architecture and consulting under one roof since 1982.
            </p>
            <ul className="mt-6 flex gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={`${brand} on ${social.label}`}
                    className="flex size-10 items-center justify-center rounded-[2px] bg-white/5 text-brand transition-colors hover:bg-brand hover:text-ink"
                  >
                    <SocialIcon network={social.label} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-white">Recent posts</h2>
            <ul className="mt-5 space-y-4">
              {recentPosts.map((post) => (
                <li key={post.title} className="flex items-center gap-3">
                  <img
                    src={`https://picsum.photos/seed/${post.seed}/160/160`}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="size-20 shrink-0 object-cover"
                  />
                  <div>
                    <p className="text-[16px] font-medium text-white">{post.title}</p>
                    <p className="text-[13px] text-brand">Read more</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-white">Quick links</h2>
            <ul className="mt-5 space-y-3">
              {footerMenu.map((label, index) => (
                <li key={label}>
                  <a
                    href={index === 0 ? '#about' : '#services'}
                    className="flex items-center gap-2 hover:text-brand"
                  >
                    <ChevronRight aria-hidden="true" className="size-4 text-brand" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-white">Have a question?</h2>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="size-5 shrink-0 text-brand" />
                <span>{contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden="true" className="size-5 shrink-0 text-brand" />
                <a href="tel:+123445678910" className="hover:text-brand">
                  {contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden="true" className="size-5 shrink-0 text-brand" />
                <a href={`mailto:${contact.email}`} className="hover:text-brand">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="border-t border-white/10 py-6 text-center text-[13px]">
          © {new Date().getFullYear()} {brand}. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-brand hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
