import { Play } from 'lucide-react'
import { SectionTitle } from './SectionTitle'

const VIDEO_FEATURE = {
  headline: "The world's first fitness influencer was a Victorian strongman",
  image: 'https://picsum.photos/seed/kicker-vid1/800/500',
}

const VIDEO_RAIL = [
  {
    kicker: 'Videos',
    headline: 'Needs to Rename the James Webb Space Telescope',
    image: 'https://picsum.photos/seed/kicker-vid2/400/250',
  },
  {
    kicker: 'Videos',
    headline: 'These striking photos capture the future of human flight',
    image: 'https://picsum.photos/seed/kicker-vid3/400/250',
  },
  {
    kicker: 'Videos',
    headline: 'Exploring the origins of punk across America with Kid Karate',
    image: 'https://picsum.photos/seed/kicker-vid4/400/250',
  },
]

export function VideoGallery() {
  return (
    <section className="bg-ink px-4 py-12 lg:px-[88px]">
      <SectionTitle title="Video Gallery" dark />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left: feature video */}
        <div className="lg:col-span-7">
          <article className="group relative">
            <div className="overflow-hidden">
              <img
                src={VIDEO_FEATURE.image}
                alt={VIDEO_FEATURE.headline}
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Pulsing play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-[31px] rounded-full border-[4px] border-white/20" />
                <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-white shadow-lg transition-colors group-hover:bg-brand-red">
                  <Play className="ml-1 h-8 w-8 text-brand-red group-hover:text-white" />
                </div>
              </div>
            </div>
            <div className="pt-5">
              <h2 className="font-chivo text-[24px] font-bold leading-[1.4] text-white lg:text-[30px]">
                <a href="#" className="hover:text-brand-red transition-colors">
                  {VIDEO_FEATURE.headline}
                </a>
              </h2>
            </div>
          </article>
        </div>

        {/* Right: rail stories */}
        <div className="flex flex-col gap-5 lg:col-span-5 lg:pl-[18px]">
          {VIDEO_RAIL.map((story) => (
            <article key={story.headline} className="group flex gap-4">
              <div className="w-[160px] shrink-0 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.headline}
                  className="h-[100px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-chivo text-[12px] font-bold capitalize text-white/50">
                  {story.kicker}
                </span>
                <h4 className="mt-1 font-chivo text-[18px] font-bold leading-[1.4] text-white transition-colors group-hover:text-brand-red lg:text-[22px]">
                  <a href="#">{story.headline}</a>
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
