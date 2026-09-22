import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, subtitle, description and Contact Us link', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', {
        name: /30 Years of Woodworking Experience/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('About Woodworking')).toBeInTheDocument()
    expect(screen.getByText(/Graincraft has been delivering/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })

  it('renders the stat counters', () => {
    render(<About />)
    expect(screen.getByText('1800+')).toBeInTheDocument()
    expect(screen.getByText('1200+')).toBeInTheDocument()
    expect(screen.getByText('150+')).toBeInTheDocument()
  })

  it('renders the about images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
