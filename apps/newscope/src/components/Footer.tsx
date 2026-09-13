import { ArrowUp } from 'lucide-react'

const popularPosts = [
  { title: 'Top Fashion Trends for Fall 2026', image: 'https://picsum.photos/seed/ns-fp1/60/60' },
  {
    title: 'Tech Industry Forecast: What to Expect',
    image: 'https://picsum.photos/seed/ns-fp2/60/60',
  },
  { title: 'Best Travel Deals This Season', image: 'https://picsum.photos/seed/ns-fp3/60/60' },
]

const categories = [
  { name: 'News', count: 128 },
  { name: 'Entertainment', count: 96 },
  { name: 'Fashion', count: 74 },
  { name: 'Life Style', count: 89 },
  { name: 'Technology', count: 112 },
  { name: 'Travel', count: 63 },
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function Footer() {
  return (
    <footer className="bg-bg-dark text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Site info */}
          <div>
            <h3 className="mb-4 font-body text-lg font-bold text-white">Newscope</h3>
            <p className="font-ui text-sm leading-relaxed text-gray-400">
              Your trusted source for the latest news, entertainment, fashion, and lifestyle
              content. Stay informed and inspired.
            </p>
          </div>

          {/* Popular Posts */}
          <div>
            <h4 className="mb-4 font-body text-sm font-bold uppercase tracking-wider text-white">
              Popular Posts
            </h4>
            <ul className="flex flex-col gap-3">
              {popularPosts.map((post) => (
                <li key={post.title} className="flex items-center gap-3">
                  <img
                    src={post.image}
                    alt=""
                    className="h-10 w-10 flex-shrink-0 rounded-sm object-cover"
                  />
                  <a
                    href="#"
                    className="font-ui text-xs leading-tight text-gray-400 transition-colors hover:text-brand-pink"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 font-body text-sm font-bold uppercase tracking-wider text-white">
              Category
            </h4>
            <ul className="flex flex-col gap-2">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <a
                    href="#"
                    className="flex items-center justify-between font-ui text-sm text-gray-400 transition-colors hover:text-brand-pink"
                  >
                    <span>{cat.name}</span>
                    <span className="text-text-light">({cat.count})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-body text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="flex flex-col gap-2 font-ui text-sm text-gray-400">
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@newscope.com</li>
              <li>Address: 123 Media Lane, New York, NY</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <p className="font-ui text-xs text-gray-500">
            &copy; 2026 Newscope. All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand-pink hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-text-dark text-white shadow-lg transition-opacity hover:bg-brand-pink"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  )
}
