import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const exploreLinks = ['About', 'Blog', 'Contact us'] as const

const recentPosts = [
  { seed: 'inkwell-post-1', title: 'Creativity and Inspiration', meta: 'Jan. 30, 2021 · Admin' },
  { seed: 'inkwell-post-2', title: 'A Walk Through the Old Market', meta: 'Jan. 28, 2021 · Admin' },
  { seed: 'inkwell-post-3', title: 'Notes on Analog Photography', meta: 'Jan. 25, 2021 · Admin' },
] as const

const socialLinks = [
  { name: 'twitter', label: 'Twitter' },
  { name: 'facebook', label: 'Facebook' },
  { name: 'instagram', label: 'Instagram' },
] as const

export function Footer() {
  return (
    <footer className="bg-footer dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-sans text-xl font-bold text-ink dark:text-white">
            Ink<span className="text-brand">well.</span>
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/70 dark:text-gray-400">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
          <ul className="mt-6 flex items-center gap-2" aria-label="Social media">
            {socialLinks.map(({ name, label }) => (
              <li key={name}>
                <a
                  href="#home"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-chip text-white transition-colors hover:bg-ink dark:bg-gray-700 dark:hover:bg-brand dark:hover:text-black"
                >
                  <BrandIcon name={name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Explore">
          <h3 className="mb-10 text-sm font-bold uppercase tracking-[2px] text-ink dark:text-gray-200">
            Explore
          </h3>
          <ul className="flex flex-col gap-3">
            {exploreLinks.map((label) => (
              <li key={label}>
                <a
                  href="#blog"
                  className="group inline-flex items-center gap-2 text-sm text-link transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-brand"
                >
                  <ArrowRight
                    className="h-4 w-4 text-ink transition-transform group-hover:translate-x-0.5 dark:text-gray-300"
                    aria-hidden="true"
                  />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-10 text-sm font-bold uppercase tracking-[2px] text-ink dark:text-gray-200">
            Recent Posts
          </h3>
          <ul className="flex flex-col gap-5">
            {recentPosts.map((post) => (
              <li key={post.seed} className="flex items-center gap-5">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/100/100`}
                  alt=""
                  className="h-[50px] w-[50px] rounded object-cover"
                />
                <div className="min-w-0">
                  <p className="text-xs text-meta dark:text-gray-500">{post.meta}</p>
                  <a
                    href="#blog"
                    className="mt-1 block text-base text-link transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
                  >
                    {post.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-10 text-sm font-bold uppercase tracking-[2px] text-ink dark:text-gray-200">
            Have a Questions?
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-4">
              <MapPin
                className="mt-1 h-5 w-5 shrink-0 text-ink dark:text-gray-300"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-ink/80 dark:text-gray-400">
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="h-5 w-5 shrink-0 text-ink dark:text-gray-300" aria-hidden="true" />
              <a
                href="tel:+23923929210"
                className="text-sm text-ink/80 transition-colors hover:text-brand dark:text-gray-400"
              >
                +2 392 3929 210
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="h-5 w-5 shrink-0 text-ink dark:text-gray-300" aria-hidden="true" />
              <a
                href="mailto:info@yourdomain.com"
                className="text-sm text-ink/80 transition-colors hover:text-brand dark:text-gray-400"
              >
                info@yourdomain.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-ink py-5 dark:bg-black">
        <p className="text-center text-sm text-white/80">
          Copyright © 2026 All rights reserved | This template is made with ♥ by Inkwell
        </p>
      </div>
    </footer>
  )
}
