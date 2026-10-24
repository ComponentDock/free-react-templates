import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { MostRated } from './MostRated'

describe('MostRated', () => {
  it('shows the first three rated products in a centered section', () => {
    render(<MostRated />)

    const names = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(names).toEqual(['Stone Linen Shirt', 'Cobalt Heels', 'Washed Denim Jacket'])
    expect(screen.getAllByRole('img', { name: 'Rated 5 out of 5' })).toHaveLength(3)
  })

  it('advances the window one card at a time with the next control', async () => {
    const user = userEvent.setup()
    render(<MostRated />)

    await user.click(screen.getByRole('button', { name: 'Next rated products' }))
    expect(screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)).toEqual([
      'Cobalt Heels',
      'Washed Denim Jacket',
      'Olive Leather Tote',
    ])
  })

  it('wraps back to the end with the previous control', async () => {
    const user = userEvent.setup()
    render(<MostRated />)

    await user.click(screen.getByRole('button', { name: 'Previous rated products' }))
    expect(screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)).toEqual([
      'Amber Puffer',
      'Stone Linen Shirt',
      'Cobalt Heels',
    ])
  })

  it('wraps around the full list after five next clicks', async () => {
    const user = userEvent.setup()
    render(<MostRated />)

    for (let click = 0; click < 5; click += 1) {
      await user.click(screen.getByRole('button', { name: 'Next rated products' }))
    }

    expect(screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)).toEqual([
      'Stone Linen Shirt',
      'Cobalt Heels',
      'Washed Denim Jacket',
    ])
    expect(within(screen.getByRole('region', { name: 'Most Rated' })).getAllByRole('article')).toHaveLength(3)
  })
})
