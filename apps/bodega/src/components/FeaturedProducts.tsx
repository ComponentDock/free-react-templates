const categories = [
  {
    title: 'Fashion\nfor men',
    image: 'https://picsum.photos/seed/bodega-feat1/800/500',
  },
  {
    title: 'New\nArrival\nDress',
    image: 'https://picsum.photos/seed/bodega-feat2/500/300',
  },
  {
    title: 'Sale\n20%\noff',
    image: 'https://picsum.photos/seed/bodega-feat3/500/300',
  },
  {
    title: 'Shoes\nfor men',
    image: 'https://picsum.photos/seed/bodega-feat4/1000/300',
  },
]

export function FeaturedProducts() {
  const [left, right1, right2, bottom] = categories

  return (
    <section className="py-16" aria-label="Featured products">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left large card */}
          <a
            href="#shop"
            className="relative block h-[400px] bg-cover bg-center group overflow-hidden"
            style={{ backgroundImage: `url(${left!.image})` }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <div className="relative z-10 p-8">
              <h2 className="text-white text-3xl font-bold whitespace-pre-line leading-tight">
                {left!.title}
              </h2>
            </div>
          </a>

          {/* Right column: 2 small + 1 full */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#shop"
                className="relative block h-[190px] bg-cover bg-center group overflow-hidden"
                style={{ backgroundImage: `url(${right1!.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="relative z-10 p-4">
                  <h2 className="text-white text-xl font-bold whitespace-pre-line leading-tight">
                    {right1!.title}
                  </h2>
                </div>
              </a>
              <a
                href="#shop"
                className="relative block h-[190px] bg-cover bg-center group overflow-hidden"
                style={{ backgroundImage: `url(${right2!.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="relative z-10 p-4">
                  <h2 className="text-white text-xl font-bold whitespace-pre-line leading-tight">
                    {right2!.title}
                  </h2>
                </div>
              </a>
            </div>
            <a
              href="#shop"
              className="relative block h-[190px] bg-cover bg-center group overflow-hidden"
              style={{ backgroundImage: `url(${bottom!.image})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="relative z-10 p-4">
                <h2 className="text-white text-xl font-bold whitespace-pre-line leading-tight">
                  {bottom!.title}
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
