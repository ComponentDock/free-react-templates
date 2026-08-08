import { GraduationCap } from 'lucide-react'

const columns = [
  {
    heading: 'Categories',
    links: ['Web Development', 'Data Science', 'UI/UX Design', 'Business'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Press'],
  },
  {
    heading: 'Support',
    links: ['Help Center', 'Contact Us', 'Terms of Service', 'Privacy Policy'],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2.5" aria-label="Coursely home">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                Coursely
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Learn without limits. Thousands of courses, world-class instructors, and a community
              of 50,000+ learners.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Coursely. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            We use cookies to improve your experience on our site.
          </p>
        </div>
      </div>
    </footer>
  )
}
