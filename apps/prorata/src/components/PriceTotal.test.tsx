import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PriceTotal } from './PriceTotal'

describe('PriceTotal', () => {
  it('prints the graduated total with its period suffix', () => {
    const { container } = render(<PriceTotal seats={12} id="prorata-total" />)

    const output = screen.getByText('$140')
    expect(output.tagName).toBe('OUTPUT')
    expect(output).toHaveAttribute('id', 'prorata-total')
    expect(output).toHaveAttribute('aria-live', 'off')
    expect(container.querySelector('.pr-per')).toHaveTextContent('/ month')
  })

  it('itemises the tiers in use and highlights the two-decimal average', () => {
    const { container } = render(<PriceTotal seats={12} id="total" />)

    expect(container.querySelector('.pr-detail')).toHaveTextContent(
      '10 × $12 + 2 × $10. Average $11.67 per seat, billed monthly.',
    )
    expect(container.querySelector('.pr-avg')).toHaveTextContent('$11.67')
  })

  it('grows the detail line to three parts past the second boundary', () => {
    const { container, rerender } = render(<PriceTotal seats={51} id="total" />)

    expect(container.querySelector('.pr-detail')).toHaveTextContent(
      '10 × $12 + 40 × $10 + 1 × $8. Average $10.35 per seat, billed monthly.',
    )

    rerender(<PriceTotal seats={200} id="total" />)
    expect(screen.getByText('$1,720')).toBeInTheDocument()
    expect(container.querySelector('.pr-avg')).toHaveTextContent('$8.60')
  })
})
