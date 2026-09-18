const properties = [
  { price: '$3,450', address: '46 Brookflower Rd, Houston TX', seed: 'proxy-prop-1' },
  { price: '$1,650', address: '2724 20th Ave N, Houston TX', seed: 'proxy-prop-2' },
  { price: '$3,200', address: '16321 Lone Corral Ct, Houston TX', seed: 'proxy-prop-3' },
  { price: '$1,200', address: '4029 26th Ave S, Houston TX', seed: 'proxy-prop-4' },
  { price: '$2,850', address: '8910 Memorial Dr, Houston TX', seed: 'proxy-prop-5' },
  { price: '$2,100', address: '5500 Westheimer Rd, Houston TX', seed: 'proxy-prop-6' },
  { price: '$4,500', address: '1200 Main St, Houston TX', seed: 'proxy-prop-7' },
  { price: '$1,900', address: '3300 Smith St, Houston TX', seed: 'proxy-prop-8' },
]

export function Properties() {
  return (
    <section id="properties" className="py-20">
      <div className="mx-auto max-w-[1600px] px-6">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-black md:text-4xl">
          Popular Properties
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((p) => (
            <div key={p.seed} className="group">
              <a href="#" className="mb-3 block overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/400/300`}
                  alt={p.address}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
              <h3 className="font-serif text-xl font-bold text-black">
                <a href="#" className="transition hover:text-sky-500">
                  {p.price}
                </a>
              </h3>
              <p className="text-sm text-gray-500">{p.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
