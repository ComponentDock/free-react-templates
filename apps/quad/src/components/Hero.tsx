import { cn } from '@free-react-templates/ui'

/* Hero (source: section.home_banner_area — min-height 900px photo
   background, centered content block at ~40% height: uppercase navy
   sub-headline + headline, navy "learn more" + gold "see course"
   buttons with 5px radius). */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[900px] items-start justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url(https://picsum.photos/seed/quad-hero/1600/900)',
      }}
    >
      <div className="mx-auto mt-[340px] max-w-[1140px] px-[15px] text-center">
        <p className="text-[20px] font-medium uppercase text-primary">
          Best online education service In the world
        </p>
        <h1 className="mt-5 font-heading text-[48px] font-medium uppercase text-primary">
          One Step Ahead This Season
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#features"
            className={cn(
              'inline-flex items-center justify-center rounded-[5px] bg-primary px-12 text-[13px] font-medium uppercase text-accent transition-colors',
              'h-[50px] hover:border hover:border-primary hover:bg-transparent hover:text-primary',
            )}
          >
            learn more
          </a>
          <a
            href="#courses"
            className={cn(
              'inline-flex items-center justify-center rounded-[5px] bg-accent px-12 text-[13px] font-medium uppercase text-primary transition-colors',
              'h-[50px] hover:bg-primary hover:text-accent',
            )}
          >
            see course
          </a>
        </div>
      </div>
    </section>
  )
}
