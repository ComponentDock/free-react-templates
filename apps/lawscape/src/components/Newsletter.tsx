import { Send } from 'lucide-react'

export function Newsletter() {
  return (
    <section aria-label="Newsletter" className="bg-light-bg py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-ink">
              About Agency
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-smoke">
              The world has become so fast paced that people don't want to stand by reading a page
              of information, they would much rather look at a presentation and understand the
              message.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-ink">
              Navigation Links
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-smoke">
              {[
                'Home',
                'Feature',
                'Services',
                'Portfolio',
                'Team',
                'Pricing',
                'Blog',
                'Contact',
              ].map((link) => (
                <a key={link} href="#" className="hover:text-primary-500">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-ink">
              Newsletter
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-smoke">
              For business professionals caught between high OEM price and mediocre print and
              graphic output.
            </p>
            <form
              className="mt-4 flex"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter subscription"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-primary-500 px-3 py-2 text-white transition-colors hover:bg-primary-700"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>

          {/* InstaFeed */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-ink">
              InstaFeed
            </h3>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {Array.from({ length: 8 }, (_, i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/lawscape-insta${i + 1}/80/80`}
                  alt={`InstaFeed image ${i + 1}`}
                  className="h-16 w-16 object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
