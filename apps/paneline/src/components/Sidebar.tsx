import { useState } from 'react'
import { ChevronRight, ChevronDown, Send } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Category {
  title: string
  items: string[]
}

const CATEGORIES: Category[] = [
  {
    title: 'Mens Shoes',
    items: ['Casual', 'Football', 'Jordan', 'Lifestyle', 'Running', 'Soccer', 'Sports'],
  },
  {
    title: 'Womens Shoes',
    items: ['Casual', 'Football', 'Jordan', 'Lifestyle', 'Running', 'Soccer', 'Sports'],
  },
  {
    title: 'Accessories',
    items: ['Necklace', 'Ring', 'Bag', 'Sacks', 'Lipstick'],
  },
  {
    title: 'Clothes',
    items: ['Jeans', 'T-shirt', 'Jacket', 'Shoes', 'Sweater'],
  },
]

const TAGS = ['dish', 'menu', 'food', 'sweet', 'tasty', 'delicious', 'desserts', 'drinks']

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set())

  const toggleCategory = (index: number) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={onToggle}
          data-testid="sidebar-overlay"
        />
      )}

      <aside
        className={cn(
          'fixed right-0 top-0 z-40 flex h-full w-[270px] flex-col bg-sidebar-bg border-l border-sidebar-border transition-transform duration-300',
          'md:relative md:translate-x-0',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        data-testid="sidebar"
      >
        {/* Categories */}
        <div className="flex-1 overflow-y-auto px-4 pt-12 pb-8 md:px-4 md:pt-12">
          <h5 className="mb-4 text-base font-normal text-sidebar-text">Categories</h5>
          <ul className="list-none p-0 m-0 space-y-0">
            {CATEGORIES.map((category, catIndex) => (
              <li key={category.title}>
                <button
                  onClick={() => toggleCategory(catIndex)}
                  className="flex w-full items-center justify-between py-2.5 text-sm text-sidebar-text hover:text-accent transition-colors"
                  aria-expanded={expandedCategories.has(catIndex)}
                  data-testid={`category-toggle-${catIndex}`}
                >
                  <span>{category.title}</span>
                  {expandedCategories.has(catIndex) ? (
                    <ChevronDown className="h-4 w-4 text-sidebar-text/70" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-sidebar-text/70" />
                  )}
                </button>
                {expandedCategories.has(catIndex) && (
                  <ul
                    className="list-none pl-3 pb-2 space-y-0"
                    data-testid={`category-items-${catIndex}`}
                  >
                    {category.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="flex items-center gap-2 py-2 text-xs text-body-text hover:text-accent transition-colors border-b border-sidebar-border"
                          onClick={(e) => e.preventDefault()}
                        >
                          <ChevronRight className="h-3 w-3 text-sidebar-text/70 shrink-0" />
                          <span>{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Tag Cloud */}
          <div className="mt-8 mb-8">
            <h5 className="mb-4 text-base font-normal text-sidebar-text">Tag Cloud</h5>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="inline-block rounded border border-tag-border px-2.5 py-1 text-[11px] uppercase text-sidebar-text hover:border-accent hover:bg-accent hover:text-white transition-colors"
                  onClick={(e) => e.preventDefault()}
                  data-testid={`tag-${tag}`}
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="mb-8">
            <h5 className="mb-4 text-base font-normal text-sidebar-text">Newsletter</h5>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex"
              data-testid="newsletter-form"
            >
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-body-text/70">
                  <Send className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="h-11 w-full rounded border border-sidebar-border bg-white pl-10 pr-3 text-xs text-sidebar-text placeholder:text-body-text/70 focus:border-sidebar-text focus:outline-none"
                  data-testid="newsletter-input"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-lg md:hidden"
          onClick={onToggle}
          aria-label="Toggle sidebar"
          data-testid="sidebar-toggle"
        >
          <span className="sr-only">Toggle sidebar</span>☰
        </button>
      </aside>
    </>
  )
}
