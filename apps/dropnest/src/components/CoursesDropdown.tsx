import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'

export interface Category {
  title: string
  courses: string[]
}

const defaultCategories: Category[] = [
  {
    title: 'Design',
    courses: ['UI/UX Fundamentals', 'Figma Masterclass', 'Color Theory'],
  },
  {
    title: 'Development',
    courses: ['React Mastery', 'TypeScript Deep Dive', 'Node.js Backend'],
  },
  {
    title: 'Marketing',
    courses: ['SEO Foundations', 'Social Media Strategy', 'Content Marketing'],
  },
]

interface CoursesDropdownProps {
  categories?: Category[]
  onToggle?: (open: boolean) => void
}

export function CoursesDropdown({
  categories = defaultCategories,
  onToggle,
}: CoursesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    onToggle?.(false)
  }, [onToggle])

  const open = useCallback(() => {
    setIsOpen(true)
    onToggle?.(true)
  }, [onToggle])

  const toggle = useCallback(() => {
    if (isOpen) close()
    else open()
  }, [isOpen, close, open])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        close()
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, close])

  return (
    <div className="flex w-full max-w-[600px] justify-center">
      <div ref={dropdownRef} className="relative inline-block w-full">
        {/* Trigger */}
        <button
          type="button"
          onClick={toggle}
          className="flex w-full items-center justify-between rounded border border-dropnest-border bg-dropnest-card px-5 py-3 text-[15px] font-medium text-dropnest-heading shadow-sm transition-colors duration-300 hover:border-dropnest-brand"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <span>Courses</span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Dropdown panel — conditional render */}
        {isOpen && (
          <div className="absolute left-0 right-0 z-10 mt-0 grid grid-cols-3 gap-0 rounded border border-transparent bg-dropnest-card p-6 shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]">
            {categories.map((cat) => (
              <div key={cat.title} className="flex flex-col">
                <h4 className="mb-3 text-[14px] font-medium text-dropnest-brand">{cat.title}</h4>
                <ul className="m-0 list-none p-0">
                  {cat.courses.map((course) => (
                    <li key={course}>
                      <a
                        href="#"
                        className="block py-1 text-[13px] text-dropnest-text transition-colors duration-200 hover:text-dropnest-brand-hover"
                      >
                        {course}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
