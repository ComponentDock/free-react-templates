const categories = [
  { name: 'New Arrivals', active: false },
  { name: 'Ladies', active: false },
  { name: 'Mens', active: false },
  { name: 'Accessories', active: true },
  { name: 'Sale', active: false },
]

export function CategoryNav() {
  return (
    <nav
      className="relative z-10 -mt-4 flex justify-center gap-6 px-4 pb-8 sm:gap-8"
      aria-label="Category navigation"
    >
      {categories.map((cat) => (
        <a
          key={cat.name}
          href={`#${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
          className={`text-sm text-white transition-colors hover:text-gray-200 sm:text-base ${
            cat.active ? 'font-bold underline underline-offset-4' : ''
          }`}
        >
          {cat.name}
        </a>
      ))}
    </nav>
  )
}
