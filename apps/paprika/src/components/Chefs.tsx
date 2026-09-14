const CHEFS = [
  { name: 'Suzanne Goin', role: 'Head Chef', image: 'paprika-chef-1' },
  { name: 'Thomas Keller', role: 'Executive Chef', image: 'paprika-chef-2' },
  { name: 'Paul Bocuse', role: 'Pastry Chef', image: 'paprika-chef-3' },
  { name: 'Giada De Laurentiis', role: 'Sous Chef', image: 'paprika-chef-4' },
]

export function Chefs() {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="font-[family-name:var(--font-cursive)] text-3xl text-[#b10400]">Meet</h3>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl uppercase text-[#333] mt-1">
            Our Chefs
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHEFS.map((chef) => (
            <div key={chef.name} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${chef.image}/400/500`}
                alt={chef.name}
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end justify-center p-4">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-[family-name:var(--font-heading)] text-lg">{chef.name}</h4>
                  <p className="text-sm opacity-80">{chef.role}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white p-3 text-center group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="font-[family-name:var(--font-heading)] text-sm text-[#333]">
                  {chef.name}
                </h4>
                <p className="text-xs text-gray-500">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
