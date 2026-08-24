import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText(/Recent Posts/)).toBeInTheDocument()
  })

  it('renders all four blog cards', () => {
    render(<Blog />)
    const headings = screen.getAllByText(/Far far away, behind the word mountains/)
    expect(headings).toHaveLength(4)
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText(/Read More/)
    expect(readMoreLinks).toHaveLength(4)
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })

  it('renders dates', () => {
    render(<Blog />)
    expect(screen.getByText('March 15, 2025')).toBeInTheDocument()
    expect(screen.getByText('March 10, 2025')).toBeInTheDocument()
    expect(screen.getByText('March 5, 2025')).toBeInTheDocument()
    expect(screen.getByText('February 28, 2025')).toBeInTheDocument()
  })

  it('has the blog section with correct id', () => {
    render(<Blog />)
    const section = document.getElementById('blog')
    expect(section).toBeInTheDocument()
  })
})
