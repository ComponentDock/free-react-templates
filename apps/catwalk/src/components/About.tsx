import { Camera, Shirt, Video, type LucideIcon } from 'lucide-react'

interface Feature {
  title: string
  icon: LucideIcon
  blurb: string
}

const features: Feature[] = [
  {
    title: 'Fashion Shows',
    icon: Shirt,
    blurb: 'Front-row access to the season’s biggest runway shows in London, Paris, and Milan.',
  },
  {
    title: 'Photosessions',
    icon: Camera,
    blurb: 'Studio and location shoots with award-winning photographers to grow your portfolio.',
  },
  {
    title: 'Model Video',
    icon: Video,
    blurb: 'Professional showreels and video content crafted for casting directors.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-paper py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/catwalk-about/800/600"
          alt="A model preparing backstage before a show"
          className="h-full w-full object-cover"
        />
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-brand">
            Welcome to Catwalk
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-ink dark:text-white lg:text-4xl">
            We Are Model Agency
          </h2>
          <p className="mt-5 text-sm font-light leading-relaxed text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <ul className="mt-8 space-y-6">
            {features.map(({ title, icon: Icon, blurb }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-800">
                  <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink dark:text-white">{title}</h3>
                  <p className="mt-1 text-sm font-light leading-relaxed text-mist dark:text-gray-400">
                    {blurb}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
