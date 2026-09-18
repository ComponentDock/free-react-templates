import { PortfolioItem } from './PortfolioItem'

const ITEMS = [
  {
    title: 'Photoshop PSD Notebook MockUp',
    category: 'Mockup',
    views: 841,
    downloads: 301,
    likes: 145,
    size: 'full' as const,
    seed: 'rev1-1',
  },
  {
    title: 'Peue Business Card Mockup Sample',
    category: 'Branding',
    views: 612,
    downloads: 105,
    likes: 94,
    size: 'half' as const,
    seed: 'rev1-2',
  },
  {
    title: 'Colorful Icon Set Collection',
    category: 'Icons',
    views: 610,
    downloads: 250,
    likes: 112,
    size: 'half' as const,
    seed: 'rev1-3',
  },
  {
    title: 'Minimal Vector Pack',
    category: 'Vectors',
    views: 320,
    downloads: 88,
    likes: 67,
    size: 'quarter' as const,
    seed: 'rev1-4',
  },
  {
    title: 'Clean UI Kit Template',
    category: 'Mockup',
    views: 455,
    downloads: 176,
    likes: 89,
    size: 'quarter' as const,
    seed: 'rev1-5',
  },
  {
    title: 'Creative Poster Design',
    category: 'Branding',
    views: 290,
    downloads: 120,
    likes: 55,
    size: 'half' as const,
    seed: 'rev1-6',
  },
  {
    title: 'Mobile App Mockup Pack',
    category: 'Mockup',
    views: 510,
    downloads: 190,
    likes: 102,
    size: 'half' as const,
    seed: 'rev1-7',
  },
]

export function PortfolioGrid() {
  return (
    <div className="relative overflow-hidden bg-bg-light pb-[50px] pt-[50px]">
      <div className="relative z-0 mx-auto max-w-[1200px] overflow-hidden">
        <div className="flex flex-wrap justify-center">
          {ITEMS.map((item, i) => (
            <PortfolioItem
              key={i}
              title={item.title}
              category={item.category}
              imageSrc={`https://picsum.photos/seed/${item.seed}/800/500`}
              hoverImageSrc={`https://picsum.photos/seed/${item.seed}-h/800/500`}
              views={item.views}
              downloads={item.downloads}
              likes={item.likes}
              size={item.size}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
