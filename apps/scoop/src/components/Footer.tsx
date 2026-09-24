import { Calendar, MessageCircle } from 'lucide-react'
import { FacebookIcon, TwitterIcon, YoutubeIcon, PinterestIcon, RssIcon } from './social-icons'

const footerLinks1 = ['Sitemaps', 'Categories', 'Archives', 'Advertise', 'Ad Choice']
const footerLinks2 = ['Privacy Policy', 'Terms of Use', 'Help Center', 'Newsletters', 'Feedback']

const mostViewed = [
  {
    image: 'https://picsum.photos/seed/scoop-fv1/100/80',
    headline: 'Converter Ipod Video Taking Portable Video Viewing To A Whole Level',
  },
  {
    image: 'https://picsum.photos/seed/scoop-fv2/100/80',
    headline: 'Sony Laptops Are Still Part Of The Sony Family',
  },
]

const socialIcons = [
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: TwitterIcon, label: 'Twitter' },
  { icon: YoutubeIcon, label: 'YouTube' },
  { icon: PinterestIcon, label: 'Pinterest' },
  { icon: RssIcon, label: 'RSS' },
]

export function Footer() {
  return (
    <footer className="bg-footer-bg pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
          {/* About */}
          <div>
            <div className="text-2xl font-heading font-bold text-white mb-4">Scoop</div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Technology and gadgets — your daily dose of tech news, product reviews, and innovative
              ideas that shape the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="bg-footer-title-bg border-l-4 border-brand mb-6">
              <h3 className="text-base font-heading font-medium text-white pl-4 py-2">
                Quick Links
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                {footerLinks1.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-brand transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {footerLinks2.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-brand transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Most Viewed News */}
          <div>
            <div className="bg-footer-title-bg border-l-4 border-brand mb-6">
              <h3 className="text-base font-heading font-medium text-white pl-4 py-2">
                Most Viewed News
              </h3>
            </div>
            <div className="space-y-5">
              {mostViewed.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.headline}
                    className="w-20 h-16 object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-sm font-heading font-medium text-white leading-snug mb-1">
                      <a href="#" className="hover:text-brand transition-colors">
                        {item.headline}
                      </a>
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> March 14, 2018
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" /> 05
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-brand">&#9829;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            {socialIcons.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-gray-500 hover:text-brand transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
