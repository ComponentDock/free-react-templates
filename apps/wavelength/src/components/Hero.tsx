export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center text-center"
      style={{ backgroundImage: 'url(https://picsum.photos/id/453/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24">
        <h1 className="text-2xl font-bold uppercase tracking-[0.1em] text-white md:text-4xl">
          Listen — On-Air Now
        </h1>
        <p className="mt-4 text-white/80">
          Tune in around the clock for the freshest tracks, artist interviews, and exclusive live
          sessions from our studios downtown.
        </p>
        <div className="mt-[30px] flex justify-center">
          <audio
            controls
            preload="none"
            className="hero-audio-player h-[50px] w-full max-w-[400px] rounded-[25px]"
          >
            <source
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>
    </section>
  )
}
