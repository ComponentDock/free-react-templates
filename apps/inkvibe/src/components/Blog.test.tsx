import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /latest news/i })).toBeInTheDocument()
  })

  it('renders all 4 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText(/how to choose your first tattoo/i)).toBeInTheDocument()
    expect(screen.getByText(/aftercare guide/i)).toBeInTheDocument()
    expect(screen.getByText(/rise of watercolor tattoos/i)).toBeInTheDocument()
    expect(screen.getByText(/studio hygiene/i)).toBeInTheDocument()
  })

  it('renders dates for each post', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
  })
})
