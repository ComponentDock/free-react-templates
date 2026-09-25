import { Eye, MessageCircle } from 'lucide-react'
import { latestNews } from '../data'

export function LatestNews() {
  return (
    <section id="events" className="py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold uppercase">Latest News</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {latestNews.map((item) => (
            <div
              key={item.id}
              className="group relative h-64 overflow-hidden rounded bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/60" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="mb-3 flex gap-4 text-sm text-white/70">
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" /> {item.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" /> {item.views}
                  </span>
                </div>
                <a
                  href="#events"
                  className="text-lg font-semibold text-white transition-colors hover:text-brand"
                >
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
