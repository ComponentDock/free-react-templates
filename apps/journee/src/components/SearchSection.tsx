import { useState } from 'react'
import { HandHeart, Landmark, Tent } from 'lucide-react'
import {
  cityLabel,
  cityOptions,
  countryLabel,
  countryOptions,
  donationCards,
  readMoreLabel,
  searchButtonLabel,
  searchTitle,
} from '../data'

const donationIcons = [Tent, HandHeart, Landmark] as const

export function SearchSection() {
  const [country, setCountry] = useState<string>(countryOptions[0])
  const [city, setCity] = useState<string>(cityOptions[0])

  return (
    <section id="search-section" className="relative z-20 -mt-24 bg-paper">
      <div className="mx-auto max-w-[1690px] px-6 pb-24 pt-40">
        <div className="relative mx-auto max-w-[980px]">
          <div className="rounded-sm bg-brand px-6 py-12 shadow-[0_8.835px_85.56px_6.44px_rgba(170,170,170,0.29)] lg:px-20 lg:py-16">
            <h2 className="mb-8 text-center font-heading text-3xl font-medium capitalize text-black">
              {searchTitle}
            </h2>
            <div className="flex flex-col gap-4 lg:flex-row">
              <label htmlFor="journee-country" className="sr-only">
                {countryLabel}
              </label>
              <select
                id="journee-country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                className="h-[60px] w-full flex-1 border-0 bg-white/90 px-5 text-[#c3c3c3] outline-none lg:mr-4"
              >
                {countryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <label htmlFor="journee-city" className="sr-only">
                {cityLabel}
              </label>
              <select
                id="journee-city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                className="h-[60px] w-full flex-1 border-0 bg-white/90 px-5 text-[#c3c3c3] outline-none lg:mr-4"
              >
                {cityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="h-[60px] w-full bg-sky px-14 font-heading text-[15px] font-medium capitalize text-white transition-colors hover:bg-ink lg:w-auto"
              >
                {searchButtonLabel}
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-[980px] gap-12 md:grid-cols-3">
          {donationCards.map((card, index) => {
            const Icon = donationIcons[index]!
            return (
              <div key={index} className="text-center">
                <Icon className="mx-auto h-7 w-7 text-ink" aria-hidden="true" />
                <h3 className="mt-8 font-heading text-lg font-medium capitalize text-black">
                  {card.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-muted">{card.paragraph}</p>
                <a
                  href="#search-section"
                  className="mt-6 inline-block font-script text-lg text-black transition-colors hover:text-sky"
                >
                  {readMoreLabel}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
