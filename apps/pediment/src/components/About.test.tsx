import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('We propose and discuss design rules')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<About />)
    expect(screen.getByText('who are we')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<About />)
    expect(screen.getByText(/Metasurfaces are generally designed/)).toBeInTheDocument()
  })

  it('renders the Learn More CTA button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#services')
  })
})
