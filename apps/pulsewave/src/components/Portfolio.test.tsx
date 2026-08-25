import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Awesome Work')
  })

  it('renders all four portfolio items', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img', { name: /high quality design concept/i })
    expect(images.length).toBe(4)
  })

  it('renders the "VIEW MORE PORTFOLIO" button', () => {
    render(<Portfolio />)
    expect(screen.getByRole('link', { name: /view more portfolio/i })).toBeInTheDocument()
  })
})
