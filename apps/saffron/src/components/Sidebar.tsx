import { useState } from 'react'
import { Search } from 'lucide-react'
import { SocialLinks } from './SocialLinks'
import {
  advertisementLabel,
  advertisementSeed,
  authorBio,
  authorName,
  authorReadMore,
  authorSeed,
  authorSignature,
  categoryCards,
  instagramSideSeeds,
  latestPosts,
  newsletterConfirmation,
  newsletterHeading,
  newsletterPlaceholder,
  sideTitles,
  tags,
} from '../data'

const sectionTitle =
  'mb-[30px] text-[1.4rem] font-medium leading-tight text-ink after:mt-3 after:block after:h-[2px] after:w-10 after:bg-brand'

const chip =
  'rounded-[1px] bg-brand px-[10px] py-[4px] text-[0.7rem] font-medium uppercase tracking-[2px] text-white'

export function Sidebar() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div className="flex flex-col gap-[50px]">
      <section aria-label="About the author">
        <div id="about" className="mt-[30px] px-[30px] pb-[30px] text-center shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
          <div className="mx-auto -mt-[15px] mb-5 w-[150px] -translate-y-[30px] overflow-hidden rounded-[3px] shadow-[0_0_30px_rgba(0,0,0,0.1)]">
            <img
              src={`https://picsum.photos/seed/${authorSeed}/200/200`}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <SocialLinks className="justify-center gap-2 text-muted" itemClassName="px-2" />
          <h2 className="mb-4 mt-5 text-[1.4rem] font-medium text-ink">{authorName}</h2>
          <p className="font-body text-[0.95rem] leading-[1.6] text-body">{authorBio}</p>
          <p className="mt-5 font-script text-[1.9rem] leading-none text-ink">
            {authorSignature}
          </p>
          <a
            href="#blog"
            className="group relative mt-5 inline-block text-[0.85rem] font-medium uppercase tracking-[2px] text-brand"
          >
            {authorReadMore}
            <span className="absolute inset-x-0 bottom-0 h-px bg-brand transition-transform duration-200 group-hover:translate-x-full" />
          </a>
        </div>
      </section>

      <section aria-label="Search articles">
        <form
          onSubmit={(event) => event.preventDefault()}
          className="relative flex items-center border-b border-[#bbbbbb]"
        >
          <label htmlFor="sidebar-search" className="sr-only">
            Search articles
          </label>
          <input
            id="sidebar-search"
            type="search"
            placeholder="Search"
            className="w-full bg-transparent py-3 pl-5 pr-12 text-sm outline-none"
          />
          <button
            type="submit"
            aria-label="Search articles"
            className="absolute right-5 text-muted transition-colors hover:text-brand"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </section>

      <section aria-label="Newsletter" className="bg-midnight px-[30px] py-[30px]">
        <h2 className="text-[1.2rem] font-medium text-white">{newsletterHeading}</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setSubscribed(true)
          }}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder={newsletterPlaceholder}
            className="my-4 w-full bg-white px-5 py-[10px] text-sm text-ink outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-[1px] border border-brand px-[30px] py-[10px] text-[0.85rem] uppercase tracking-[2px] text-brand transition-colors hover:bg-brand hover:text-white"
          >
            SUBSCRIBE
          </button>
        </form>
        {subscribed && (
          <p role="status" className="mt-4 text-sm text-white/80">
            {newsletterConfirmation}
          </p>
        )}
      </section>

      <section aria-label={sideTitles.categories}>
        <h2 className={sectionTitle}>{sideTitles.categories}</h2>
        <div className="flex flex-col gap-5">
          {categoryCards.map((card) => (
            <a key={card.name} href="#categories" className="group relative block">
              <img
                src={`https://picsum.photos/seed/${card.seed}/400/150`}
                alt=""
                loading="lazy"
                className="h-[110px] w-full object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 bg-brand px-5 py-[7px] text-[0.85rem] font-medium uppercase tracking-[1px] text-white">
                {card.name}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section aria-label={sideTitles.latest}>
        <h2 className={sectionTitle}>{sideTitles.latest}</h2>
        <div className="flex flex-col gap-5">
          {latestPosts.map((item) => (
            <div key={item.seed} className="flex gap-5">
              <img
                src={`https://picsum.photos/seed/${item.seed}/150/200`}
                alt=""
                loading="lazy"
                className="h-[80px] w-[80px] shrink-0 object-cover"
              />
              <div>
                <span className={chip}>{item.category}</span>
                <h3 className="mt-1 text-[1rem] font-medium leading-snug text-ink">
                  <a href="#blog" className="transition-colors hover:text-brand">
                    {item.title}
                  </a>
                </h3>
                <p className="mt-1 text-[0.8rem] italic text-muted">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-label={sideTitles.advertisement}>
        <h2 className={sectionTitle}>{sideTitles.advertisement}</h2>
        <a href="#blog" className="relative block">
          <img
            src={`https://picsum.photos/seed/${advertisementSeed}/400/500`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-x-[25%] bottom-[30px] border border-white py-[13px] text-center text-[0.85rem] uppercase tracking-[2px] text-white transition-colors hover:border-brand hover:text-brand">
            {advertisementLabel}
          </span>
        </a>
      </section>

      <section aria-label={sideTitles.instagram}>
        <h2 className={sectionTitle}>{sideTitles.instagram}</h2>
        <ul className="grid grid-cols-3 gap-x-[5px] gap-y-[5px]">
          {instagramSideSeeds.map((seed, index) => (
            <li key={seed}>
              <a href="#blog" aria-label={`Instagram photo ${index + 1}`} className="block">
                <img
                  src={`https://picsum.photos/seed/${seed}/150/150`}
                  alt=""
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label={sideTitles.tags}>
        <h2 className={sectionTitle}>{sideTitles.tags}</h2>
        <ul className="flex flex-wrap gap-[5px]">
          {tags.map((tag) => (
            <li key={tag}>
              <a
                href="#blog"
                className="block rounded-[1px] border border-rule px-[15px] py-[10px] text-[0.85rem] text-body transition-colors hover:border-brand hover:text-brand"
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
