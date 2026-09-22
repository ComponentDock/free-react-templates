import { Calendar, ChevronRight } from 'lucide-react'

const posts = [
  { title: 'Treat Your Body Like A Temple', date: 'Oct. 10, 2020', seed: 'zenbloom-blog1' },
  { title: 'Morning Yoga Routines For Energy', date: 'Oct. 15, 2020', seed: 'zenbloom-blog2' },
  { title: 'Mindfulness And Meditation Tips', date: 'Oct. 20, 2020', seed: 'zenbloom-blog3' },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="font-display text-xl text-sage-400">Our Blog</p>
          <h2 className="mt-2 text-3xl font-bold">Recent Posts</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map(({ title, date, seed }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div
                className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url('https://picsum.photos/seed/${seed}/400/300')` }}
              />
              <div className="p-5">
                <p className="mb-2 flex items-center gap-1 text-sm text-gray-400">
                  <Calendar className="h-4 w-4" /> {date}
                </p>
                <h3 className="mb-2 text-lg font-semibold">
                  <a href="#" className="hover:text-sage-400">
                    {title}
                  </a>
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Discover the benefits of yoga for your body and mind. Our expert tips will help
                  you build a sustainable practice.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-sage-400 hover:text-sage-500"
                  aria-label={`Read more about ${title}`}
                >
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
