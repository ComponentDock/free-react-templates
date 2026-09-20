import { MapPin, Phone, Mail } from 'lucide-react'

const LINK_COLUMNS = [
  {
    title: 'Engineering',
    links: ['Web Development', 'Mobile Apps', 'Data Science', 'Cloud Computing', 'DevOps'],
  },
  {
    title: 'Graphic Design',
    links: ['UI/UX Design', 'Brand Identity', 'Illustration', 'Motion Graphics', 'Typography'],
  },
  {
    title: 'Development',
    links: ['Frontend', 'Backend', 'Full Stack', 'Game Dev', 'Blockchain'],
  },
]

export function Footer() {
  return (
    <footer className="border-t-[3px] border-brand bg-white pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-lg font-bold text-ink">Contact Info</h4>
            <ul className="space-y-3 text-sm text-body">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
                <span>123 Learning Street, Education City, ED 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-brand" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-brand" />
                <span>info@learnfold.com</span>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {LINK_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-lg font-bold text-ink">{col.title}</h4>
              <ul className="space-y-2 text-sm text-body">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-200 py-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <h4 className="text-lg font-bold text-ink">Newsletter</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-64 px-4 py-2.5 text-sm"
                aria-label="Newsletter email"
              />
              <button
                type="submit"
                className="bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 text-xs text-body sm:flex-row lg:px-8">
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-brand">
              Register
            </a>
            <a href="#" className="hover:text-brand">
              Privacy
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Learnfold. All rights reserved.{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-brand hover:underline"
            >
              More templates at Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
