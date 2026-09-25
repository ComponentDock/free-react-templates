import { Play } from 'lucide-react'

const storeAlbums = [
  {
    title: 'Garage Band',
    genre: 'Radio Station',
    price: '$0.90',
    img: 'https://picsum.photos/seed/groove-buy1/300/300',
    hasPlay: true,
  },
  {
    title: 'Noises',
    genre: 'Bubble Gum',
    price: null,
    img: 'https://picsum.photos/seed/groove-buy2/300/300',
    hasPlay: false,
  },
  {
    title: 'Jess Parker',
    genre: 'The Album',
    price: null,
    img: 'https://picsum.photos/seed/groove-buy3/300/300',
    hasPlay: false,
  },
  {
    title: 'Noises II',
    genre: 'Bubble Gum',
    price: null,
    img: 'https://picsum.photos/seed/groove-buy4/300/300',
    hasPlay: false,
  },
  {
    title: 'Garage Band II',
    genre: 'Radio Station',
    price: '$0.90',
    img: 'https://picsum.photos/seed/groove-buy5/300/300',
    hasPlay: true,
  },
  {
    title: 'Noises III',
    genre: 'Bubble Gum',
    price: null,
    img: 'https://picsum.photos/seed/groove-buy6/300/300',
    hasPlay: false,
  },
]

export function BuyNow() {
  return (
    <section className="bg-groove-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-groove-text">
            See what&apos;s new
          </p>
          <h2 className="text-3xl font-bold text-groove-black">Buy What&apos;s New</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {storeAlbums.map((album) => (
            <div key={album.title} className="text-center">
              <div className="group relative mb-3">
                <img
                  src={album.img}
                  alt={`${album.title} album`}
                  className="aspect-square w-full object-cover"
                />
                {album.price && (
                  <span className="absolute right-2 top-2 bg-white px-2 py-1 text-xs font-bold text-groove-black">
                    {album.price}
                  </span>
                )}
                {album.hasPlay && (
                  <button
                    type="button"
                    aria-label={`Play ${album.title}`}
                    className="absolute bottom-2 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white/90 text-groove-black opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <Play size={16} fill="currentColor" />
                  </button>
                )}
              </div>
              <h3 className="text-sm font-bold text-groove-black">{album.title}</h3>
              <p className="text-xs text-groove-text">{album.genre}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            className="bg-groove-black px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-groove-dark"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  )
}
