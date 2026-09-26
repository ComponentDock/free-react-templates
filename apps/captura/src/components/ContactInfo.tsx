export function ContactInfo() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-semibold text-heading">Contact Us</h2>
          <p className="mb-8 text-base text-body">
            Whether you&apos;re about to create a website for the first time or you&apos;re looking.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-heading">
                Address
              </h4>
              <ul className="space-y-1 text-sm text-body">
                <li>200/D, Green lane, Kings street, New York</li>
                <li>+10 787 367 2567</li>
                <li>
                  <a href="mailto:contact08@captura.com" className="text-brand-400 hover:underline">
                    contact08@captura.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-body transition-colors hover:text-brand-400"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-body transition-colors hover:text-brand-400"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-body transition-colors hover:text-brand-400"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center rounded bg-surface-alt p-8">
          <div className="text-center text-sm text-body/60">
            <svg
              className="mx-auto mb-2 h-12 w-12 text-body/30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z"
              />
            </svg>
            <p>New York, United States</p>
          </div>
        </div>
      </div>
    </section>
  )
}
