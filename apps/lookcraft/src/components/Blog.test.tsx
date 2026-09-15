import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog section with light background', () => {
    render(<Blog />)
    const section = screen.getByRole('region', { name: /blog/i })
    expect(section.className).toContain('bg-surface-light')
  })

  it('renders the section title', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/latest from the blog/i)
  })

  it('renders 2 blog items', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(2)
  })

  it('each blog item has a date', () => {
    render(<Blog />)
    const dates = screen.getAllByText(/2024/)
    expect(dates.length).toBeGreaterThanOrEqual(2)
  })
})
