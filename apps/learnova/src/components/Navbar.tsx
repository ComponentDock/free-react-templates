import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const onlineCourses = ['Web Development', 'Data Science', 'Graphic Design', 'Mobile Development']
const categories = ['Design', 'Development', 'Marketing', 'Business']

export function Navbar() {
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="absolute top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-2xl font-black uppercase tracking-wider text-white">
          LEARNOVA
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          <li>
            <a
              href="#home"
              className="text-sm font-semibold text-white hover:text-primary-blue transition-colors"
            >
              Home
            </a>
          </li>
          <li className="relative">
            <button
              type="button"
              onClick={() => {
                setCoursesOpen(!coursesOpen)
                setCategoriesOpen(false)
              }}
              className="flex items-center gap-1 text-sm font-semibold text-white hover:text-primary-blue transition-colors"
              aria-expanded={coursesOpen}
            >
              Online Courses
              <ChevronDown className="h-4 w-4" />
            </button>
            {coursesOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg">
                {onlineCourses.map((course) => (
                  <li key={course}>
                    <a
                      href="#courses"
                      className="block px-4 py-2 text-sm text-body-gray hover:bg-bg-light hover:text-primary-blue"
                    >
                      {course}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="relative">
            <button
              type="button"
              onClick={() => {
                setCategoriesOpen(!categoriesOpen)
                setCoursesOpen(false)
              }}
              className="flex items-center gap-1 text-sm font-semibold text-white hover:text-primary-blue transition-colors"
              aria-expanded={categoriesOpen}
            >
              Categories
              <ChevronDown className="h-4 w-4" />
            </button>
            {categoriesOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a
                      href="#categories"
                      className="block px-4 py-2 text-sm text-body-gray hover:bg-bg-light hover:text-primary-blue"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <a
              href="#blog"
              className="text-sm font-semibold text-white hover:text-primary-blue transition-colors"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-sm font-semibold text-white hover:text-primary-blue transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm font-semibold text-white hover:text-primary-blue transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#login"
            className="text-sm font-semibold text-white hover:text-primary-blue transition-colors"
          >
            Login
          </a>
          <a
            href="#register"
            className="rounded bg-primary-blue px-5 py-2 text-sm font-bold text-white hover:bg-blue-600 transition-colors"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  )
}
