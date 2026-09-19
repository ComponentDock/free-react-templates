import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Nike New/i)).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover the latest/)).toBeInTheDocument()
  })

  it('renders the Add to Bag button', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Add to bag')).toBeInTheDocument()
  })

  it('renders the Add to Bag text', () => {
    render(<Hero />)
    expect(screen.getByText('Add to Bag')).toBeInTheDocument()
  })

  it('renders the product image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Featured product')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/mercato-hero/600/600')
  })
})
