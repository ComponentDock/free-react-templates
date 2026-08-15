import { featuredImage } from '../data'
import { BrandIcon } from './BrandIcon'

const smallCards = [
  { title: 'Learning React Native', image: 'https://picsum.photos/seed/mentory-12/160/160' },
  { title: 'Learning React Native', image: 'https://picsum.photos/seed/mentory-13/160/160' },
  { title: 'Learning React Native', image: 'https://picsum.photos/seed/mentory-14/160/160' },
]

export function Featured() {
  return (
    <section className="site-section bg-light pb-0">
      <div className="mx-auto -mt-[150px] max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <article className="flex h-full flex-col bg-white p-5 shadow-[0_15px_30px_rgba(0,0,0,0.05)] sm:flex-row">
              <img
                src={featuredImage}
                alt=""
                className="h-auto w-full sm:w-[260px] sm:shrink-0 sm:object-cover"
              />
              <div className="mt-4 sm:ml-[50px] sm:mt-0">
                <a href="#" className="text-[11px] font-bold tracking-[0.1em] uppercase">
                  Tutorial
                </a>
                <h3 className="mt-2 text-xl font-normal">
                  <a href="#" className="text-black">
                    Learning React Native
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  Far far away, behind the word mountains, far from the countries Vokalia and
                  Consonantia, there live the blind texts.
                </p>
                <div className="mt-3 flex items-center gap-2 text-brand">
                  <BrandIcon name="react" className="h-5 w-5" />
                  <BrandIcon name="javascript" className="h-5 w-5" />
                </div>
                <p className="mt-3 text-sm text-meta">1hr 24m · Advanced · Jun 18, 2020</p>
              </div>
            </article>
          </div>
          <div className="flex flex-col gap-4 md:col-span-4">
            {smallCards.map((card) => (
              <article
                key={card.image}
                className="flex h-full items-center bg-white p-5 shadow-[0_15px_30px_rgba(0,0,0,0.05)]"
              >
                <img src={card.image} alt="" className="h-20 w-20 shrink-0 object-cover" />
                <div className="ml-5">
                  <a href="#" className="text-[11px] font-bold tracking-[0.1em] uppercase">
                    Tutorial
                  </a>
                  <h3 className="mt-1 text-base font-normal">
                    <a href="#" className="text-black">
                      {card.title}
                    </a>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
