import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/We Craft Awesome Web And/)).toBeInTheDocument()
    expect(screen.getByText(/Graphic Design Solutions/)).toBeInTheDocument()
    expect(screen.getByText(/Support bright students today/)).toBeInTheDocument()
  })

  it('has a CTA link', () => {
    render(<Hero />)
    expect(screen.getByText('Discover More')).toHaveAttribute('href', '#services')
  })
})
