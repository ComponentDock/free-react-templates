import { Heart, ArrowRight } from 'lucide-react'

const works = [
  {
    image: 'https://picsum.photos/seed/packr-work1/800/600',
    tags: ['Illustration', 'Logo'],
    title: 'Work 01',
  },
  {
    image: 'https://picsum.photos/seed/packr-work2/800/600',
    tags: ['Web Design', 'UI'],
    title: 'Work 02',
  },
  {
    image: 'https://picsum.photos/seed/packr-work3/800/600',
    tags: ['Logo', 'Illustration'],
    title: 'Work 03',
  },
  {
    image: 'https://picsum.photos/seed/packr-work4/800/600',
    tags: ['Apps', 'Brand Identity'],
    title: 'Work 04',
  },
  {
    image: 'https://picsum.photos/seed/packr-work5/800/600',
    tags: ['Brand Identity', 'Logo'],
    title: 'Work 05',
  },
  {
    image: 'https://picsum.photos/seed/packr-work6/800/600',
    tags: ['Brand Identity', 'Logo'],
    title: 'Work 06',
  },
] as const

export function Portfolio() {
  return (
    <section id="work" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-mono text-3xl font-normal text-ink sm:text-4xl">
          Our Works
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {works.map((work) => (
            <a
              key={work.title}
              href="#work"
              className="group relative block overflow-hidden rounded bg-ink"
            >
              <img
                src={work.image}
                alt={`${work.title} project showcase`}
                className="h-64 w-full object-cover opacity-70 transition-opacity group-hover:opacity-40"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Heart className="mb-3 h-6 w-6 text-white" aria-hidden="true" />
                <p className="mb-2 font-mono text-xs uppercase tracking-wider text-white/80">
                  {work.tags.join(', ')}
                </p>
                <h3 className="font-mono text-xl text-white">{work.title}</h3>
                <span className="mt-2 flex items-center gap-1 font-mono text-xs text-white/70">
                  Read more <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
