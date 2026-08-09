import { ArrowRight, BookOpen, Mic, Play } from 'lucide-react'
import { Badge } from '@free-react-templates/ui'

const mediaItems = [
  {
    title: 'Anxious for Nothing',
    blurb: 'How to handle stress, worry, and the pressure to be perfect.',
    type: 'Video',
    duration: '28:42',
    icon: Play,
    image: 'https://picsum.photos/seed/ignite-8/600/400',
  },
  {
    title: 'Dating, Relationships & Red Flags',
    blurb: 'Leaders answer your questions about relationships.',
    type: 'Podcast',
    duration: '45:00',
    icon: Mic,
    image: 'https://picsum.photos/seed/ignite-9/600/400',
  },
  {
    title: 'Morning Devotional',
    blurb: 'Start your day right with 5 minutes in the Word.',
    type: 'Devotional',
    duration: '5-Day',
    icon: BookOpen,
    image: 'https://picsum.photos/seed/ignite-10/600/400',
  },
  {
    title: 'Made for More',
    blurb: "You're not an accident. Discover your God-given purpose.",
    type: 'Video',
    duration: '35:20',
    icon: Play,
    image: 'https://picsum.photos/seed/ignite-11/600/400',
  },
] as const

export function Content() {
  return (
    <section id="media" className="bg-navy-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary-400">
              Watch &amp; Listen
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-wide text-white md:text-5xl">
              Latest Content
            </h2>
          </div>
          <a
            href="#media"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 transition-colors hover:text-primary-300"
          >
            View All
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Featured message */}
        <article className="group relative mb-6 overflow-hidden rounded-2xl">
          <img
            src="https://picsum.photos/seed/ignite-12/1600/700"
            alt=""
            className="h-72 w-full object-cover opacity-80 transition-transform duration-300 group-hover:scale-105 lg:h-96"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/60 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
            <Badge className="w-fit bg-white/15 text-white backdrop-blur">Featured Message</Badge>
            <h3 className="mt-3 font-display text-4xl tracking-wide text-white lg:text-5xl">
              Who You Really Are
            </h3>
            <p className="mt-2 flex items-center gap-3 text-sm text-white/80">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 shadow-lg shadow-primary-500/40">
                <Play className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              Pastor Tyler · 32:15
            </p>
          </div>
        </article>

        {/* Media grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mediaItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl bg-navy-900 transition-colors hover:bg-navy-800"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-navy-950/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.type}
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur">
                  {item.duration}
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-display text-xl tracking-wide text-white">{item.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{item.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
