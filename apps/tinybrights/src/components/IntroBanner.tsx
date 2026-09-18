export function IntroBanner() {
  return (
    <section
      className="parallax-bg relative flex min-h-[350px] items-center justify-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/tinybrights-parallax/1920/600)',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4 text-center text-white">
        <h2 className="font-display text-4xl text-white sm:text-5xl">
          Where Every Day is an Adventure
        </h2>
      </div>
    </section>
  )
}
