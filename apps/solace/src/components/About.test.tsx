import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Solace A Hotel Booking Agency',
    )
  })

  it('renders about text', () => {
    render(<About />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })

  it('renders Book Your Room Now CTA', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'Book Your Room Now' })).toBeInTheDocument()
  })

  it('renders images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })

  it('has section id for navigation', () => {
    const { container } = render(<About />)
    expect(container.querySelector('#about')).toBeInTheDocument()
  })
})
