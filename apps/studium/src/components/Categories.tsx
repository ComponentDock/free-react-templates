const categories = [
  { name: 'IT & Software', count: '100+ courses', seed: 'studium-cat1' },
  { name: 'Music', count: '100+ courses', seed: 'studium-cat2' },
  { name: 'Photography', count: '100+ courses', seed: 'studium-cat3' },
  { name: 'Marketing', count: '100+ courses', seed: 'studium-cat4' },
  { name: 'Health', count: '100+ courses', seed: 'studium-cat5' },
  { name: 'Audio Video', count: '100+ courses', seed: 'studium-cat6' },
]

export function Categories() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-blue">
          Start Learning Today
        </p>
        <h2 className="mb-12 text-3xl font-bold text-brand-text md:text-4xl">
          Browse Online Course Category
        </h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <button key={cat.name} className="group flex flex-col items-center gap-3">
              <div className="relative h-24 w-24 overflow-hidden rounded-full">
                <img
                  src={`https://picsum.photos/seed/${cat.seed}/200/200`}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-brand-dark/60 flex flex-col items-center justify-center text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-xs font-bold">{cat.name}</span>
                  <span className="text-[10px]">{cat.count}</span>
                </div>
              </div>
              <span className="text-sm font-medium text-brand-text">{cat.name}</span>
              <span className="text-xs text-brand-muted">{cat.count}</span>
            </button>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="#course"
            className="inline-block rounded-full bg-brand-orange px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange/90"
          >
            See All Courses
          </a>
        </div>
      </div>
    </section>
  )
}
