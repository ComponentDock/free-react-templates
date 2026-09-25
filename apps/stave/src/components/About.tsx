export function About() {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-4 sm:flex-row sm:px-6">
        <img
          src="https://picsum.photos/seed/stave-about/400/500"
          alt="Jack Kalib"
          className="w-full rounded shadow-lg sm:w-1/2"
        />
        <div className="w-full sm:w-1/2">
          <h2 className="font-heading text-3xl font-bold text-heading">Jack Kalib</h2>
          <p className="mt-6 font-body leading-relaxed text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="mt-4 font-body leading-relaxed text-body">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque.
          </p>
        </div>
      </div>
    </section>
  )
}
