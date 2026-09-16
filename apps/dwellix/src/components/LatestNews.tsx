interface BlogPost {
  id: number
  title: string
  author: string
  date: string
  comments: string
  image: string
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Benjamin Franklin's Method Of Habit Formation",
    author: 'Polly Williams',
    date: 'Dec 19, 2024',
    comments: '3 Comments',
    image: 'https://picsum.photos/seed/dwellix-blog1/600/400',
  },
  {
    id: 2,
    title: 'How To Set Intentions That Energize You',
    author: 'Mattie Ramirez',
    date: 'Dec 19, 2024',
    comments: '3 Comments',
    image: 'https://picsum.photos/seed/dwellix-blog2/600/400',
  },
  {
    id: 3,
    title: 'Burning Desire: Golden Key Or Red Herring',
    author: 'Nicholas Brewer',
    date: 'Dec 19, 2024',
    comments: '3 Comments',
    image: 'https://picsum.photos/seed/dwellix-blog3/600/400',
  },
]

export function LatestNews() {
  return (
    <section className="bg-section-alt py-16">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-heading">
            Latest <span className="text-brand">News</span>
          </h2>
          <p className="mt-2 text-body-text">
            Sign up for the latest real estate information and more.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <a
                  href="#"
                  className="mb-3 block text-base font-bold text-heading hover:text-brand"
                >
                  {post.title}
                </a>
                <div className="flex flex-wrap gap-3 text-xs text-body-text">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                  <span>{post.comments}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
