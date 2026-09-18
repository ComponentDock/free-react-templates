import { Calendar, BookOpen } from 'lucide-react'

interface StoryCard {
  title: string
  date: string
  category: string
  imageId: string
}

const stories: StoryCard[] = [
  {
    title: 'Building schools in rural communities across three continents',
    date: '20th Sep, 2024',
    category: 'Education',
    imageId: 'shores-blog-1',
  },
  {
    title: 'Clean water initiative reaches 50 new villages this quarter',
    date: '15th Sep, 2024',
    category: 'Healthcare',
    imageId: 'shores-blog-2',
  },
  {
    title: 'Volunteer conference highlights success stories from the field',
    date: '10th Sep, 2024',
    category: 'Community',
    imageId: 'shores-blog-3',
  },
]

export function Blog() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-ink">Our latest Story</h2>
          <p className="mx-auto max-w-xl text-mist">
            Read about our impact and the communities we serve.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={`https://picsum.photos/seed/${story.imageId}/600/400`}
                alt={story.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="mb-3 flex gap-4 text-xs text-mist">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {story.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen size={12} />
                    {story.category}
                  </span>
                </div>
                <h3 className="text-base font-semibold leading-snug text-ink">
                  <a href="#" className="hover:text-brand">
                    {story.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
