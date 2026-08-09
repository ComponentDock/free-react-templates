import { Reveal } from './Reveal'

interface Product {
  name: string
  blurb: string
  specs: string[]
  seed: string
}

const products: Product[] = [
  {
    name: 'SunPower Maxeon 6',
    blurb: 'Our most efficient panel, delivering unmatched performance in low light and heat.',
    specs: ['22.8% efficiency', '440W output', '40-yr warranty'],
    seed: 'helios-p-sunpower',
  },
  {
    name: 'LG NeON H+',
    blurb: 'A proven workhorse with a sleek black design that blends into any roofline.',
    specs: ['21.7% efficiency', '380W output', '25-yr warranty'],
    seed: 'helios-p-lg',
  },
  {
    name: 'Canadian Solar HiKu7',
    blurb: 'High power density at a great price — the smart choice for larger installations.',
    specs: ['21.2% efficiency', '555W output', '25-yr warranty'],
    seed: 'helios-p-canadian',
  },
] as const

export function Products() {
  return (
    <section id="products" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
              Products
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Premium Solar Equipment
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              We only install top-rated panels from the world&apos;s most trusted manufacturers.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 80}>
              <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${product.seed}/600/400`}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {product.blurb}
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {product.specs.map((spec) => (
                      <div
                        key={spec}
                        className="rounded-lg bg-gray-50 px-2 py-2 text-center text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
