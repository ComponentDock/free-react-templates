import { Zap, Play } from 'lucide-react'

const videos = [
  { title: 'Top 10 Plays of the Season | Hoopside Highlights', seed: 'vid1' },
  { title: 'Game Day Recap: Costa Caribe vs Brooklyn Nets', seed: 'vid2' },
  { title: 'Player Interview: Grace Osborne on Team Chemistry', seed: 'vid3' },
]

export function LatestVideos() {
  return (
    <section className="bg-dark-surface py-16 text-white">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <Zap size={20} className="text-primary" />
            <h2 className="font-heading text-2xl font-bold uppercase">Latest Videos</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {videos.map((v) => (
            <div key={v.seed} className="group relative overflow-hidden rounded">
              <img
                src={`https://picsum.photos/seed/hoopside-${v.seed}/600/400`}
                alt={v.title}
                className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity group-hover:bg-black/60">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-primary/80 transition-transform group-hover:scale-110">
                  <Play size={20} className="ml-1 text-white" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="font-heading text-sm font-semibold leading-tight">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
