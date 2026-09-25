import { ArrowRight } from 'lucide-react'

const features = [
  {
    category: 'Vegies',
    title: 'Beef Empanadas',
    description:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/taster-feat1/600/400',
  },
  {
    category: 'Food',
    title: 'Buttermilk Chicken Jibaritos',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/taster-feat2/600/400',
  },
  {
    category: 'Food',
    title: 'Chicken Chimichurri Croquettes',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    image: 'https://picsum.photos/seed/taster-feat3/600/400',
  },
]

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
  return (
    <div className="flex w-full flex-col justify-center bg-white p-10 text-center lg:w-1/3">
      <p className="mb-2 text-sm uppercase tracking-[0.2em] text-brand">{feature.category}</p>
      <h3 className="mb-4 text-xl font-bold uppercase text-ink">{feature.title}</h3>
      <p className="mb-6 text-mist">{feature.description}</p>
      <div>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-ink transition-colors hover:text-brand"
        >
          Learn More <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  )
}

function FeatureImage({ src }: { src: string }) {
  return (
    <div
      className="h-64 w-full bg-cover bg-center lg:h-auto lg:w-1/3"
      style={{ backgroundImage: `url(${src})` }}
    />
  )
}

export function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-ink md:text-5xl">
            Find your best food
          </h2>
          <p className="text-lg text-mist">Free Website Template For Restaurants</p>
        </div>

        {/* Row 1: image left + text right */}
        <div className="mb-8 flex flex-col lg:flex-row">
          <FeatureImage src={features[0]!.image} />
          <FeatureCard feature={features[0]!} />
        </div>

        {/* Row 2: text left + image right */}
        <div className="mb-8 flex flex-col lg:flex-row">
          <FeatureCard feature={features[1]!} />
          <FeatureImage src={features[1]!.image} />
        </div>

        {/* Row 3: image left + text right */}
        <div className="flex flex-col lg:flex-row">
          <FeatureImage src={features[2]!.image} />
          <FeatureCard feature={features[2]!} />
        </div>
      </div>
    </section>
  )
}
