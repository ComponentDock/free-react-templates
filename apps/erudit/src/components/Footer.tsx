import { Phone, Mail, MapPin, Check, ChevronUp } from 'lucide-react'

const programs = [
  'Diploma Degree',
  'BS Degree',
  'Beginner',
  'Intermediate',
  'Advance',
  'Difficulty',
]
const usefulLinks = ['About Us', 'Testimonials', 'Courses', 'Event', 'News', 'Contact']
const supportLinks = [
  'Documentation',
  'Forums',
  'Help & Support',
  'Scholarship',
  'Student Transport',
  'Release Status',
]

const recentPosts = [
  {
    title: 'Creating Mobile Apps',
    date: '18 April 2024',
    image: 'https://picsum.photos/seed/erudit-rp1/200/150',
  },
  {
    title: 'Web Development Trends',
    date: '15 April 2024',
    image: 'https://picsum.photos/seed/erudit-rp2/200/150',
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>291 South 21th Street, Suite 721 New York NY 10016</li>
              <li className="flex items-center gap-2">
                <Phone size={14} /> +1 235 2355 98
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} /> info@yoursite.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} /> yourwebsite.com
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              {programs.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-sky-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              {usefulLinks.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-sky-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              {supportLinks.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-sky-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="text-white font-semibold mb-4">Recent Post</h4>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.title} className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-16 h-12 bg-cover bg-center rounded"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div>
                    <h5 className="text-sm text-white leading-snug">{post.title}</h5>
                    <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>

      {/* Back to top */}
      <a
        href="#"
        className="fixed bottom-6 right-6 w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
        aria-label="Back to top"
      >
        <ChevronUp size={20} />
      </a>
    </footer>
  )
}
