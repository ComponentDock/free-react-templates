import { BrandButton } from './BrandButton'

const features = [
  {
    title: 'UX/UI Designer',
    description:
      'Craft intuitive interfaces and delightful user experiences that keep customers engaged and coming back for more.',
  },
  {
    title: 'Web Designer',
    description:
      'Build beautiful, responsive websites that captivate visitors and convert them into loyal customers.',
  },
  {
    title: 'Accounting & Finance',
    description:
      'Manage financial records, ensure compliance, and drive strategic decisions with accurate reporting.',
  },
]

export function Features() {
  return (
    <section id="about" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Why Choose Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-mist">
            We connect talent with opportunity. Our platform offers a seamless experience for job
            seekers and employers alike.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[3px] bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-display text-xl font-bold text-ink">{feature.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-mist">{feature.description}</p>
              <BrandButton href="#jobs" className="mt-6 !px-6 !py-3 !text-xs">
                Explore Now
              </BrandButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
