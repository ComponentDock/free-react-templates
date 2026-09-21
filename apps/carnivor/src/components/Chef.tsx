const specialties = [
  { name: 'Wagyu Ribeye', img: 'carnivor-chef1' },
  { name: 'Dry-Aged T-Bone', img: 'carnivor-chef2' },
  { name: 'Grilled Lamb Rack', img: 'carnivor-chef3' },
  { name: 'Smoked Brisket', img: 'carnivor-chef4' },
] as const

export function Chef() {
  return (
    <section id="chefs" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <img
              src="https://picsum.photos/seed/carnivor-headchef/600/500"
              alt="Head chef portrait"
              className="rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Daily Food Courses with Drinks
            </h2>
            <p className="mt-6 leading-relaxed text-mist">
              Our head chef brings over two decades of experience in flame-grilling and dry-aging.
              Each cut is selected for marbling, aged for optimal tenderness, and cooked over an
              open flame for that signature char.
            </p>
            <p className="mt-4 leading-relaxed text-mist">
              Every dish is plated with precision and served with seasonal sides crafted from
              locally sourced produce.
            </p>
            <div className="mt-6 text-3xl font-display text-brand italic">Marco Rivera</div>
          </div>
        </div>

        {/* Chef specialty items */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {specialties.map((item) => (
            <div key={item.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${item.img}/200/200`}
                alt={item.name}
                className="mx-auto h-28 w-28 rounded-full object-cover shadow-md"
                loading="lazy"
              />
              <p className="mt-3 text-sm font-medium text-ink">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
