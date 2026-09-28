import { Heart } from 'lucide-react'
import { brand, blogPosts, instagramImages, footer } from '../data'
import { FacebookIcon, TwitterIcon, InstagramIcon, DribbbleIcon } from './social-icons'

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Dribbble', Icon: DribbbleIcon },
] as const

/** Dark footer with 4 columns: About + social icons, Latest Blog,
 *  Instagram grid, Newsletter signup. Bottom copyright with Component Dock link. */
export function Footer() {
  return (
    <footer id="contact" className="bg-footer-bg">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* About + Social */}
        <div>
          <a href="#home" className="flex items-center gap-2 text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
            <span className="text-xl font-semibold">{brand.name}</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{footer.about}</p>
          <ul className="mt-6 flex gap-3">
            {socials.map(({ label, Icon }) => (
              <li key={label}>
                <a
                  href="#contact"
                  aria-label={label}
                  className="flex h-[35px] w-[35px] items-center justify-center bg-white/10 text-white transition-colors hover:bg-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest Blog */}
        <div>
          <h2 className="text-lg font-semibold text-white">Latest Blog</h2>
          <ul className="mt-6 space-y-4">
            {blogPosts.map((post) => (
              <li key={post.title} className="flex gap-3">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-14 w-14 shrink-0 rounded object-cover"
                />
                <div>
                  <p className="text-xs text-white/70">{post.date}</p>
                  <p className="mt-1 text-sm font-medium text-white">{post.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h2 className="text-lg font-semibold text-white">Instagram</h2>
          <div className="mt-6 grid grid-cols-2 gap-2">
            {instagramImages.map((src) => (
              <a key={src} href="#contact" aria-label="Instagram photo">
                <img
                  src={src}
                  alt="Instagram food photo"
                  loading="lazy"
                  className="h-24 w-full rounded object-cover transition-opacity hover:opacity-80"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold text-white">Newsletter</h2>
          <p className="mt-6 text-sm leading-relaxed text-white/70">{footer.newsletter}</p>
          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your Email Address"
              aria-label="Email address"
              className="w-full rounded-[3px] bg-white/10 px-5 py-3 text-sm text-white placeholder-white/50 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-[3px] bg-brand px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-ink"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/80">
            Made with{' '}
            <Heart className="inline h-3.5 w-3.5 fill-brand text-brand" aria-hidden="true" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
