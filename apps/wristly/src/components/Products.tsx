import { Button } from '@free-react-templates/ui'

const products = [
  { name: 'Wristly Classic', price: '£399.00', img: 'wristly-prod1' },
  { name: 'Wristly Sport', price: '£399.00', img: 'wristly-prod2' },
  { name: 'Wristly Elite', price: '£399.00', img: 'wristly-prod3' },
  { name: 'Wristly Ultra', price: '£399.00', img: 'wristly-prod4' },
]

export function Products() {
  return (
    <section id="products" className="bg-[#1a1a2e] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-white">Unique Features</h2>
          <p className="text-gray-400">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.name}
              className="group overflow-hidden rounded-lg bg-white/5 transition-colors hover:bg-white/10"
            >
              <img
                src={`https://picsum.photos/seed/${p.img}/300/250`}
                alt={p.name}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h4 className="mb-1 font-semibold text-white">{p.name}</h4>
                <h6 className="mb-3 text-sm text-cyan-accent">{p.price}</h6>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-cyan-accent text-cyan-accent hover:bg-cyan-accent hover:text-[#1a1a2e]"
                >
                  Pre Order
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
