import { Phone, Mail, MapPin } from 'lucide-react'

const usefulLinks = [
  'Testimonials',
  'FAQ',
  'Apply for a Job',
  'Terms & Conditions',
  'Our Partners',
  'Services',
  'Free Services',
  'About Us',
  'News',
  'Contact',
]

const recentNews = [
  {
    title: 'Advances in modern healthcare technology',
    date: 'March 10, 2024',
  },
  {
    title: 'Tips for maintaining a healthy lifestyle',
    date: 'March 10, 2024',
  },
  {
    title: 'Understanding preventive care benefits',
    date: 'March 10, 2024',
  },
]

export function Footer() {
  return (
    <footer className="bg-footer-bg text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-green rounded flex items-center justify-center text-white font-bold text-lg">
                +
              </div>
              <div>
                <div className="text-2xl font-bold">
                  Care<span className="text-brand-green">Point</span>
                </div>
                <div className="text-xs text-white/60 uppercase tracking-wider">
                  Health Care Center
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              We provide quality healthcare services with a team of experienced professionals
              dedicated to your well-being.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-brand-green" />
                <span>+45 677 8993000 223</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-brand-green" />
                <span>office@carepoint.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-brand-green" />
                <span>Main Str. no 45-46, b3, 56832, Los Angeles, CA</span>
              </li>
            </ul>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-brand-green transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent News Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Recent News</h3>
            <ul className="space-y-4">
              {recentNews.map((news) => (
                <li key={news.title}>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-brand-green transition-colors block"
                  >
                    {news.title}
                  </a>
                  <span className="text-xs text-white/50">{news.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 mt-12">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} Carepoint. Made with{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green hover:underline"
              >
                Component Dock
              </a>
            </p>
            <div className="flex items-center gap-4">
              {['Pinterest', 'Facebook', 'Twitter', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-green hover:text-white transition-colors text-xs"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
