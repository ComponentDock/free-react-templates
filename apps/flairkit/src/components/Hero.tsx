import { KitLink } from './KitButton'

const SUBTITLE =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iure possimus cum illum ab accusantium, aliquid, delectus tempora.'

/**
 * The kit's opening band: an 80vh photographic hero with NO color wash — the
 * desaturated photo itself carries the contrast (unlike the sibling kits).
 */
export function Hero() {
  return (
    <section
      id="home"
      className="flex h-[80vh] min-h-[420px] items-center justify-center bg-cover bg-center px-6"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/flairkit-hero/1920/1080)' }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-white md:text-[3.5rem] md:leading-[1.1]">
          Flairkit UI Kit
        </h1>
        <p className="mt-4 text-[1.25rem] text-white">{SUBTITLE}</p>
        <p className="mt-8">
          <KitLink href="#start" color="primary" variant="solid" size="md" className="px-4 py-3">
            View All Here
          </KitLink>
        </p>
      </div>
    </section>
  )
}
