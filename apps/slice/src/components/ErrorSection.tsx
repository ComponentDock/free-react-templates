export function ErrorSection() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-4 dark:bg-gray-950">
      <div className="w-full max-w-[520px] py-24 text-center">
        <div className="h-[240px] max-[767px]:h-[200px] max-[480px]:h-[162px]">
          <h3 className="text-base font-bold uppercase tracking-[3px] text-[#262626] dark:text-gray-200">
            Oops! Page not found
          </h3>
          <h1 className="font-display text-[252px] font-black uppercase leading-none tracking-[-40px] text-[#262626] [text-shadow:-8px_0_0_#fff] max-[767px]:text-[200px] max-[480px]:text-[162px] dark:text-gray-100 dark:[text-shadow:-8px_0_0_#030712]">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2 className="mx-auto mt-4 max-w-md text-xl font-normal uppercase text-black max-[480px]:text-base dark:text-gray-200">
          we are sorry, but the page you requested was not found
        </h2>
      </div>
    </section>
  )
}
