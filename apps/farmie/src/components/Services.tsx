import { Apple, Beef, Milk, Wheat, type LucideIcon } from 'lucide-react'

const categories: { title: string; copy: string; Icon: LucideIcon; seed: string }[] = [
  {
    title: 'Fruit & Vegetable',
    copy: 'Seasonal fruits and vegetables picked fresh from our fields.',
    Icon: Apple,
    seed: 'farmie-cat-1',
  },
  {
    title: 'Meat & Eggs',
    copy: 'Free-range meat and eggs from healthy, happy farm animals.',
    Icon: Beef,
    seed: 'farmie-cat-2',
  },
  {
    title: 'Milk & Cheese',
    copy: 'Creamy dairy products made daily from our own herds.',
    Icon: Milk,
    seed: 'farmie-cat-3',
  },
  {
    title: 'Rice & Corn',
    copy: 'Hearty grains and corn grown with sustainable practices.',
    Icon: Wheat,
    seed: 'farmie-cat-4',
  },
]

export function Services() {
  return (
    <section id="services" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-black dark:text-white">
          Our Produce Is Mainstay For Us
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ title, copy, Icon, seed }) => (
            <article
              key={title}
              className="overflow-hidden rounded-lg bg-white text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/${seed}/480/320`}
                alt=""
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="p-8">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-black dark:text-white">{title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
                  {copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
