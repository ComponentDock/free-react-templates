import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Most Relaxing Place')
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Enjoy Your Wonderful Holidays')).toBeInTheDocument()
  })

  it('renders Take A Tour CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Take A Tour' })).toHaveAttribute('href', '#tour')
  })

  it('renders Learn More CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#about')
  })

  it('has hero section with proper aria-label', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
