import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Recent Blog')
  })

  it('renders all four blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Explore The Best Restaurant in New York')).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing Trends for 2024')).toBeInTheDocument()
    expect(screen.getByText('How to Build a Strong Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Creative Design Inspiration')).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })

  it('renders author names', () => {
    render(<Blog />)
    expect(screen.getAllByText(/BY JOHAN STEVENSON/i).length).toBe(4)
  })
})
