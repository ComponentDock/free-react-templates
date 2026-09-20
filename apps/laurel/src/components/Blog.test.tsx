import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Latest From Our Blog/i)
  })

  it('renders all 3 blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('The Future of Online Education in 2025')).toBeInTheDocument()
    expect(screen.getByText('Top Skills to Learn This Year')).toBeInTheDocument()
    expect(screen.getByText('How to Stay Motivated While Studying')).toBeInTheDocument()
  })

  it('renders dates and authors', () => {
    render(<Blog />)
    expect(screen.getByText('January 15, 2025')).toBeInTheDocument()
    const authors = screen.getAllByText('Laurel Team')
    expect(authors.length).toBe(3)
  })
})
