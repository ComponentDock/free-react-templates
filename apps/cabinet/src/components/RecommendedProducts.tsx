import { ProductCard } from './ProductCard'

const recommended = [
  {
    name: 'Thornby Oak Dining Table',
    price: 890,
    imageSeed: 'cabinet-rec-oak-table',
    swatchColor: '#c8a06a',
  },
  {
    name: 'Halland Velvet 3-Seat Sofa',
    price: 1290,
    imageSeed: 'cabinet-rec-velvet-sofa',
    swatchColor: '#2f5d50',
  },
  {
    name: 'Brenton Upholstered Bed',
    price: 1150,
    imageSeed: 'cabinet-rec-upholstered-bed',
    swatchColor: '#c9c3b8',
  },
  {
    name: 'Norbury Tripod Floor Lamp',
    price: 215,
    imageSeed: 'cabinet-rec-tripod-lamp',
    swatchColor: '#c8a06a',
  },
]

export function RecommendedProducts() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1300px] px-5 lg:px-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="mb-2 text-3xl font-bold uppercase text-navy">Products you may like</h2>
            <p className="text-sm text-ink/70">
              Hand-picked pieces that sit well with what you have been looking at.
            </p>
          </div>
          <a
            href="#"
            className="inline-block border border-navy px-6 py-2 text-sm font-medium uppercase tracking-wide text-navy hover:bg-navy hover:text-white"
          >
            View all
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {recommended.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              imageSeed={product.imageSeed}
              swatchColor={product.swatchColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
