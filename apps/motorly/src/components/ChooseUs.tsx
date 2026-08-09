import { Button } from '@free-react-templates/ui'

export function ChooseUs() {
  return (
    <section id="about" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/motorly-2/720/540"
          alt="Motorly garage workshop"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
          loading="lazy"
        />
        <div>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-ink dark:text-white sm:text-4xl">
            We Have 20 Years Of Experience In Auto Car
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-white/60">
            Duis aute irure dolor in reprehenderits volupta velit dolore fugia. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Integer et nisl et massa tempor ornare vel id
            orci.
          </p>
          <Button
            className="mt-8 rounded bg-brand px-8 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
            size="lg"
          >
            About Us
          </Button>
        </div>
      </div>
    </section>
  )
}
