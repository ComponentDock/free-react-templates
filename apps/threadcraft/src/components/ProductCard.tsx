import { Eye } from 'lucide-react'

interface ProductCardProps {
  image: string
  name: string
  originalPrice: number
  salePrice: number
  category: string
}

export function ProductCard({ image, name, originalPrice, salePrice, category }: ProductCardProps) {
  return (
    <div className="group relative bg-body-bg rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white p-3 rounded-full shadow hover:bg-brand hover:text-white">
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-3">
        <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">{category}</p>
        <h3 className="text-sm font-semibold text-text-dark truncate">{name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-bold text-brand">${salePrice.toFixed(2)}</span>
          <span className="text-xs text-text-secondary line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}
