import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading and description', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about our coaching/i })).toBeInTheDocument()
    expect(screen.getByText(/we help professionals and entrepreneurs/i)).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /coaching session/i })).toHaveAttribute(
      'src',
      expect.stringContaining('elevate-about'),
    )
  })

  it('renders the Learn More button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute('href', '#services')
  })
})
