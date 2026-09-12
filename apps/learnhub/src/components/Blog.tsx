import { MessageCircle, Heart } from 'lucide-react'

interface BlogPostProps {
  image: string
  category: string
  title: string
  description: string
  comments: string
  likes: string
}

const posts: BlogPostProps[] = [
  {
    image: 'https://picsum.photos/seed/learnhub-blog1/600/400',
    category: 'Learning Tips',
    title: '5 Study Habits That Top Students Swear By',
    description:
      'Discover proven techniques that help online learners retain more information and stay motivated.',
    comments: '12',
    likes: '3.2k',
  },
  {
    image: 'https://picsum.photos/seed/learnhub-blog2/600/400',
    category: 'Career Advice',
    title: 'How to Transition Into Tech Without a CS Degree',
    description:
      'A practical roadmap for career changers looking to break into the technology industry.',
    comments: '8',
    likes: '5.1k',
  },
  {
    image: 'https://picsum.photos/seed/learnhub-blog3/600/400',
    category: 'Industry News',
    title: 'The Most In-Demand Tech Skills for 2025',
    description:
      'Stay ahead of the curve with our analysis of the skills employers are looking for right now.',
    comments: '15',
    likes: '4.7k',
  },
]

function BlogCard({ image, category, title, description, comments, likes }: BlogPostProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover transition group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="inline-block rounded-full bg-coral-500/10 px-3 py-1 text-xs font-semibold text-coral-500">
          {category}
        </span>
        <h3 className="mt-3 font-heading text-lg font-semibold text-navy-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
        <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <MessageCircle className="h-3.5 w-3.5" /> {comments} Comments
          </span>
          <span className="flex items-center gap-1">
            <Heart className="h-3.5 w-3.5" /> {likes} Likes
          </span>
        </div>
      </div>
    </div>
  )
}

export function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-coral-500">
            Our Blog
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy-900 md:text-4xl">
            Latest from Our Blog
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
