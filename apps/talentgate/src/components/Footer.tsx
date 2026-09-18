const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
)

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
)

const EMPLOYER_LINKS = ['Post a Job', 'Browse Candidates', 'Pricing', 'Resources']
const WORKER_LINKS = ['Find Jobs', 'Career Advice', 'Resume Tips', 'Salary Guide']

export function Footer() {
  return (
    <footer className="bg-footer py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">TalentGate</h3>
            <p className="mb-4 text-sm text-gray-400">
              Connecting talent with opportunity. Find your dream job or the perfect candidate
              today.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Employers
            </h4>
            <ul className="space-y-2">
              {EMPLOYER_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Workers
            </h4>
            <ul className="space-y-2">
              {WORKER_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-brand-cyan"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
