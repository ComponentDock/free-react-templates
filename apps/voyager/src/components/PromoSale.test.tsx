import { render, screen } from '@testing-library/react'
import { PromoSale } from './PromoSale'

describe('PromoSale', () => {
  it('renders the sale percentage', () => {
    render(<PromoSale />)
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('%')).toBeInTheDocument()
    expect(screen.getByText('Off')).toBeInTheDocument()
  })

  it('renders sale heading and CTA buttons', () => {
    render(<PromoSale />)
    expect(screen.getByText('Sale')).toBeInTheDocument()
    expect(screen.getByText('Book Now')).toBeInTheDocument()
    expect(screen.getByText('Read more')).toBeInTheDocument()
  })

  it('has a play button for video', () => {
    render(<PromoSale />)
    expect(screen.getByLabelText('Play video')).toBeInTheDocument()
  })

  it('has proper aria label', () => {
    render(<PromoSale />)
    expect(screen.getByLabelText('Special offer')).toBeInTheDocument()
  })
})
