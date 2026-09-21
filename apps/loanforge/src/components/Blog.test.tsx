import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)

    expect(screen.getByText(/News form our latest blog/i)).toBeInTheDocument()
    expect(screen.getByText(/News from around the world selected by us/i)).toBeInTheDocument()
  })

  it('renders blog cards with titles and metadata', () => {
    render(<Blog />)

    expect(screen.getByText(/How to Secure a Business Loan/i)).toBeInTheDocument()
    expect(screen.getByText(/Top 5 Tips for Managing/i)).toBeInTheDocument()
    expect(screen.getByText('March 15, 2025')).toBeInTheDocument()
    expect(screen.getByText('March 10, 2025')).toBeInTheDocument()
    expect(screen.getByText('Admin')).toBeInTheDocument()
    expect(screen.getByText('Editor')).toBeInTheDocument()
  })

  it('has blog post images', () => {
    render(<Blog />)

    expect(screen.getByAltText(/How to Secure a Business Loan/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Top 5 Tips for Managing/i)).toBeInTheDocument()
  })

  it('has article links', () => {
    render(<Blog />)

    const articles = screen.getAllByRole('article')
    expect(articles.length).toBe(2)
  })
})
