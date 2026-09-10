export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <a
            href="#home"
            className="font-heading text-xl font-bold uppercase tracking-widest text-brand-red"
          >
            Brasserie
          </a>
          <p className="max-w-sm text-sm text-gray-400">
            A premium dining experience, recreated in React. Elegant design, modern stack.
          </p>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Brasserie. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
