import { Check, Globe, Mail, MapPin, Phone } from 'lucide-react'
import {
  BRAND,
  COMPONENT_DOCK_URL,
  CONTACT_INFO,
  FOOTER_ABOUT,
  QUICK_LINKS,
  RECENT_POSTS,
} from '../data'
import { DribbbleIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from './social-icons'

const SOCIAL_ICONS = [TwitterIcon, FacebookIcon, LinkedinIcon, DribbbleIcon]

/**
 * Footer — dark charcoal (#25282a) four-column footer: About Sculpt with
 * four circular social links, Quick Links with check icons, Recent Post
 * thumbnails, and Contact Info, plus a copyright bar with a neutral
 * credit and a Component Dock link.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-footer pt-24 text-white/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-5 text-base text-white">About {BRAND}</h4>
            <p className="text-sm leading-relaxed">{FOOTER_ABOUT}</p>
            <div className="mt-5 flex gap-3">
              {SOCIAL_ICONS.map((Icon, index) => (
                <a
                  key={index}
                  href="#contact"
                  aria-label={`${BRAND} on social media`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-base text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="inline-flex items-center gap-2 text-white/90 hover:text-brand"
                  >
                    <Check className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base text-white">Recent Post</h4>
            <ul className="space-y-4">
              {RECENT_POSTS.map((post, index) => (
                <li key={index} className="flex gap-3">
                  <img
                    src={post.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-[60px] w-[70px] shrink-0 object-cover"
                  />
                  <div>
                    <h5 className="text-base text-[#cccccc]">{post.title}</h5>
                    <span className="text-[13px]">{post.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {CONTACT_INFO.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {CONTACT_INFO.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {CONTACT_INFO.email}
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {CONTACT_INFO.website}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 py-5 text-center text-sm">
        Copyright © {year} All rights reserved | This template is made with ♥ ·{' '}
        <a
          href={COMPONENT_DOCK_URL}
          target="_blank"
          rel="noreferrer"
          className="text-white/90 hover:text-brand"
        >
          More templates at Component Dock
        </a>
      </div>
    </footer>
  )
}
