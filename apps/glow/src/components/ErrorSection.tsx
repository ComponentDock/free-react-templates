export function ErrorSection() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-ink px-4 dark:bg-black">
      <div className="w-full max-w-[460px] py-24 text-center">
        <div className="h-[158px] leading-[153px] max-[480px]:h-[122px] max-[480px]:leading-[122px]">
          <h1
            className="font-sans text-[220px] font-bold tracking-[10px] text-ink max-[480px]:text-[122px]"
            style={{ textShadow: '2px 2px 0 #c9c9c9, -2px -2px 0 #c9c9c9' }}
          >
            4
            <span
              style={{
                textShadow: '2px 2px 0 #ffab00, -2px -2px 0 #ffab00, 0 0 8px #ff8700',
              }}
            >
              0
            </span>
            4
          </h1>
        </div>
        <p className="mb-[15px] mt-0 font-sans text-base text-mist">
          The page you are looking for might have been removed had its name changed or is
          temporarily unavailable.
        </p>
        <a
          href="/"
          className="inline-block border-2 border-mist px-[25px] py-[10px] font-sans text-sm font-bold uppercase text-mist transition-colors duration-200 hover:border-brand hover:text-brand"
        >
          home page
        </a>
      </div>
    </section>
  )
}
