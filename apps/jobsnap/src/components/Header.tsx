import { cn } from '@free-react-templates/ui'

export function Header() {
  return (
    <header className="bg-white px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#" className={cn('text-brand text-xl font-semibold')}>
          Brand
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            <li>
              <a href="#home" className="text-brand hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-brand hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-brand hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
