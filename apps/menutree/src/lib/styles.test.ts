import { DROPDOWN_ROW_CLASS, mobileRowClass, navRowClass } from './styles'

describe('navRowClass', () => {
  it('reads near-white over the band and ink once the bar is pinned', () => {
    expect(navRowClass(false)).toContain('text-white/70')
    expect(navRowClass(false)).toContain('text-[13px]')
    expect(navRowClass(false)).toContain('uppercase')
    expect(navRowClass(false)).toContain('px-5')
    expect(navRowClass(false)).toContain('py-5')

    expect(navRowClass(true)).toContain('text-ink')
    expect(navRowClass(true)).toContain('hover:text-brand')
  })
})

describe('mobileRowClass', () => {
  it('sizes the three levels at 20/16/16px with 20/40/60px insets', () => {
    expect(mobileRowClass(1)).toContain('text-[20px]')
    expect(mobileRowClass(1)).toContain('pl-5')

    expect(mobileRowClass(2)).toContain('text-[16px]')
    expect(mobileRowClass(2)).toContain('pl-10')

    expect(mobileRowClass(3)).toContain('text-[16px]')
    expect(mobileRowClass(3)).toContain('pl-[60px]')
  })
})

describe('DROPDOWN_ROW_CLASS', () => {
  it('lays a panel row out at 9px/20px with an #eff1f3 hover', () => {
    expect(DROPDOWN_ROW_CLASS).toContain('px-5 py-[9px]')
    expect(DROPDOWN_ROW_CLASS).toContain('hover:bg-row-hover')
  })
})
