import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders all blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText(/Improve Your Business Cards/)).toBeInTheDocument()
    expect(screen.getByText(/All users on MySpace/)).toBeInTheDocument()
    expect(screen.getByText(/A Pocket PC is a handheld/)).toBeInTheDocument()
  })

  it('renders tag labels', () => {
    render(<Blog />)
    const tags = screen.getAllByText('Marketing')
    expect(tags.length).toBeGreaterThanOrEqual(2)
  })
})
