import { describe, expect, it } from 'vitest'
import {
  bandClass,
  bandColumnClass,
  bandHeadingClass,
  cardClass,
  containerClass,
  navListClass,
  navRowClass,
  panelClass,
  socialLinkClass,
  socialListClass,
  togglerClass,
  wordmarkClass,
} from './styles'

describe('styles — the card and its rows', () => {
  it('floats a white 5px-rounded card with one soft shadow over the grey page', () => {
    expect(cardClass).toContain('rounded-card')
    expect(cardClass).toContain('shadow-card')
    expect(cardClass).toContain('bg-card')
    expect(cardClass).toContain('p-[10px]')
    expect(cardClass).toContain('relative')
    expect(cardClass).not.toMatch(/sticky|fixed/)
    expect(cardClass).toContain('max-lg:bg-card-mobile')
    expect(cardClass).toContain('max-lg:p-[10px_15px]')
  })

  it('opens on the design’s 112px band, with the heading 8px and 48px above the card', () => {
    expect(bandClass).toBe('py-28')
    expect(bandHeadingClass).toContain('text-[28px]')
    expect(bandHeadingClass).toContain('leading-[1.5]')
    expect(bandHeadingClass).toContain('mb-2')
    expect(bandHeadingClass).toContain('text-black')
    expect(bandColumnClass).toContain('mb-12')
    expect(bandColumnClass).toContain('md:flex-[0_0_50%]')
  })

  it('takes the design’s four container tiers over 15px gutters', () => {
    expect(containerClass).toContain('px-[15px]')
    expect(containerClass).toContain('sm:max-w-[540px]')
    expect(containerClass).toContain('md:max-w-[720px]')
    expect(containerClass).toContain('lg:max-w-[960px]')
    expect(containerClass).toContain('xl:max-w-[1140px]')
  })

  it('pushes the five rows right by an auto margin and 16px of air, hidden below 992px', () => {
    expect(navListClass).toContain('ml-auto')
    expect(navListClass).toContain('mr-4')
    expect(navListClass).toContain('hidden')
    expect(navListClass).toContain('lg:flex')
  })

  it('draws a desktop row as 14px on the design’s 19.2px/20px padding, pink when current', () => {
    const current = navRowClass({ variant: 'desktop', current: true })
    const plain = navRowClass({ variant: 'desktop', current: false })

    expect(current).toContain('text-[14px]')
    expect(current).toContain('py-[19.2px]')
    expect(current).toContain('px-5')
    expect(current).toContain('text-accent')
    expect(current).not.toContain('hover:text-accent')
    expect(plain).toContain('text-row')
    expect(plain).toContain('hover:text-accent')
    expect(plain).not.toContain('text-accent hover')
  })

  it('draws the same rows in the panel as white-on-black full-width blocks', () => {
    const current = navRowClass({ variant: 'panel', current: true })
    const plain = navRowClass({ variant: 'panel', current: false })

    expect(current).toContain('text-white')
    expect(current).toContain('w-full')
    expect(current).not.toContain('px-5')
    expect(plain).toContain('text-panel-row')
    expect(plain).toContain('hover:text-white')
  })

  it('accent-only rows: no underline, no slab and no fill is ever drawn', () => {
    for (const variant of ['desktop', 'panel'] as const) {
      const row = navRowClass({ variant, current: true })

      expect(row).not.toContain('underline')
      expect(row).not.toContain('border-b')
      expect(row).not.toContain('bg-accent')
    }
  })

  it('rounds the platform circles at both sizes and moves them last above 992px', () => {
    expect(socialListClass).toContain('lg:order-last')
    expect(socialLinkClass).toContain('rounded-full')
    expect(socialLinkClass).toContain('size-10')
    expect(socialLinkClass).toContain('border-ring')
    expect(socialLinkClass).toContain('text-glyph')
    expect(socialLinkClass).toContain('max-lg:size-[30px]')
    expect(socialLinkClass).toContain('max-lg:border-white')
    expect(socialLinkClass).toContain('hover:bg-accent')
    expect(socialLinkClass).toContain('hover:text-white')
    expect(socialLinkClass).toContain('mr-1')
  })

  it('keeps the wordmark in one uppercase line that never changes colour on hover', () => {
    expect(wordmarkClass).toContain('uppercase')
    expect(wordmarkClass).toContain('text-[20px]')
    expect(wordmarkClass).toContain('leading-[36px]')
    expect(wordmarkClass).toContain('py-[5px]')
    expect(wordmarkClass).toContain('mr-4')
    expect(wordmarkClass).toContain('text-black')
    expect(wordmarkClass).toContain('max-lg:text-white')
    expect(wordmarkClass).not.toContain('hover:text')
  })

  it('takes the card’s toggler off the page from 992px up', () => {
    expect(togglerClass).toContain('lg:hidden')
    expect(togglerClass).toContain('text-toggler')
    expect(togglerClass).toContain('text-[16px]')
    expect(togglerClass).toContain('tracking-[0.1em]')
    expect(togglerClass).toContain('uppercase')
  })

  it('travels the panel between a zero and a full track over the design’s 0.35s', () => {
    const open = panelClass(true)
    const shut = panelClass(false)

    expect(open).toContain('grid-rows-[1fr]')
    expect(shut).toContain('grid-rows-[0fr]')
    expect(open).toContain('basis-full')
    expect(open).toContain('duration-[350ms]')
    expect(open).toContain('ease-collapse')
    expect(open).toContain('lg:hidden')
    expect(open).not.toContain('grid-rows-[0fr]')
  })
})
