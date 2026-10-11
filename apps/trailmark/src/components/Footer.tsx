import { Send } from 'lucide-react'
import { ABOUT_TEXT, BRAND, FOOTER_TAGS, LATEST_POSTS } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-navy-deep py-20 text-muted">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <Send aria-hidden="true" className="h-6 w-6 text-brand" />
            <span className="leading-tight text-white">
              <span className="block text-2xl font-medium uppercase tracking-[0.08em]">
                {BRAND.name}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.36em]">{BRAND.tagline}</span>
            </span>
          </a>
          <p className="font-body mt-6 text-xs font-light leading-[2.5]">{ABOUT_TEXT}</p>
          <p className="font-body mt-6 text-xs font-light">
            © 2026 Trailmark. All rights reserved.{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand-nav transition-opacity hover:opacity-80"
            >
              More templates at Component Dock
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-light text-white">Latest News</h3>
          <ul className="mt-8 space-y-6">
            {LATEST_POSTS.map((post) => (
              <li key={post.title} className="flex gap-4">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/156/156`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-[78px] w-[78px] shrink-0 object-cover"
                />
                <span>
                  <a
                    href="#news"
                    className="block text-base font-light text-muted transition-colors hover:text-brand-nav"
                  >
                    {post.title}
                  </a>
                  <span className="block text-xs font-light text-brand-nav">{post.date}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-light text-white">Tags</h3>
          <ul className="mt-8 flex flex-wrap">
            {FOOTER_TAGS.map((tag) => (
              <li key={tag} className="m-1.5">
                <a
                  href="#news"
                  className="flex h-9 items-center bg-brand-nav px-7 text-xs font-light text-white transition-opacity hover:opacity-80"
                >
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
