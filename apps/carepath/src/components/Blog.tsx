import { MessageSquare, Heart } from 'lucide-react'

const blogPosts = [
  {
    image: 'https://picsum.photos/seed/carepath-blog-1/400/300',
    tags: ['medical', 'dental', 'health'],
    title: 'Hath is gathering from hath greate gan man lights evening man.',
    comments: 8,
    likes: 0,
  },
  {
    image: 'https://picsum.photos/seed/carepath-blog-2/400/300',
    tags: ['medical', 'dental', 'health'],
    title: 'Also good after there saying don third you be careful every man',
    comments: 1,
    likes: 0,
  },
  {
    image: 'https://picsum.photos/seed/carepath-blog-3/400/300',
    tags: ['medical', 'dental', 'health'],
    title: 'Also good after there saying don third you be careful every man',
    comments: 5,
    likes: 1,
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20" aria-label="Blog">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold font-serif text-heading md:text-4xl">
              Get Every Single Update Here
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-body-text leading-relaxed">
              Land meat winged called subdue without very light in all years sea appear midst forth
              image him third there set. Land meat winged called subdue without very light in all
              years sea appear.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="text-xs text-brand hover:text-brand-dark transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
                <h3 className="mb-3 text-lg font-bold leading-snug text-heading">
                  <a href="#" className="hover:text-brand transition-colors">
                    {post.title}
                  </a>
                </h3>
                <div className="flex items-center gap-4 text-xs text-body-text">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5" />
                    {post.comments} comment{post.comments !== 1 ? 's' : ''}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5" />
                    {post.likes} like{post.likes !== 1 ? 's' : ''}
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
