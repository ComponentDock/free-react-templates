import { Mail, MapPin, Phone } from 'lucide-react'

const companyLinks = ['About', 'Services', 'Cases', 'Blog', 'Contact']
const serviceLinks = [
  'Strategic Planning',
  'Trades & Stocks',
  'Audit & Assurance',
  'Brand Development',
  'Digital Transformation',
]

export function Footer() {
  return (
    <footer className="bg-footer-bg py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-navy-dark">Insight</h3>
            <p className="text-sm leading-relaxed text-muted">
              Providing expert consulting services to help businesses grow and thrive in competitive
              markets.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-navy-dark">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-navy-dark">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-navy-dark">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                +1 (234) 567-890
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                info@insight.com
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                65/A, 17th floor, Kings land, New York
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
