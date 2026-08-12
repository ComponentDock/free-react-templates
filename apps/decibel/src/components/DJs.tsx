import { BrandIcon, type BrandName } from './BrandIcon'
import { SectionHeading } from './SectionHeading'

const djs = [
  {
    name: 'Megan Smith',
    role: 'Resident DJ',
    blurb: 'House and techno sets that keep the floor moving till sunrise.',
    image: 'https://picsum.photos/seed/decibel-dj-1/600/700',
  },
  {
    name: 'Brooke Cagle',
    role: 'Producer',
    blurb: 'Behind-the-boards engineer for most of our flagship live sessions.',
    image: 'https://picsum.photos/seed/decibel-dj-2/600/700',
  },
  {
    name: 'Philip Martin',
    role: 'Radio Host',
    blurb: 'The voice of the morning show and host of The Interviews.',
    image: 'https://picsum.photos/seed/decibel-dj-3/600/700',
  },
  {
    name: 'Sara Chen',
    role: 'Mix Engineer',
    blurb: 'Keeps every broadcast crisp, clean and perfectly leveled.',
    image: 'https://picsum.photos/seed/decibel-dj-4/600/700',
  },
  {
    name: 'Daniel Reyes',
    role: 'Classic Hits DJ',
    blurb: 'Digs up the timeless records behind the Classic Hits block.',
    image: 'https://picsum.photos/seed/decibel-dj-5/600/700',
  },
  {
    name: 'Emma Blake',
    role: 'Show Host',
    blurb: 'Interviews the artists and curates the Late Night Sessions.',
    image: 'https://picsum.photos/seed/decibel-dj-6/600/700',
  },
] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function DJs() {
  return (
    <section id="djs" className="bg-night py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our DJs"
          intro="The hosts, producers and engineers that make Decibel sound the way it does."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {djs.map((dj) => (
            <div key={dj.name} className="group relative overflow-hidden bg-dark">
              <img
                src={dj.image}
                alt={`Portrait of ${dj.name}`}
                className="h-[420px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="font-display text-2xl font-light text-white">{dj.name}</h3>
                <span className="mt-1 text-sm uppercase tracking-wider text-white/50">
                  {dj.role}
                </span>
                <p className="mt-3 max-w-xs text-sm text-white/80">{dj.blurb}</p>
                <ul aria-label={`${dj.name} social links`} className="mt-4 flex gap-2">
                  {socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href="#djs"
                        aria-label={social.label}
                        className="p-2 text-white transition-colors hover:text-primary"
                      >
                        <BrandIcon name={social.name} className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
