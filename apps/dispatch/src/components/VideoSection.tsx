import { useState } from 'react'
import { Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { videos } from '../data'

export function VideoSection() {
  const [active, setActive] = useState(0)
  const video = videos[active]!

  return (
    <section aria-label="Most Popular Videos" className="mb-16">
      <h2 className="mb-8 border-b border-line pb-4 font-display text-lg font-bold text-black dark:border-gray-700 dark:text-white">
        Most Popular Videos
      </h2>
      <div className="relative overflow-hidden rounded-md bg-dark dark:bg-black">
        <div className="grid lg:grid-cols-[1fr_263px]">
          <div className="relative aspect-video">
            <img src={video.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
            <button
              type="button"
              aria-label={`Play ${video.title}`}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-accent transition-transform hover:scale-105">
                <Play className="ml-1 h-10 w-10 fill-white text-white" aria-hidden="true" />
              </span>
            </button>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-sans text-lg font-medium leading-snug text-white">
                {video.title}
              </h3>
              <p className="mt-1 font-display text-xs font-medium text-white/60">
                {video.views} views · {video.date}
              </p>
            </div>
          </div>
          <div className="bg-dark p-8 dark:bg-black lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[263px]">
            <ul className="space-y-4">
              {videos.map((item, index) => (
                <li key={item.title}>
                  <button
                    type="button"
                    aria-current={index === active}
                    onClick={() => setActive(index)}
                    className="flex w-full items-start gap-4 text-left"
                  >
                    <span className="relative shrink-0">
                      <img src={item.image} alt="" className="h-16 w-24 rounded object-cover" />
                      <span
                        className={cn(
                          'absolute inset-0 flex items-center justify-center',
                          index === active ? 'text-accent' : 'text-white/40',
                        )}
                      >
                        <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                      </span>
                    </span>
                    <span>
                      <span
                        className={cn(
                          'block font-sans text-sm font-medium leading-snug',
                          index === active ? 'text-white' : 'text-white/25',
                        )}
                      >
                        {item.title}
                      </span>
                      <span className="mt-1 block font-display text-xs font-medium text-white/10">
                        {item.views} views · {item.date}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
