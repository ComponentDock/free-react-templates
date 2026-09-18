import { Gamepad2 } from 'lucide-react'

const LATEST_POSTS = [
  {
    date: 'June 21, 2025',
    title: 'Top 5 upcoming indie games you should watch',
    author: 'Admin',
    image: 'https://picsum.photos/seed/fragzone-post1/100/100',
  },
  {
    date: 'June 18, 2025',
    title: 'How to optimize your gaming setup for FPS',
    author: 'Admin',
    image: 'https://picsum.photos/seed/fragzone-post2/100/100',
  },
  {
    date: 'June 15, 2025',
    title: 'Best mechanical keyboards for competitive play',
    author: 'Admin',
    image: 'https://picsum.photos/seed/fragzone-post3/100/100',
  },
]

const TOP_COMMENTS = [
  {
    author: 'Alex Morgan',
    comment: 'Great article on the latest patch notes!',
    date: 'June 22, 2025',
    avatar: 'https://picsum.photos/seed/fragzone-avatar1/80/80',
  },
  {
    author: 'Jordan Lee',
    comment: "Can't wait for the tournament next week.",
    date: 'June 20, 2025',
    avatar: 'https://picsum.photos/seed/fragzone-avatar2/80/80',
  },
  {
    author: 'Sam Rivera',
    comment: 'The new character balance changes are spot on.',
    date: 'June 19, 2025',
    avatar: 'https://picsum.photos/seed/fragzone-avatar3/80/80',
  },
  {
    author: 'Casey Park',
    comment: 'Love the community events. Keep them coming!',
    date: 'June 18, 2025',
    avatar: 'https://picsum.photos/seed/fragzone-avatar4/80/80',
  },
]

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Games', href: '#games' },
  { label: 'Blog', href: '#blog' },
  { label: 'Forums', href: '#forums' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-card">
      {/* Main footer content */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3">
        {/* Brand column */}
        <div className="relative">
          <div className="mb-4 flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="text-xl font-bold text-white">Fragzone</span>
          </div>
          <p className="mb-6 text-sm font-semibold text-gray-300">
            Your ultimate gaming community hub for news, tournaments, and reviews.
          </p>
        </div>

        {/* Latest Posts */}
        <div className="rounded border border-gray-700 bg-card p-5">
          <h3 className="mb-4 text-lg font-semibold text-white">Latest Posts</h3>
          {LATEST_POSTS.map((post) => (
            <div key={post.title} className="mb-4 flex gap-3 last:mb-0">
              <img src={post.image} alt="" className="h-16 w-16 flex-shrink-0 object-cover" />
              <div>
                <h4 className="text-xs font-semibold text-primary">{post.date}</h4>
                <p className="my-1 text-xs text-gray-300">{post.title}</p>
                <span className="text-xs text-gray-500">By: {post.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Top Comments */}
        <div className="rounded border border-gray-700 bg-card p-5">
          <h3 className="mb-4 text-lg font-semibold text-white">Top Comments</h3>
          {TOP_COMMENTS.map((c) => (
            <div key={c.comment} className="mb-4 flex gap-3 last:mb-0">
              <img
                src={c.avatar}
                alt={c.author}
                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="text-xs text-gray-300">
                  <span className="font-semibold text-badge-red">{c.author}</span> on {c.comment}
                </p>
                <h4 className="mt-1 text-xs font-semibold text-primary">{c.date}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 md:flex-row">
          <p className="text-sm text-gray-400">
            Made with{' '}
            <span className="text-badge-red" aria-label="love">
              ♥
            </span>{' '}
            by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
