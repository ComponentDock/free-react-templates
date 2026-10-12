import {
  containerClass,
  flyoutRowClass,
  flyoutRowPosition,
  navLinkClass,
  navRowClass,
  panelRowClass,
} from './styles'

describe('style helpers', () => {
  it('tightens a nav label’s padding once the row is pinned', () => {
    const flow = navLinkClass({ sticky: false })
    const pinned = navLinkClass({ sticky: true })

    expect(flow).toContain('py-5')
    expect(flow).toContain('px-[10px]')
    expect(pinned).toContain('py-[10px]')
    expect(pinned).not.toContain('py-5')
    expect(flow).toContain('text-[15px]')
    expect(flow).toContain('font-medium')
    expect(flow).toContain('text-white/60')
  })

  it('keeps the current row white and reserves the caret gutter on a dropdown parent', () => {
    expect(navLinkClass({ sticky: false, current: true })).toContain('text-white')
    expect(navLinkClass({ sticky: false, current: true })).not.toContain('text-white/60')
    expect(navLinkClass({ sticky: false, branch: true })).toContain('pr-5')
    expect(navLinkClass({ sticky: false })).not.toContain('pr-5')
  })

  it('rounds only the two ends of a flyout surface', () => {
    expect(flyoutRowPosition(0, 4)).toBe('first')
    expect(flyoutRowPosition(3, 4)).toBe('last')
    expect(flyoutRowPosition(1, 4)).toBe('middle')

    expect(flyoutRowClass('first')).toContain('rounded-t-flyout')
    expect(flyoutRowClass('last')).toContain('rounded-b-flyout')
    expect(flyoutRowClass('middle')).not.toContain('rounded')
    expect(flyoutRowClass('middle')).toContain('text-[14px]')
    expect(flyoutRowClass('middle')).toContain('hover:bg-flyout-hover')
  })

  it('steps a panel row in as it goes deeper and blues the current one', () => {
    expect(panelRowClass(1, true)).toContain('text-[20px]')
    expect(panelRowClass(1, true)).toContain('text-brand')
    expect(panelRowClass(1, false)).toContain('text-ink')
    expect(panelRowClass(2, false)).toContain('pl-10')
    expect(panelRowClass(2, false)).toContain('text-[16px]')
    expect(panelRowClass(3, false)).toContain('pl-[60px]')
  })

  it('drops the right padding of the last top-level row only', () => {
    expect(navRowClass(false)).not.toContain('pr-0')
    expect(navRowClass(false)).toContain('px-[5px]')
    expect(navRowClass(false)).toContain('py-[10px]')
    expect(navRowClass(true)).toContain('pr-0')
  })

  it('shares one stepped container across the bands', () => {
    expect(containerClass).toContain('px-[15px]')
    expect(containerClass).toContain('sm:max-w-[540px]')
    expect(containerClass).toContain('xl:max-w-[1140px]')
  })
})
