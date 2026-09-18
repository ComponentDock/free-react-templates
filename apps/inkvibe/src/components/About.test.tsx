import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and subheading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument()
    expect(screen.getByText(/our tattoos last longer than most marriages/i)).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<About />)
    expect(screen.getByText(/over a decade of experience/i)).toBeInTheDocument()
    expect(screen.getByText(/minimalist designs to full sleeves/i)).toBeInTheDocument()
  })

  it('renders the about images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(1)
  })
})
