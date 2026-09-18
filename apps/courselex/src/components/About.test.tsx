import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Over 2500 Courses/i)
  })

  it('renders the description paragraph', () => {
    render(<About />)
    expect(screen.getByText(/We bring together the best courses/i)).toBeInTheDocument()
  })

  it('renders the Explore Courses button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /explore courses/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText(/students collaborating/i)
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
