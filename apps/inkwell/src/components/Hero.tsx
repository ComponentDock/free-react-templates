export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[750px] items-center bg-white pt-[76px] dark:bg-gray-950"
    >
      <div className="mx-auto flex w-full max-w-7xl justify-end px-6">
        <div className="max-w-3xl text-right">
          <p className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[3px] text-ink dark:text-gray-200">
            A Personal Blog
            <span className="block h-px w-[45px] bg-ink dark:bg-gray-200" aria-hidden="true" />
          </p>
          <h1 className="mt-4 font-sans text-[14vw] font-extrabold leading-[1.2] text-title lg:text-[150px] dark:text-gray-100">
            I
            <span className="[-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_#444444] dark:[-webkit-text-stroke:1px_#fff]">
              nkwe
            </span>
            ll.
          </h1>
          <h2 className="mt-2 text-[30px] font-extralight tracking-[1px] text-muted dark:text-gray-400">
            I am a Blogger &amp; Photographer Based in Philippines
          </h2>
        </div>
      </div>
    </section>
  )
}
