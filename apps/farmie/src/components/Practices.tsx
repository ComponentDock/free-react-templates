import { Tractor, Wheat, type LucideIcon } from 'lucide-react'

const practices: { title: string; copy: string; Icon: LucideIcon; seed: string }[] = [
  {
    title: 'Chicken Farmed For Meat',
    copy: 'Free-range chickens raised with care on open pasture.',
    Icon: Tractor,
    seed: 'farmie-practice-1',
  },
  {
    title: 'Pig Farm Management',
    copy: 'Responsible husbandry that keeps animals healthy and happy.',
    Icon: Wheat,
    seed: 'farmie-practice-2',
  },
  {
    title: 'Beef Cattle Farming',
    copy: 'Grass-fed cattle raised sustainably on our own meadows.',
    Icon: Tractor,
    seed: 'farmie-practice-3',
  },
  {
    title: 'Improved Rice Cultivation',
    copy: 'Water-smart rice farming that protects local ecosystems.',
    Icon: Wheat,
    seed: 'farmie-practice-4',
  },
  {
    title: 'Soil Improvement Techniques',
    copy: 'Composting, rotation, and cover crops keep our soil rich.',
    Icon: Tractor,
    seed: 'farmie-practice-5',
  },
  {
    title: 'Intensive Fruit Farming',
    copy: 'High-density orchards that produce abundant, flavorful fruit.',
    Icon: Wheat,
    seed: 'farmie-practice-6',
  },
]

export function Practices() {
  return (
    <section id="practices" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-black dark:text-white">
          Farming Practices To Preserve Land &amp; Water
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map(({ title, copy, Icon, seed }) => (
            <article
              key={title}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${seed}/640/360`}
                  alt=""
                  loading="lazy"
                  className="w-full object-cover"
                />
                <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-lg font-bold text-black dark:text-white">{title}</h3>
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
