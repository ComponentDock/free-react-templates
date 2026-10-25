import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HairlineGrid } from './HairlineGrid'
import { prices } from '../data'

describe('HairlineGrid', () => {
  it('renders one labelled list of cells in order', () => {
    render(<HairlineGrid cells={prices} label="Published prices" />)

    const list = screen.getByRole('list', { name: 'Published prices' })
    expect(list).toHaveClass('hairline-grid')
    expect(list).toHaveClass('sm:grid-cols-2', 'lg:grid-cols-3')

    const cells = Array.from(list.querySelectorAll('li'))
    expect(cells).toHaveLength(6)
    expect(cells.map((cell) => cell.querySelector('h3')?.textContent)).toEqual(
      prices.map((cell) => cell.title),
    )
  })

  it('gives every cell a blurb and a brand-coloured price line', () => {
    render(<HairlineGrid cells={prices} label="Published prices" />)

    for (const cell of prices) {
      expect(screen.getByText(cell.blurb)).toBeInTheDocument()
      const price = screen.getByText(cell.price)
      expect(price).toHaveClass('text-primary-700')
    }
  })
})
