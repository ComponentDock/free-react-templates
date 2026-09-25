import { ButtonLink } from '@free-react-templates/ui'

const albums = [
  { title: 'Midnight Pulse', artist: 'Electra', seed: 'groove-alb-1' },
  { title: 'Neon Dreams', artist: 'Synthwave Collective', seed: 'groove-alb-2' },
  { title: 'Deep Resonance', artist: 'Bass Theory', seed: 'groove-alb-3' },
  { title: 'Velvet Frequency', artist: 'Echo Chamber', seed: 'groove-alb-4' },
  { title: 'Solar Flare', artist: 'Cosmic Drift', seed: 'groove-alb-5' },
  { title: 'Urban Pulse', artist: 'City Beats', seed: 'groove-alb-6' },
  { title: 'Crystal Waves', artist: 'Aqua Sound', seed: 'groove-alb-7' },
  { title: 'Shadow Groove', artist: 'Night Circuit', seed: 'groove-alb-8' },
] as const

export function Discography() {
  return (
    <section
      id="discography"
      aria-label="Discography"
      className="relative overflow-hidden bg-gradient-to-br from-deep via-primary-800 to-void py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-script text-xl text-accent-400">Our Discography</span>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              newest albums &amp; singles.
            </h2>
          </div>
          <ButtonLink
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-primary-400 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-400"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Buy on iTunes
          </ButtonLink>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {albums.map((album) => (
            <div key={album.title} className="group text-center">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/${album.seed}/300/300`}
                  alt={`${album.title} album cover`}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h4 className="mt-3 text-sm font-bold text-white">{album.title}</h4>
              <p className="mt-1 text-xs text-muted">{album.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
