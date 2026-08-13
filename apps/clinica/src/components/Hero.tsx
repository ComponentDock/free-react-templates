import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { hero } from '../data'

/** 900px hero on a light-blue medical photo background: kicker line,
 *  70px uppercase headline with a rotating highlighted word, paragraph
 *  and a blue-gradient "Appointment" button with an arrow icon. */
export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((index) => (index + 1) % hero.rotatingWords.length)
    }, 2500)
    return () => window.clearInterval(timer)
  }, [])

  const word = hero.rotatingWords[wordIndex]

  return (
    <section
      id="home-section"
      className="relative flex min-h-[600px] items-center overflow-hidden md:min-h-[900px]"
    >
      <img
        src={hero.image}
        alt={hero.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#f0f6ff]/70" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 pb-20 pt-44 lg:px-8">
        <div className="lg:w-7/12">
          <span className="flex items-center gap-6 text-[18px] font-semibold uppercase tracking-[0.05em] text-[#396cf0]">
            <span className="h-[2px] w-[70px] bg-[#396cf0]" aria-hidden="true" />
            {hero.kicker}
          </span>
          <h1 className="mt-6 text-[52px] font-black uppercase leading-[1.2] text-[#102039] md:text-[70px]">
            {hero.headline}{' '}
            <span key={word} className="text-brand animate-[clinica-word-in_0.5s_ease-out]">
              {word}
            </span>
          </h1>
          <p className="mb-12 mt-8 max-w-xl text-lg text-[#212025]">{hero.paragraph}</p>
          <ButtonLink
            href={hero.href}
            className="rounded-md bg-[linear-gradient(to_left,#559af3,#1462f3,#559af3)] bg-[length:200%_auto] px-[58px] py-[18px] text-[16px] font-semibold text-white shadow-[0_7px_21px_rgba(0,0,0,0.12)] transition-all hover:bg-[position:right_center]"
          >
            {hero.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
