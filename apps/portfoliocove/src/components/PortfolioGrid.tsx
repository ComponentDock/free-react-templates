/**
 * Portfolio grid displaying items in a 4-column responsive layout.
 * Each item shows an image on a light gray background.
 */

const portfolioItems = [
  { id: 1, seed: 'plinth-1', alt: 'Green hoodie portrait', w: 400, h: 400 },
  { id: 2, seed: 'plinth-2', alt: 'Aloe vera plant in mint pot', w: 400, h: 400 },
  { id: 3, seed: 'plinth-3', alt: 'Typography letter A', w: 400, h: 400 },
  { id: 4, seed: 'plinth-4', alt: 'Watercolor clock tower', w: 400, h: 400 },
  { id: 5, seed: 'plinth-5', alt: 'Cactus in brass bowl', w: 400, h: 400 },
  { id: 6, seed: 'plinth-6', alt: 'Minimal wall clock', w: 400, h: 400 },
  { id: 7, seed: 'plinth-7', alt: 'Vintage camera on chair', w: 400, h: 400 },
  { id: 8, seed: 'plinth-8', alt: 'Mannequin hands', w: 400, h: 400 },
  { id: 9, seed: 'plinth-9', alt: 'Minimalist paper art', w: 400, h: 400 },
  { id: 10, seed: 'plinth-10', alt: 'Translucent geometric blocks', w: 400, h: 400 },
  { id: 11, seed: 'plinth-11', alt: 'Architectural white structure', w: 400, h: 400 },
  { id: 12, seed: 'plinth-12', alt: 'Modern building facade', w: 400, h: 400 },
]

export function PortfolioGrid() {
  return (
    <div
      data-testid="portfolio-grid"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {portfolioItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className="group relative aspect-square cursor-pointer overflow-hidden bg-gray-100 transition-transform hover:scale-[1.02]"
        >
          <img
            src={`https://picsum.photos/seed/${item.seed}/${item.w}/${item.h}`}
            alt={item.alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </button>
      ))}
    </div>
  )
}
