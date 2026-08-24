import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText(/Explore All Corners of The World With Us/)).toBeInTheDocument()
  })

  it('renders descriptive paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })

  it('renders the Read more link', () => {
    render(<About />)
    expect(screen.getByText(/Read more/)).toBeInTheDocument()
  })

  it('renders two images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
  })

  it('has the about section with correct id', () => {
    render(<About />)
    const section = document.getElementById('about')
    expect(section).toBeInTheDocument()
  })
})
