export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white text-center text-[0.85rem] text-body">
      <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6">
        <p>
          Copyright © {year} All rights reserved | This template is made with{' '}
          <span aria-hidden="true" className="text-red-500">
            ♥
          </span>{' '}
          by{' '}
          <a
            href="https://colorlib.com/wp/template/meranda/"
            className="font-medium text-ink transition-colors hover:text-accent"
          >
            Colorlib
          </a>
        </p>
      </div>
    </footer>
  )
}
