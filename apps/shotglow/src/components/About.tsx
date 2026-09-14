export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="mb-4 font-heading text-sm font-medium uppercase tracking-widest text-slate-900">
          About our studio
        </p>
        <h2 className="mb-6 font-heading text-3xl font-semibold leading-snug text-slate-900 sm:text-4xl">
          The Camera Is An Instrument That Teaches People How to See without a Camera
        </h2>
        <p className="mb-8 leading-relaxed text-gray-400">
          It&apos;s the end of summer, the sweltering heat makes humans sweat in the night and makes
          the plants and trees wilt even in the moonlit nights. The eastern wind breeze brings an
          eerie feeling that the monsoon clouds are soon coming. There is a strange silence in the
          ears, the sky gets darker and darker, the flash of lightning illuminates the dark skies,
          the sound of thunder fills the heart with fear.
        </p>
        <a
          href="#services"
          className="inline-block border-2 border-slate-900 px-8 py-3 font-heading text-sm font-medium uppercase tracking-widest text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
        >
          Read More
        </a>
      </div>
    </section>
  )
}
