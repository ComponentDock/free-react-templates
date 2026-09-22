import { MapPin, Phone, Mail } from 'lucide-react'

const latestNews = [
  { title: 'Costa Caribe Wins Championship Title', date: 'Jun 03, 2025', seed: 'news1' },
  { title: 'New Season Ticket Packages Available', date: 'Jun 01, 2025', seed: 'news2' },
]

export function Footer() {
  return (
    <footer className="bg-dark-surface text-gray-400">
      <div className="container mx-auto py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Contact */}
          <div>
            <h5 className="mb-4 font-heading text-lg font-bold uppercase text-white">
              Get in Touch
            </h5>
            <p className="mb-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>92-94 High St, Oxford OX1 4BJ, England</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>+44 1865 799599</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>Hoopside.support@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Latest news */}
          <div>
            <h5 className="mb-4 font-heading text-lg font-bold uppercase text-white">
              Latest News
            </h5>
            <div className="space-y-4">
              {latestNews.map((n) => (
                <a
                  key={n.seed}
                  href="#news"
                  className="flex gap-3 text-sm transition-colors hover:text-white"
                >
                  <img
                    src={`https://picsum.photos/seed/hoopside-${n.seed}/80/80`}
                    alt={n.title}
                    className="h-14 w-14 shrink-0 rounded object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="font-semibold leading-tight text-gray-300">{n.title}</h6>
                    <span className="text-xs text-gray-500">{n.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="mb-4 font-heading text-lg font-bold uppercase text-white">
              Subscribe Newsletter
            </h5>
            <p className="mb-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-dark-muted px-4 py-2 text-sm text-white placeholder-gray-500 outline-none"
              />
              <button
                type="submit"
                className="bg-primary px-4 py-2 font-heading text-sm uppercase text-white transition-colors hover:bg-primary-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-dark-border py-4">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 text-xs text-gray-500 md:flex-row">
          <p>&copy; 2025 Hoopside. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
