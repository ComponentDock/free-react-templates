import { cn } from '@free-react-templates/ui'

export function TopBar() {
  return (
    <div className="border-b border-gray-200 bg-white py-1.5 text-xs text-text-muted">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <span className="font-body">New York, NY</span>
        <span className="font-body">HI: 75° &nbsp; LO: 58°</span>
        <nav className="flex gap-4 font-ui">
          {['About', 'Contact', 'Sign up', 'Log in'].map((link) => (
            <a
              key={link}
              href="#"
              className={cn(
                'transition-colors hover:text-brand-pink',
                link === 'Sign up' && 'font-bold text-brand-pink',
              )}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
