import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const GALLERY_ITEMS = [
  { image: 'https://picsum.photos/seed/lookcraft-gal1/600/400', title: 'Urban Shadows' },
  { image: 'https://picsum.photos/seed/lookcraft-gal2/600/400', title: 'Light & Form' },
  { image: 'https://picsum.photos/seed/lookcraft-gal3/600/400', title: 'Still Life' },
  { image: 'https://picsum.photos/seed/lookcraft-gal4/600/400', title: 'Color Theory' },
  { image: 'https://picsum.photos/seed/lookcraft-gal5/600/400', title: 'Portraits' },
  { image: 'https://picsum.photos/seed/lookcraft-gal6/600/400', title: 'Landscapes' },
]

export function Gallery() {
  return (
    <section id="gallery" aria-label="Gallery" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left column: quote + 3 items */}
          <div>
            <p className="mb-8 text-lg font-light italic leading-relaxed text-text-secondary">
              &ldquo;Photography is the story I fail to put into words.&rdquo;
            </p>
            <div className="space-y-8">
              {GALLERY_ITEMS.slice(0, 3).map((item) => (
                <article key={item.title} className="group">
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-navy">
                      {item.title}
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-navy/30 bg-transparent px-5 py-1 text-xs font-bold uppercase tracking-wider text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
                    >
                      View Gallery <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right column: 3 items */}
          <div className="space-y-8 lg:mt-16">
            {GALLERY_ITEMS.slice(3).map((item) => (
              <article key={item.title} className="group">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-navy">
                    {item.title}
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-navy/30 bg-transparent px-5 py-1 text-xs font-bold uppercase tracking-wider text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
                  >
                    View Gallery <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* See All Galleries CTA */}
        <div className="mt-12 text-center">
          <a
            href="#all-galleries"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-8 py-3 text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-navy hover:text-white"
          >
            See All Galleries <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
