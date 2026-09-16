import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blog } from '../data'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Recent Blog')
  })

  it('renders all blog cards with dates, authors, and titles', () => {
    render(<Blog />)
    blog.forEach((b) => {
      expect(screen.getByText(b.date)).toBeInTheDocument()
      expect(screen.getByText(b.author)).toBeInTheDocument()
      expect(screen.getByText(b.title)).toBeInTheDocument()
    })
  })

  it('renders 3 blog cards', () => {
    render(<Blog />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.length).toBe(3)
  })
})
