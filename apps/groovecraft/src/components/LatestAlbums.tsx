const albums = [
  { title: 'The Cure', genre: 'Indie Rock', img: 'https://picsum.photos/seed/groove-alb1/300/300' },
  { title: 'Sam Smith', genre: 'Pop', img: 'https://picsum.photos/seed/groove-alb2/300/300' },
  {
    title: 'Will I Am',
    genre: 'Electronic',
    img: 'https://picsum.photos/seed/groove-alb3/300/300',
  },
  { title: 'DJ Smith', genre: 'House', img: 'https://picsum.photos/seed/groove-alb4/300/300' },
  {
    title: 'The Unstoppable',
    genre: 'Hip Hop',
    img: 'https://picsum.photos/seed/groove-alb5/300/300',
  },
  { title: 'Beyonce', genre: 'R&B', img: 'https://picsum.photos/seed/groove-alb6/300/300' },
]

export function LatestAlbums() {
  return (
    <section id="albums" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-groove-text">
            See what&apos;s new
          </p>
          <h2 className="text-3xl font-bold text-groove-black">Latest Albums</h2>
        </div>

        <p className="mx-auto mb-12 max-w-2xl text-center text-groove-text">
          Discover the latest releases from your favorite artists. Explore new sounds, fresh beats,
          and the hottest tracks dropping this week.
        </p>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {albums.map((album) => (
            <div key={album.title} className="min-w-[200px] flex-shrink-0 text-center">
              <img
                src={album.img}
                alt={`${album.title} album cover`}
                className="mb-3 aspect-square w-full object-cover"
              />
              <h3 className="text-sm font-bold text-groove-black">{album.title}</h3>
              <p className="text-xs text-groove-text">{album.genre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
