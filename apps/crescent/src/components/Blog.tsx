import { User, Calendar } from 'lucide-react'

const POSTS = [
  {
    title: 'A guide to community outreach programs',
    author: 'Luke Coppen',
    date: 'April 23, 2025',
    excerpt:
      'The outreach team was recognized for their outstanding service to the community and their dedication to helping those in need.',
    image: 'https://picsum.photos/seed/crescent-blog1/400/300',
  },
  {
    title: 'A daily guide to spiritual growth',
    author: 'Staff Reporter',
    date: 'April 03, 2025',
    excerpt:
      'The Liturgy helps us to rediscover our identity as disciples of the Risen Lord, bringing peace and purpose.',
    image: 'https://picsum.photos/seed/crescent-blog2/400/300',
  },
  {
    title: 'The importance of community service',
    author: 'Lucie Smith',
    date: 'April 15, 2025',
    excerpt:
      'God comes to us in free and undeserved favor in the person of Jesus Christ who lived, died, and rose for us.',
    image: 'https://picsum.photos/seed/crescent-blog3/400/300',
  },
]

export function Blog() {
  return (
    <section className="bg-white py-20 md:py-24" id="blog" data-testid="blog">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase text-brand-dark md:text-3xl">
            Latest News
          </h2>
          <p className="mx-auto max-w-2xl text-base text-body-text">
            Latest information on faith, community, and events that revolve around us.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <div key={post.title} className="pb-10">
              <img
                src={post.image}
                alt={post.title}
                className="mb-4 h-52 w-full object-cover"
                loading="lazy"
              />
              <h4 className="mb-2 text-lg font-bold text-brand-dark">
                <a href="#" className="transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h4>
              <div className="mb-3 flex gap-4 text-sm text-muted-text">
                <span className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5" /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {post.date}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-body-text">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
