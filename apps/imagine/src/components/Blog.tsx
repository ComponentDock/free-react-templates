import { Heart, MessageCircle } from 'lucide-react'

interface BlogPost {
  title: string
  excerpt: string
  date: string
  likes: string
  comments: string
  image: string
}

const POSTS: BlogPost[] = [
  {
    title: 'Addiction When Gambling Becomes A Problem',
    excerpt:
      'Understanding the warning signs early can make all the difference for players and their families.',
    date: '10 Jan 2018',
    likes: '15 Likes',
    comments: '02 Comments',
    image: 'https://picsum.photos/seed/imagine-blog-1/800/600',
  },
  {
    title: '10 Things To Know About Photography',
    excerpt:
      'From lighting to composition, a practical checklist every beginner photographer should keep close.',
    date: '18 Jan 2018',
    likes: '32 Likes',
    comments: '08 Comments',
    image: 'https://picsum.photos/seed/imagine-blog-2/800/600',
  },
  {
    title: 'How To Choose The Right Travel Partner',
    excerpt:
      'A short guide to picking companions and packages that match your pace, style, and budget.',
    date: '25 Jan 2018',
    likes: '21 Likes',
    comments: '05 Comments',
    image: 'https://picsum.photos/seed/imagine-blog-3/800/600',
  },
  {
    title: 'The Art Of Building A Lasting Brand',
    excerpt:
      'Great brands are built on consistency, story, and trust — here is how the best ones do it.',
    date: '02 Feb 2018',
    likes: '27 Likes',
    comments: '11 Comments',
    image: 'https://picsum.photos/seed/imagine-blog-4/800/600',
  },
]

/* Blog grid recreated from the source's four-card row: image, black date
   badge, title link (gradient text on hover), excerpt, and a likes/comments
   meta row. */

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-ink lg:text-4xl">Latest From Our Blog</h2>
          <p className="mt-4 text-sm leading-relaxed text-icon">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((post) => (
            <article key={post.title} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 bg-black px-3 py-1.5 text-xs font-medium text-white">
                  {post.date}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold leading-snug text-ink transition-colors group-hover:bg-gradient-to-r group-hover:from-brand-start group-hover:to-brand-end group-hover:bg-clip-text group-hover:text-transparent">
                <a href="#blog">{post.title}</a>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-icon">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-5 text-sm text-icon">
                <span className="inline-flex items-center gap-1.5">
                  <Heart className="h-4 w-4" aria-hidden="true" />
                  {post.likes}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {post.comments}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
