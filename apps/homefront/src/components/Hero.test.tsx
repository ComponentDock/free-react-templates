import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders property cards with addresses', () => {
    render(<Hero />)
    expect(screen.getByText('Florida 5, Pinecrest, FL')).toBeInTheDocument()
    expect(screen.getByText('3015 Grand Avenue, CocoWalk')).toBeInTheDocument()
    expect(screen.getByText('88 Ocean Drive')).toBeInTheDocument()
  })

  it('renders property prices', () => {
    render(<Hero />)
    expect(screen.getByText('$485,000')).toBeInTheDocument()
    expect(screen.getByText('$320,000')).toBeInTheDocument()
    expect(screen.getByText('$2,800/mo')).toBeInTheDocument()
  })

  it('renders sale and rent badges', () => {
    render(<Hero />)
    expect(screen.getAllByText('Sale').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Rent')).toBeInTheDocument()
  })

  it('renders View Details links', () => {
    render(<Hero />)
    const links = screen.getAllByText('View Details')
    expect(links).toHaveLength(3)
  })

  it('renders property images', () => {
    render(<Hero />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })
})
