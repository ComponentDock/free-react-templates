import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PortfolioGrid } from './PortfolioGrid'

describe('PortfolioGrid', () => {
  it('displays portfolio items in a grid', () => {
    render(<PortfolioGrid />)
    const items = screen.getAllByRole('img')
    expect(items.length).toBe(12)
  })

  it('each item has an image with alt text', () => {
    render(<PortfolioGrid />)
    const items = screen.getAllByRole('img')
    items.forEach((item) => {
      expect(item).toHaveAttribute('alt')
      expect(item.getAttribute('alt')!.length).toBeGreaterThan(0)
    })
  })

  it('grid is responsive (4 cols desktop, 2 tablet, 1 mobile)', () => {
    render(<PortfolioGrid />)
    const grid = screen.getByTestId('portfolio-grid')
    expect(grid.className).toContain('grid')
    expect(grid.className).toContain('grid-cols-1')
    expect(grid.className).toContain('sm:grid-cols-2')
    expect(grid.className).toContain('lg:grid-cols-4')
  })

  it('items are clickable', async () => {
    const user = userEvent.setup()
    render(<PortfolioGrid />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
    const first = buttons[0]
    if (first) await user.click(first)
  })
})
