import { render, screen } from '@testing-library/react'
import { PromoBanner } from './PromoBanner'

describe('PromoBanner', () => {
  it('renders the heading', () => {
    render(<PromoBanner />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Find the Best Hotel in Your Next Vacation',
    )
  })

  it('renders Book Now CTA', () => {
    render(<PromoBanner />)
    expect(screen.getByRole('link', { name: 'Book Now' })).toHaveAttribute('href', '#rooms')
  })
})
