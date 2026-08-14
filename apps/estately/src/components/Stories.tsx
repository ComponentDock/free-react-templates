import { stories } from '../data'

/** "Seller Success Stories" — image on the right (lg), text on the left. */
export function Stories() {
  return (
    <section className="bg-white py-24 lg:py-[110px]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 lg:flex-row lg:gap-16 lg:px-8">
        <div className="flex-1">
          <h2 className="font-heading text-4xl font-bold leading-none text-heading lg:text-[72px]">
            {stories.title}
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-body">{stories.text}</p>
          <a
            href="#stories"
            className="mt-8 inline-block border-b border-brand pb-0.5 font-heading text-lg font-bold text-brand transition-opacity hover:opacity-80"
          >
            Find out more
          </a>
        </div>
        <img
          src={stories.image}
          alt=""
          loading="lazy"
          className="w-full max-w-xl lg:order-2 lg:w-1/2"
        />
      </div>
    </section>
  )
}
