const posts = [
  {
    num: '01',
    author: 'Robert Williams',
    category: 'Branding',
    title: 'Eiusmod tempor incididunt ut dolore magna labore eiusmod ipsum dolor',
  },
  {
    num: '02',
    author: 'Jim Davis',
    category: 'Tech',
    title: 'Incididunt ut dolore magna labore eiusmod lorem ipsum dolor sit',
  },
  {
    num: '03',
    author: 'Ann Peterson',
    category: 'Crafting',
    title: 'Labore eiusmod lorem ipsum dolor sit amet nunc labore incididunt ut dolore',
  },
  {
    num: '04',
    author: 'Robert Williams',
    category: 'Crafting',
    title: 'Dolor sit amet nunc labore incididunt ut dolore magna labore eiusmod',
  },
]

const testimonials = [
  {
    text: 'The difference between a Designer and Developer, when it comes to design skills, is the difference between a full meal and a snack.',
    author: 'Scott Hanselman',
  },
  {
    text: 'To create anything — whether a short story or a magazine profile or a film or a sitcom — is to believe, however naively, in the possibility of empathy.',
    author: 'Tom Bissel',
  },
  {
    text: 'As a profession, graphic designers have been shamefully remiss or ineffective about plying their craft in the political arena.',
    author: 'Steven Heller',
  },
]

export function Stories() {
  return (
    <section id="news" className="relative bg-navy py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 flex items-start justify-end gap-6">
          <h2 className="font-heading text-4xl font-bold text-white">Stories</h2>
          <span className="font-heading text-8xl font-bold text-white/10">04</span>
        </div>

        {/* Blog items */}
        <div className="mb-16 grid gap-8 sm:grid-cols-2">
          {posts.map(({ num, author, category, title }) => (
            <div key={num} className="flex gap-4 border-b border-white/10 pb-6">
              <span className="font-heading text-3xl font-black text-mint">{num}</span>
              <div>
                <p className="text-xs text-white/50">{author}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-rose-light">
                  {category}
                </p>
                <a
                  href="#"
                  className="mt-2 block text-sm font-bold leading-snug text-white transition-colors hover:text-mint"
                >
                  {title}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-16 text-center">
          <a
            href="#"
            className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-mint border-b-2 border-mint pb-1 transition-colors hover:text-white hover:border-white"
          >
            Go to Blog
          </a>
        </div>

        {/* Testimonials */}
        <div className="grid gap-10 sm:grid-cols-3">
          {testimonials.map(({ text, author }) => (
            <div key={author}>
              <p className="mb-4 text-base leading-relaxed text-white/70 italic font-serif">
                "{text}"
              </p>
              <p className="font-heading text-sm font-bold uppercase tracking-widest text-white">
                {author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
