const columns = [
  [
    'Vitae vero perspiciatis, eveniet accusamus quam, dolores!',
    'Nulla aliquid in commodi cupiditate, quasi, dignissimos.',
    'Debitis nostrum quis enim corporis velit iure.',
    'Ad autem quam molestiae odio vel cupiditate?',
    'Porro, maxime voluptatem ad ut doloremque beatae.',
    'Aut, vero molestiae quod, cum dicta iste?',
  ],
  [
    'Lorem ipsum dolor sit amet, consectetur, adipisicing.',
    'Nemo ex qui fuga iste labore eaque!',
    'Architecto aperiam a dolor, illo quidem, doloribus?',
    'Sint, molestiae minima assumenda adipisci, ex ad.',
    'Possimus, suscipit incidunt hic rerum eos, excepturi.',
    'Dicta, dolores, voluptatum! Suscipit reprehenderit, totam modi.',
  ],
  [
    'Facere libero voluptates suscipit molestiae perspiciatis iusto.',
    'Tempora iure perspiciatis facilis! Ab, totam, laborum?',
    'Deserunt tempora quod adipisci aperiam numquam. Ipsa!',
    'Asperiores porro labore, beatae, ea doloribus animi?',
    'Sapiente, laudantium quam magnam, iste omnis incidunt?',
    'Quas, odit cum eum aut mollitia voluptate?',
  ],
]

export function Resources() {
  return (
    <section className="bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h3 className="mb-6 text-3xl font-bold text-white">Resources</h3>
        <p className="mb-10 max-w-3xl leading-relaxed text-white/70">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
          your mouth. Far far away, behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((items, colIdx) => (
            <ul key={colIdx} className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item}>
                  <a
                    href="#resources"
                    className="text-sm text-white/60 transition-colors hover:text-brand"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Peace & order sub-section */}
        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          <img
            src="https://picsum.photos/seed/lawguard-peace/600/400"
            alt="Peace and order"
            className="w-full rounded-lg object-cover"
          />
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">Peace &amp; order</h3>
            <p className="mb-4 leading-relaxed text-white/70">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth. Far far away, behind the word mountains.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              Read more →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
