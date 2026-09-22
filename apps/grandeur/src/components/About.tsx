import { Play } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title block */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-brand">
            About Us · Our History · Mission &amp; Vision
          </p>
          <h2 className="mb-6 font-heading text-3xl font-bold text-ink md:text-4xl">
            About Us Our History
            <br />
            Mission &amp; Vision
          </h2>
          <p className="mb-8 text-base leading-relaxed text-body">
            We believe that exceptional hospitality is built on trust, attention to detail, and a
            genuine commitment to every guest. For over two decades, our team has curated
            unforgettable stays that blend timeless elegance with modern comfort.
          </p>
          <a
            href="#"
            className="inline-block rounded bg-brand px-8 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-brand-hover"
          >
            Request Custom Price
          </a>
        </div>

        {/* Video area */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative overflow-hidden rounded">
            <img
              src="https://picsum.photos/seed/grandeur-about/1200/600"
              alt="Hotel lounge"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-ink/40">
              <a
                href="#"
                className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 text-white transition-colors hover:border-white hover:bg-white/10"
                aria-label="Play hotel video"
              >
                <Play className="ml-1 h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
