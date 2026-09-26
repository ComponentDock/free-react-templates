import { Heart, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'Building Stronger Communities Together',
    excerpt:
      'Our latest initiative brings neighbors together to create lasting positive change in local neighborhoods.',
    date: '15 Mar',
    image: 'https://picsum.photos/seed/civicpulse-blog1/400/250',
    likes: 24,
    comments: 8,
  },
  {
    title: 'New Policy Proposals for Education',
    excerpt:
      'We are introducing comprehensive education reforms to ensure every child has access to quality schooling.',
    date: '12 Mar',
    image: 'https://picsum.photos/seed/civicpulse-blog2/400/250',
    likes: 18,
    comments: 5,
  },
  {
    title: 'Environmental Action Plan Released',
    excerpt:
      'Our detailed plan for tackling climate change includes renewable energy targets and green infrastructure.',
    date: '08 Mar',
    image: 'https://picsum.photos/seed/civicpulse-blog3/400/250',
    likes: 32,
    comments: 12,
  },
  {
    title: 'Volunteer Recognition Ceremony',
    excerpt:
      'Celebrating the dedication of our volunteers who work tirelessly to make our communities better places.',
    date: '01 Mar',
    image: 'https://picsum.photos/seed/civicpulse-blog4/400/250',
    likes: 45,
    comments: 15,
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Blog
          </span>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">Latest From Our Blog</h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
                  {post.date}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-ink line-clamp-2">{post.title}</h3>
                <p className="mt-2 text-sm text-mist line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-mist">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.comments}
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
