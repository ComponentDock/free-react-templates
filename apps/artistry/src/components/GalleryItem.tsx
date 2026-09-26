interface GalleryItemProps {
  image: string
  category: string
  title: string
}

export function GalleryItem({ image, category, title }: GalleryItemProps) {
  return (
    <div className="group relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-72"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="mb-2 text-sm font-medium uppercase tracking-wider text-brand">
          {category}
        </span>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
    </div>
  )
}
