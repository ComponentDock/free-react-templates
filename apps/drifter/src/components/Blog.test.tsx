import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading and blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Latest Posts from Blog')).toBeInTheDocument()
    expect(screen.getByText('Addiction When Gambling Becomes A Problem')).toBeInTheDocument()
    expect(screen.getByText('Make Your Best Designed Space')).toBeInTheDocument()
    expect(screen.getByText('Playing With Imagination')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
  })

  it('renders post dates and authors', () => {
    render(<Blog />)
    const dates = screen.getAllByText(/By Mark Wiens/)
    expect(dates).toHaveLength(3)
  })
})
