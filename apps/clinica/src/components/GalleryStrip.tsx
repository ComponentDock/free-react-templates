import { cn } from '@free-react-templates/ui'

const cells = [
  {
    src: 'https://picsum.photos/seed/clinica-strip1/700/500',
    alt: 'Gallery strip photo one',
    span: 'lg:col-span-3',
  },
  {
    src: 'https://picsum.photos/seed/clinica-strip2/700/500',
    alt: 'Gallery strip photo two',
    span: 'lg:col-span-3',
  },
  {
    src: 'https://picsum.photos/seed/clinica-strip3/1200/500',
    alt: 'Gallery strip photo three',
    span: 'lg:col-span-6',
  },
  {
    src: 'https://picsum.photos/seed/clinica-strip4/1200/500',
    alt: 'Gallery strip photo four',
    span: 'lg:col-span-6',
  },
  {
    src: 'https://picsum.photos/seed/clinica-strip5/700/500',
    alt: 'Gallery strip photo five',
    span: 'lg:col-span-3',
  },
  {
    src: 'https://picsum.photos/seed/clinica-strip6/700/500',
    alt: 'Gallery strip photo six',
    span: 'lg:col-span-3',
  },
]

/** Full-bleed six-image gallery mosaic (3/3/6/6/3/3 column split) with no
 *  gutters and the same dark overlay + zoom hover effect. */
export function GalleryStrip() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-12">
        {cells.map((cell) => (
          <div key={cell.alt} className={cn('group relative overflow-hidden', cell.span)}>
            <img
              src={cell.src}
              alt={cell.alt}
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.06] md:h-64"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[rgba(1,10,28,0.3)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
