import {
  columnClass,
  containerClass,
  drawerBodyClass,
  drawerCloseClass,
  drawerListClass,
  drawerPanelClass,
  drawerStripClass,
  headerClass,
  heroClass,
  leftGroupClass,
  menuToggleClass,
  navLabelClass,
  navListClass,
  navRowClass,
  rightGroupClass,
  rowClass,
  sectionAnchorStyle,
  toggleColumnClass,
  veilClass,
  wordmarkClass,
  wordmarkColumnClass,
} from './styles'
import { HEADER_OFFSET } from './site'

describe('styles — the bar, its two groups and the drawer', () => {
  it('keeps the bar opaque and in the flow, and hands the band its bottom edge', () => {
    expect(headerClass).toContain('relative')
    expect(headerClass).toContain('bg-white')
    expect(headerClass).toContain('px-4')
    expect(headerClass).toContain('py-4')
    expect(headerClass).toContain('z-[1999]')
    expect(headerClass).toContain('w-full')
    // Never pinned: the design is solid and in the flow at every width.
    expect(headerClass).not.toContain('fixed')
    expect(headerClass).not.toContain('sticky')
    expect(headerClass).not.toContain('absolute')
  })

  it('takes the design’s container tiers and its cancelled-out gutters', () => {
    expect(containerClass).toContain('mx-auto')
    expect(containerClass).toContain('w-full')
    expect(containerClass).toContain('px-[15px]')
    expect(containerClass).toContain('sm:max-w-[540px]')
    expect(containerClass).toContain('md:max-w-[720px]')
    expect(containerClass).toContain('lg:max-w-[960px]')
    expect(containerClass).toContain('xl:max-w-[1140px]')

    expect(rowClass).toContain('flex')
    expect(rowClass).toContain('flex-wrap')
    expect(rowClass).toContain('items-center')
    expect(rowClass).toContain('-mx-[15px]')
    expect(rowClass).toContain('relative')
  })

  it('puts all three columns on one line as exact thirds from 992px up', () => {
    expect(columnClass).toContain('w-full')
    expect(columnClass).toContain('px-[15px]')
    expect(columnClass).toContain('lg:max-w-[33.33333%]')
    expect(columnClass).toContain('lg:flex-[0_0_33.33333%]')

    // Both groups and the wordmark's column are thirds of the same row: without it
    // the middle column takes the whole line and the bar wraps to 200px.
    for (const className of [leftGroupClass, rightGroupClass, wordmarkColumnClass]) {
      expect(className).toContain('lg:flex-[0_0_33.33333%]')
      expect(className).toContain('lg:max-w-[33.33333%]')
    }
  })

  it('aligns each group against the middle column, not into the page edges', () => {
    expect(leftGroupClass).toContain('text-right')
    expect(leftGroupClass).toContain('mr-auto')
    expect(rightGroupClass).toContain('text-left')
    expect(rightGroupClass).toContain('ml-auto')
  })

  it('centres the wordmark in the middle third and parks the hamburger at the right', () => {
    expect(wordmarkColumnClass).toContain('text-left')
    expect(wordmarkColumnClass).toContain('lg:text-center')
    expect(wordmarkColumnClass).toContain('w-full')

    expect(wordmarkClass).toContain('lowercase')
    expect(wordmarkClass).toContain('text-[1.7rem]')
    expect(wordmarkClass).toContain('text-brand')
    expect(wordmarkClass).toContain('font-normal')
    expect(wordmarkClass).toContain('leading-[1.5]')

    expect(toggleColumnClass).toContain('absolute')
    expect(toggleColumnClass).toContain('right-0')
    expect(toggleColumnClass).toContain('top-0')
    expect(toggleColumnClass).toContain('w-7')
    expect(toggleColumnClass).toContain('lg:hidden')

    // 28px wide inside the column, with a tap target taller than the box it sits in.
    expect(menuToggleClass).toContain('w-7')
    expect(menuToggleClass).toContain('h-[65.59px]')
    expect(menuToggleClass).toContain('-mt-3')
    expect(menuToggleClass).toContain('text-label')
  })

  it('hides both lists below 992px and shows them from there up', () => {
    expect(navListClass).toContain('hidden')
    expect(navListClass).toContain('lg:block')
    expect(navListClass).toContain('list-none')
  })

  it('draws a 64px bar row and a 50px drawer row from the same label helper', () => {
    expect(navRowClass('desktop')).toBe('inline-block')
    expect(navRowClass('drawer')).toContain('block')
    expect(navRowClass('drawer')).toContain('w-full')

    const barRow = navLabelClass({ variant: 'desktop' })

    expect(barRow).toContain('py-5')
    expect(barRow).toContain('mx-[15px]')
    expect(barRow).toContain('text-[16px]')
    expect(barRow).toContain('leading-6')
    expect(barRow).toContain('text-label')
    expect(barRow).toContain('hover:text-brand')

    const openRow = navLabelClass({ variant: 'desktop', current: true })

    expect(openRow).toContain('text-brand')
    expect(openRow).not.toContain('text-label')

    const drawerRow = navLabelClass({ variant: 'drawer' })

    expect(drawerRow).toContain('px-5')
    expect(drawerRow).toContain('py-[10px]')
    expect(drawerRow).toContain('text-[20px]')
    expect(drawerRow).toContain('leading-[30px]')
    expect(drawerRow).toContain('text-ink')
    expect(drawerRow).toContain('hover:text-brand')

    expect(navLabelClass({ variant: 'drawer', current: true })).toContain('text-brand')
  })

  it('gives every label a focus ring, because the design gives its rows none', () => {
    for (const className of [
      navLabelClass({ variant: 'desktop' }),
      navLabelClass({ variant: 'drawer' }),
      drawerCloseClass,
      menuToggleClass,
    ]) {
      expect(className).toContain('focus-visible:outline-2')
    }
  })

  it('slides a 300px panel in over the veil, over 300ms of the design’s easing', () => {
    const open = drawerPanelClass(true)
    const closed = drawerPanelClass(false)

    for (const className of [open, closed]) {
      expect(className).toContain('fixed')
      expect(className).toContain('right-0')
      expect(className).toContain('w-[300px]')
      expect(className).toContain('h-screen')
      expect(className).toContain('bg-white')
      expect(className).toContain('z-[2000]')
      expect(className).toContain('shadow-drawer')
      expect(className).toContain('duration-300')
      expect(className).toContain('ease-drawer')
    }

    expect(open).toContain('translate-x-0')
    expect(closed).toContain('translate-x-[110%]')
  })

  it('fades a 50% veil in below the bar and above the page', () => {
    expect(veilClass(true)).toContain('visible')
    expect(veilClass(true)).toContain('opacity-100')
    expect(veilClass(false)).toContain('invisible')
    expect(veilClass(false)).toContain('opacity-0')

    for (const className of [veilClass(true), veilClass(false)]) {
      expect(className).toContain('bg-overlay')
      expect(className).toContain('z-[1002]')
      expect(className).toContain('fixed')
      expect(className).toContain('inset-0')
    }
  })

  it('gives the drawer a strip, a scrolling body with 150px of tail, and a flat list', () => {
    expect(drawerStripClass).toContain('px-5')
    expect(drawerStripClass).toContain('justify-end')
    expect(drawerBodyClass).toContain('h-[calc(100vh-52px)]')
    expect(drawerBodyClass).toContain('overflow-y-scroll')
    expect(drawerBodyClass).toContain('pb-[150px]')
    expect(drawerListClass).toContain('list-none')
  })

  it('covers the viewport with the band and clears the bar when it scrolls to a section', () => {
    expect(heroClass).toContain('h-screen')
    expect(heroClass).toContain('bg-cover')
    expect(heroClass).toContain('bg-center')
    expect(heroClass).toContain('bg-no-repeat')

    expect(sectionAnchorStyle.scrollMarginTop).toBe(HEADER_OFFSET)
  })
})
