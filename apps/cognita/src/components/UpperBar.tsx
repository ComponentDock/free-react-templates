export function UpperBar() {
  return (
    <div className="hidden bg-dark-bar text-white sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
        <div className="flex gap-3">
          <a
            href="#twitter"
            aria-label="Twitter"
            className="text-sm text-gray-400 hover:text-white"
          >
            𝕏
          </a>
          <a
            href="#facebook"
            aria-label="Facebook"
            className="text-sm text-gray-400 hover:text-white"
          >
            f
          </a>
          <a
            href="#linkedin"
            aria-label="LinkedIn"
            className="text-sm text-gray-400 hover:text-white"
          >
            in
          </a>
          <a
            href="#dribbble"
            aria-label="Dribbble"
            className="text-sm text-gray-400 hover:text-white"
          >
            dr
          </a>
        </div>
        <a href="#apply" className="text-xs uppercase tracking-wide text-gray-400 hover:text-white">
          Apply Now
        </a>
      </div>
    </div>
  )
}
