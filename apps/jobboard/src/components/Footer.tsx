import { Mail, Phone, MapPin } from 'lucide-react'

const trendingTags = [
  'UI Designer',
  'Python',
  'Developer',
  'Web Design',
  'Graphic Design',
  'HTML5',
  'CSS3',
]
const companyLinks = ['About Us', 'Career', 'Blog', 'Resources']
const supportLinks = ['Support', 'Privacy', 'Terms of Service']

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">JobBoard</h3>
            <p className="text-sm leading-relaxed">
              Discover your next career opportunity with thousands of job listings from top
              companies worldwide. Your dream job is just a search away.
            </p>
          </div>

          {/* Search Trending */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Search Trending</h3>
            <div className="flex flex-wrap gap-2">
              {trendingTags.map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="text-sm border border-gray-700 px-3 py-1 rounded hover:border-lime-400 hover:text-lime-400 transition-colors"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-lime-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 mb-6">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-lime-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Phone size={14} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={14} />
                <span>info@jobboard.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin size={14} />
                <span>New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-lime-400 hover:underline"
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
