import { Fragment } from 'react'
import { HERO, HERO_FOOT, PROFILE } from '../content'
import { ActionLink, Container, Eyebrow } from './ui'

const KEY = 'text-[#8cb8ff]'
const STRING = 'text-[#d9f77c]'

/** The fake editor window — the hero's argument that this is a developer. */
function EditorCard() {
  return (
    <aside
      aria-label="A short developer introduction"
      className="overflow-hidden rounded-[9px] border border-[#53657e] bg-[#0e1c30] shadow-[0_20px_35px_#08111c40]"
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-[7px] border-b border-[#30435c] px-[14px] py-[14px] text-[0.65rem] text-[#8093ae]"
      >
        <span>●</span>
        <span>●</span>
        <span>●</span>
        <span className="ml-auto text-[#c7d1e0]">{HERO.editableFile}</span>
      </div>

      <pre
        role="group"
        aria-label="Developer profile summary"
        className="m-0 whitespace-pre-wrap [overflow-wrap:anywhere] px-6 py-[25px] text-left font-mono text-[0.84rem] leading-[2] text-[#c7d1e0]"
      >
        {'{\n  '}
        <span className={KEY}>&quot;name&quot;</span>
        {': '}
        <span className={STRING}>&quot;{PROFILE.name}&quot;</span>
        {',\n  '}
        <span className={KEY}>&quot;focus&quot;</span>
        {': [\n'}
        {PROFILE.focus.map((item, index) => (
          <Fragment key={item}>
            {'    '}
            <span className={STRING}>&quot;{item}&quot;</span>
            {index < PROFILE.focus.length - 1 ? ',\n' : '\n'}
          </Fragment>
        ))}
        {'  ],\n  '}
        <span className={KEY}>&quot;currently&quot;</span>
        {': '}
        <span className={STRING}>&quot;{PROFILE.currently}&quot;</span>
        {'\n}'}
      </pre>

      <div
        aria-hidden="true"
        className="flex justify-between gap-3 border-t border-[#30435c] px-[14px] py-[10px] font-mono text-[0.65rem] text-[#98aeca]"
      >
        <span>{HERO.editorFoot}</span>
        <span>{HERO.editorEncoding}</span>
      </div>
    </aside>
  )
}

function HeroFoot() {
  return (
    <div className="mt-[54px] border-t border-[#42516a] pt-[18px]">
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.7rem] leading-[1.75] text-[#c7d1e0]">
        {HERO_FOOT.map((item) => (
          <li key={item.number} className="flex gap-[6px]">
            <span className="font-medium text-white">{item.number}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Three-line claim (middle line lime), two actions, the JSON editor in the
 * five-column right side, and the numbered foot. Navy ground, 84 / 62 padding.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-navy pb-[62px] pt-[84px] text-[#f9fbff]">
      <Container>
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Eyebrow tone="hero">{HERO.eyebrow}</Eyebrow>
            <h1
              id="hero-title"
              className="mb-7 max-w-[780px] text-[clamp(3rem,6.3vw,5.6rem)]"
            >
              {HERO.lineOne}
              <br />
              <span className="text-lime">{HERO.lineTwo}</span>
              <br />
              {HERO.lineThree}
            </h1>
            <p className="max-w-[480px] text-[1.08rem] leading-[1.75] text-[#c7d1e0]">
              {HERO.intro}
            </p>
            <div className="mt-[27px] flex flex-wrap gap-3">
              <ActionLink href="#work" variant="lime">
                {HERO.primary}
                <span aria-hidden="true">↓</span>
              </ActionLink>
              <ActionLink href="#/resume" variant="outlineLight">
                {HERO.secondary}
                <span aria-hidden="true">↗</span>
              </ActionLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <EditorCard />
          </div>
        </div>

        <HeroFoot />
      </Container>
    </section>
  )
}
