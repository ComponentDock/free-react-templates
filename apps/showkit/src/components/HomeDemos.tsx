import { DemoCard } from './DemoCard'

const demos = [
  {
    title: 'OnePage - 01',
    image: 'https://picsum.photos/seed/showkit-demo-1/600/420',
    href: 'https://example.com/onepage-01',
  },
  {
    title: 'OnePage - 02',
    image: 'https://picsum.photos/seed/showkit-demo-2/600/420',
    href: 'https://example.com/onepage-02',
  },
]

export function HomeDemos() {
  return (
    <section id="demos" className="bg-white py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="pb-20 text-center font-display text-3xl font-semibold uppercase text-ink dark:text-white">
          Home onepage Demos
        </h2>
        <div className="mx-auto grid max-w-3xl gap-10 sm:grid-cols-2">
          {demos.map((demo) => (
            <DemoCard key={demo.title} {...demo} />
          ))}
        </div>
      </div>
    </section>
  )
}
