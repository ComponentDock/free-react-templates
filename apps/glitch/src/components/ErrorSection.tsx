export function ErrorSection() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-abyss px-4">
      <div className="w-full max-w-[767px] py-24 text-center">
        <div className="relative mb-5 h-[180px]">
          <h1 className="text-shadow-neon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans text-[224px] font-black uppercase leading-none tracking-[-20px] text-abyss max-[480px]:text-[182px]">
            404
          </h1>
          <h2 className="text-shadow-label absolute inset-x-0 top-[110px] font-sans text-[42px] font-bold uppercase tracking-[13px] text-white max-[767px]:text-2xl">
            Page not found
          </h2>
        </div>
        <a
          href="/"
          className="inline-block border-2 border-solid bg-transparent px-10 py-2.5 font-sans text-sm font-bold uppercase text-glow transition-colors hover:text-flare"
        >
          Go to homepage
        </a>
      </div>
    </section>
  )
}
