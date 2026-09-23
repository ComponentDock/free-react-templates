export function Footer() {
  return (
    <footer className="bg-[#221C5A] py-10 text-center text-white">
      <div className="mx-auto max-w-[1170px] px-6">
        <a href="#home" className="font-display text-2xl font-bold tracking-wide text-white">
          Vertex
        </a>
        <p className="mt-4 text-sm text-white/60">
          &copy; {new Date().getFullYear()} Vertex. All rights reserved.
        </p>
        <p className="mt-2 text-sm">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#32DB8A] underline transition-colors hover:text-[#28b872]"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
