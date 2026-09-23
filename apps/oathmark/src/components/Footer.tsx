import { Globe, Camera, MessageSquare, Link2 } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const footerLinks: Record<string, { label: string; href: string }[]> = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'About Us', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  Resources: [
    { label: 'Legal Blog', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Client Portal', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
  Support: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Office Hours', href: '#' },
    { label: 'Emergency Line', href: '#' },
    { label: 'Location', href: '#' },
  ],
  Company: [
    { label: 'Our Team', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

const socialLinks = [
  { icon: Globe, label: 'Facebook', href: '#' },
  { icon: Camera, label: 'Instagram', href: '#' },
  { icon: MessageSquare, label: 'Twitter', href: '#' },
  { icon: Link2, label: 'LinkedIn', href: '#' },
]

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer id="contact" className={cn('relative', className)}>
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/oathmark-footer/1920/600)',
        }}
      />
      <div className="absolute inset-0 bg-gray-900/90" />

      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left — about + social */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">About Us</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
                Oathmark is a trusted provider of notary public and legal services. Our experienced
                team is dedicated to delivering reliable, effective legal solutions tailored to meet
                your unique needs.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — link columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-lg font-heading font-semibold text-white mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-white/60 hover:text-white transition-colors"
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

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Oathmark. All rights reserved. More templates at{' '}
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
      </div>
    </footer>
  )
}
