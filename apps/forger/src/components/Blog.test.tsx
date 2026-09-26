import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Our Blog heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Our Blog/i })).toBeInTheDocument()
  })

  it('shows 3 blog entries', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('displays blog titles', () => {
    render(<Blog />)
    const titles = screen.getAllByText('Why Lead Generation is Key for Business Growth')
    expect(titles).toHaveLength(3)
  })

  it('shows dates and authors', () => {
    render(<Blog />)
    expect(screen.getAllByText('March 23, 2024')).toHaveLength(3)
    expect(screen.getAllByText('Admin')).toHaveLength(3)
  })
})
