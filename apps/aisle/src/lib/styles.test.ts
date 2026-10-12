import { describe, expect, it } from 'vitest'
import {
  ceremonyFillClass,
  detailCardClass,
  detailDotClass,
  foldedLinkClass,
  navLinkClass,
} from './styles'

describe('navLinkClass', () => {
  it('paints the live row with the rose border and leaves the others to the pointer', () => {
    expect(navLinkClass(true)).toContain('border-brand')
    expect(navLinkClass(true)).not.toContain('hover:border-brand')
    expect(navLinkClass(false)).toContain('hover:border-brand')
  })
})

describe('foldedLinkClass', () => {
  it('indents the design\'s three levels by 15, 25 and 35px', () => {
    expect(foldedLinkClass(0)).toContain('pl-[15px]')
    expect(foldedLinkClass(1)).toContain('pl-[25px]')
    expect(foldedLinkClass(2)).toContain('pl-[35px]')
  })
})

describe('detailCardClass', () => {
  it('floats the right-hand cards and flips the left-hand ones', () => {
    expect(detailCardClass('right')).toContain('float-right')
    expect(detailCardClass('right')).toContain('text-left')
    expect(detailCardClass('left')).toContain('float-left')
    expect(detailCardClass('left')).toContain('text-right')
    expect(detailCardClass('left')).toContain('max-md:float-none')
  })
})

describe('detailDotClass', () => {
  it('pins the dot to whichever side of the spine owns the card', () => {
    expect(detailDotClass('right')).toContain('-left-[9px]')
    expect(detailDotClass('left')).toContain('-right-[9px]')
    expect(detailDotClass('left')).toContain('max-md:-left-[9px]')
  })
})

describe('ceremonyFillClass', () => {
  it('waits the fill off the label when motion is welcome', () => {
    const animated = ceremonyFillClass(true)

    expect(animated).toContain('-translate-x-[130%]')
    expect(animated).toContain('group-hover:translate-x-0')
  })

  it('sits the fill under the label when the visitor asked for less movement', () => {
    const still = ceremonyFillClass(false)

    expect(still).toContain('translate-x-0')
    expect(still).not.toContain('-translate-x-[130%]')
  })
})
