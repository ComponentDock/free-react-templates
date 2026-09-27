import { Maximize, Bed, Bath, Car, ArrowRight } from 'lucide-react'

const topProps = [
  {
    image: 'https://picsum.photos/seed/terravault-top-1/600/400',
    tag: 'Premium',
    name: 'Grand Mansion On Hill',
    price: '$4,500,000',
    address: '1234 Hillside Drive, Beverly Hills, CA',
    description:
      'A stunning mansion with breathtaking views, state-of-the-art amenities, and luxurious interiors throughout.',
    sqft: '8500',
    beds: '7',
    baths: '6',
    garage: '3',
  },
  {
    image: 'https://picsum.photos/seed/terravault-top-2/600/400',
    tag: 'New',
    name: 'Waterfront Estate',
    price: '$3,200,000',
    address: '567 Ocean Boulevard, Miami Beach, FL',
    description:
      'Direct oceanfront property with private beach access, infinity pool, and panoramic ocean views.',
    sqft: '6200',
    beds: '6',
    baths: '5',
    garage: '2',
  },
  {
    image: 'https://picsum.photos/seed/terravault-top-3/600/400',
    tag: 'Hot',
    name: 'Mountain Retreat Villa',
    price: '$2,800,000',
    address: '890 Mountain Road, Aspen, CO',
    description:
      'An exclusive alpine retreat with ski-in access, home theater, wine cellar, and spa.',
    sqft: '5400',
    beds: '5',
    baths: '4',
    garage: '2',
  },
]

export function TopProperties() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-[#2cbdb8]">Top Property For You</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#19191a]">Top Properties</h2>
            <div className="mt-3 h-1 w-16 bg-[#2cbdb8]" />
          </div>
          <a
            href="#property"
            className="hidden items-center gap-1 text-sm font-medium text-[#2cbdb8] transition-colors hover:text-[#24a6a1] sm:flex"
          >
            View All Property <ArrowRight size={16} />
          </a>
        </div>
        <div className="mt-12 space-y-8">
          {topProps.map((p) => (
            <div
              key={p.name}
              className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl md:flex-row"
            >
              <img src={p.image} alt={p.name} className="h-64 w-full object-cover md:w-1/2" />
              <div className="flex flex-1 flex-col justify-center p-6">
                <span className="mb-2 inline-block w-fit rounded bg-[#2cbdb8] px-3 py-1 text-xs font-semibold text-white">
                  {p.tag}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#19191a]">{p.name}</h3>
                <p className="mt-1 font-heading text-lg font-bold text-[#2cbdb8]">{p.price}</p>
                <p className="mt-1 text-sm text-gray-text">{p.address}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">{p.description}</p>
                <div className="mt-4 flex items-center gap-5 text-xs text-gray-text">
                  <span className="flex items-center gap-1">
                    <Maximize size={14} /> {p.sqft} Sqft
                  </span>
                  <span className="flex items-center gap-1">
                    <Bed size={14} /> {p.beds} Bed
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={14} /> {p.baths} Bath
                  </span>
                  <span className="flex items-center gap-1">
                    <Car size={14} /> {p.garage} Garage
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <a
            href="#property"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#2cbdb8] transition-colors hover:text-[#24a6a1]"
          >
            View All Property <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
