import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Latest News/i })).toBeInTheDocument()
  })

  it('displays all 3 blog posts with titles and authors', () => {
    render(<Blog />)
    expect(screen.getByText('How to Choose the Right Roofing Material')).toBeInTheDocument()
    expect(screen.getByText('Signs Your Roof Needs Professional Attention')).toBeInTheDocument()
    expect(screen.getByText('The Benefits of Regular Roof Maintenance')).toBeInTheDocument()
  })

  it('has the section id blog', () => {
    const { container } = render(<Blog />)
    expect(container.querySelector('#blog')).toBeInTheDocument()
  })

  it('displays author names', () => {
    render(<Blog />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Mike Wilson')).toBeInTheDocument()
  })
})
