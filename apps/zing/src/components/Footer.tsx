import { type FormEvent } from 'react'

const HOURS = [
  { day: 'Monday', time: '9:00 - 24:00' },
  { day: 'Tuesday', time: '9:00 - 24:00' },
  { day: 'Wednesday', time: '9:00 - 24:00' },
  { day: 'Thursday', time: '9:00 - 24:00' },
  { day: 'Friday', time: '9:00 - 02:00' },
  { day: 'Saturday', time: '9:00 - 02:00' },
  { day: 'Sunday', time: 'Closed' },
]

export function Footer() {
  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer className="bg-brand-dark py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold" style={{ fontFamily: 'var(--font-dancing)' }}>
              About Zing
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
            </p>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="mb-4 text-lg font-bold" style={{ fontFamily: 'var(--font-dancing)' }}>
              Open Hours
            </h3>
            <ul className="space-y-1 text-sm text-gray-400">
              {HOURS.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold" style={{ fontFamily: 'var(--font-dancing)' }}>
              Instagram
            </h3>
            <div className="mb-6 grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://picsum.photos/seed/zing-insta${i}/200/200)`,
                  }}
                />
              ))}
            </div>
            <h3 className="mb-4 text-lg font-bold" style={{ fontFamily: 'var(--font-dancing)' }}>
              Newsletter
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 rounded-l bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 outline-none"
              />
              <button
                type="submit"
                className="rounded-r bg-brand-red px-4 py-2 text-white transition-colors hover:bg-red-700"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-brand-red"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
