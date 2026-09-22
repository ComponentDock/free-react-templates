import { render, screen } from '@testing-library/react'
import { About } from './About'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Ullamcorper mattis/)
  })

  it('renders the Learn More button', () => {
    render(<About />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders the sub-heading', () => {
    render(<About />)
    expect(screen.getByText('Luxury stays with a personal touch')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/Leather detail shoulder/)).toBeInTheDocument()
  })

  it('renders two images', () => {
    render(<About />)
    expect(screen.getByAltText('Scenic hotel landscape view')).toBeInTheDocument()
    expect(screen.getByAltText('Cozy hotel interior')).toBeInTheDocument()
  })
})
