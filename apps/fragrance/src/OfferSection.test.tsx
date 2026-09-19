import { render, screen } from '@testing-library/react'
import { OfferSection } from './components/OfferSection'

describe('OfferSection', () => {
  it('renders "Winter Sale" subtitle', () => {
    render(<OfferSection />)
    expect(screen.getByText('Winter Sale')).toBeInTheDocument()
  })

  it('renders "Up To 50% Off" heading', () => {
    render(<OfferSection />)
    expect(screen.getByRole('heading', { name: /up to 50% off/i })).toBeInTheDocument()
  })

  it('renders "Shop Now" button', () => {
    render(<OfferSection />)
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<OfferSection />)
    expect(screen.getByText(/grab the best deals/i)).toBeInTheDocument()
  })
})
