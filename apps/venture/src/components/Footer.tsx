const services = ['Marketing', 'SEO Service', 'Digital Market', 'Content Create', 'Find Us']
const customerCare = ['Contact Us', 'About Us', 'News & Articles', 'Privacy Policy', 'Terms of Use']

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
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
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function GlobeIcon() {
  return (
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#0b1c39] pt-20 pb-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <a
              href="/"
              className="text-2xl font-bold text-white"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              Venture
            </a>
          </div>
          <div>
            <h4
              className="text-white text-lg font-semibold mb-6"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-[#a6b3c6] hover:text-[#04dbec] transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              className="text-white text-lg font-semibold mb-6"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              Customer Care
            </h4>
            <ul className="space-y-3">
              {customerCare.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#a6b3c6] hover:text-[#04dbec] transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              className="text-white text-lg font-semibold mb-6"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              +1 (564) 788-5322
            </h4>
            <p className="text-[#a6b3c6] text-sm mb-2">info@venture.com</p>
            <p className="text-[#a6b3c6] text-sm mb-6">
              123 East 26th Street, Fifth Floor,
              <br />
              New York, NY 10011
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[#a6b3c6] hover:text-[#04dbec] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="text-[#a6b3c6] hover:text-[#04dbec] transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="text-[#a6b3c6] hover:text-[#04dbec] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="text-[#a6b3c6] hover:text-[#04dbec] transition-colors"
                aria-label="Website"
              >
                <GlobeIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#1a2a3e] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#a6b3c6] text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-[#a6b3c6] text-sm">
              Made with <span className="text-[#04dbec]">♥</span> by{' '}
              <a
                href="https://www.componentdock.com/"
                className="text-[#04dbec] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Component Dock
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
