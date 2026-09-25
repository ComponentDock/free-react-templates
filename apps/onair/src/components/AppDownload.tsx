import { Download } from 'lucide-react'

export function AppDownload() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/onair-appdl/1600/600)',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Phone mockup placeholder */}
          <div className="flex justify-center">
            <div className="flex h-80 w-48 items-center justify-center rounded-3xl border-2 border-white/20 bg-white/5">
              <Download className="h-16 w-16 text-white/30" />
            </div>
          </div>

          {/* Download text */}
          <div>
            <span className="text-sm uppercase tracking-widest text-white/60">
              Download app and enjoy radio &amp; music
            </span>
            <h2 className="mt-4 text-4xl font-bold uppercase text-white">Radio Music</h2>
            <p className="mt-6 max-w-md leading-relaxed text-white/70">
              Radio app plus is an app that lets you download videos and music from social networks,
              YouTube, and more. You may also download and play the latest HD series and movies, and
              watch free live television. Available for Android and iOS.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded bg-white px-6 py-3 font-semibold text-heading transition-colors hover:bg-white/90"
              >
                <Download className="h-5 w-5" /> Google Play
              </a>
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded bg-white px-6 py-3 font-semibold text-heading transition-colors hover:bg-white/90"
              >
                <Download className="h-5 w-5" /> App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
