export function Footer() {
  return (
    <footer className="py-8 bg-slate-900 text-slate-400 text-center text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} BtnDash. All rights reserved.</p>
        <p>
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            Component Dock
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
