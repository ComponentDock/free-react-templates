import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

type Category = 'female' | 'male' | 'children'
type TileSize = 'small' | 'wide' | 'tall' | 'big'

interface Model {
  name: string
  category: Category
  size: TileSize
  seed: string
}

const models: Model[] = [
  { name: 'Alicia Williams', category: 'female', size: 'small', seed: 'allure-model-1' },
  { name: 'Bianca Ross', category: 'female', size: 'wide', seed: 'allure-model-2' },
  { name: 'Chloe Bennett', category: 'female', size: 'big', seed: 'allure-model-3' },
  { name: 'Daniel Cross', category: 'male', size: 'small', seed: 'allure-model-4' },
  { name: 'Ethan Shaw', category: 'male', size: 'tall', seed: 'allure-model-5' },
  { name: 'Fiona Grant', category: 'female', size: 'small', seed: 'allure-model-6' },
  { name: 'Grace Lin', category: 'female', size: 'wide', seed: 'allure-model-7' },
  { name: 'Henry Cole', category: 'male', size: 'tall', seed: 'allure-model-8' },
  { name: 'Ivy Parker', category: 'children', size: 'small', seed: 'allure-model-9' },
]

const filters = [
  { label: 'All', value: '*' },
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' },
  { label: 'Children', value: 'children' },
] as const

const sizeClasses: Record<TileSize, string> = {
  small: 'col-span-1 row-span-1',
  wide: 'col-span-2 row-span-1',
  tall: 'col-span-1 row-span-2',
  big: 'col-span-2 row-span-2',
}

export function Models() {
  const [filter, setFilter] = useState<string>('*')
  const visible = models.filter((model) => filter === '*' || model.category === filter)

  return (
    <section
      id="models"
      className="bg-white pb-24 pt-6 transition-colors lg:pb-32 dark:bg-gray-950"
    >
      <div className="relative flex h-[277px] w-4/5 items-center bg-black">
        <h2 className="-rotate-90 origin-left whitespace-nowrap font-display text-4xl font-bold text-white lg:text-6xl">
          See the Models<span className="text-brand">.</span>
        </h2>
        <div className="ml-auto hidden items-center gap-2 pr-6 md:flex">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              aria-pressed={filter === item.value}
              className={cn(
                'px-4 py-2 text-sm font-medium uppercase text-white transition-colors',
                filter === item.value ? 'bg-brand-deep' : 'hover:bg-brand-deep/60',
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <a
          href="#models"
          aria-label="See all models"
          className="absolute bottom-0 right-0 flex h-36 w-36 items-center justify-center bg-brand-deep text-6xl font-bold text-white transition-colors hover:bg-ink"
        >
          +
        </a>
      </div>

      <div className="mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-1 px-4 sm:px-6 md:grid-cols-4 md:auto-rows-[220px]">
        {visible.map((model) => (
          <div
            key={model.name}
            className={cn('group relative overflow-hidden', sizeClasses[model.size])}
          >
            <img
              src={`https://picsum.photos/seed/${model.seed}/600/600`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="font-display text-3xl font-bold text-white">{model.name}</p>
              <a
                href="#models"
                className="text-lg text-white/50 transition-colors hover:text-white"
              >
                View Portfolio
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
