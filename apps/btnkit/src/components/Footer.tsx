import { Layers } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <Layers className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold text-gray-900 dark:text-white">BtnKit</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="#showcase" className="hover:text-primary">
              Showcase
            </a>
            <a href="#variants" className="hover:text-primary">
              Variants
            </a>
            <a href="#sizes" className="hover:text-primary">
              Sizes
            </a>
            <a href="#playground" className="hover:text-primary">
              Playground
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 text-center dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} BtnKit. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
