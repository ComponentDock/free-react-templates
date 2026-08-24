import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading and description', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Luxury & Comfort')
    expect(screen.getByText(/Discover a world of elegance/)).toBeInTheDocument()
  })

  it('renders Learn More button', () => {
    render(<About />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(1)
  })

  it('has section id', () => {
    render(<About />)
    expect(document.getElementById('about')).toBeInTheDocument()
  })
})
