const DEPARTMENTS_LIST = [
  'Births',
  'Pulmonary',
  'Cardiology',
  'Neurology',
  'Traumatology',
  'Dental',
  'Nuclear',
  'Magnetic',
  'Pregnancy',
  'X-ray',
  'Prostheses',
]

const HOURS = [
  { day: 'Monday - Friday', time: '8.00 - 18.00' },
  { day: 'Saturday', time: '8.00 - 18.00' },
  { day: 'Sunday', time: '8.00 - 13.00' },
]

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-footer text-brand-footer-text pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo + description */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white mb-4 inline-block"
            >
              Medflow
            </a>
            <p className="text-sm leading-relaxed mb-5 opacity-80">
              Providing quality healthcare services for the whole family. Your health is our
              priority.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-white mb-5">
              Our Departments
            </h3>
            <ul className="space-y-2">
              {DEPARTMENTS_LIST.map((dept) => (
                <li key={dept}>
                  <a
                    href="#departments"
                    className="text-sm opacity-80 hover:opacity-100 hover:text-white transition-colors"
                  >
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-white mb-5">
              We&apos;re Available
            </h3>
            <ul className="space-y-3">
              {HOURS.map((h) => (
                <li key={h.day} className="flex justify-between text-sm">
                  <span className="opacity-80">{h.day}</span>
                  <span className="opacity-80">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
