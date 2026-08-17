import { ChevronRight, Heart, Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon } from './BrandIcons'
import {
  brandName,
  componentDockLabel,
  componentDockUrl,
  contactPhone,
  copyrightLine,
  footerAddress,
  footerBlurb,
  footerServices,
  recentPosts,
  tagline,
} from '../data'

const socials = ['Twitter', 'Facebook', 'Instagram'] as const

export function Footer() {
  return (
    <footer id="contact" className="relative bg-ink text-white/90">
      <div aria-hidden="true" className="absolute inset-0 bg-black/80" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2 text-[28px] font-bold text-white">
              <Heart aria-hidden="true" className="h-7 w-7 text-brand" />
              {brandName}
            </a>
            <span className="mt-1 block text-sm text-white/70">{tagline}</span>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">{footerBlurb}</p>
            <ul className="footer-social mt-6 flex gap-3">
              {socials.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={label}
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-brand text-white transition-colors hover:bg-white hover:text-brand"
                  >
                    <BrandIcon label={label} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-base font-medium text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="flex items-center gap-2 text-white/70 transition-colors hover:text-brand"
                  >
                    <ChevronRight aria-hidden="true" className="h-4 w-4 text-brand" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-base font-medium text-white">Recent Posts</h3>
            <ul className="mt-5 space-y-6">
              {recentPosts.map((post) => (
                <li key={post.title} className="flex items-center gap-4">
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="h-[50px] w-[50px] rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs text-white/60">{post.date}</p>
                    <h4 className="mt-1 text-base font-medium leading-snug text-white">
                      {post.title}
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-base font-medium text-white">Have a Questions?</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />
                {footerAddress}
              </li>
              <li className="flex items-center gap-3">
                <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-brand" />
                {contactPhone}
              </li>
              <li className="flex items-center gap-3">
                <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-brand" />
                @info@email.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15 py-6 text-center text-sm text-white/70">
        <p>{copyrightLine}</p>
        <p className="mt-1">
          More templates at{' '}
          <a
            href={componentDockUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand transition-colors hover:text-white"
          >
            {componentDockLabel}
          </a>
        </p>
      </div>
    </footer>
  )
}
