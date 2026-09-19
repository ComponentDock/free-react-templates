import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Good/)).toBeInTheDocument()
    expect(screen.getByText(/Drink/)).toBeInTheDocument()
    expect(screen.getByText(/Good/)).toBeInTheDocument()
    expect(screen.getByText(/Moments/)).toBeInTheDocument()
  })

  it('renders Shop Now button', () => {
    render(<Hero />)
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })

  it('renders Read more button', () => {
    render(<Hero />)
    expect(screen.getByText('Read more')).toBeInTheDocument()
  })
})
