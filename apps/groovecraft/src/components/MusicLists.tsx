import { Play } from 'lucide-react'

const topTracks = [
  { name: 'Sam Smith', track: 'Underground', img: 'https://picsum.photos/seed/groove-top1/80/80' },
  { name: 'Power Play', track: 'In My Mind', img: 'https://picsum.photos/seed/groove-top2/80/80' },
  {
    name: 'Cristinne Smith',
    track: 'My Music',
    img: 'https://picsum.photos/seed/groove-top3/80/80',
  },
  {
    name: 'The Music Band',
    track: 'Underground',
    img: 'https://picsum.photos/seed/groove-top4/80/80',
  },
  {
    name: 'Creative Lyrics',
    track: 'Songs and Stuff',
    img: 'https://picsum.photos/seed/groove-top5/80/80',
  },
]

const newHits = [
  { name: 'Sam Smith', track: 'Underground', img: 'https://picsum.photos/seed/groove-hit1/80/80' },
  { name: 'Power Play', track: 'In My Mind', img: 'https://picsum.photos/seed/groove-hit2/80/80' },
  {
    name: 'Cristinne Smith',
    track: 'My Music',
    img: 'https://picsum.photos/seed/groove-hit3/80/80',
  },
  {
    name: 'The Music Band',
    track: 'Underground',
    img: 'https://picsum.photos/seed/groove-hit4/80/80',
  },
  {
    name: 'Creative Lyrics',
    track: 'Songs and Stuff',
    img: 'https://picsum.photos/seed/groove-hit5/80/80',
  },
]

const popularArtists = [
  { name: 'Sam Smith', img: 'https://picsum.photos/seed/groove-pa1/80/80' },
  { name: 'William Parker', img: 'https://picsum.photos/seed/groove-pa2/80/80' },
  { name: 'Jessica Walsh', img: 'https://picsum.photos/seed/groove-pa3/80/80' },
  { name: 'Tha Stoves', img: 'https://picsum.photos/seed/groove-pa4/80/80' },
  { name: 'DJ Ajay', img: 'https://picsum.photos/seed/groove-pa5/80/80' },
]

export function MusicLists() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* This Week's Top */}
          <div>
            <div className="mb-8">
              <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-groove-text">
                See what&apos;s new
              </p>
              <h2 className="text-2xl font-bold text-groove-black">This week&apos;s top</h2>
            </div>
            <div className="space-y-4">
              {topTracks.map((item) => (
                <div key={item.name} className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={`${item.name} thumbnail`}
                    className="h-14 w-14 object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-groove-black">{item.name}</h3>
                    <p className="text-xs text-groove-text">{item.track}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Hits */}
          <div>
            <div className="mb-8">
              <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-groove-text">
                See what&apos;s new
              </p>
              <h2 className="text-2xl font-bold text-groove-black">New Hits</h2>
            </div>
            <div className="space-y-4">
              {newHits.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={`${item.name} thumbnail`}
                      className="h-14 w-14 object-cover"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-groove-black">{item.name}</h3>
                      <p className="text-xs text-groove-text">{item.track}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Play ${item.track}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-groove-light text-groove-black transition-colors hover:bg-groove-black hover:text-white"
                  >
                    <Play size={12} fill="currentColor" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Artists */}
          <div>
            <div className="mb-8">
              <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-groove-text">
                See what&apos;s new
              </p>
              <h2 className="text-2xl font-bold text-groove-black">Popular Artist</h2>
            </div>
            <div className="space-y-4">
              {popularArtists.map((item) => (
                <div key={item.name} className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={`${item.name} avatar`}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <p className="text-sm font-medium text-groove-black">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
