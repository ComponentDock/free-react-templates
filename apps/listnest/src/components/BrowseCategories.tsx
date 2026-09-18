import { Car, Scissors, Hotel, UtensilsCrossed } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface BrowseCategoriesProps {
  className?: string
}

interface Category {
  name: string
  icon: React.ReactNode
}

const categories: Category[] = [
  { name: 'Automotive', icon: <Car size={48} /> },
  { name: 'Beauty & Spa', icon: <Scissors size={48} /> },
  { name: 'Hotel', icon: <Hotel size={48} /> },
  { name: 'Restaurant', icon: <UtensilsCrossed size={48} /> },
  { name: 'Fitness', icon: <Car size={48} /> },
  { name: 'Health', icon: <Scissors size={48} /> },
  { name: 'Shopping', icon: <Hotel size={48} /> },
  { name: 'Travel', icon: <UtensilsCrossed size={48} /> },
]

export function BrowseCategories({ className }: BrowseCategoriesProps) {
  return (
    <section className={cn('py-[90px] max-md:py-[45px]', className)}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-heading text-[35px] max-lg:text-[30px] relative inline-block pb-[23px] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-primary">
            Browse Categories
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group block no-underline text-inherit border border-border hover:border-primary transition-colors"
            >
              <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
                <div className="text-primary group-hover:text-primary-hover transition-colors mb-4">
                  {cat.icon}
                </div>
                <h6 className="text-heading text-[21px] font-normal">{cat.name}</h6>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
