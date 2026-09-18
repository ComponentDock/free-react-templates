import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section heading and description', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Crafted with Intention')
    expect(screen.getByText(/thoughtfully designed/i)).toBeInTheDocument()
  })

  it('renders 3 features with icons', () => {
    render(<About />)
    expect(screen.getByText('Free Shipping')).toBeInTheDocument()
    expect(screen.getByText('Secure Payment')).toBeInTheDocument()
    expect(screen.getByText('Sustainable')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /behind the scenes/i })).toBeInTheDocument()
  })
})
