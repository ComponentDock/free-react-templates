import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
            Our holistic approach combines ancient wisdom with modern techniques. We focus on
            treating the root cause, not just the symptoms, to help you achieve lasting wellness and
            vitality.
          </p>
          <Button className="mt-8 rounded-lg px-6 py-3">Contact us now</Button>
        </div>
        <div className="overflow-hidden rounded-xl">
          <img
            src="https://picsum.photos/seed/needlecraft-about/600/400"
            alt="About Needlecraft wellness center"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
