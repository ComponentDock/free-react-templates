import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Travel More To/)).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Explore breathtaking destinations/)).toBeInTheDocument()
  })

  it('renders the Get Started CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    expect(screen.getByAltText('Travel destination')).toBeInTheDocument()
  })

  it('renders badge overlays', () => {
    render(<Hero />)
    expect(screen.getByText('500+ Destinations')).toBeInTheDocument()
    expect(screen.getByText('Guided Tours')).toBeInTheDocument()
  })
})
