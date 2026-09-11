import { Calendar, MessageCircle, ChevronRight } from 'lucide-react'

const newsItems = [
  {
    id: 1,
    date: 'September 10, 2026',
    title: 'New Sustainable Building Project Announced',
    description:
      'We are excited to announce our latest project focusing on sustainable construction practices and green building materials.',
    comments: 12,
    imageSeed: 'rivet-news-1',
  },
  {
    id: 2,
    date: 'September 5, 2026',
    title: 'Community Center Renovation Complete',
    description:
      'The renovation of the downtown community center has been completed, providing modern facilities for local residents.',
    comments: 8,
    imageSeed: 'rivet-news-2',
  },
  {
    id: 3,
    date: 'August 28, 2026',
    title: 'Annual Construction Safety Award',
    description:
      'Rivet has been recognized for outstanding safety practices with the annual construction industry safety award.',
    comments: 15,
    imageSeed: 'rivet-news-3',
  },
]

export function CompanyNews() {
  return (
    <section id="news" className="bg-light-bg py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-heading">Company News</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-paper shadow-sm"
            >
              <img
                src={`https://picsum.photos/seed/${item.imageSeed}/400/250`}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2 text-sm text-mist">
                  <Calendar size={14} />
                  <time>{item.date}</time>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-heading">{item.title}</h3>
                <p className="mb-4 text-mist leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between">
                  <a
                    href={`#news-${item.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
                    onClick={(e) => e.preventDefault()}
                  >
                    Read more <ChevronRight size={14} />
                  </a>
                  <span className="flex items-center gap-1 text-sm text-mist">
                    <MessageCircle size={14} />
                    {item.comments}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
