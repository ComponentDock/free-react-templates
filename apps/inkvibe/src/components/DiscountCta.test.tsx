import { render, screen } from '@testing-library/react'
import { DiscountCta } from './DiscountCta'

describe('DiscountCta', () => {
  it('renders the heading and offer text', () => {
    render(<DiscountCta />)
    expect(screen.getByRole('heading', { name: /30% off/i })).toBeInTheDocument()
    expect(screen.getByText(/combine your tattoo session/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<DiscountCta />)
    expect(screen.getByRole('link', { name: /claim offer/i })).toHaveAttribute('href', '#pricing')
  })
})
