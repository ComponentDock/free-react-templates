import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText('We Believe Little Things Matter')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Gym background')
    expect(img).toBeInTheDocument()
  })
})
