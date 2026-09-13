import { render, screen } from '@testing-library/react'
import { OfferFeatures } from './OfferFeatures'

describe('OfferFeatures', () => {
  it('renders the section heading', () => {
    render(<OfferFeatures />)
    expect(
      screen.getByRole('heading', { level: 2, name: /features we offer/i }),
    ).toBeInTheDocument()
  })

  it('renders all four offer cards', () => {
    render(<OfferFeatures />)
    expect(screen.getByText('Easy To Manage')).toBeInTheDocument()
    expect(screen.getByText('Analytics Tool')).toBeInTheDocument()
    expect(screen.getByText('Professionals Tools')).toBeInTheDocument()
    expect(screen.getByText('Ready Content')).toBeInTheDocument()
  })

  it('renders the illustration image', () => {
    render(<OfferFeatures />)
    const img = screen.getByAltText('Features illustration')
    expect(img).toBeInTheDocument()
  })
})
