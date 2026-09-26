import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest Posts from Blog')).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Addiction When Gambling Becomes A Problem')).toBeInTheDocument()
    expect(screen.getByText('Make Myspace Your Best Designed Space')).toBeInTheDocument()
    expect(screen.getByText('Video Games Playing With Imagination')).toBeInTheDocument()
  })

  it('renders post dates and authors', () => {
    render(<Blog />)
    const dates = screen.getAllByText(/By Mark Wiens/)
    expect(dates).toHaveLength(3)
  })

  it('renders post excerpts', () => {
    render(<Blog />)
    const excerpts = screen.getAllByText(/Computers have become ubiquitous/i)
    expect(excerpts).toHaveLength(3)
  })

  it('renders blog images with alt text', () => {
    render(<Blog />)
    expect(screen.getByAltText('Addiction When Gambling Becomes A Problem')).toBeInTheDocument()
    expect(screen.getByAltText('Make Myspace Your Best Designed Space')).toBeInTheDocument()
    expect(screen.getByAltText('Video Games Playing With Imagination')).toBeInTheDocument()
  })
})
