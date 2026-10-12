import {
  CURRENT_ROW_MARK,
  barClass,
  caretClass,
  channelLinkClass,
  channelListClass,
  collapseClass,
  containerClass,
  desktopListClass,
  dropdownItemClass,
  dropdownPanelClass,
  navItemClass,
  navRowClass,
  navTriggerClass,
  panelListClass,
  searchButtonClass,
  searchFormClass,
  searchInputClass,
  sectionAnchorStyle,
  slabClass,
  stripColumnClass,
  stripRowClass,
  togglerClass,
  wordmarkClass,
  wordmarkTradeClass,
} from './styles'
import { HEADER_OFFSET } from './site'

const tokens = (value: string) => value.split(' ')

describe('styles — the measured tokens of the two-band header', () => {
  it('builds the container out of the design own tiers', () => {
    expect(tokens(containerClass)).toContain('px-[15px]')
    expect(tokens(containerClass)).toContain('sm:max-w-[540px]')
    expect(tokens(containerClass)).toContain('md:max-w-[720px]')
    expect(tokens(containerClass)).toContain('lg:max-w-[960px]')
    expect(tokens(containerClass)).toContain('xl:max-w-[1140px]')
  })

  it('draws the bar full bleed, navy, square, unshadowed and never pinned', () => {
    const classes = tokens(barClass)

    expect(classes).toContain('bg-bar')
    expect(classes).toContain('p-0')
    expect(classes).toContain('relative')
    expect(classes).toContain('z-[3]')
    expect(classes).toContain('max-lg:bg-bar-dark')
    expect(classes).toContain('max-lg:px-[15px]')
    expect(classes).toContain('max-lg:py-[10px]')
    expect(classes).not.toContain('sticky')
    expect(classes).not.toContain('fixed')
    expect(classes).not.toContain('shadow-panel')
    expect(classes.filter((token) => token.startsWith('rounded'))).toHaveLength(0)
  })

  it('lays the brand strip out as two equal halves of the same container', () => {
    expect(tokens(stripRowClass)).toContain('justify-between')
    expect(tokens(stripColumnClass)).toContain('flex-[1_0_0%]')
    expect(tokens(stripColumnClass)).toContain('px-[15px]')
  })

  it('anchors every row, so a panel hangs from its own row and not from the bar', () => {
    expect(tokens(navItemClass)).toContain('relative')
    expect(tokens(navItemClass)).toContain('flex')
    expect(tokens(navItemClass)).toContain('flex-wrap')
  })

  it('pins the wide list to the container own inner left edge with its own auto margin', () => {
    const classes = tokens(desktopListClass)

    expect(classes).toContain('items-stretch')
    expect(classes).toContain('lg:mr-auto')
    expect(classes).toContain('flex')
    expect(classes).toContain('p-0')
  })

  it('draws a wide row at the measured eleven pixel scale in 67.8px of height', () => {
    const classes = tokens(navRowClass({ variant: 'desktop', current: false }))

    expect(classes).toContain('text-[11px]')
    expect(classes).toContain('leading-[19.8px]')
    expect(classes).toContain('tracking-[2px]')
    expect(classes).toContain('uppercase')
    expect(classes).toContain('px-5')
    expect(classes).toContain('py-6')
    expect(classes).toContain('text-white')
    expect(classes).toContain('group')
    expect(classes.filter((token) => token.startsWith('rounded'))).toHaveLength(0)
  })

  it('underlines the row the page is already on, beyond its gold slab', () => {
    const current = tokens(navRowClass({ variant: 'desktop', current: true }))

    expect(current).toContain(CURRENT_ROW_MARK)
    expect(tokens(navRowClass({ variant: 'desktop', current: false }))).not.toContain(CURRENT_ROW_MARK)
  })

  it('wipes the gold slab in from the left on hover, and holds it on the open row', () => {
    const resting = tokens(slabClass(false))
    const open = tokens(slabClass(true))

    expect(resting).toContain('bg-gold')
    expect(resting).toContain('absolute')
    expect(resting).toContain('inset-0')
    expect(resting).toContain('-z-10')
    expect(resting).toContain('origin-left')
    expect(resting).toContain('duration-200')
    expect(resting).toContain('ease-in-out')
    expect(resting).toContain('scale-x-0')
    expect(resting).toContain('group-hover:scale-x-100')
    expect(resting).toContain('group-focus-visible:scale-x-100')

    expect(open).toContain('scale-x-100')
    expect(open).not.toContain('scale-x-0')
  })

  it('turns the folded rows into full width blocks at the design own metrics', () => {
    const classes = tokens(navRowClass({ variant: 'panel', current: false }))
    const current = tokens(navRowClass({ variant: 'panel', current: true }))

    expect(classes).toContain('block')
    expect(classes).toContain('w-full')
    expect(classes).toContain('py-[14.4px]')
    expect(classes).toContain('text-panel-row')
    expect(classes).toContain('text-[11px]')
    expect(current).toContain('text-gold')
    expect(current).not.toContain('text-panel-row')
  })

  it('hangs the wide panel under its trigger, two pixels down and four pixels round', () => {
    const classes = tokens(dropdownPanelClass('desktop', false))

    expect(classes).toContain('absolute')
    expect(classes).toContain('top-full')
    expect(classes).toContain('left-0')
    expect(classes).toContain('z-[1000]')
    expect(classes).toContain('min-w-[160px]')
    expect(classes).toContain('py-2')
    expect(classes).toContain('mt-[2px]')
    expect(classes).toContain('bg-white')
    expect(classes).toContain('rounded-panel')
    expect(classes).toContain('shadow-panel')
  })

  it('flips the wide panel to the trigger other edge when it would leave the viewport', () => {
    const flipped = tokens(dropdownPanelClass('desktop', true))

    expect(flipped).toContain('right-0')
    expect(flipped).toContain('left-auto')
    expect(flipped).not.toContain('left-0')
  })

  it('leaves the folded sub-list in the flow, full width on black, square and unshadowed', () => {
    const classes = tokens(dropdownPanelClass('panel', false))

    expect(classes).toContain('w-full')
    expect(classes).toContain('basis-full')
    expect(classes).toContain('bg-bar-dark')
    expect(classes).toContain('rounded-none')
    expect(classes).not.toContain('absolute')
    expect(classes).not.toContain('shadow-panel')
    expect(classes).not.toContain('min-w-[160px]')
  })

  it('draws the panel rows at twelve pixels with a hover the design does not have', () => {
    const wide = tokens(dropdownItemClass('desktop'))
    const folded = tokens(dropdownItemClass('panel'))

    for (const classes of [wide, folded]) {
      expect(classes).toContain('text-[12px]')
      expect(classes).toContain('leading-[1.8]')
      expect(classes).toContain('px-6')
      expect(classes).toContain('py-1')
      expect(classes).toContain('hover:bg-gold')
      expect(classes).toContain('hover:text-black')
      expect(classes).toContain('focus:bg-gold')
    }

    expect(wide).toContain('text-black')
    expect(folded).toContain('text-panel-item')
  })

  it('animates the panel open over a 350ms track and hides it from 992px up', () => {
    const open = tokens(collapseClass(true))
    const shut = tokens(collapseClass(false))

    expect(open).toContain('grid-rows-[1fr]')
    expect(shut).toContain('grid-rows-[0fr]')
    expect(open).toContain('duration-[350ms]')
    expect(open).toContain('ease-collapse')
    expect(open).toContain('transition-[grid-template-rows]')
    expect(open).toContain('lg:hidden')
    expect(tokens(panelListClass)).toContain('pb-[10px]')
  })

  it('dresses the toggler in sixteen pixels of tracked 50% white', () => {
    const classes = tokens(togglerClass)

    expect(classes).toContain('text-[16px]')
    expect(classes).toContain('leading-none')
    expect(classes).toContain('tracking-[1.6px]')
    expect(classes).toContain('uppercase')
    expect(classes).toContain('text-toggler')
    expect(classes).toContain('pt-1')
    expect(classes).toContain('pr-0')
    expect(classes).toContain('pb-1')
    expect(classes).toContain('pl-3')
    expect(classes).toContain('lg:hidden')
    expect(classes).toContain('cursor-pointer')
  })

  it('fixes the search field at the design own 257 by 46 while letting it shrink', () => {
    const form = tokens(searchFormClass)
    const input = tokens(searchInputClass)
    const button = tokens(searchButtonClass)

    expect(form).toContain('h-[46px]')
    expect(form).toContain('w-[257px]')
    expect(form).toContain('rounded-field')
    expect(form).toContain('border-field-hairline')
    expect(form).toContain('overflow-hidden')
    expect(form).toContain('min-w-0')
    expect(form).toContain('shrink')

    expect(input).toContain('w-[calc(100%-46px)]')
    expect(input).toContain('text-[14px]')
    expect(input).toContain('leading-[21px]')
    expect(input).toContain('text-search-ink')
    expect(input).toContain('placeholder:text-search-ink')
    expect(input).toContain('pl-4')
    expect(input).toContain('pr-3')
    expect(input).toContain('pt-[6px]')
    expect(input).toContain('pb-[6px]')
    expect(input).toContain('rounded-none')
    expect(input).toContain('shadow-none')
    expect(input).toContain('focus-visible:outline-2')

    expect(button).toContain('size-[46px]')
    expect(button).toContain('bg-white')
    expect(button).toContain('cursor-pointer')
  })

  it('rings each channel circle at forty pixels in the design own hairline', () => {
    const classes = tokens(channelLinkClass)

    expect(classes).toContain('size-10')
    expect(classes).toContain('rounded-full')
    expect(classes).toContain('border-circle-ring')
    expect(classes).toContain('text-circle-glyph')
    expect(classes).toContain('mr-1')
    expect(classes).toContain('hover:bg-gold')
    expect(classes).toContain('hover:text-white')
    expect(tokens(channelListClass)).toContain('items-start')
  })

  it('locks the wordmark into a two-line 42px lockup in black', () => {
    const classes = tokens(wordmarkClass)

    expect(classes).toContain('text-[20px]')
    expect(classes).toContain('font-bold')
    expect(classes).toContain('leading-none')
    expect(classes).toContain('uppercase')
    expect(classes).toContain('text-black')
    expect(classes).toContain('py-[5px]')
    expect(classes).toContain('mr-4')
    expect(classes).toContain('mb-[30px]')
    expect(classes).toContain('whitespace-nowrap')

    expect(tokens(wordmarkTradeClass)).toContain('block')
    expect(tokens(wordmarkTradeClass)).toContain('text-[12px]')
    expect(tokens(wordmarkTradeClass)).toContain('font-medium')

    expect(tokens(caretClass)).toContain('shrink-0')
    expect(tokens(navTriggerClass)).toContain('gap-[2.805px]')
  })

  it('keeps every destination clear of the bar when it is scrolled to', () => {
    expect(sectionAnchorStyle).toEqual({ scrollMarginTop: HEADER_OFFSET })
  })
})
