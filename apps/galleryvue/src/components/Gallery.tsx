import { cn } from '@free-react-templates/ui'

interface GalleryItem {
  id: number
  title: string
  tag: string
  src: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, title: 'Work 01', tag: 'Model', src: 'https://picsum.photos/seed/galleryvue-1/600/400' },
  {
    id: 2,
    title: 'Work 02',
    tag: 'Nature',
    src: 'https://picsum.photos/seed/galleryvue-2/600/400',
  },
  {
    id: 3,
    title: 'Work 03',
    tag: 'Fashion',
    src: 'https://picsum.photos/seed/galleryvue-3/600/400',
  },
  {
    id: 4,
    title: 'Work 04',
    tag: 'Travel',
    src: 'https://picsum.photos/seed/galleryvue-4/600/400',
  },
  {
    id: 5,
    title: 'Work 05',
    tag: 'Travel',
    src: 'https://picsum.photos/seed/galleryvue-5/600/400',
  },
  {
    id: 6,
    title: 'Work 06',
    tag: 'Travel',
    src: 'https://picsum.photos/seed/galleryvue-6/600/400',
  },
  {
    id: 7,
    title: 'Work 07',
    tag: 'Fashion, Model',
    src: 'https://picsum.photos/seed/galleryvue-7/600/400',
  },
  {
    id: 8,
    title: 'Work 08',
    tag: 'Nature',
    src: 'https://picsum.photos/seed/galleryvue-8/600/400',
  },
  {
    id: 9,
    title: 'Work 09',
    tag: 'Technology',
    src: 'https://picsum.photos/seed/galleryvue-9/600/400',
  },
  {
    id: 10,
    title: 'Work 10',
    tag: 'Model',
    src: 'https://picsum.photos/seed/galleryvue-10/600/400',
  },
  {
    id: 11,
    title: 'Work 11',
    tag: 'Fashion',
    src: 'https://picsum.photos/seed/galleryvue-11/600/400',
  },
  {
    id: 12,
    title: 'Work 12',
    tag: 'Photography',
    src: 'https://picsum.photos/seed/galleryvue-12/600/400',
  },
]

interface GalleryProps {
  className?: string
}

export function Gallery({ className }: GalleryProps) {
  return (
    <section id="gallery" className={cn('py-8', className)} data-testid="gallery">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {GALLERY_ITEMS.map((item) => (
          <a
            key={item.id}
            href="#"
            className="group relative block h-[280px] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${item.src})` }}
            data-testid={`gallery-item-${item.id}`}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-70" />

            {/* Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
              <span className="text-white/80 text-xs uppercase tracking-[2px]">{item.tag}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
