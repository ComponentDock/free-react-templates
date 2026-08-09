import { ArrowRight } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const articles = [
  {
    title: 'Make Peace With Your Broken Pieces',
    excerpt:
      'A meditation on the beauty of imperfection and why the cracks in a story are often what make it worth telling.',
  },
  {
    title: 'The Quiet Power of a Well-Dressed Man',
    excerpt:
      'Fashion is a language, and tailoring is its grammar. How the understated suit conquered the modern wardrobe.',
  },
  {
    title: 'Why Print Is Making a Bold Comeback',
    excerpt:
      'From indie zines to glossy monthlies, the physical magazine is finding a new generation of readers.',
  },
  {
    title: 'Inside the Ateliers of Milan\u2019s New Wave',
    excerpt:
      'We step behind the seams of the young houses redefining Italian craftsmanship for a digital age.',
  },
  {
    title: 'A Field Guide to Modern Monochrome',
    excerpt:
      'Black and white never goes out of style — but the rules of wearing it keep changing. A practical guide.',
  },
  {
    title: 'The Photographers Behind the Front Row',
    excerpt:
      'The images you see from fashion week are shaped by a handful of eyes. Meet the shooters who frame the shows.',
  },
  {
    title: 'Eight Looks That Define This Autumn',
    excerpt:
      'From oversize tailoring to sharp knitwear, the season\u2019s strongest silhouettes, decoded piece by piece.',
  },
  {
    title: 'The Slow Fashion Manifesto',
    excerpt:
      'Buy less, choose well, keep longer. Why the future of style is patient, considered, and personal.',
  },
  {
    title: 'Portraits of the City After Dark',
    excerpt:
      'Neon, rain, and the people who own the night — a photographic love letter to the urban hour.',
  },
  {
    title: 'How to Build a Capsule Wardrobe',
    excerpt:
      'Thirty pieces, endless combinations. The method behind a wardrobe that works without trying.',
  },
  {
    title: 'The Last Great Print Magazine',
    excerpt:
      'Against every prediction, one title refuses to fold. Inside the editorial office that won\u2019t quit.',
  },
] as const

export function EditorialList() {
  return (
    <section id="editorial" aria-label="Editorial articles">
      {articles.map((article, index) => {
        const dark = index === 2 || index === 9
        return (
          <article
            key={article.title}
            className={cn('grid md:grid-cols-2', dark ? 'bg-night' : 'bg-white dark:bg-gray-950')}
          >
            <div
              className={cn(
                'relative min-h-[40vh] overflow-hidden',
                dark ? 'flex items-center justify-center p-10 md:order-last' : '',
              )}
            >
              <img
                src={`https://picsum.photos/seed/pulp-article-${index + 1}/1000/800`}
                alt=""
                className={cn(
                  dark
                    ? 'h-72 w-72 rounded-full object-cover shadow-2xl sm:h-80 sm:w-80'
                    : 'absolute inset-0 h-full w-full object-cover',
                )}
              />
            </div>

            <div
              className={cn(
                'flex flex-col justify-center px-6 py-14 sm:px-10 md:px-14',
                dark ? 'text-white' : 'text-ink dark:text-white',
              )}
            >
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/pulp-avatar-${index + 1}/120/120`}
                  alt=""
                  className="h-[60px] w-[60px] rounded-full object-cover"
                />
                <div>
                  <p className={cn('text-base font-medium', dark ? 'text-white' : 'text-black/70')}>
                    Jamie Jonson
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                    fashion.com
                  </p>
                </div>
              </div>

              <h2
                className={cn(
                  'mt-8 font-display text-3xl font-normal leading-tight sm:text-5xl',
                  dark ? 'text-white' : 'text-black',
                )}
              >
                <a href="#editorial" className="transition-colors hover:text-brand">
                  {article.title}
                </a>
              </h2>

              <p
                className={cn(
                  'mt-6 max-w-lg text-sm font-light leading-relaxed sm:text-base',
                  dark ? 'text-white/50' : 'text-black/50 dark:text-white/50',
                )}
              >
                {article.excerpt}
              </p>

              <div className="mt-8">
                <ButtonLink
                  href="#editorial"
                  className="rounded-full bg-primary-500 px-7 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-transparent hover:text-brand"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}
