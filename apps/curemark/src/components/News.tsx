import { cn } from '@free-react-templates/ui'

interface NewsProps {
  className?: string
}

interface NewsPost {
  imageSeed: string
  title: string
  date: string
  author: string
  comments: number
  excerpt: string
}

const posts: NewsPost[] = [
  {
    imageSeed: 'curemark-news-1',
    title: 'Advances in Cardiac Surgery Techniques',
    date: 'September 20, 2026',
    author: 'Dr. Smith',
    comments: 5,
    excerpt:
      'New minimally invasive techniques are revolutionizing cardiac surgery, reducing recovery times and improving patient outcomes significantly.',
  },
  {
    imageSeed: 'curemark-news-2',
    title: 'The Importance of Regular Health Check-ups',
    date: 'September 15, 2026',
    author: 'Dr. Johnson',
    comments: 3,
    excerpt:
      'Regular health screenings can detect potential health issues before they become serious, leading to more effective treatment options.',
  },
  {
    imageSeed: 'curemark-news-3',
    title: 'Breakthrough in Neurological Research',
    date: 'September 10, 2026',
    author: 'Dr. Williams',
    comments: 8,
    excerpt:
      'Researchers have discovered new pathways for treating neurological conditions, opening doors for innovative therapies and medications.',
  },
]

export function News({ className }: NewsProps) {
  return (
    <section className={cn('py-16 bg-white', className)} aria-label="Latest news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-body text-center mb-12">The News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              <img
                src={`https://picsum.photos/seed/${post.imageSeed}/600/400`}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-body mb-2">{post.title}</h3>
                <div className="flex items-center gap-2 text-xs text-body-light mb-3">
                  <span>{post.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.author}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.comments} comments</span>
                </div>
                <p className="text-sm text-body-light leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
