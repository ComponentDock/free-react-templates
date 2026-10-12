import {
  chevronClass,
  containerClass,
  ctaColumnClass,
  ctaPrimaryClass,
  ctaSecondaryClass,
  drawerArrowClass,
  drawerBodyClass,
  drawerCloseClass,
  drawerListClass,
  drawerPanelClass,
  drawerSubRowClass,
  flyoutClass,
  flyoutRowClass,
  menuToggleClass,
  navColumnClass,
  navLabelClass,
  navRowClass,
  rowClass,
  sectionAnchorStyle,
  submenuListClass,
  veilClass,
  wordmarkClass,
  wordmarkColumnClass,
} from './styles'
import { HEADER_OFFSET } from './site'

/** Every class a styling helper can emit, so each one can be asserted where it matters. */
const classesOf = (value: string) => value.split(/\s+/)

describe('styles — the bar’s frame', () => {
  it('runs the container full width with 15px gutters that grow to 7rem at 1200px', () => {
    expect(containerClass).toContain('w-full')
    expect(containerClass).toContain('px-[15px]')
    expect(containerClass).toContain('xl:px-28')
    // No cap at any tier: the design never gives this bar a max-width.
    expect(containerClass).not.toContain('max-w-')
    expect(rowClass).toBe('flex flex-wrap -mx-[15px]')
  })

  it('pins the wordmark and the pair out of the flow at 768px, and centres the list at 50%', () => {
    expect(classesOf(wordmarkColumnClass)).toEqual(
      expect.arrayContaining([
        'w-1/2',
        'max-w-[50%]',
        'md:absolute',
        'md:left-[5%]',
        'md:top-0',
        'md:h-16',
      ]),
    )
    expect(classesOf(ctaColumnClass)).toEqual(
      expect.arrayContaining(['md:absolute', 'md:right-[5%]', 'md:top-0', 'justify-end', 'flex']),
    )
    expect(classesOf(navColumnClass)).toEqual(
      expect.arrayContaining(['absolute', 'left-1/2', '-translate-x-1/2', 'hidden', 'xl:block']),
    )
    expect(wordmarkClass).toContain('text-[1.5rem]')
    expect(wordmarkClass).toContain('tracking-[.2rem]')
    expect(wordmarkClass).toContain('uppercase')
    expect(sectionAnchorStyle).toEqual({ scrollMarginTop: HEADER_OFFSET })
  })
})

describe('styles — rows on the bar and rows in the drawer', () => {
  it('draws a wide row inline-block at 16px with 20px on every side', () => {
    const plain = navLabelClass({ variant: 'desktop' })
    const current = navLabelClass({ variant: 'desktop', current: true })
    const branch = navLabelClass({ variant: 'desktop', branch: true })

    expect(navRowClass('desktop')).toBe('inline-block')
    expect(plain).toContain('px-5')
    expect(plain).toContain('py-5')
    expect(plain).toContain('text-[16px]')
    expect(plain).toContain('text-label')
    expect(plain).toContain('hover:text-white')
    expect(current).toContain('text-white')
    expect(current).not.toContain('text-label')
    // The current row keeps the same 20px padding as its neighbours.
    expect(current).toContain('px-5')
    expect(branch).toContain('relative')
    expect(branch).toContain('pr-5')
  })

  it('draws a drawer row as a 50px block at 20px, indented once nested', () => {
    const plain = navLabelClass({ variant: 'drawer' })
    const current = navLabelClass({ variant: 'drawer', current: true })
    const branch = navLabelClass({ variant: 'drawer', branch: true })

    expect(navRowClass('drawer')).toBe('relative block w-full')
    expect(plain).toContain('py-[10px]')
    expect(plain).toContain('px-5')
    expect(plain).toContain('text-[20px]')
    expect(plain).toContain('text-ink')
    expect(plain).toContain('hover:text-brand')
    expect(current).toContain('text-black')
    expect(current).not.toContain('hover:text-brand')
    expect(branch).toContain('pr-14')
    expect(drawerSubRowClass).toContain('pl-10')
    expect(drawerSubRowClass).toContain('text-[16px]')
    expect(submenuListClass).toContain('p-0')
  })
})

