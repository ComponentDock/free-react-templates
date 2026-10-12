import {
  bandClass,
  bandColumnClass,
  bandHeadingClass,
  barClass,
  barContainerClass,
  brandClass,
  containerClass,
  eyebrowClass,
  footerLinkClass,
  megaCardColumnClass,
  megaCardLinkClass,
  megaCardMetaClass,
  megaCardTitleClass,
  megaClass,
  megaColumnClass,
  megaItemClass,
  megaItemStaticClass,
  megaRowClass,
  megaShotClass,
  megaStaticClass,
  menuCaretClass,
  menuItemClass,
  navListClass,
  navRowClass,
  navWrapClass,
  panelClass,
  panelListClass,
  sectionAnchorStyle,
  sectionClass,
  togglerClass,
} from './styles'

describe('styles — the design’s own tokens', () => {
  it('lays the band on the design’s 112px of air with nothing on the sides', () => {
    expect(bandClass).toBe('py-28')
    expect(bandClass).not.toContain('px-')
  })

  it('centres the heading at 28px in half the page from 768px up, with 8px and 48px of tail', () => {
    expect(bandHeadingClass).toContain('text-[28px]')
    expect(bandHeadingClass).toContain('leading-[1.5]')
    expect(bandHeadingClass).toContain('font-normal')
    expect(bandHeadingClass).toContain('text-center')
    expect(bandHeadingClass).toContain('text-black')
    expect(bandHeadingClass).toContain('mb-2')
    expect(bandColumnClass).toContain('mb-12')
    expect(bandColumnClass).toContain('md:flex-[0_0_50%]')
  })

  it('keeps the page’s container on the design’s own tiers', () => {
    expect(containerClass).toContain('px-[15px]')
    expect(containerClass).toContain('sm:max-w-[540px]')
    expect(containerClass).toContain('md:max-w-[720px]')
    expect(containerClass).toContain('lg:max-w-[960px]')
    expect(containerClass).toContain('xl:max-w-[1140px]')
  })

  it('draws one rounded navy bar in the flow, black below 992px and never pinned', () => {
    expect(barClass).toContain('relative')
    expect(barClass).not.toMatch(/sticky|fixed/)
    expect(barClass).toContain('z-[3]')
    expect(barClass).toContain('rounded-bar')
    expect(barClass).toContain('bg-bar')
    expect(barClass).toContain('p-[10px]')
    expect(barClass).toContain('shadow-bar')
    expect(barClass).toContain('max-lg:bg-black')
    expect(barClass).toContain('max-lg:p-[10px_15px]')
    expect(barContainerClass).toContain('px-[15px]')
    expect(barContainerClass).toContain('max-lg:px-0')
    expect(barContainerClass).toContain('justify-between')
    expect(barContainerClass).toContain('lg:flex-nowrap')
  })

  it('puts the wordmark at the bar’s left edge in one uppercase 20px line', () => {
    expect(brandClass).toContain('text-[20px]')
    expect(brandClass).toContain('leading-[1.8]')
    expect(brandClass).toContain('font-bold')
    expect(brandClass).toContain('uppercase')
    expect(brandClass).toContain('text-white')
    expect(brandClass).toContain('py-[5px]')
    expect(brandClass).toContain('mr-4')
    expect(brandClass).toContain('hover:text-accent')
    expect(brandClass).toContain('focus-visible:outline-2')
  })

  it('pushes the four rows to the bar’s right edge by the list’s own auto margin', () => {
    expect(navListClass).toContain('ml-auto')
    expect(navListClass).toContain('lg:flex-row')
    expect(navListClass).not.toContain('justify-center')
    expect(navWrapClass).toContain('hidden')
    expect(navWrapClass).toContain('lg:flex')
  })

  it('draws a bar row at 14px sentence case on 19.2px of padding, amber under the pointer', () => {
    const row = navRowClass({ variant: 'desktop', current: false })

    expect(row).toContain('px-5')
    expect(row).toContain('py-[19.2px]')
    expect(row).toContain('text-[14px]')
    expect(row).toContain('leading-[25.2px]')
    expect(row).toContain('text-row')
    expect(row).toContain('hover:text-accent')
    expect(row).not.toContain('uppercase')
    expect(row).not.toContain('tracking-')
    expect(row).not.toContain('underline')
    expect(row).not.toContain('before:')
  })

  it('wears the amber at rest on the row the page is on, and while the panel is out', () => {
    const current = navRowClass({ variant: 'desktop', current: true })
    const open = navRowClass({ variant: 'desktop', current: false, open: true })
    const shut = navRowClass({ variant: 'desktop', current: false, open: false })

    expect(current).toContain('text-accent')
    expect(current).not.toContain('hover:text-accent')
    expect(open).toContain('text-accent')
    expect(open).not.toContain('text-row')
    expect(shut).toContain('text-row')
  })

  it('stands the same rows in the folded panel as full-width 54px blocks', () => {
    const row = navRowClass({ variant: 'panel', current: false })
    const current = navRowClass({ variant: 'panel', current: true })

    expect(row).toContain('w-full')
    expect(row).toContain('px-0')
    expect(row).toContain('py-[14.4px]')
    expect(row).toContain('text-left')
    expect(row).toContain('text-white/70')
    expect(row).toContain('hover:text-white')
    expect(row).not.toContain('border-b')
    expect(current).toContain('text-white')
    expect(current).not.toContain('text-white/70')
    expect(navRowClass({ variant: 'desktop', current: false })).toContain('text-left')
  })

  it('sets the panel row’s own box static, so the panel measures against the bar', () => {
    expect(menuItemClass).toBe('static flex')
    expect(menuItemClass).not.toContain('relative')
  })

  it('opens the panel as wide as the bar, flush with its left edge and 2px under it', () => {
    expect(megaClass).toContain('absolute')
    expect(megaClass).toContain('top-full')
    expect(megaClass).toContain('left-0')
    expect(megaClass).toContain('w-full')
    expect(megaClass).toContain('mt-[2px]')
    expect(megaClass).toContain('bg-white')
    expect(megaClass).toContain('border-0')
    expect(megaClass).toContain('rounded-mega')
    expect(megaClass).toContain('p-6')
    expect(megaClass).toContain('shadow-mega')
    expect(megaClass).toContain('z-[1000]')
  })

  it('stands the same panel in the folded chrome as a static block on the near-black', () => {
    expect(megaStaticClass).toContain('static')
    expect(megaStaticClass).not.toContain('absolute')
    expect(megaStaticClass).toContain('bg-mega')
    expect(megaStaticClass).toContain('p-0')
    expect(megaStaticClass).toContain('rounded-mega')
    expect(megaStaticClass).toContain('shadow-none')
  })

  it('divides the panel into four 25% columns, the card ones gone below 768px', () => {
    expect(megaRowClass).toContain('-mx-[15px]')
    expect(megaColumnClass).toContain('px-[15px]')
    expect(megaColumnClass).toContain('md:flex-[0_0_25%]')
    expect(megaCardColumnClass).toContain('md:flex-[0_0_25%]')
    expect(megaCardColumnClass).toContain('max-md:hidden')
    expect(megaColumnClass).not.toContain('max-md:hidden')
  })

  it('draws a panel link at 12px over a hairline, taking the amber fill on hover', () => {
    expect(megaItemClass).toContain('text-[12px]')
    expect(megaItemClass).toContain('px-5')
    expect(megaItemClass).toContain('py-[15px]')
    expect(megaItemClass).toContain('text-black')
    expect(megaItemClass).toContain('border-b')
    expect(megaItemClass).toContain('border-black/10')
    expect(megaItemClass).toContain('hover:bg-accent')
    expect(megaItemClass).toContain('hover:text-white')

    expect(megaItemStaticClass).toContain('text-white/80')
    expect(megaItemStaticClass).toContain('border-white/10')
    expect(megaItemStaticClass).toContain('hover:bg-accent')
  })

  it('draws the caret as the design’s own 8 × 4 currentColor triangle', () => {
    expect(menuCaretClass).toContain('border-x-4')
    expect(menuCaretClass).toContain('border-x-transparent')
    expect(menuCaretClass).toContain('border-t-4')
    expect(menuCaretClass).toContain('border-t-current')
    expect(menuCaretClass).toContain('ml-[3.57px]')
    expect(menuCaretClass).toContain('align-[3.57px]')
  })

  it('gives a card a 250px picture over a 16px title and a 14px meta line', () => {
    expect(megaShotClass).toContain('h-[250px]')
    expect(megaShotClass).toContain('w-full')
    expect(megaShotClass).toContain('object-cover')
    expect(megaShotClass).toContain('mb-5')
    expect(megaCardTitleClass).toContain('text-[16px]')
    expect(megaCardTitleClass).toContain('max-lg:text-white')
    expect(megaCardMetaClass).toContain('text-[14px]')
    expect(megaCardMetaClass).toContain('text-black/20')
    expect(megaCardMetaClass).toContain('max-lg:text-white/60')
    expect(megaCardLinkClass).toContain('text-black')
    expect(megaCardLinkClass).toContain('hover:text-accent')
    expect(megaCardLinkClass).toContain('max-lg:text-white')
  })

  it('draws the toggler in the design’s own 50% white, hidden from 992px up', () => {
    expect(togglerClass).toContain('text-white/50')
    expect(togglerClass).toContain('uppercase')
    expect(togglerClass).toContain('tracking-[0.1em]')
    expect(togglerClass).toContain('text-[16px]')
    expect(togglerClass).toContain('py-1')
    expect(togglerClass).toContain('pl-3')
    expect(togglerClass).toContain('pr-0')
    expect(togglerClass).toContain('lg:hidden')
  })

  it('folds the panel between nothing and its own height, hidden from 992px up', () => {
    const open = panelClass(true)
    const shut = panelClass(false)

    expect(open).toContain('grid-rows-[1fr]')
    expect(shut).toContain('grid-rows-[0fr]')
    expect(open).toContain('basis-full')
    expect(open).toContain('duration-[350ms]')
    expect(open).toContain('ease-collapse')
    expect(open).toContain('lg:hidden')
    expect(panelListClass).toContain('pb-[10px]')
    expect(panelListClass).toContain('flex-col')
  })

  it('keeps 300px of the bar’s own air above every scrolled-to target', () => {
    expect(sectionAnchorStyle).toEqual({ scrollMarginTop: 300 })
    expect(sectionClass).toContain('scroll-mt-[300px]')
  })

  it('closes the page on the page’s own grey with one link that leaves it', () => {
    expect(eyebrowClass).toContain('text-accent')
    expect(eyebrowClass).toContain('uppercase')
    expect(footerLinkClass).toContain('text-accent')
    expect(footerLinkClass).toContain('hover:text-black')
  })
})
