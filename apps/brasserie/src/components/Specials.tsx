const specials = [
  { name: 'Grilled Salmon', price: '$45' },
  { name: 'Filet Mignon', price: '$55' },
  { name: 'Truffle Risotto', price: '$40' },
]

export function Specials() {
  return (
    <section id="menu" className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-heading text-center text-3xl font-bold uppercase tracking-wide">
          Our Specials
        </h2>
        <div className="mt-10 flex justify-center">
          <a
            href="#menu"
            className="border-2 border-brand-red px-6 py-2 text-sm font-semibold uppercase tracking-wider text-brand-red transition-colors hover:bg-brand-red hover:text-white"
          >
            View The Menu
          </a>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {specials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-4 rounded bg-gray-800 p-6 text-center"
            >
              <img
                src={`https://picsum.photos/seed/brasserie-${item.name.replace(/\s+/g, '-').toLowerCase()}/300/200`}
                alt={item.name}
                className="h-40 w-full rounded object-cover"
              />
              <h3 className="font-heading text-lg font-semibold">{item.name}</h3>
              <span className="text-2xl font-bold text-brand-red">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
