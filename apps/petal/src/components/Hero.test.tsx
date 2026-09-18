import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the tagline and heading', () => {
    render(<Hero />)
    expect(screen.getByText('Fresh Flower & Gift Shop')).toBeInTheDocument()
    expect(screen.getByText(/Making beautiful flowers/)).toBeInTheDocument()
  })

  it('renders the Shop now CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /shop now/i })).toHaveAttribute('href', '#shop')
  })
})
