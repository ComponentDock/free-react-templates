import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders about heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /Who we are to Serve the nation/i }),
    ).toBeInTheDocument()
  })

  it('renders feature items', () => {
    render(<About />)
    expect(screen.getByText('Expert Services')).toBeInTheDocument()
    expect(screen.getByText('Great Support')).toBeInTheDocument()
  })

  it('renders Learn More link', () => {
    render(<About />)
    expect(screen.getByText('Learn More')).toHaveAttribute('href', '#contact')
  })

  it('renders about image', () => {
    render(<About />)
    expect(screen.getByAltText(/Political leader/)).toBeInTheDocument()
  })
})
