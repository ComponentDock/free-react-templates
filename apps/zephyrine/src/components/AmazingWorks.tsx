const works = [
  { seed: 101, title: 'Vector Illustration' },
  { seed: 202, title: 'Vector Illustration' },
  { seed: 303, title: 'Vector Illustration' },
  { seed: 404, title: 'Vector Illustration' },
  { seed: 505, title: 'Vector Illustration' },
]

export function AmazingWorks() {
  return (
    <section className="bg-[#f9f9ff] py-20">
      <div className="max-w-[68.75%] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#222222] text-3xl font-semibold mb-2">Our Amazing Works</h2>
          <p className="text-[#777777] text-sm uppercase tracking-widest">Re-imagining the way</p>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {works.map((work) => (
            <div
              key={work.seed}
              className="min-w-[280px] flex-shrink-0 group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={`https://picsum.photos/seed/${work.seed}/400/300`}
                alt={work.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white text-sm font-medium">{work.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
