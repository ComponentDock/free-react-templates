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
    title: 'Engineering',
    links: [
      { label: 'Computer Engineering', href: '#' },
      { label: 'Software Engineering', href: '#' },
      { label: 'Information Engineering', href: '#' },
      { label: 'System Engineering', href: '#' },
      { label: 'Network Engineering', href: '#' },
    ],
  },
  {
    title: 'Business School',
    links: [
      { label: 'Business Administration', href: '#' },
      { label: 'Marketing', href: '#' },
      { label: 'Finance', href: '#' },
      { label: 'Entrepreneurship', href: '#' },
      { label: 'Accounting', href: '#' },
    ],
  },
  {
    title: 'Art & Design',
    links: [
      { label: 'Graphic Design', href: '#' },
      { label: 'Web Design', href: '#' },
      { label: 'Photography', href: '#' },
      { label: 'Interior Design', href: '#' },
      { label: 'Animation', href: '#' },
    ],
  },
  {
    title: 'Higher Education',
    links: [
      { label: 'Applied Studies', href: '#' },
      { label: 'Online Courses', href: '#' },
      { label: 'Graduate Programs', href: '#' },
      { label: 'Research', href: '#' },
      { label: 'Scholarships', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
            &copy; {new Date().getFullYear()} Lectio. All rights reserved.
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
