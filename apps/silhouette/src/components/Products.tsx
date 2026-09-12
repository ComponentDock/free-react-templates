const products = [
  { id: 1, name: 'Linen Blazer', price: '$129', seed: 'silhouette-p1' },
  { id: 2, name: 'Silk Blouse', price: '$89', seed: 'silhouette-p2' },
  { id: 3, name: 'Wool Trousers', price: '$109', seed: 'silhouette-p3' },
  { id: 4, name: 'Cotton Dress', price: '$99', seed: 'silhouette-p4' },
  { id: 5, name: 'Cashmere Sweater', price: '$149', seed: 'silhouette-p5' },
  { id: 6, name: 'Denim Jacket', price: '$119', seed: 'silhouette-p6' },
  { id: 7, name: 'Pleated Skirt', price: '$79', seed: 'silhouette-p7' },
  { id: 8, name: 'Tailored Coat', price: '$199', seed: 'silhouette-p8' },
]

export function Products() {
  return (
    <section id="collections" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold">New Arrivals</h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-gray-500">
          Hand-picked pieces for every occasion
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="mb-3 overflow-hidden rounded-lg bg-surface">
                <img
                  src={`https://picsum.photos/seed/${product.seed}/400/500`}
                  alt={product.name}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={500}
                />
              </div>
              <h3 className="text-sm font-bold">{product.name}</h3>
              <p className="text-sm text-brand">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
