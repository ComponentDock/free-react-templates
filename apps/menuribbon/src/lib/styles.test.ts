import {
  barLabelClass,
  dropdownRowClass,
  dropdownTriggerClass,
  expanderClass,
  expanderIconClass,
  panelChildLevel,
  panelRowClass,
  topBarLinkClass,
} from './styles'

describe('barLabelClass', () => {
  it('is bare 16px text at 20px padding that only takes the accent on hover', () => {
    const tokens = barLabelClass(false, false).split(' ')

    expect(tokens).toEqual(
      expect.arrayContaining([
        'inline-block',
        'py-5',
        'text-[16px]',
        'text-black',
        'transition-colors',
        'duration-300',
      ]),
    )
    expect(tokens).toContain('hover:text-accent')
    expect(tokens).toContain('focus-visible:outline-accent')
    expect(tokens).not.toContain('text-accent')
    expect(tokens).not.toContain('pr-[20px]')
    expect(tokens).not.toContain('bg-accent')
    expect(tokens).not.toContain('border')
  })

  it('widens the right padding to 20px for a row that opens a panel', () => {
    const tokens = barLabelClass(true, false).split(' ')

    expect(tokens).toContain('py-5')
    expect(tokens).toContain('pr-[20px]')
    expect(tokens).not.toContain('text-accent')
  })

  it('ships the current row already accent', () => {
    expect(barLabelClass(false, true).split(' ')).toContain('text-accent')
  })
})

describe('dropdownRowClass', () => {
  it('is a 9px/20px white row in black with the soft wash on hover/focus', () => {
    const tokens = dropdownRowClass(false).split(' ')

    expect(tokens).toEqual(
      expect.arrayContaining(['block', 'w-full', 'px-5', 'py-[9px]', 'text-black', 'text-[16px]']),
    )
    expect(tokens).toContain('hover:bg-soft')
    expect(tokens).toContain('hover:text-muted')
    expect(tokens).toContain('focus-visible:bg-soft')
    expect(tokens).not.toContain('bg-soft')
  })

  it('ships the current row accent on the soft wash', () => {
    const tokens = dropdownRowClass(true).split(' ')

    expect(tokens).toContain('bg-soft')
    expect(tokens).toContain('text-accent')
    expect(tokens).not.toContain('text-black')
  })
})

describe('dropdownTriggerClass', () => {
  it('lays a nested trigger out as a row with the chevron pushed to the right', () => {
    const tokens = dropdownTriggerClass(false).split(' ')

    expect(tokens).toEqual(expect.arrayContaining(['flex', 'items-center', 'justify-between']))
    expect(tokens).toContain('w-full')
    expect(tokens).toContain('py-[9px]')
    expect(tokens).toContain('text-black')
  })

  it('keeps the accent tone on a current nested trigger', () => {
    expect(dropdownTriggerClass(true).split(' ')).toContain('text-accent')
  })
})

describe('panelRowClass', () => {
  it('scales the row by depth: 20px ink at level 1', () => {
    const tokens = panelRowClass(1, false).split(' ')

    expect(tokens).toEqual(expect.arrayContaining(['block', 'py-[10px]', 'pl-5', 'text-[20px]']))
    expect(tokens).toContain('text-ink')
    expect(tokens).toContain('hover:text-accent')
  })

  it('indents to 40px at level 2 and 60px at level 3, both at 16px type', () => {
    expect(panelRowClass(2, false).split(' ')).toEqual(
      expect.arrayContaining(['pl-10', 'text-[16px]']),
    )
    expect(panelRowClass(3, false).split(' ')).toEqual(
      expect.arrayContaining(['pl-[60px]', 'text-[16px]']),
    )
  })

  it('ships the current panel row already accent', () => {
    const tokens = panelRowClass(1, true).split(' ')

    expect(tokens).toContain('text-accent')
    expect(tokens).not.toContain('text-ink')
  })
})

describe('panelChildLevel', () => {
  it('steps one level deeper, and stops at the third level', () => {
    expect(panelChildLevel(1)).toBe(2)
    expect(panelChildLevel(2)).toBe(3)
    expect(panelChildLevel(3)).toBe(3)
  })
})

describe('expanderClass', () => {
  it('is a round 36x36 square-corners-free control that washes soft when open', () => {
    const closed = expanderClass(false).split(' ')

    expect(closed).toEqual(
      expect.arrayContaining([
        'absolute',
        'top-[10px]',
        'right-0',
        'h-9',
        'w-9',
        'rounded-full',
        'hover:bg-soft',
      ]),
    )
    expect(closed).not.toContain('bg-soft')
    expect(expanderClass(true).split(' ')).toContain('bg-soft')
  })
})

describe('expanderIconClass', () => {
  it('points up while collapsed and down once expanded', () => {
    expect(expanderIconClass(false).split(' ')).toContain('rotate-180')
    expect(expanderIconClass(true).split(' ')).toContain('rotate-0')
    expect(expanderIconClass(true)).toContain('transition-transform')
  })
})

describe('topBarLinkClass', () => {
  it('is a #666666-to-accent utility-bar link with no underline', () => {
    const tokens = topBarLinkClass().split(' ')

    expect(tokens).toEqual(expect.arrayContaining(['inline-flex', 'items-center']))
    expect(tokens).toContain('hover:text-accent')
    expect(tokens).not.toContain('underline')
  })
})
