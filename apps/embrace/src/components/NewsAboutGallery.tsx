import { Share2, MessageCircle } from 'lucide-react'

interface NewsItem {
  date: string
  title: string
  description: string
  shares: number
  comments: number
}

const newsItems: NewsItem[] = [
  {
    date: 'July 16, 2024',
    title: 'New School Opens in Rural Community',
    description:
      'We are thrilled to announce the opening of our newest school, providing education to over 200 children.',
    shares: 14,
    comments: 7,
  },
  {
    date: 'July 10, 2024',
    title: 'Annual Fundraiser Exceeds Goal',
    description:
      "Thanks to our generous donors, this year's fundraiser raised over $500,000 for children's programs.",
    shares: 23,
    comments: 12,
  },
]

const galleryImages = [
  'https://picsum.photos/seed/gallery-1/300/300',
  'https://picsum.photos/seed/gallery-2/300/300',
  'https://picsum.photos/seed/gallery-3/300/300',
  'https://picsum.photos/seed/gallery-4/300/300',
]

export function NewsAboutGallery() {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* News */}
          <div>
            <h3 className="text-xl font-bold text-ink mb-6">News</h3>
            <div className="space-y-6">
              {newsItems.map((item) => (
                <article key={item.title} className="border-b border-gray-100 pb-6 last:border-0">
                  <span className="text-xs text-gray-400">{item.date}</span>
                  <h4 className="text-base font-bold text-ink mt-1 mb-2">
                    <a href="#" className="hover:text-primary transition">
                      {item.title}
                    </a>
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">{item.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Share2 className="h-3.5 w-3.5" />
                      {item.shares}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3.5 w-3.5" />
                      {item.comments}
                    </span>
                  </div>
                </article>
              ))}
            </div>
            <a
              href="#"
              className="mt-6 inline-block rounded bg-primary px-5 py-2 text-xs font-bold text-white uppercase tracking-wider transition hover:bg-primary-600"
            >
              View All News
            </a>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-ink mb-6">About Us</h3>
            <figure className="mb-4 overflow-hidden rounded-lg">
              <img
                src="https://picsum.photos/seed/about-charity/600/400"
                alt="About our charity"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
            </figure>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              We are a non-profit organization dedicated to improving the lives of children
              worldwide. Through education, healthcare, and community development, we create lasting
              change.
            </p>
            <a
              href="#"
              className="inline-block rounded bg-primary px-5 py-2 text-xs font-bold text-white uppercase tracking-wider transition hover:bg-primary-600"
            >
              Learn More
            </a>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-xl font-bold text-ink mb-6">Gallery</h3>
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((src, i) => (
                <figure key={i} className="overflow-hidden rounded-lg">
                  <img
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    className="h-36 w-full object-cover transition hover:scale-105"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a
                href="#"
                className="inline-block rounded bg-primary px-5 py-2 text-xs font-bold text-white uppercase tracking-wider transition hover:bg-primary-600"
              >
                View All Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
