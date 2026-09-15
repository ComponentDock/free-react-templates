import { render, screen } from '@testing-library/react'
import { BlogPosts } from './BlogPosts'

describe('BlogPosts', () => {
  it('renders section heading', () => {
    render(<BlogPosts />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('renders blog post titles', () => {
    render(<BlogPosts />)
    expect(screen.getByText(/advance yoga positions/i)).toBeInTheDocument()
  })

  it('renders read more links', () => {
    render(<BlogPosts />)
    const links = screen.getAllByText('Read More')
    expect(links.length).toBeGreaterThan(0)
  })
})
