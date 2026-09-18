import { cn } from '@free-react-templates/ui'

const articles = [
  {
    title: 'Modern Construction Techniques',
    date: '15 Mar, 2024',
    image: 'https://picsum.photos/seed/reframe-news1/400/250',
  },
  {
    title: 'Sustainable Building Materials',
    date: '12 Mar, 2024',
    image: 'https://picsum.photos/seed/reframe-news2/400/250',
  },
  {
    title: 'Project Management Best Practices',
    date: '08 Mar, 2024',
    image: 'https://picsum.photos/seed/reframe-news3/400/250',
  },
  {
    title: 'Safety Standards in Construction',
    date: '01 Mar, 2024',
    image: 'https://picsum.photos/seed/reframe-news4/400/250',
  },
]

export interface NewsProps {
  className?: string
}

export function News({ className }: NewsProps) {
  return (
    <section id="news" data-testid="news" className={cn('bg-paper py-20', className)}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center font-display text-3xl font-bold uppercase text-ink md:text-4xl">
          Our News
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-mist">{article.date}</span>
                <h3 className="mt-1 font-display text-sm font-semibold text-ink">
                  {article.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
