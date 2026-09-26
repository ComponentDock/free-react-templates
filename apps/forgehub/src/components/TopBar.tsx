export function TopBar() {
  return (
    <div className="border-b bg-dark py-2 text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <div className="flex gap-4 text-white">
          <span>
            <strong>Phone:</strong>{' '}
            <a href="tel:+123456789101" className="text-white/80 hover:text-white">
              +1 234 5678 9101
            </a>
          </span>
          <span>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@yourdomain.com" className="text-white/80 hover:text-white">
              info@yourdomain.com
            </a>
          </span>
        </div>
        <div className="flex gap-2">
          {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((label) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="p-2 text-white/80 hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
