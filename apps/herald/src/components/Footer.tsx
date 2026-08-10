import { Heart, Play } from 'lucide-react'
import {
  footerBlurb,
  footerBottomLinks,
  footerRecentPosts,
  footerVideoPosts,
  imgUrl,
  madeWithText,
  ourWorkLinks,
  quickLinks,
  siteName,
  utilitySocials,
  socialLabels,
} from '../data'
import { BrandIcon } from './BrandIcon'
import { MetaRow } from './MetaRow'

/** Navy footer: map overlay, four link columns, bottom row, dark bar. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-primary text-[#ccc]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px), radial-gradient(circle at 75% 60%, #ffffff 1px, transparent 1px), radial-gradient(circle at 50% 85%, #ffffff 1px, transparent 1px)',
          backgroundSize: '220px 220px, 300px 300px, 260px 260px',
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-4 pt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <h5 className="relative mb-6 pb-3 font-heading text-sm font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[50px] after:bg-white">
              QUICK LINKS
            </h5>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <h5 className="relative mb-6 pb-3 font-heading text-sm font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[50px] after:bg-white">
              FEATURED VIDEO
            </h5>
            <ul className="flex flex-col gap-6">
              {footerVideoPosts.map((video) => (
                <li key={video.seed} className="flex gap-3">
                  <div className="relative shrink-0">
                    <img
                      src={imgUrl(video.seed, 80, 80)}
                      alt={video.headline}
                      loading="lazy"
                      className="h-20 w-20 object-cover"
                    />
                    <span className="absolute top-1/2 left-1/2 flex h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white">
                      <Play className="h-3 w-3 fill-current" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="pl-1">
                    <a href="#" className="block">
                      <h5 className="text-sm font-semibold text-white transition-colors hover:text-[#ccc]">
                        {video.headline}
                      </h5>
                    </a>
                    <div className="mt-2">
                      <MetaRow meta={video.meta} className="text-ash" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h5 className="relative mb-6 pb-3 font-heading text-sm font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[50px] after:bg-white">
              OUR WORK
            </h5>
            <ul className="space-y-2 text-xs">
              {ourWorkLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <h5 className="relative mb-6 pb-3 font-heading text-sm font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[50px] after:bg-white">
              RECENT POST
            </h5>
            <ul className="flex flex-col gap-6">
              {footerRecentPosts.map((post) => (
                <li key={post.seed} className="flex gap-3">
                  <img
                    src={imgUrl(post.seed, 80, 80)}
                    alt={post.headline}
                    loading="lazy"
                    className="h-20 w-20 shrink-0 object-cover"
                  />
                  <div className="pl-1">
                    <a href="#" className="block">
                      <h5 className="text-sm font-semibold text-white transition-colors hover:text-[#ccc]">
                        {post.headline}
                      </h5>
                    </a>
                    <div className="mt-2">
                      <MetaRow meta={post.meta} className="text-ash" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 pb-8">
          <div className="grid grid-cols-1 items-center gap-6 text-center md:grid-cols-12 md:text-left">
            <div className="md:col-span-3">
              <a href="#" className="font-heading text-xl font-bold text-white">
                {siteName}
              </a>
            </div>
            <p className="text-xs leading-5 text-[#ddd] md:col-span-5">{footerBlurb}</p>
            <ul className="flex items-center justify-center gap-3 md:col-span-4 md:justify-end">
              {utilitySocials.map((name) => (
                <li key={name}>
                  <a
                    href="#"
                    aria-label={socialLabels[name]}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white"
                  >
                    <BrandIcon name={name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-primary-dark">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-4 py-4 md:flex-row">
          <p className="flex items-center gap-1.5 text-xs text-[#ccc]">
            Copyright © {year} {madeWithText}{' '}
            <Heart className="h-3 w-3 text-accent" fill="currentColor" aria-hidden="true" />
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {footerBottomLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-xs text-[#ccc] transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
