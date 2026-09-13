import {
  FacebookIcon,
  InstagramIcon,
  SoundCloudIcon,
  VimeoIcon,
  YoutubeIcon,
  PlayIcon,
} from './BrandIcons'

const TAGS = [
  'music',
  'art',
  'technology',
  'travel & food',
  'viral',
  'social media',
  'interview',
  'development',
  'success',
  'live',
  'did you know?',
  'health',
]

const LATEST_EPISODES = [
  { title: 'Season 4 Episode 48 — A Step Further', date: 'September 24, 2024', category: 'Music' },
  { title: 'Season 4 Episode 47 — Deep in Crypto', date: 'September 24, 2024', category: 'Music' },
  { title: 'Season 4 Episode 46 — Nothing is Real', date: 'September 24, 2024', category: 'Music' },
]

const GALLERY_IMAGES = Array.from(
  { length: 5 },
  (_, i) => `https://picsum.photos/seed/podlane-ig${i + 1}/120/120`,
)

export function Footer() {
  return (
    <footer className="bg-bg-dark py-16">
      <div className="mx-auto max-w-[1140px] px-4">
        {/* Logo */}
        <div className="mb-12 text-center">
          <a href="#" className="inline-flex items-center gap-1 text-heading">
            <span className="text-sm font-light">my</span>
            <span className="text-base font-bold">podcast</span>
            <PlayIcon className="ml-1 h-4 w-4 fill-brand" />
          </a>
        </div>

        {/* Three columns */}
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {/* Tags */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-heading">
              Tags
            </h4>
            <ul className="space-y-2">
              {TAGS.map((tag) => (
                <li key={tag}>
                  <a href="#" className="text-xs text-muted transition-colors hover:text-brand">
                    {tag}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Episodes */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-heading">
              Latest Episodes
            </h4>
            <div className="space-y-4">
              {LATEST_EPISODES.map((ep, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand">
                    <PlayIcon className="h-3.5 w-3.5 fill-white" />
                  </div>
                  <div>
                    <a href="#" className="text-xs font-medium text-heading hover:text-brand">
                      {ep.title}
                    </a>
                    <div className="mt-1 flex gap-2 text-[10px] text-muted">
                      <span>{ep.date}</span>
                      <span>·</span>
                      <span>{ep.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instagram gallery */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-heading">
              Instagram
            </h4>
            <div className="flex flex-wrap gap-2">
              {GALLERY_IMAGES.map((src, i) => (
                <a key={i} href="#">
                  <img
                    src={src}
                    alt={`Instagram ${i + 1}`}
                    className="h-[60px] w-[60px] object-cover"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="mb-6 flex justify-center gap-5">
          <a
            href="#"
            aria-label="Facebook"
            className="text-heading transition-colors hover:text-brand"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-heading transition-colors hover:text-brand"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="SoundCloud"
            className="text-heading transition-colors hover:text-brand"
          >
            <SoundCloudIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Vimeo"
            className="text-heading transition-colors hover:text-brand"
          >
            <VimeoIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-heading transition-colors hover:text-brand"
          >
            <YoutubeIcon className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright + Component Dock */}
        <p className="text-center text-xs text-muted">
          Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <a href="https://www.componentdock.com/" className="underline hover:text-brand">
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
