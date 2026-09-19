const categories = [
  'Home',
  'Hot Deals',
  'Categories',
  'Laptops',
  'Smartphones',
  'Cameras',
  'Accessories',
]

export function CategoryNav() {
  return (
    <nav className="border-b border-gray-200 bg-white" aria-label="Product categories">
      <div className="container mx-auto flex items-center gap-6 overflow-x-auto px-4 py-3">
        {categories.map((cat) => (
          <a
            key={cat}
            href="#"
            className="whitespace-nowrap text-sm font-medium text-ink hover:text-brand transition-colors"
          >
            {cat}
          </a>
        ))}
      </div>
    </nav>
  )
}
