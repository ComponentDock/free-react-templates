interface FooterProps {
  name?: string
}

export function Footer({ name = 'Dropwell' }: FooterProps) {
  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <span className="text-sm font-semibold text-gray-800">{name}</span>
          <p className="mt-1 text-xs text-gray-500">Nested Dropdown Menu Showcase</p>
        </div>
        <p className="text-xs text-gray-400">
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#20c997] hover:text-[#1aa179]"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
