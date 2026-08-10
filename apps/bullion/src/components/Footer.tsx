import { Heart } from 'lucide-react'
import type { MiniPost } from '../data'
import {
  bottomBarLinks,
  brandName,
  copyrightText,
  footerBlurb,
  footerMostPopular,
  mostPopularTitle,
  socials,
} from '../data'
import { BrandIcon } from './BrandIcon'

/** Dark charcoal footer: brand column, two MOST POPULAR columns with
    accent headings, then a bottom bar with legal links and social icons
    (reference: footer.bg-191 / .color-ccc / .color-ash). */
export function Footer() {
  const firstPopular = footerMostPopular.slice(0, 2)
  const secondPopular = footerMostPopular.slice(2)

  return (
    <footer className="bg-dark text-subline">
      <div className="mx-auto max-w-7xl px-4 pt-[50px] pb-5">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#top" className="text-2xl font-extrabold uppercase tracking-wide text-white">
              {brandName}
            </a>
            <p className="mt-5 mb-5 text-sm leading-relaxed">{footerBlurb}</p>
            <p className="text-xs text-ash">
              {copyrightText} <Heart className="inline h-3 w-3 text-accent" aria-hidden="true" /> by
              Colorlib
            </p>
          </div>

          <FooterPopularColumn posts={firstPopular} />
          <FooterPopularColumn posts={secondPopular} />
        </div>

        <div className="my-5 border-t border-white/20" aria-hidden="true" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[0.9em] text-ash">
            {bottomBarLinks.map((link) => (
              <li key={link}>
                <a href="#legal" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-x-4 text-ash">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href="#social"
                  aria-label={social.label}
                  className="transition-colors hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

interface FooterPopularColumnProps {
  posts: ReadonlyArray<MiniPost>
}

function FooterPopularColumn({ posts }: FooterPopularColumnProps) {
  return (
    <div>
      <h5 className="mb-5 text-sm font-bold uppercase text-accent">{mostPopularTitle}</h5>
      <ul>
        {posts.map((post, index) => (
          <li key={post.seed} className={index > 0 ? 'mt-4 border-t border-white/20 pt-4' : ''}>
            <a
              href="#post"
              className="text-sm font-bold text-white transition-colors hover:text-accent"
            >
              {post.headline}
            </a>
            <h6 className="mt-1 text-xs text-ash">
              by {post.author}, {post.date}
            </h6>
          </li>
        ))}
      </ul>
    </div>
  )
}
