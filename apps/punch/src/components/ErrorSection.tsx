export function ErrorSection() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-4 dark:bg-gray-950">
      <div className="w-full max-w-[520px] py-24 text-center">
        <div className="relative mx-auto mb-5 h-[200px] max-[480px]:mb-2.5 max-[480px]:h-[148px]">
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans text-[236px] font-extralight uppercase leading-none text-ink max-[767px]:text-[148px] max-[480px]:text-[86px] dark:text-white">
            Oops!
          </h1>
          <h2 className="absolute inset-x-0 bottom-0 mx-auto inline-block bg-white px-[5px] py-2.5 font-sans text-[28px] font-normal uppercase text-ink max-[480px]:py-2 max-[480px]:text-base dark:bg-gray-950 dark:text-white">
            404 - The Page can't be found
          </h2>
        </div>
        <a
          href="/"
          className="inline-block bg-brand px-6 py-3.5 font-sans text-lg font-bold uppercase text-white transition-colors hover:bg-ink hover:text-brand max-[480px]:px-4 max-[480px]:py-2 max-[480px]:text-sm"
        >
          Go to homepage
        </a>
      </div>
    </section>
  )
}
