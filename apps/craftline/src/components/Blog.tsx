import { ArrowRight } from 'lucide-react'

const featuredPost = {
  image: 'https://picsum.photos/seed/craftline-blog1/800/500',
  category: 'Web Design',
  date: 'Apr 14, 2030',
  title: 'Renovating National Gallery: A Design Case Study',
  excerpt:
    'Exploring the creative process behind redesigning one of the most iconic cultural institutions.',
}

const sidePosts = [
  {
    image: 'https://picsum.photos/seed/craftline-blog2/400/300',
    category: 'Tutorial',
    date: 'Apr 10, 2030',
    title: 'WordPress for Beginners: Getting Started Guide',
  },
  {
    image: 'https://picsum.photos/seed/craftline-blog3/400/300',
    category: 'Development',
    date: 'Apr 5, 2030',
    title: 'Building Modern Websites from Scratch',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm font-medium text-brand uppercase tracking-wider">
          Latest Articles
        </span>
        <h2 className="text-3xl font-bold text-text-primary mt-2 mb-10">From the Blog</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured post */}
          <article className="rounded-lg overflow-hidden border border-border bg-bg-primary">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-text-muted mb-2">
                <span className="text-brand font-medium">{featuredPost.category}</span>
                <span>{featuredPost.date}</span>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                <a href="#" className="hover:text-brand transition-colors">
                  {featuredPost.title}
                </a>
              </h3>
              <p className="text-sm text-text-secondary mb-3">{featuredPost.excerpt}</p>
              <a
                href="#"
                className="text-sm text-brand font-medium hover:text-brand-hover transition-colors inline-flex items-center gap-1"
              >
                Read article <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </article>

          {/* Side posts */}
          <div className="space-y-4">
            {sidePosts.map((post) => (
              <article
                key={post.title}
                className="flex gap-4 p-4 rounded-lg border border-border bg-bg-primary"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-24 h-24 object-cover rounded-md flex-shrink-0"
                />
                <div>
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-1">
                    <span className="text-brand font-medium">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-text-primary">
                    <a href="#" className="hover:text-brand transition-colors">
                      {post.title}
                    </a>
                  </h3>
                  <a
                    href="#"
                    className="text-xs text-brand font-medium hover:text-brand-hover transition-colors inline-flex items-center gap-1 mt-2"
                  >
                    Read article <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-brand text-brand hover:bg-brand hover:text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
