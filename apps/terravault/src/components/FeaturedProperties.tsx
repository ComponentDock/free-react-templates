import { Maximize, Bed, Bath, Car } from 'lucide-react'

const properties = [
  {
    image: 'https://picsum.photos/seed/terravault-feat-1/400/280',
    tag: 'Feature',
    status: 'For Sale',
    agentAvatar: 'https://picsum.photos/seed/agent1/50/50',
    agentName: 'John Smith',
    name: 'Villa On Washington Avenue',
    address: '123 Washington Ave, Miami, FL',
    type: 'Villa',
    price: '$1,200,000',
    sqft: '3200',
    beds: '5',
    baths: '4',
    garage: '2',
  },
  {
    image: 'https://picsum.photos/seed/terravault-feat-2/400/280',
    tag: 'Feature',
    status: 'For Sale',
    agentAvatar: 'https://picsum.photos/seed/agent2/50/50',
    agentName: 'Sarah Johnson',
    name: 'Luxury Penthouse Suite',
    address: '456 Park Lane, New York, NY',
    type: 'Penthouse',
    price: '$2,500,000',
    sqft: '4800',
    beds: '6',
    baths: '5',
    garage: '2',
  },
  {
    image: 'https://picsum.photos/seed/terravault-feat-3/400/280',
    tag: 'Feature',
    status: 'For Sale',
    agentAvatar: 'https://picsum.photos/seed/agent3/50/50',
    agentName: 'Mike Davis',
    name: 'Modern Family Home',
    address: '789 Oak Street, Austin, TX',
    type: 'House',
    price: '$850,000',
    sqft: '2800',
    beds: '4',
    baths: '3',
    garage: '2',
  },
  {
    image: 'https://picsum.photos/seed/terravault-feat-4/400/280',
    tag: 'Feature',
    status: 'For Sale',
    agentAvatar: 'https://picsum.photos/seed/agent4/50/50',
    agentName: 'Emily Brown',
    name: 'Cozy Studio Apartment',
    address: '321 Pine Road, Denver, CO',
    type: 'Apartment',
    price: '$420,000',
    sqft: '1200',
    beds: '2',
    baths: '1',
    garage: '1',
  },
]

export function FeaturedProperties() {
  return (
    <section className="py-20 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-[#2cbdb8]">Listing From Our Agents</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#19191a]">
            Featured Properties
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-[#2cbdb8]" />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((p) => (
            <div
              key={p.name}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative">
                <img src={p.image} alt={p.name} className="h-48 w-full object-cover" />
                <span className="absolute left-3 top-3 rounded bg-[#2cbdb8] px-3 py-1 text-xs font-semibold text-white">
                  {p.tag}
                </span>
                <span className="absolute right-3 top-3 rounded bg-[#19191a] px-3 py-1 text-xs font-semibold text-white">
                  {p.status}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <img
                    src={p.agentAvatar}
                    alt={p.agentName}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-text">{p.agentName}</span>
                </div>
                <h3 className="mt-3 font-heading text-lg font-bold text-[#19191a]">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-text">{p.address}</p>
                <p className="mt-1 text-xs text-[#2cbdb8]">{p.type}</p>
                <p className="mt-2 font-heading text-lg font-bold text-[#2cbdb8]">{p.price}</p>
                <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-4 text-xs text-gray-text">
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
      </div>
    </section>
  )
}
