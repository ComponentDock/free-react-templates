import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section title', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('renders 3 blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('How to Save Money on Your Taxes This Year')).toBeInTheDocument()
    expect(screen.getByText('Understanding Credit Scores: A Complete Guide')).toBeInTheDocument()
    expect(screen.getByText('Investment Strategies for Beginners')).toBeInTheDocument()
  })

  it('renders Continue Reading links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Continue Reading...')
    expect(links.length).toBe(3)
  })
})
