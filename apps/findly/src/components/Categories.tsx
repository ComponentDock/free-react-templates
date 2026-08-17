import { INTERESTS } from '../data'

/* Things Are You Interested In — mixed 3-column category grid on the pale
   blue-grey section background: two stacked cards on each side and one
   tall card in the middle with a description and a blue pill CTA that
   inverts on hover. */
export function Categories() {
  const middle = INTERESTS.find((interest) => interest.tall)
  const sides = INTERESTS.filter((interest) => !interest.tall)
  const left = sides.slice(0, 2)
  const right = sides.slice(2)

  return (
    <section className="bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-semibold text-navy">
            Things Are You Interested In
          </h2>
          <p className="mt-3 text-lg font-light text-muted">Things you are looking for today</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6">
            {left.map((interest) => (
              <CategoryCard key={interest.title + interest.image} interest={interest} />
            ))}
          </div>

          {middle && (
            <div className="group relative flex min-h-[480px] items-end overflow-hidden rounded-[10px]">
              <img
                src={middle.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#010a27] via-[rgba(6,31,120,0.3)] to-transparent"
              />
              <div className="relative p-6 text-left">
                <h4 className="font-display text-lg font-semibold text-white">{middle.title}</h4>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/90">
                  {middle.description}
                </p>
                <a
                  href="#listing"
                  className="mt-5 inline-block rounded-full bg-brand px-8 py-3 font-display text-sm font-medium text-white transition-colors hover:bg-white hover:text-brand"
                >
                  Explore
                </a>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-6">
            {right.map((interest) => (
              <CategoryCard key={interest.title + interest.image} interest={interest} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ interest }: { interest: (typeof INTERESTS)[number] }) {
  return (
    <div className="group relative h-64 overflow-hidden rounded-[10px]">
      <img
        src={interest.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#010a27] via-[rgba(6,31,120,0.3)] to-transparent"
      />
      <h4 className="absolute bottom-4 left-4 font-display text-base font-semibold text-white">
        {interest.title}
      </h4>
    </div>
  )
}
