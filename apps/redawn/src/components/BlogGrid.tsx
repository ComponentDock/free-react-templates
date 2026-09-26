import { BlogCard } from './BlogCard'

const GRID_ITEMS = [
  {
    title: 'Photoshop PSD Notebook MockUp',
    category: 'Mockup',
    imageUrl: 'https://picsum.photos/seed/redawn-1/600/400',
    hoverImageUrl: 'https://picsum.photos/seed/redawn-1b/600/400',
    previewCount: 841,
    downloadCount: 301,
    likeCount: 145,
    span: 'full' as const,
  },
  {
    title: 'Business Card Mockup Sample',
    category: 'Branding',
    imageUrl: 'https://picsum.photos/seed/redawn-2/600/400',
    hoverImageUrl: 'https://picsum.photos/seed/redawn-2b/600/400',
    previewCount: 612,
    downloadCount: 105,
    likeCount: 94,
    span: 'half' as const,
  },
  {
    title: 'Premium Icon Set Collection',
    category: 'Icons',
    imageUrl: 'https://picsum.photos/seed/redawn-3/600/400',
    hoverImageUrl: 'https://picsum.photos/seed/redawn-3b/600/400',
    previewCount: 610,
    downloadCount: 250,
    likeCount: 120,
    span: 'half' as const,
  },
  {
    title: 'Modern Brand Identity Kit',
    category: 'Branding',
    imageUrl: 'https://picsum.photos/seed/redawn-4/600/400',
    hoverImageUrl: 'https://picsum.photos/seed/redawn-4b/600/400',
    previewCount: 530,
    downloadCount: 180,
    likeCount: 88,
    span: 'full' as const,
  },
  {
    title: 'Playful Font Duo Pack',
    category: 'Fonts',
    imageUrl: 'https://picsum.photos/seed/redawn-5/600/400',
    hoverImageUrl: 'https://picsum.photos/seed/redawn-5b/600/400',
    previewCount: 420,
    downloadCount: 95,
    likeCount: 67,
    span: 'half' as const,
  },
  {
    title: 'Video Editing LUT Presets',
    category: 'Video',
    imageUrl: 'https://picsum.photos/seed/redawn-6/600/400',
    hoverImageUrl: 'https://picsum.photos/seed/redawn-6b/600/400',
    previewCount: 310,
    downloadCount: 72,
    likeCount: 45,
    span: 'half' as const,
  },
]

export function BlogGrid() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-10">
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-4 md:justify-between">
        {GRID_ITEMS.map((item) => (
          <BlogCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}
