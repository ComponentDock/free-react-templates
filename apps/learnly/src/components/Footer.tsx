import { GraduationCap } from 'lucide-react'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const COLUMNS: FooterColumn[] = [
  {
    title: 'Our Campus',
    links: [
      { label: 'Academic', href: '#' },
      { label: 'News', href: '#' },
      { label: 'Our Interns', href: '#' },
      { label: 'Our Leadership', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Human Resources', href: '#' },
    ],
  },
  {
    title: 'Our Courses',
    links: [
      { label: 'Math', href: '#' },
      { label: 'Science & Engineering', href: '#' },
      { label: 'Arts & Humanities', href: '#' },
      { label: 'Economics & Finance', href: '#' },
      { label: 'Business Administration', href: '#' },
      { label: 'Computer Science', href: '#' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Support Community', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Share Your Story', href: '#' },
      { label: 'Our Supporters', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + about */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-brand" aria-hidden="true" />
              <span className="text-xl font-bold">Learnly</span>
            </div>
            <p className="mb-4 text-sm text-white/60">
              Empowering students worldwide with quality education and the tools they need to
              succeed in a rapidly changing world.
            </p>
            <a
              href="#"
              className="text-sm font-semibold text-brand underline hover:text-brand-dark"
            >
              Learn More
            </a>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-lg font-bold">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Learnly. All rights reserved.
          </p>
          <p className="text-sm text-white/50">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white/70 underline transition-colors hover:text-white"
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
