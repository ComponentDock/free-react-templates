import { Button } from '@free-react-templates/ui'

const socialLinks = [
  { name: 'Pinterest', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
]

export function Footer() {
  return (
    <footer className="py-28 text-center" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-[40px] sm:text-[50px] md:text-[60px] font-semibold text-dark-teal mb-10">
          Let's work together
        </h2>
        <Button className="bg-brand-black text-white px-8 py-4 text-sm font-normal tracking-wide hover:bg-dark-teal transition-colors">
          Get in touch
        </Button>

        <div className="mt-16 mb-10 flex justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-accent text-[15px] hover:text-dark-teal transition-colors"
              aria-label={link.name}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="text-xs text-gray-accent">
          &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dark-teal transition-colors"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
