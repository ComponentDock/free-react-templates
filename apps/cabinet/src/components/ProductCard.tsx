export interface ProductCardProps {
  name: string
  price: number
  imageSeed: string
  swatchColor?: string
  onSale?: boolean
  originalPrice?: number
}

export function ProductCard({
  name,
  price,
  imageSeed,
  swatchColor,
  onSale,
  originalPrice,
}: ProductCardProps) {
  return (
    <article className="group">
      <div className="relative mb-3 aspect-square overflow-hidden bg-gray-100">
        <img
          src={`https://picsum.photos/seed/${imageSeed}/900/900`}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {onSale && (
          <span className="absolute left-2 top-2 bg-brand px-2 py-1 text-xs font-semibold text-white">
            Sale
          </span>
        )}
        <button
          type="button"
          className="absolute inset-x-0 bottom-0 bg-white/90 py-2 text-center text-sm font-medium uppercase tracking-wide text-ink opacity-0 transition-opacity group-hover:opacity-100"
        >
          Quick add
        </button>
      </div>
      <h3 className="mb-1 text-sm font-medium text-ink">{name}</h3>
      <div className="flex items-center gap-2">
        {onSale && originalPrice && (
          <span className="text-sm text-gray-400 line-through">
            ${originalPrice.toLocaleString()}
          </span>
        )}
        <span className="text-sm font-semibold text-ink">${price.toLocaleString()}</span>
      </div>
      {swatchColor && (
        <span
          className="mt-2 inline-block h-4 w-4 rounded-full border border-gray-200"
          style={{ backgroundColor: swatchColor }}
          aria-label={`Color: ${swatchColor}`}
        />
      )}
    </article>
  )
}
