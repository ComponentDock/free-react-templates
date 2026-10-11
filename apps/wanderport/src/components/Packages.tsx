const PACKAGES = [1, 2, 3, 4, 5, 6] as const

const TITLE = 'Resort Holiday package'

/* Centered header over a six-across photo grid: each card carries the brand
   gradient wash and a white title that fade in from the bottom on hover. */
export function Packages() {
  return (
    <section id="package" className="pt-[120px] pb-[100px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="pb-[80px] text-center">
          <h1 className="mb-[25px] text-[36px]">Popular Packages</h1>
          <p className="mx-auto max-w-[570px]">
            Six of the routes our travellers come back for — each one quoted with flights, stays and
            transfers already included.
          </p>
        </div>

        <ul className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
          {PACKAGES.map((index) => (
            <li key={index} className="group relative mx-auto max-w-[400px] overflow-hidden">
              <img
                src={`https://picsum.photos/seed/wanderport-pkg-${index}/400/520`}
                alt=""
                loading="lazy"
                className="block h-full w-full"
              />
              <div
                className="brand-gradient absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-50"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-[20%] px-[1em] text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-[18px] font-medium text-white">{TITLE}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
