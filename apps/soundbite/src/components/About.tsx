import { InstagramIcon, LinkedinIcon, XIcon } from './BrandIcons'

const socials = [
  { label: 'X (Twitter)', Icon: XIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
  { label: 'Instagram', Icon: InstagramIcon },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-gray-900 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div className="relative mx-auto w-full max-w-md">
          <img
            src="https://picsum.photos/seed/soundbite-host/800/1000"
            alt="Portrait of host Alex Morgan"
            className="aspect-[4/5] w-full rounded-3xl object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-t from-gray-950/70 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>

        <div>
          <span className="inline-flex items-center rounded-full bg-primary-600/15 px-3 py-1 text-xs font-medium tracking-wide text-primary-300">
            About the Host
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet Your Host
          </h2>
          <p className="mt-2 text-2xl font-semibold">
            <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Alex Morgan
            </span>
          </p>
          <p className="mt-4 leading-relaxed text-gray-400">
            Serial entrepreneur, angel investor, and lifelong storyteller. For more than five years
            Alex has sat down with the most fascinating builders in tech. With two successful exits
            and dozens of angel investments, every conversation comes with a founder&rsquo;s radar
            &mdash; asking the questions only someone who has been in the arena would think to ask.
          </p>
          <blockquote className="mt-6 border-l-4 border-red-600 pl-4 text-lg italic text-gray-300">
            &ldquo;Every founder has a story worth sharing.&rdquo;
          </blockquote>

          <div className="mt-6 flex gap-3">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#about"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
