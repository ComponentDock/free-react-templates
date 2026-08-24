import { Headphones, Radio, Music } from 'lucide-react'

const ITEMS = [
  {
    icon: Headphones,
    title: 'Personalized playlists curated just for you',
    description: 'Reduce unnecessary spend with real time insights into every penny spent.',
  },
  {
    icon: Radio,
    title: 'Stream over 50 million songs in high quality',
    description: 'Reduce unnecessary spend with real time insights into every penny spent.',
  },
  {
    icon: Music,
    title: 'Create and share your own custom mixes',
    description: 'Reduce unnecessary spend with real time insights into every penny spent.',
  },
]

export function About1() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/2">
            <img
              src="https://picsum.photos/seed/sonority-about1/600/450"
              alt="Sonority listening experience"
              className="w-full rounded-2xl shadow-lg"
              width={600}
              height={450}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="mb-8 text-3xl font-bold leading-tight text-brand-dark md:text-4xl">
              Listen to a personalized
              <br />
              mix of tracks
            </h2>
            <div className="space-y-8">
              {ITEMS.map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-brand-dark">{item.title}</h3>
                    <p className="text-brand-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
