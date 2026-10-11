import { CloudDownload } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const SUBTITLE = 'A free UI kit on tools & workshop design.'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-6"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/buildkit-hero/1920/1200)' }}
    >
      <div className="absolute inset-0 bg-black/80" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-normal text-white md:text-[80px] md:leading-[1.1]">
          Buildkit UI Kit.
        </h1>
        <p className="mt-4 text-xl text-white/90 md:text-2xl">{SUBTITLE}</p>
        <p className="mt-10">
          <ButtonLink
            href="#buttons"
            className="h-auto rounded-full px-[18px] py-3 shadow-material hover:shadow-material-hover"
          >
            <CloudDownload className="h-5 w-5" aria-hidden="true" />
            Download Kit
          </ButtonLink>
        </p>
      </div>
    </section>
  )
}
