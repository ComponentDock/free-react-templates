import {
  CURRENT_MARK,
  barClass,
  caretClass,
  collapseClass,
  containerClass,
  desktopListClass,
  dropdownItemClass,
  dropdownPanelClass,
  navItemClass,
  navRowClass,
  panelListClass,
  sectionAnchorStyle,
  togglerClass,
  wordmarkClass,
} from './styles'
import { HEADER_OFFSET } from './site'

const tokens = (value: string) => value.split(' ')

describe('styles — the measured tokens of the solid bar', () => {
  it('sets the band seven ems of padding over the page surface', () => {
    expect(tokens(containerClass)).toContain('px-[15px]')
    expect(tokens(containerClass)).toContain('sm:max-w-[540px]')
    expect(tokens(containerClass)).toContain('md:max-w-[720px]')
    expect(tokens(containerClass)).toContain('lg:max-w-[960px]')
    expect(tokens(containerClass)).toContain('xl:max-w-[1140px]')
  })

  it('draws the bar full bleed, square, unshadowed and never pinned', () => {
    const classes = tokens(barClass)

    expect(classes).toContain('bg-brand')
    expect(classes).toContain('p-0')
    expect(classes).toContain('relative')
    expect(classes).toContain('z-[3]')
    expect(classes).toContain('max-lg:bg-bar-mobile')
    expect(classes).toContain('max-lg:px-[15px]')
    expect(classes).toContain('max-lg:py-[10px]')
    expect(classes).not.toContain('sticky')
    expect(classes).not.toContain('fixed')
    expect(classes).not.toContain('shadow-panel')
    expect(classes.filter((token) => token.startsWith('rounded'))).toHaveLength(0)
  })

  it('stretches the wide list to the bar and pushes it right with its own auto margin', () => {
    const classes = tokens(desktopListClass)

    expect(classes).toContain('items-stretch')
    expect(classes).toContain('lg:ml-auto')
    expect(classes).toContain('flex')
  })

  it('anchors every row, so a panel hangs from its own row and not from the bar', () => {
    expect(tokens(navItemClass)).toContain('relative')
    expect(tokens(navItemClass)).toContain('flex')
    expect(tokens(navItemClass)).toContain('flex-wrap')
  })

  it('draws a wide row at the measured eleven pixel scale in 67.8px of height', () => {
    const classes = tokens(navRowClass({ variant: 'desktop', current: false, cta: false }))

    expect(classes).toContain('text-[11px]')
    expect(classes).toContain('leading-[19.8px]')
    expect(classes).toContain('tracking-[2px]')
    expect(classes).toContain('uppercase')
    expect(classes).toContain('px-5')
    expect(classes).toContain('py-6')
    expect(classes).toContain('text-white')
    expect(classes.filter((token) => token.startsWith('rounded'))).toHaveLength(0)
  })

  it('marks the open destination with an inset underline rather than a colour', () => {
    const current = tokens(navRowClass({ variant: 'desktop', current: true, cta: false }))

    expect(current).toContain(CURRENT_MARK)
    expect(tokens(navRowClass({ variant: 'desktop', current: false, cta: false }))).not.toContain(CURRENT_MARK)
  })

  it('fills the last row with the brand orange block, square, at desktop widths', () => {
    const classes = tokens(navRowClass({ variant: 'desktop', current: false, cta: true }))

    expect(classes).toContain('bg-cta')
    expect(classes).toContain('text-white')
    expect(classes).toContain('px-5')
    expect(classes).toContain('py-6')
    expect(classes.filter((token) => token.startsWith('rounded'))).toHaveLength(0)
  })

  it('turns the panel rows into full width blocks at the design own metrics', () => {
    const classes = tokens(navRowClass({ variant: 'panel', current: false, cta: false }))

    expect(classes).toContain('block')
    expect(classes).toContain('w-full')
    expect(classes).toContain('py-[14.4px]')
    expect(classes).toContain('text-panel-row')
    expect(classes).toContain('text-[11px]')
    expect(tokens(navRowClass({ variant: 'panel', current: true, cta: false }))).toContain('text-white')
  })

  it('rounds only the panel orange block, at five pixels', () => {
    const classes = tokens(navRowClass({ variant: 'panel', current: false, cta: true }))

    expect(classes).toContain('bg-cta')
    expect(classes).toContain('rounded-[5px]')
    expect(classes).toContain('px-[15px]')
    expect(classes).toContain('py-[14.4px]')
  })

  it('hangs the wide panel under its trigger, offset two pixels and four pixels round', () => {
    const classes = tokens(dropdownPanelClass('desktop', false))

    expect(classes).toContain('absolute')
    expect(classes).toContain('top-full')
    expect(classes).toContain('left-0')
    expect(classes).toContain('z-[1000]')
    expect(classes).toContain('min-w-[160px]')
    expect(classes).toContain('py-2')
    expect(classes).toContain('mt-[2px]')
    expect(classes).toContain('bg-white')
    expect(classes).toContain('rounded-[4px]')
    expect(classes).toContain('shadow-panel')
  })

  it('flips the wide panel to the trigger other edge when it would leave the viewport', () => {
    const flipped = tokens(dropdownPanelClass('desktop', true))

    expect(flipped).toContain('right-0')
    expect(flipped).toContain('left-auto')
    expect(flipped).not.toContain('left-0')
  })

  it('lets the panel variant sit in the flow on black behind a hairline', () => {
    const classes = tokens(dropdownPanelClass('panel', false))

    expect(classes).toContain('w-full')
    expect(classes).toContain('basis-full')
    expect(classes).toContain('bg-black')
    expect(classes).toContain('border-hairline')
    expect(classes).toContain('rounded-none')
    expect(classes).not.toContain('absolute')
    expect(classes).not.toContain('shadow-panel')
    expect(classes).not.toContain('min-w-[160px]')
  })

  it('draws the panel rows at twelve pixels on the measured 21.6px line', () => {
    const wide = tokens(dropdownItemClass('desktop'))
    const folded = tokens(dropdownItemClass('panel'))

    for (const classes of [wide, folded]) {
      expect(classes).toContain('text-[12px]')
      expect(classes).toContain('leading-[1.8]')
      expect(classes).toContain('px-6')
      expect(classes).toContain('py-1')
      expect(classes).toContain('hover:bg-brand')
      expect(classes).toContain('focus:bg-brand')
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

  it('sets the wordmark at twenty pixels on a thirty six pixel line', () => {
    const classes = tokens(wordmarkClass)

    expect(classes).toContain('text-[20px]')
    expect(classes).toContain('leading-[36px]')
    expect(classes).toContain('uppercase')
    expect(classes).toContain('py-[5px]')
    expect(classes).toContain('mr-4')
    expect(classes).toContain('text-white')
    expect(classes).toContain('whitespace-nowrap')
    expect(tokens(caretClass)).toContain('shrink-0')
  })

  it('keeps every destination clear of the bar when it is scrolled to', () => {
    expect(sectionAnchorStyle).toEqual({ scrollMarginTop: HEADER_OFFSET })
  })
})
