import { Heart } from 'lucide-react'

const FOOTER_LINKS = {
  Services: ['Cardiology', 'Neurology', 'Ophthalmology', 'Orthopedics', 'Pediatrics'],
  Company: ['About Us', 'Our Doctors', 'Departments', 'Appointments', 'Blog'],
  Support: ['Contact Us', 'FAQ', 'Privacy Policy', 'Terms of Service', 'Emergency'],
}

export default function Footer() {
  return (
    <footer className="bg-brand-footer text-brand-footer-text pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
              Medprime
            </h3>
            <p className="text-sm leading-relaxed">
              Providing world-class healthcare services with compassion and excellence since 2010.
            </p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-base font-semibold font-[family-name:var(--font-heading)] text-white mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-brand-footer-text hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Medprime. All rights reserved.
          </p>
          <p className="text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400" /> by
            <a
              href="https://www.componentdock.com/"
              className="text-white hover:underline"
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
