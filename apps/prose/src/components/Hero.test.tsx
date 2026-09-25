import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, subtitle, description, and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Best Seller Book Of The Week')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Clue Of The Wooden Cottage',
    )
    expect(screen.getByText(/captivating journey/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute('href', '#contact')
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: 'Book cover illustration' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('has proper section aria-label', () => {
    render(<Hero />)
    expect(screen.getByRole('region', { name: 'Hero' })).toBeInTheDocument()
  })
})
