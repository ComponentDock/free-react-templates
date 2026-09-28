import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the About Us subtitle', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders the section title', () => {
    render(<About />)
    expect(screen.getByText('The Polenta Restaurant')).toBeInTheDocument()
  })

  it('renders the lead text', () => {
    render(<About />)
    expect(screen.getByText(/Welcome to Polenta Restaurant/)).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<About />)
    expect(screen.getByText(/Our passion for authentic cuisine/)).toBeInTheDocument()
  })

  it('renders gallery images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(7)
  })
})
