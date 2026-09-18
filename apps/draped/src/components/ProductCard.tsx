export interface ProductCardProps {
  image: string
  title: string
  collection: string
  price: string
  originalPrice?: string
  sale?: boolean
}

export function ProductCard({
  image,
  title,
  collection,
  price,
  originalPrice,
  sale,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden bg-white transition-colors dark:bg-charcoal-800">
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {sale && (
          <span className="absolute left-3 top-3 rounded bg-sale px-2 py-0.5 text-xs font-semibold text-gray-900">
            Sale
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          {collection}
        </p>
        <h3 className="mt-1 text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-bold text-gray-900 dark:text-white">{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">{originalPrice}</span>
          )}
        </div>
      </div>
    </article>
  )
}
