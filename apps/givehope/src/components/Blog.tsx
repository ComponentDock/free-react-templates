import { Calendar, MessageCircle } from 'lucide-react'

const featuredPost = {
  title: 'How Your Donations Changed Lives in 2024',
  image: 'https://picsum.photos/seed/givehope-blog1/800/500',
  date: 'March 15, 2024',
  comments: 12,
  category: 'Impact Stories',
}

const sidePosts = [
  {
    title: 'Volunteer Spotlight: Meet Our Amazing Team',
    image: 'https://picsum.photos/seed/givehope-blog2/400/300',
    date: 'March 10, 2024',
    comments: 5,
    category: 'Volunteers',
  },
  {
    title: 'Building Schools: Our Education Initiative Update',
    image: 'https://picsum.photos/seed/givehope-blog3/400/300',
    date: 'March 5, 2024',
    comments: 8,
    category: 'Education',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white pb-20 pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-sub">Our Blog</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-heading sm:text-4xl">
            Every Single Update
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Featured post */}
          <article className="group overflow-hidden rounded-lg border border-border">
            <div className="overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase text-primary-400">
                {featuredPost.category}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-heading">
                {featuredPost.title}
              </h3>
              <div className="mt-3 flex items-center gap-4 text-xs text-smoke">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" aria-hidden="true" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" aria-hidden="true" />
                  {featuredPost.comments} Comments
                </span>
              </div>
            </div>
          </article>

          {/* Side posts */}
          <div className="flex flex-col gap-6">
            {sidePosts.map((post) => (
              <article
                key={post.title}
                className="group flex gap-4 overflow-hidden rounded-lg border border-border"
              >
                <div className="h-32 w-36 shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center py-4 pr-4">
                  <span className="text-xs font-semibold uppercase text-primary-400">
                    {post.category}
                  </span>
                  <h3 className="mt-1 font-display text-base font-bold text-heading">
                    {post.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-smoke">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" aria-hidden="true" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
