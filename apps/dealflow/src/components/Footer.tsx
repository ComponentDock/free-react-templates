import { Workflow } from 'lucide-react'

const columns = [
  { title: 'Product', links: ['Pipeline', 'Contacts', 'Analytics', 'Automation'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Press'] },
  { title: 'Support', links: ['Help Center', 'API Docs', 'Status', 'Contact'] },
] as const

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Style Guide'] as const

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2" aria-label="Dealflow home">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
                <Workflow className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">Dealflow</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Smart CRM that closes deals. AI-powered sales platform for modern teams to manage
              pipelines, automate outreach, and drive revenue growth.
            </p>
            <div className="mt-6 flex flex-col gap-1 text-sm text-gray-400">
              <span>(555) 234-5678</span>
              <span>sales@dealflow.app</span>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                {column.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">© 2026 Dealflow. All rights reserved.</p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-500 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
