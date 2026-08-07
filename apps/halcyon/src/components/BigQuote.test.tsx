import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BigQuote } from './BigQuote'

describe('BigQuote', () => {
  it('shows a large serif quote with peach quote marks', () => {
    render(<BigQuote />)

    const quote = screen.getByRole('blockquote')
    expect(quote.className).toContain('font-serif')
    expect(quote.querySelector('.text-brand')).not.toBeNull()
    expect(screen.getByText(/calm settles over you/i)).toBeInTheDocument()
  })

  it('shows the attribution "— Jean Doe, Spa Customer"', () => {
    render(<BigQuote />)

    expect(screen.getByText(/Jean Doe, Spa Customer/i)).toBeInTheDocument()
  })

  it('shows two overlapping photos on the right', () => {
    const { container } = render(<BigQuote />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(2)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('halcyon-about-1'))
    expect(images[1]).toHaveAttribute('src', expect.stringContaining('halcyon-about-2'))
  })
})
