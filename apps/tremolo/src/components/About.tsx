import { ChefHat, Leaf, Flame } from 'lucide-react'

const values = [
  {
    icon: ChefHat,
    title: 'Expert Craftsmanship',
    description:
      'Our chefs bring decades of culinary training to every plate, combining classic technique with modern creativity.',
  },
  {
    icon: Leaf,
    title: 'Farm-to-Table',
    description:
      'We partner with local farms and purveyors to source the freshest seasonal ingredients available.',
  },
  {
    icon: Flame,
    title: 'Wood-Fired Excellence',
    description:
      'Our custom-built wood-fired oven reaches 900°F, delivering the perfect char and flavor on every dish.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">About Tremolo</h2>
            <p className="mt-4 text-slate-500">
              Nestled in the heart of the city, Tremolo is where passion meets plate. Every dish is
              crafted with intention — from the hand-selected ingredients to the final flourish of
              garnish.
            </p>
            <p className="mt-4 text-slate-500">
              We believe food is more than sustenance — it is an experience, a memory, a story
              shared around the table. Our menu changes with the seasons, ensuring every visit
              offers something new and inspired.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="flex items-start gap-4">
                  <Icon className="mt-1 h-6 w-6 flex-shrink-0 text-amber-500" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-slate-900">{value.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
