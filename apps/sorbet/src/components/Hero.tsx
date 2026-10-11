const AVATAR = 'https://picsum.photos/seed/sorbet-person/80/80'

/**
 * The opening band: a 600px sunset photograph (no overlay) with the bold
 * uppercase headline and its designer byline.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="flex h-[600px] items-center justify-center bg-cover bg-top px-4 text-center sm:px-6"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/sorbet-hero/1920/900)' }}
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold uppercase text-white md:text-[50px] md:leading-tight">
          Bootstrap 4 UI Kit
        </h1>
        <p className="mt-6 flex items-center justify-center gap-3 text-sm text-white">
          <img
            src={AVATAR}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span>
            Designed by:{' '}
            <a href="https://www.componentdock.com/" className="text-white underline">
              Component Dock
            </a>
          </span>
        </p>
      </div>
    </section>
  )
}