describe('styles — the submenu surface', () => {
  it('hangs square and white under its row, flush when open and 20px down when closed', () => {
    const closed = flyoutClass(false, false)
    const open = flyoutClass(true, false)
    const flipped = flyoutClass(true, true)

    for (const value of [closed, open]) {
      expect(value).toContain('min-w-[200px]')
      expect(value).toContain('border-t-2')
      expect(value).toContain('border-brand')
      expect(value).toContain('shadow-flyout')
      expect(value).toContain('duration-200')
      expect(value).not.toContain('rounded')
    }
    expect(closed).toContain('invisible')
    expect(closed).toContain('mt-5')
    expect(closed).toContain('opacity-0')
    expect(open).toContain('visible')
    expect(open).toContain('mt-0')
    expect(open).toContain('opacity-100')
    expect(open).toContain('left-0')
    expect(flipped).toContain('right-0')
    expect(flipped).not.toContain('left-0')
  })

  it('washes a row to the design’s grey, and marks the current one in green', () => {
    const row = flyoutRowClass()
    const current = flyoutRowClass(true)

    expect(row).toContain('px-5')
    expect(row).toContain('py-[9px]')
    expect(row).toContain('text-[16px]')
    expect(row).toContain('leading-[1.4]')
    expect(row).toContain('text-flyout-ink')
    expect(row).toContain('hover:bg-flyout-wash')
    expect(row).toContain('hover:text-ink')
    expect(current).toContain('bg-flyout-wash')
    expect(current).toContain('text-brand')
    expect(current).not.toContain('text-flyout-ink')
  })
})

describe('styles — the pair, the hamburger and the drawer frame', () => {
  it('keeps the pair on a 4px radius, hidden until 992px and inverting on hover', () => {
    expect(classesOf(ctaSecondaryClass)).toEqual(
      expect.arrayContaining([
        'hidden',
        'lg:inline-flex',
        'border-2',
        'border-white',
        'bg-transparent',
        'px-3',
        'py-1.5',
        'rounded-btn',
        'text-[16px]',
        'leading-6',
        'hover:bg-white',
        'hover:text-black',
      ]),
    )
    expect(classesOf(ctaPrimaryClass)).toEqual(
      expect.arrayContaining([
        'hidden',
        'lg:inline-flex',
        'border',
        'border-brand',
        'bg-brand',
        'rounded-btn',
        'hover:bg-brand-hover',
        'hover:border-brand-hover',
      ]),
    )
    // The pair's own 2px height difference: the outline half has the thicker border.
    expect(ctaSecondaryClass).toContain('border-2')
    expect(classesOf(ctaPrimaryClass)).not.toContain('border-2')
  })

  it('sizes the hamburger 28x42, 8px down and 16px in, and hides it at 1200px', () => {
    expect(classesOf(menuToggleClass)).toEqual(
      expect.arrayContaining(['mt-2', 'ml-4', 'h-[42px]', 'w-7', 'xl:hidden', 'cursor-pointer']),
    )
  })

  it('slides the panel in from 110% of its own 300px width over the drawer’s curve', () => {
    expect(classesOf(drawerPanelClass(false))).toEqual(
      expect.arrayContaining([
        'fixed',
        'right-0',
        'top-0',
        'w-[300px]',
        'h-screen',
        'pt-5',
        'z-[2000]',
        'shadow-drawer',
        'ease-drawer',
        'translate-x-[110%]',
      ]),
    )
    expect(drawerPanelClass(true)).toContain('translate-x-0')
    expect(drawerPanelClass(true)).not.toContain('translate-x-[110%]')
    expect(classesOf(veilClass(false))).toEqual(
      expect.arrayContaining(['fixed', 'inset-0', 'z-[1002]', 'bg-overlay', 'opacity-0', 'invisible']),
    )
    expect(veilClass(true)).toContain('opacity-100')
    expect(veilClass(true)).toContain('visible')
    expect(drawerBodyClass).toContain('h-[calc(100vh-52px)]')
    expect(drawerBodyClass).toContain('pb-[150px]')
    expect(drawerListClass).toContain('relative')
    expect(drawerCloseClass).toContain('hover:text-close-hover')
  })

  it('pins a 36px round disclosure to the row and turns its 12px chevron', () => {
    const closed = drawerArrowClass(false)
    const open = drawerArrowClass(true)

    expect(closed).toContain('absolute')
    expect(closed).toContain('top-[10px]')
    expect(closed).toContain('right-0')
    expect(closed).toContain('h-9')
    expect(closed).toContain('w-9')
    expect(closed).toContain('rounded-full')
    expect(closed).toContain('hover:bg-arrow-hover')
    expect(classesOf(closed)).not.toContain('bg-arrow-hover')
    expect(classesOf(open)).toContain('bg-arrow-hover')
    expect(chevronClass(false)).not.toContain('-rotate-180')
    expect(chevronClass(true)).toContain('-rotate-180')
  })
})
