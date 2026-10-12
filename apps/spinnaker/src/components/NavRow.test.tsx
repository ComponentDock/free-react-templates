import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavRow } from './NavRow'
import { NAV } from '../lib/site'
import { navItemClass, navRowClass } from '../lib/styles'

const current = NAV[0]!
const plain = NAV[1]!

describe('NavRow — one plain row of the bar', () => {
  it('marks the row the page is on, and only that one', () => {
    render(
      <ul>
        <NavRow item={current} variant="desktop" />
        <NavRow item={plain} variant="desktop" />
      </ul>,
    )

    const rows = screen.getAllByRole('link')

    expect(rows.map((row) => row.textContent)).toEqual([current.label, plain.label])
    expect(rows[0]).toHaveAttribute('href', current.href)
    expect(rows[0]).toHaveAttribute('aria-current', 'page')
    expect(rows[1]).not.toHaveAttribute('aria-current')
  })

  it('wears the amber at rest only on the current row, and draws no decoration at all', () => {
    render(
      <ul>
        <NavRow item={current} variant="desktop" />
        <NavRow item={plain} variant="desktop" />
      </ul>,
    )

    const rows = screen.getAllByRole('link')

    expect(rows[0]?.className).toBe(navRowClass({ variant: 'desktop', current: true }))
    expect(rows[1]?.className).toBe(navRowClass({ variant: 'desktop', current: false }))
    expect(rows[1]?.className).toContain('text-row')
    expect(rows.every((row) => !row.className.includes('uppercase'))).toBe(true)
    expect(rows.every((row) => !/sticky|fixed/.test(row.className))).toBe(true)
  })

  it('stands the same row in the folded panel as a full-width 54px block', () => {
    render(
      <ul>
        <NavRow item={plain} variant="panel" />
      </ul>,
    )

    const row = screen.getByRole('link')

    expect(row.className).toBe(navRowClass({ variant: 'panel', current: false }))
    expect(row.className).toContain('py-[14.4px]')
    expect(row.parentElement?.className).toBe(navItemClass)
  })

  it('reports an activation so the surface that owns it can fold itself away', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(
      <ul>
        <NavRow item={plain} variant="panel" onNavigate={onNavigate} />
      </ul>,
    )

    const row = screen.getByRole('link')

    row.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(row)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })

  it('renders a row nothing is listening to, without a handler', () => {
    render(
      <ul>
        <NavRow item={plain} variant="desktop" />
      </ul>,
    )

    expect(screen.getByRole('link')).toHaveAttribute('href', plain.href)
  })
})
