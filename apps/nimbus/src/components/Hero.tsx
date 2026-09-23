export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/nimbus-hero/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-primary-400/90" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Organize all with Nimbus
        </h1>
        <p className="mx-auto max-w-2xl text-base text-white/90 sm:text-lg">
          A powerful SaaS platform that streamlines your workflow, automates repetitive tasks, and
          helps your team deliver results faster than ever before.
        </p>
      </div>
    </section>
  )
}
