import { Check } from 'lucide-react'
import {
  footerArchive,
  footerCopyright,
  footerNavigational,
  footerRecentPosts,
  footerTags,
  siteName,
} from '../data'

const picsum = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-coal py-16 text-white/60 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              {siteName}
            </h2>
            <p className="text-sm leading-relaxed">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Navigational
            </h2>
            <ul className="space-y-2">
              {footerNavigational.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm transition-colors hover:text-brand"
                  >
                    <Check className="h-4 w-4" aria-hidden="true" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Recent Post
            </h2>
            <ul className="space-y-4">
              {footerRecentPosts.map((post) => (
                <li key={post.title} className="flex items-center gap-3">
                  <img
                    src={picsum(post.seed, 96, 96)}
                    alt=""
                    loading="lazy"
                    className="h-12 w-12 rounded object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-white/80 transition-colors hover:text-brand">
                      <a href="#">{post.title}</a>
                    </h3>
                    <p className="text-xs">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Archive</h2>
            <ul className="space-y-2">
              {footerArchive.map((month) => (
                <li key={month}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm transition-colors hover:text-brand"
                  >
                    <Check className="h-4 w-4" aria-hidden="true" />
                    {month}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Tags</h2>
          <ul className="flex flex-wrap gap-2">
            {footerTags.map((tag) => (
              <li key={tag}>
                <a
                  href="#"
                  className="inline-block rounded border border-white/20 px-3 py-1 text-[13px] text-white/60 transition-colors hover:bg-brand hover:text-white"
                >
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-center text-sm">
          Copyright © {year} | {footerCopyright}
        </p>
      </div>
    </footer>
  )
}
