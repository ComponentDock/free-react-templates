import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our recent news')).toBeInTheDocument()
  })

  it('renders 2 blog posts', () => {
    render(<Blog />)
    const posts = screen.getAllByText('Footprints in Time is perfect House in Kurashiki')
    expect(posts.length).toBe(2)
  })

  it('renders Read more links', () => {
    render(<Blog />)
    const links = screen.getAllByText(/Read more/)
    expect(links.length).toBe(2)
  })

  it('renders category labels', () => {
    render(<Blog />)
    const cats = screen.getAllByText(/Properties/)
    expect(cats.length).toBe(2)
  })
})
