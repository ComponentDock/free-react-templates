import { cn } from '@free-react-templates/ui'

const aboutLinks = ['About Us', 'Lawyers', 'Blog', 'Contact']
const communityLinks = ['Support', 'Practice Areas', 'Won Cases', 'Privacy']
const contactInfo = [
  '198 West 21th Street, Suite 721 New York NY 10016',
  '+ 1235 2355 98',
  'info@yoursite.com',
  'email@email.com',
]
const hours = ['Mon - Thu: 9:00 - 21:00', 'Fri: 8:00 - 21:00', 'Sat: 9:30 - 15:00']

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('py-16 bg-footer-bg text-white', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-4">About Tribunal</h4>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 text-sm hover:text-white transition-colors py-1 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Communities</h4>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 text-sm hover:text-white transition-colors py-1 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Information</h4>
            <ul className="space-y-2">
              {contactInfo.map((info) => (
                <li key={info}>
                  <a
                    href="#"
                    className="text-white/70 text-sm hover:text-white transition-colors py-1 block"
                  >
                    {info}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              {hours.map((h) => (
                <li key={h}>
                  <span className="text-white/70 text-sm py-1 block">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Tribunal. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand hover:text-white transition-colors"
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
