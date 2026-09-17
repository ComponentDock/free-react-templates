export function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="mb-4 font-display text-lg font-bold text-white">Scholarly University</h3>
          <p className="text-sm leading-relaxed">
            Dedicated to academic excellence and the holistic development of every student. Our
            campus is a vibrant community of learners, educators, and leaders.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-bold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-primary-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#academics" className="hover:text-primary-400">
                Academics
              </a>
            </li>
            <li>
              <a href="#admissions" className="hover:text-primary-400">
                Admissions
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-primary-400">
                Courses
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-bold text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>123 University Ave</li>
            <li>Scholarville, ST 12345</li>
            <li>
              <a href="mailto:info@scholarly.edu" className="hover:text-primary-400">
                info@scholarly.edu
              </a>
            </li>
            <li>
              <a href="tel:+15551234567" className="hover:text-primary-400">
                +1 (555) 123-4567
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-gray-400 sm:flex-row">
          <p>&copy; 2024 Scholarly University. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-primary-400 hover:underline"
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
