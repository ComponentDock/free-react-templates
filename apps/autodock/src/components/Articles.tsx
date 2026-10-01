import { MessageSquare, User } from 'lucide-react'
import { SectionTitle } from './SectionTitle'

interface Article {
  title: string
  excerpt: string
  author: string
  comments: number
  day: string
  month: string
  img: string
}

const ARTICLES: Article[] = [
  {
    title: 'How to choose the right rental car',
    excerpt:
      'Matching the car to your trip matters more than the badge on the hood. Here is what to check before you book.',
    author: 'Admin',
    comments: 10,
    day: '25',
    month: 'Jan',
    img: 'autodock-article-1',
  },
  {
    title: 'Five tips for your first long road trip',
    excerpt:
      'From packing light to planning fuel stops, small preparations make a long drive feel effortless.',
    author: 'Admin',
    comments: 8,
    day: '18',
    month: 'Feb',
    img: 'autodock-article-2',
  },
  {
    title: 'Understanding full insurance coverage',
    excerpt:
      'Collision damage waivers, third-party liability, and personal effects — decoded in plain language.',
    author: 'Admin',
    comments: 12,
    day: '02',
    month: 'Mar',
    img: 'autodock-article-3',
  },
]

export function Articles() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle title="Tips and articles" />
        <div className="space-y-8">
          {ARTICLES.map((article) => (
            <article
              key={article.title}
              className="flex flex-col gap-6 border border-line bg-white p-4 sm:flex-row"
            >
              <img
                src={`https://picsum.photos/seed/${article.img}/480/320`}
                alt={article.title}
                className="h-48 w-full object-cover sm:w-1/3"
                loading="lazy"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-ink">{article.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-4 w-4 text-brand" aria-hidden="true" />
                    By :: {article.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MessageSquare className="h-4 w-4 text-brand" aria-hidden="true" />
                    Comments :: {article.comments}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{article.excerpt}</p>
              </div>
              <div className="self-start bg-brand px-4 py-3 text-center text-carbon">
                <p className="text-2xl font-extrabold leading-none">{article.day}</p>
                <p className="text-xs font-bold uppercase">{article.month}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
