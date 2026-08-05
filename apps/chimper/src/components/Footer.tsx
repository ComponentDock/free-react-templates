import { SocialLinks } from './SocialLinks'

const featureLinks = ['About Us', 'Services', 'Testimonials', 'Contact Us'] as const

export function Footer() {
  return (
    <footer className="bg-night py-16 dark:bg-black sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="text-base font-bold text-white">About Us</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium
              magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white">Features</h2>
            <ul className="mt-5 space-y-2.5">
              {featureLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-white">Follow Us</h2>
            <div className="mt-5">
              <SocialLinks variant="circle" />
            </div>
          </div>
        </div>

        <div className="mt-14 max-w-md">
          <h2 className="text-base font-bold text-white">Subscribe Newsletter</h2>
          <form
            className="mt-5 flex gap-2"
            aria-label="Newsletter subscription"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter Email"
              className="h-11 w-full rounded-full border border-gray-600 bg-transparent px-5 text-sm text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none"
            />
            <button
              type="submit"
              className="h-11 shrink-0 rounded-full bg-primary-600 px-6 text-xs font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-primary-700"
            >
              Send
            </button>
          </form>
        </div>

        <p className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-muted">
          Copyright © {new Date().getFullYear()} Chimper. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
