import {
  dropdownRowClass,
  dropdownTriggerClass,
  expanderClass,
  expanderIconClass,
  navLabelClass,
  panelChildLevel,
  panelRowClass,
} from './styles'

describe('navLabelClass', () => {
  it('is a 16px white pill label that only fills on hover/focus', () => {
    const tokens = navLabelClass(false, false).split(' ')

    expect(tokens).toEqual(
      expect.arrayContaining([
        'inline-block',
        'rounded-[30px]',
        'px-5',
        'py-[5px]',
        'transition-all',
        'duration-300',
      ]),
    )
    expect(tokens).toContain('group-hover:bg-accent')
    expect(tokens).toContain('group-focus-visible:ring-2')
    expect(tokens).not.toContain('bg-accent')
    expect(tokens).not.toContain('pr-[30px]')
  })

  it('widens the right padding for a chevron row without losing the left padding', () => {
    const tokens = navLabelClass(false, true).split(' ')

    expect(tokens).toContain('px-5')
    expect(tokens).toContain('pr-[30px]')
    expect(tokens).not.toContain('bg-accent')
  })

  it('ships the current or open item already filled accent', () => {
    expect(navLabelClass(true, false).split(' ')).toEqual(
      expect.arrayContaining(['bg-accent', 'text-white']),
    )
  })
})

describe('dropdownRowClass', () => {
  it('is a 9px/20px white row in #343a40 with a light wash on hover/focus', () => {
    const tokens = dropdownRowClass(false).split(' ')

    expect(tokens).toEqual(expect.arrayContaining(['block', 'w-full', 'px-5', 'py-[9px]']))
    expect(tokens).toContain('text-row')
    expect(tokens).toContain('hover:bg-row-hover')
    expect(tokens).toContain('focus-visible:bg-row-hover')
    expect(tokens).not.toContain('text-accent')
  })

  it('paints the current row accent', () => {
    const tokens = dropdownRowClass(true).split(' ')

    expect(tokens).toContain('text-accent')
    expect(tokens).not.toContain('text-row')
  })
})

describe('dropdownTriggerClass', () => {
  it('keeps the row shape and pushes the chevron to the far edge', () => {
    const tokens = dropdownTriggerClass(false).split(/\s+/)

    expect(tokens).toEqual(expect.arrayContaining(['flex', 'items-center', 'justify-between']))
    expect(tokens).toContain('w-full')
    expect(tokens).toContain('text-row')
  })
})

describe('panelRowClass', () => {
  it('indents and scales each depth: 20px, 40px, 60px padding-left', () => {
    const first = panelRowClass(1, false).split(' ')
    const second = panelRowClass(2, false).split(' ')
    const third = panelRowClass(3, false).split(' ')

    expect(first).toEqual(expect.arrayContaining(['block', 'py-[10px]', 'text-ink', 'pl-5']))
    expect(first).toContain('text-[20px]')
    expect(second).toEqual(expect.arrayContaining(['pl-10', 'text-[16px]']))
    expect(third).toEqual(expect.arrayContaining(['pl-[60px]', 'text-[16px]']))

    expect(first).toContain('hover:text-accent')
    expect(first).not.toContain('text-accent')
  })

  it('paints the current row accent', () => {
    const tokens = panelRowClass(1, true).split(' ')

    expect(tokens).toContain('text-accent')
  })
})

describe('panelChildLevel', () => {
  it('steps one level down and stops at the deepest scale', () => {
    expect(panelChildLevel(1)).toBe(2)
    expect(panelChildLevel(2)).toBe(3)
    expect(panelChildLevel(3)).toBe(3)
  })
})

describe('expanderClass', () => {
  it('is a round 36x36 hover-washed control that lights up while expanded', () => {
    const collapsed = expanderClass(false).split(' ')

    expect(collapsed).toEqual(
      expect.arrayContaining(['absolute', 'top-[10px]', 'right-0', 'h-9', 'w-9', 'rounded-full']),
    )
    expect(collapsed).toContain('hover:bg-soft')
    expect(collapsed).not.toContain('bg-soft')

    expect(expanderClass(true).split(' ')).toContain('bg-soft')
  })
})

describe('expanderIconClass', () => {
  it('points the 12px chevron down while collapsed and up while expanded', () => {
    expect(expanderIconClass(false).split(' ')).toEqual(
      expect.arrayContaining(['h-3', 'w-3', 'rotate-0']),
    )
    expect(expanderIconClass(true).split(' ')).toContain('rotate-180')
  })
})
