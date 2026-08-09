import { useState } from 'react'
import { Brush, Droplets, Scissors, Sparkles } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const styles = [
  {
    title: 'Hair Cut',
    Icon: Scissors,
    text: 'A tailored cut built around your face shape, hair type, and routine — finished with a precise neckline and a styling consultation.',
  },
  {
    title: 'Shave',
    Icon: Sparkles,
    text: 'The classic hot-towel shave: steamed towels, pre-shave oil, and a straight-razor pass for the closest, smoothest finish.',
  },
  {
    title: 'Beard',
    Icon: Brush,
    text: 'Beard sculpting with scissors and razor, edged to perfection and conditioned so it looks sharp from every angle.',
  },
  {
    title: 'Wash',
    Icon: Droplets,
    text: 'A relaxing shampoo and scalp massage with premium products that leave your hair clean, healthy, and full of life.',
  },
] as const

export function Catalogue() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="gallery"
      aria-label="Select your style"
      className="relative bg-cover bg-center py-24 sm:py-28"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/tonsor-catalogue/1920/900)' }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-md bg-white p-8 text-center shadow-2xl dark:bg-gray-950 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Shaveing</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink dark:text-white">
            Select Your Style
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {styles.map((style, index) => {
              const isActive = index === active
              return (
                <button
                  key={style.title}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={isActive}
                  className={cn(
                    'flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all',
                    isActive
                      ? 'border-brand bg-white text-brand shadow-[0_5px_15px_rgba(187,146,54,0.3)]'
                      : 'border-gray-200 text-ink/60 hover:border-brand hover:text-brand dark:border-gray-700 dark:text-white/60',
                  )}
                >
                  <style.Icon className="h-4 w-4" aria-hidden="true" />
                  {style.title}
                </button>
              )
            })}
          </div>

          <p
            aria-live="polite"
            className="mx-auto mt-6 max-w-md text-sm font-light leading-relaxed text-mist"
          >
            {styles[active]!.text}
          </p>

          <a
            href="#gallery"
            className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-ink underline-offset-4 transition-colors hover:text-brand hover:underline dark:text-white"
          >
            View Gallery…
          </a>
        </div>
      </div>
    </section>
  )
}
