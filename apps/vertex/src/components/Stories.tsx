const posts = [
  {
    num: '01',
    author: 'Robert Williams',
    category: 'Branding',
    excerpt: 'Eiusmod tempor incididunt ut dolore magna labore eiusmod ipsum dolor.',
  },
  {
    num: '02',
    author: 'Jim Davis',
    category: 'Tech',
    excerpt: 'Incididunt ut dolore magna labore eiusmod lorem ipsum dolor sit amet.',
  },
  {
    num: '03',
    author: 'Ann Peterson',
    category: 'Crafting',
    excerpt: 'Labore eiusmod lorem ipsum dolor sit amet nunc labore incididunt ut dolore.',
  },
  {
    num: '04',
    author: 'Robert Williams',
    category: 'Crafting',
    excerpt: 'Dolor sit amet nunc labore incididunt ut dolore magna labore eiusmod.',
  },
]

export function Stories() {
  return (
    <section id="stories" className="bg-[#f8f9fa] py-20">
      <div className="mx-auto max-w-[1170px] px-6">
        <div className="mb-12 flex items-end gap-4">
          <span className="font-display text-6xl font-bold text-[#32DB8A] opacity-40">04</span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink">
            Stories
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((p) => (
            <article key={p.num} className="flex gap-4 rounded bg-white p-6 shadow-sm">
              <span className="font-display text-3xl font-bold text-[#32DB8A]/40">{p.num}</span>
              <div>
                <p className="text-sm font-bold text-ink">{p.author}</p>
                <span className="mb-2 inline-block rounded bg-[#32DB8A]/10 px-2 py-0.5 text-xs font-bold uppercase text-[#32DB8A]">
                  {p.category}
                </span>
                <p className="text-sm leading-relaxed text-mist">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="rounded bg-[#32DB8A] px-8 py-3 font-medium uppercase tracking-wide text-[#221C5A] transition-colors hover:bg-[#28b872]">
            Go To Blog
          </button>
        </div>
      </div>
    </section>
  )
}
