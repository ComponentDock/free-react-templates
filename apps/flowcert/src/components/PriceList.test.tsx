import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PriceList } from './PriceList'
import { prices } from '../data'

describe('PriceList', () => {
  it('publishes the six prices in the reference order', () => {
    render(<PriceList />)

    const list = screen.getByRole('list', { name: 'Published prices' })
    const priceLines = Array.from(list.querySelectorAll('li > p:last-child')).map(
      (line) => line.textContent,
    )

    expect(priceLines).toEqual(['$85', '$45', '$135', 'From $195', 'From $165', 'Quoted at the test'])
  })

  it('renders the eyebrow, heading and the sample-pricing footnote', () => {
    render(<PriceList />)

    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'The price is on the website, which should not be unusual',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Sample pricing for demonstration/)).toBeInTheDocument()
  })

  it('divides cells with the block ground rather than per-cell borders', () => {
    render(<PriceList />)

    const list = screen.getByRole('list', { name: 'Published prices' })
    expect(list).toHaveClass('hairline-grid')

    for (const cell of prices) {
      const line = screen.getByText(cell.title).closest('li')
      expect(line).toHaveClass('bg-white')
      expect(line?.className).not.toContain('border')
    }
  })
})
