import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section title', () => {
    render(<Blog />)
    expect(screen.getByText('Blog Posts')).toBeInTheDocument()
  })

  it('renders 4 blog post cards', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(4)
  })
})
