import { MapPin, Phone } from 'lucide-react'
import {
  BANNER_TWO,
  FOOTER_ABOUT,
  FOOTER_ADDRESS,
  FOOTER_CELL,
  FOOTER_PHONE,
  FOOTER_POPULAR,
} from '../data'

export function Footer() {
  return (
    <footer className="bg-footer text-footertext">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="inline-block bg-brand px-3 py-2 font-heading text-xl font-extrabold uppercase tracking-wide text-white">
            Pressroom
          </span>
          <p className="mt-5 text-sm leading-relaxed">{FOOTER_ABOUT}</p>
          <p className="mt-5 flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            {FOOTER_ADDRESS}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            {FOOTER_PHONE}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            {FOOTER_CELL}
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-lg font-bold text-white">Popular post</h3>
          <ul className="space-y-4">
            {FOOTER_POPULAR.map((post) => (
              <li key={post.title} className="flex gap-3">
                <img
                  src={post.image}
                  alt=""
                  className="h-16 w-16 shrink-0 object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-heading text-sm font-bold leading-snug text-white transition-colors hover:text-brand">
                    {post.title}
                  </p>
                  <p className="mt-1 text-xs">{post.byline}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-lg font-bold text-white">More templates</h3>
          <p className="text-sm leading-relaxed">
            Explore{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-white"
            >
              Component Dock
            </a>{' '}
            for more free templates.
          </p>
          <img
            src={BANNER_TWO}
            alt="Advertisement"
            className="mt-6 h-40 w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-center text-sm md:flex-row">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | made with ♥ by Pressroom
          </p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
