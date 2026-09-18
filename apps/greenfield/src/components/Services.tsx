import { Sprout, Leaf, TreePine, Milk, ChevronRight } from 'lucide-react'

const services = [
  {
    icon: Sprout,
    title: 'Fresh Vegetables',
    description:
      'We grow and supply the freshest organic vegetables straight from our fields to your table.',
    image: 'https://picsum.photos/seed/farm1/400/300',
  },
  {
    icon: Leaf,
    title: 'Agricultural Products',
    description:
      'Premium quality agricultural products cultivated with sustainable farming practices.',
    image: 'https://picsum.photos/seed/farm2/400/300',
  },
  {
    icon: TreePine,
    title: 'Organic Products',
    description:
      'Certified organic products grown without harmful chemicals or pesticides for your health.',
    image: 'https://picsum.photos/seed/farm3/400/300',
  },
  {
    icon: Milk,
    title: 'Dairy Products',
    description: 'Fresh dairy products sourced from healthy, grass-fed cattle on our family farms.',
    image: 'https://picsum.photos/seed/farm4/400/300',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 font-display text-2xl text-brand">Our Services</p>
          <h2 className="text-3xl font-bold text-ink">What We Offer</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-brand/80 opacity-0 transition-opacity group-hover:opacity-100">
                  <s.icon size={40} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <s.icon size={20} className="text-brand" />
                  <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-mist">{s.description}</p>
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                  aria-label={`Learn more about ${s.title}`}
                >
                  Read More <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
