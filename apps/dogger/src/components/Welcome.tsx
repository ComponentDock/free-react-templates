import { PawPrint } from 'lucide-react'

const features = [
  {
    title: 'Love & Care',
    copy: 'Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    seed: 'dogger-feature-1',
    flip: false,
  },
  {
    title: 'Fearsome',
    copy: 'Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    seed: 'dogger-feature-2',
    flip: true,
  },
  {
    title: 'Beautiful',
    copy: 'Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    seed: 'dogger-feature-3',
    flip: false,
  },
] as const

export function Welcome() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/20 text-brand">
            <PawPrint className="h-8 w-8" aria-hidden="true" />
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-black dark:text-white">
            Welcome to Dogger Pet Care
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center gap-10 md:flex-row ${
                feature.flip ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <img
                  src={`https://picsum.photos/seed/${feature.seed}/640/480`}
                  alt=""
                  loading="lazy"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-black dark:text-white">{feature.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
                  {feature.copy}
                </p>
                <a
                  href="#services"
                  className="mt-6 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-black dark:hover:bg-white dark:hover:text-black"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
