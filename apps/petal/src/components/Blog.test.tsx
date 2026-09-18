import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section title', () => {
    render(<Blog />)
    expect(screen.getByText('Florist tricks')).toBeInTheDocument()
    expect(screen.getByText('Latest posts')).toBeInTheDocument()
  })

  it('renders three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText(/8 Romantic Gifts/)).toBeInTheDocument()
    expect(screen.getByText(/Red Rose/)).toBeInTheDocument()
    expect(screen.getByText(/Beautiful Mandalas/)).toBeInTheDocument()
  })

  it('renders View all posts link', () => {
    render(<Blog />)
    expect(screen.getByRole('link', { name: /view all posts/i })).toBeInTheDocument()
  })
})
