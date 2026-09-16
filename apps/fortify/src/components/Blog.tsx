import { ThumbsUp, MessageCircle } from 'lucide-react'

const POSTS = [
  {
    seed: 'fortify-blog-1',
    title: 'Top 10 Cybersecurity Threats in 2024',
    excerpt:
      'Explore the most prevalent cybersecurity threats businesses face today and how to defend against them.',
    date: '15',
    month: 'Jan',
    likes: 32,
    comments: 8,
  },
  {
    seed: 'fortify-blog-2',
    title: 'Building a Resilient Security Strategy',
    excerpt:
      'Learn how to create a comprehensive security framework that adapts to evolving threats.',
    date: '22',
    month: 'Feb',
    likes: 24,
    comments: 12,
  },
  {
    seed: 'fortify-blog-3',
    title: 'The Future of Cloud Security',
    excerpt:
      'Discover emerging trends and technologies shaping the future of cloud-based security solutions.',
    date: '08',
    month: 'Mar',
    likes: 19,
    comments: 6,
  },
  {
    seed: 'fortify-blog-4',
    title: 'Why Security Awareness Training Matters',
    excerpt:
      'Human error remains the biggest security risk. Here is how training reduces incidents.',
    date: '30',
    month: 'Mar',
    likes: 41,
    comments: 15,
  },
]

export function Blog() {
  return (
    <section className="bg-light-bg py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-3 text-3xl font-bold text-heading">Latest From Our Blog</h2>
        <p className="mb-12 text-body">Insights and updates from our security experts</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((post) => (
            <article
              key={post.seed}
              className="group overflow-hidden rounded-sm bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/400/250`}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 flex flex-col items-center bg-black px-3 py-1.5 text-center text-sm font-bold text-white">
                  <span>{post.date}</span>
                  <span className="text-[10px] font-medium uppercase">{post.month}</span>
                </div>
              </div>
              <div className="p-5 text-left">
                <h4 className="mb-2 text-base font-semibold leading-snug text-heading transition-colors duration-300 group-hover:text-brand">
                  {post.title}
                </h4>
                <p className="mb-4 text-xs leading-relaxed text-body">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-body">
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="h-3 w-3" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" /> {post.comments}
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
