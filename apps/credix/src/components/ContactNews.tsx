import { MapPin, Phone, Mail } from 'lucide-react'

const news = [
  {
    date: 'July 18, 2018',
    title: 'How to get the best loan online',
    author: 'Jane Smith',
    img: 'https://picsum.photos/seed/credix-news1/120/120',
  },
  {
    date: 'July 18, 2018',
    title: 'A new way to finance your dream home',
    author: 'Jane Smith',
    img: 'https://picsum.photos/seed/credix-news2/120/120',
  },
  {
    date: 'July 18, 2018',
    title: '10 tips to get the best loan for you',
    author: 'Jane Smith',
    img: 'https://picsum.photos/seed/credix-news3/120/120',
  },
]

export function ContactNews() {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Promo image */}
          <div className="flex items-start justify-center">
            <img
              src="https://picsum.photos/seed/credix-promo/400/300"
              alt="Loan promotion"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Contact info */}
          <div>
            <div className="mb-6">
              <div className="mb-4 h-1.5 w-6 rounded bg-gold-400" />
              <h2 className="font-heading text-2xl font-bold text-gray-900">Get in touch</h2>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                <p className="text-sm text-gray-600">
                  3007 Sarah Drive
                  <br />
                  Franklin, LA 70538
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                <div>
                  <p className="text-sm text-gray-600">337-413-9538</p>
                  <span className="text-xs text-gray-400">mon–fri, 08 am – 17 pm</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                <div>
                  <p className="text-sm text-gray-600">contact@yourbusiness.com</p>
                  <span className="text-xs text-gray-400">we reply in 24 hrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* News */}
          <div>
            <div className="mb-6">
              <div className="mb-4 h-1.5 w-6 rounded bg-gold-400" />
              <h2 className="font-heading text-2xl font-bold text-gray-900">The news</h2>
            </div>
            <div className="flex flex-col gap-4">
              {news.map((n) => (
                <div key={n.title} className="flex items-center gap-3">
                  <img
                    src={n.img}
                    alt=""
                    className="h-16 w-16 shrink-0 rounded object-cover"
                    loading="lazy"
                  />
                  <div>
                    <span className="text-xs text-gray-400">{n.date}</span>
                    <a
                      href="#"
                      className="block text-sm font-semibold text-gray-900 hover:text-gold-400"
                    >
                      {n.title}
                    </a>
                    <span className="text-xs text-gray-400">by {n.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
