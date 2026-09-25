import { MapPin, Phone, Mail, Heart } from 'lucide-react'

const locations = ['Berlin', 'Bucharest', 'London', 'Budapest', 'Tel Aviv', 'Moscow']

const topShows = [
  'Friday Night Mix',
  'Saturday Sessions',
  'Sunday Groove',
  'Monday Melodic',
  'Tuesday Underground',
]

const blogPosts = [
  {
    title: 'New Releases This Week',
    image: 'https://picsum.photos/seed/fmbeat-blog1/80/80',
  },
  {
    title: 'Behind the Decks',
    image: 'https://picsum.photos/seed/fmbeat-blog2/80/80',
  },
]

export function Footer() {
  return (
    <footer data-testid="footer">
      {/* Footer top */}
      <div className="bg-brand-dark py-20 md:py-[100px] px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Locations */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-6">
              Locations
            </h4>
            <ul className="space-y-3">
              {locations.map((loc) => (
                <li key={loc} className="flex items-center gap-2 text-brand-text text-sm">
                  <MapPin size={14} className="text-brand-yellow shrink-0" />
                  {loc}
                </li>
              ))}
            </ul>
          </div>

          {/* Top Shows */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-6">
              Top Shows
            </h4>
            <ol className="space-y-3">
              {topShows.map((show, i) => (
                <li key={show} className="flex items-baseline gap-3 text-brand-text text-sm">
                  <span className="text-brand-yellow font-bold">{i + 1}.</span>
                  {show}
                </li>
              ))}
            </ol>
          </div>

          {/* Blog */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-6">Blog</h4>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div key={post.title} className="flex gap-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 rounded object-cover shrink-0"
                  />
                  <div>
                    <p className="text-white text-sm font-medium leading-snug">{post.title}</p>
                    <a
                      href="#"
                      className="text-brand-text text-xs hover:text-white transition-colors mt-1 inline-block"
                    >
                      Continue Reading
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-brand-text text-sm">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-brand-yellow shrink-0 mt-0.5" />
                123 FM Street, Berlin, Germany
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-brand-yellow shrink-0" />
                +1 234 567 890
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-brand-yellow shrink-0" />
                info@fmbeat.com
              </p>
            </div>
            <div className="mt-6">
              <span className="text-2xl font-bold text-brand-yellow font-heading tracking-wide">
                Fmbeat
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-brand-dark-bottom py-8 px-4 text-center">
        <p className="text-brand-text text-sm">
          Made with <Heart size={14} className="inline text-red-500" fill="currentColor" /> by{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white hover:text-brand-yellow transition-colors font-medium"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
