import { render, screen } from '@testing-library/react'
import { CTABanner } from './CTABanner'

describe('CTABanner', () => {
  it('renders the CTA heading', () => {
    render(<CTABanner />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Need Help/i)
  })

  it('renders the Contact Us button', () => {
    render(<CTABanner />)
    expect(screen.getByRole('link', { name: /Contact Us Now/i })).toBeInTheDocument()
  })

  it('has correct link destination', () => {
    render(<CTABanner />)
    expect(screen.getByRole('link', { name: /Contact Us Now/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
