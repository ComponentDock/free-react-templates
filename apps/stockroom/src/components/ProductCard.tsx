interface ProductCardProps {
  name: string
  price: string
  image: string
}

export function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <a href="#shop" className="group relative block aspect-square overflow-hidden">
      {/* Background image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-dark/0 transition-colors duration-300 group-hover:bg-dark/40" />
      {/* Hover content */}
      <div className="absolute top-10 left-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="mb-3 h-[3px] w-20 bg-brand" />
        <p className="text-sm text-white">{price}</p>
        <h4 className="text-lg font-semibold text-white">{name}</h4>
      </div>
    </a>
  )
}
