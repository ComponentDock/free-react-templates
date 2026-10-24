import { MessageCircle, ThumbsUp } from 'lucide-react'

const posts = [
  {
    title: 'Lights without darkness that said good deep years very.',
    date: 'March 20, 2019',
    comments: '2 comment',
    likes: '0 like',
    seed: 'manorly-blog-1',
  },
  {
    title: 'Lights without darkness that said.',
    date: 'Mar 12',
    comments: '0 comment',
    likes: '0 like',
    seed: 'manorly-blog-2',
  },
  {
    title: 'Where the city keeps its quiet courtyards.',
    date: 'Mar 12',
    comments: '0 comment',
    likes: '0 like',
    seed: 'manorly-blog-3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white pb-20 pt-4 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          <span>our</span>
          <span className="h-px w-12 bg-ink/30" aria-hidden="true" />
          <span>blog</span>
        </p>

        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.title} className="bg-white">
              <img
                src={`https://picsum.photos/seed/${post.seed}/720/480`}
                alt={`Illustration for the article "${post.title}"`}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="pt-5">
                <p className="text-xs uppercase tracking-wide text-muted">
                  <span className="text-brand">Apartment</span> / {post.date}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">{post.title}</h3>
                <p className="mt-4 flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4 text-brand" aria-hidden="true" />
                    {post.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4 text-brand" aria-hidden="true" />
                    {post.likes}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
