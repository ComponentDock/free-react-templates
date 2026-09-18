import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CarListings } from './CarListings'

describe('CarListings', () => {
  it('renders the heading', () => {
    render(<CarListings />)
    expect(screen.getByText('Best Vehicle Offers')).toBeInTheDocument()
  })

  it('renders all 6 car cards', () => {
    render(<CarListings />)
    const names = [
      'Toyota Camry',
      'Honda CR-V',
      'BMW X5',
      'Ford Mustang',
      'Mercedes C-Class',
      'Audi Q7',
    ]
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders prices for each car', () => {
    render(<CarListings />)
    const prices = ['$299/mo', '$349/mo', '$599/mo', '$449/mo', '$529/mo', '$679/mo']
    for (const price of prices) {
      expect(screen.getByText(price)).toBeInTheDocument()
    }
  })

  it('renders car images with alt text', () => {
    render(<CarListings />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
    expect(images[0]).toHaveAttribute('alt', 'Toyota Camry')
  })

  it('renders 6 cards in a grid', () => {
    const { container } = render(<CarListings />)
    const cards = container.querySelectorAll('.overflow-hidden.rounded-\\[2px\\]')
    expect(cards).toHaveLength(6)
  })
})
