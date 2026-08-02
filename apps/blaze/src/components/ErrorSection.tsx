export function ErrorSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 sm:px-6">
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:gap-12">
        <div
          role="img"
          aria-label="Exclamation mark icon"
          className="flex h-[170px] w-[170px] shrink-0 items-center justify-center rounded-[7px] bg-brand shadow-[inset_0_0_0_10px_#e01818,inset_0_0_0_20px_#fff]"
        >
          <span className="font-display text-[118px] leading-[60px] text-white">!</span>
        </div>
        <h1 className="font-display text-6xl uppercase tracking-tight text-gray-900 sm:text-7xl dark:text-white">
          Error
          <br />
          404
        </h1>
      </div>
      <p className="mt-12 max-w-xl text-center text-base text-gray-700 dark:text-gray-300">
        The page you are looking for might have been removed had its name changed or is temporarily
        unavailable.{' '}
        <a href="/" className="font-medium text-brand transition-colors hover:text-brand/80">
          Back to homepage
        </a>
      </p>
    </section>
  )
}
