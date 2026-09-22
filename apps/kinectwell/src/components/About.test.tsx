import { render, screen } from '@testing-library/react'
import { About } from './About'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('renders the about title', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument()
  })

  it('renders the about description', () => {
    render(<About />)
    expect(screen.getByText(/dedicated team of licensed physical therapists/)).toBeInTheDocument()
  })

  it('renders all feature items', () => {
    render(<About />)
    expect(screen.getByText('Licensed and experienced therapists')).toBeInTheDocument()
    expect(screen.getByText('Personalized treatment plans')).toBeInTheDocument()
    expect(screen.getByText('State-of-the-art rehabilitation equipment')).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute('href', '#services')
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText('About Kinectwell physical therapy')
    expect(img).toHaveAttribute('src', expect.stringContaining('kinectwell-about'))
  })
})
