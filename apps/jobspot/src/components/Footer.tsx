const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const employerLinks = ['Browse Categories', 'Browse Locations', 'Browse Jobs', 'Candidate List']
const candidateLinks = ['For Employers', 'Browse Jobs', 'Browse Categories', 'Resume Upload']
const accountLinks = ['Create Account', 'Sign In', 'My Account']
const contactInfo = [
  { label: '198 West 21th Street', sub: 'Suite 721, New York NY 10016' },
  { label: '+1 (123) 456-7890', sub: 'info@jobspot.com' },
]

export function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
          <div className="md:col-span-1">
            <h3 className="mb-4 text-xl font-bold text-white">
              JobSpot<span className="text-brand-green">.</span>
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="flex gap-3">
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded bg-white/10 text-gray-300 transition-colors hover:bg-brand hover:text-white"
                  aria-label="Social link"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Employers
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {employerLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-brand-green">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Candidate
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {candidateLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-brand-green">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Account</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {accountLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-brand-green">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {contactInfo.map((c) => (
                <li key={c.label}>
                  <span className="font-semibold text-gray-200">{c.label}</span>
                  <br />
                  {c.sub}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} JobSpot. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand-green transition-colors hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
