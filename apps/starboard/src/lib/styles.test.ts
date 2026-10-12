import { panelRowClass } from './styles'

describe('panelRowClass', () => {
  it('shapes a sidebar row: 10px/20px block padding at 20px, no rounding anywhere', () => {
    const plain = panelRowClass(false)

    expect(plain).toContain('block')
    expect(plain).toContain('py-[10px]')
    expect(plain).toContain('px-5')
    expect(plain).toContain('text-[20px]')
    expect(plain).toContain('text-ink')
    expect(plain).not.toMatch(/rounded|aspect-square|\bborder-radius\b/)
  })

  it('turns brand blue on hover and focus, and ships already blue on the current row', () => {
    const plain = panelRowClass(false).split(' ')
    const current = panelRowClass(true).split(' ')

    expect(plain).toContain('hover:text-brand')
    expect(plain).toContain('focus-visible:text-brand')
    expect(plain).not.toContain('text-brand')
    expect(plain).toContain('text-ink')
    expect(current).toContain('text-brand')
    expect(current).not.toContain('text-ink')
  })
})
