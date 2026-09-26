import { ArrowRight } from 'lucide-react'

interface GalleryItemProps {
  image: string
  title: string
  artist: string
  seed: string
}

function GalleryItem({ image, title, artist }: GalleryItemProps) {
  return (
    <div className="mb-8">
      <img src={image} alt={title} className="mb-3 h-64 w-full object-cover" loading="lazy" />
      <h4 className="font-display text-lg font-bold text-brand">{title}</h4>
      <p className="mb-3 text-sm text-gray-500">Artist: {artist}</p>
      <a
        href="#"
        className="inline-flex items-center gap-2 rounded-full border border-brand px-6 py-2 text-xs font-semibold uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white"
      >
        View Gallery
        <ArrowRight className="h-3 w-3" />
      </a>
    </div>
  )
}

const leftItems: GalleryItemProps[] = [
  {
    image: 'https://picsum.photos/seed/gaze-g1/600/400',
    title: 'Red Passion 2017',
    artist: 'John Doe',
    seed: 'g1',
  },
  {
    image: 'https://picsum.photos/seed/gaze-g2/600/400',
    title: 'Red Passion 2017',
    artist: 'John Doe',
    seed: 'g2',
  },
  {
    image: 'https://picsum.photos/seed/gaze-g3/600/400',
    title: 'Red Passion 2017',
    artist: 'John Doe',
    seed: 'g3',
  },
]

const rightItems: GalleryItemProps[] = [
  {
    image: 'https://picsum.photos/seed/gaze-g4/600/400',
    title: 'Red Passion 2017',
    artist: 'John Doe',
    seed: 'g4',
  },
  {
    image: 'https://picsum.photos/seed/gaze-g5/600/400',
    title: 'Red Passion 2017',
    artist: 'John Doe',
    seed: 'g5',
  },
  {
    image: 'https://picsum.photos/seed/gaze-g6/600/400',
    title: 'Red Passion 2017',
    artist: 'John Doe',
    seed: 'g6',
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left column: quote + items */}
          <div>
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold leading-relaxed text-brand md:text-3xl">
                &ldquo;The camera makes you forget you&rsquo;re there. It&rsquo;s not like you are
                hiding but you forget, you are just looking so much.&rdquo;
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl
                quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit pulvinar,
                pellentesque neque vel, laoreet orci. Suspendisse potenti.
              </p>
            </div>
            {leftItems.map((item) => (
              <GalleryItem key={item.seed} {...item} />
            ))}
          </div>

          {/* Right column: items + CTA */}
          <div>
            {rightItems.map((item) => (
              <GalleryItem key={item.seed} {...item} />
            ))}
            <div className="mt-4 text-left md:text-right">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white"
              >
                See All Galleries
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
