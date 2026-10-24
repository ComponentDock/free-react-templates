import { Factory, GraduationCap, ShoppingBag, Plane } from 'lucide-react'

const industries = [
  { icon: Factory, title: 'Industries & Manufacturing' },
  { icon: GraduationCap, title: 'Education & Health' },
  { icon: ShoppingBag, title: 'Retail & Ecommerce' },
  { icon: Plane, title: 'Travel & Hospitality' },
] as const

export function Industries() {
  return (
    <section aria-label="Industries" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl dark:text-white">
            IT services customized for your industry
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-body dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-2xl border border-gray-100 bg-paper p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <industry.icon className="mx-auto h-12 w-12 text-primary-500" aria-hidden="true" />
              <h3 className="mt-5 font-display text-lg font-semibold text-navy dark:text-white">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
