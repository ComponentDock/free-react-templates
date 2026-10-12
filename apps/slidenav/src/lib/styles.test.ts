import { navRowClass, panelRowClass } from './styles'

describe('navRowClass', () => {
  it('is a 15px near-white row with a 1px white bar that only scales in on hover/focus', () => {
    const classes = navRowClass(false)
    const tokens = classes.split(' ')

    expect(tokens).toEqual(expect.arrayContaining(['text-[15px]', 'text-white/70', 'py-5', 'mx-[15px]']))
    expect(tokens).toEqual(expect.arrayContaining(['after:h-px', 'after:bg-white', 'after:bottom-0']))
    expect(tokens).toContain('after:scale-x-0')
    expect(tokens).toContain('after:transition-transform')
    expect(tokens).toContain('hover:after:scale-x-100')
    expect(tokens).toContain('focus-visible:after:scale-x-100')
    expect(tokens).not.toContain('after:scale-x-100')
  })

  it('ships the current item already scaled up and solid white', () => {
    const tokens = navRowClass(true).split(' ')

    expect(tokens).toContain('after:scale-x-100')
    expect(tokens).toContain('text-white')
    expect(tokens).not.toContain('text-white/70')
  })
})

describe('panelRowClass', () => {
  it('lays a panel row out at 10px/20px in ink, coral on hover/focus', () => {
    const tokens = panelRowClass(false).split(' ')

    expect(tokens).toEqual(expect.arrayContaining(['px-5', 'py-[10px]', 'text-[20px]', 'text-ink']))
    expect(tokens).toContain('hover:text-band')
    expect(tokens).toContain('focus-visible:text-band')
    expect(tokens).not.toContain('text-band')
  })

  it('paints the current row coral', () => {
    const tokens = panelRowClass(true).split(' ')

    expect(tokens).toContain('text-band')
    expect(tokens).not.toContain('text-ink')
  })
})
