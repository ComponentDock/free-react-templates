import { Plus } from 'lucide-react'

const stories = [
  {
    date: 'January 31, 2024',
    title: '"Being loved has taught me how to love"',
    image: 'https://picsum.photos/seed/giveaid-story1/600/400',
  },
  {
    date: 'January 31, 2024',
    title: 'Becoming a perfect parent out of imperfect',
    image: 'https://picsum.photos/seed/giveaid-story2/600/400',
  },
  {
    date: 'January 31, 2024',
    title: 'Home sweet home',
    image: 'https://picsum.photos/seed/giveaid-story3/600/400',
  },
]

export function FeaturedStories() {
  return (
    <section id="stories" className="border-t border-mist bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-wider text-ink">
            Featured Stories
          </h2>
        </div>
        <div className="grid gap-0 md:grid-cols-3">
          {stories.map((story, i) => (
            <a key={i} href="#" className="group relative block overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="h-72 w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 text-center opacity-0 transition-opacity group-hover:opacity-100">
                <span className="mb-2 text-sm text-white/70">{story.date}</span>
                <h3 className="text-lg font-semibold text-white">{story.title}</h3>
                <Plus className="mt-4 h-8 w-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
