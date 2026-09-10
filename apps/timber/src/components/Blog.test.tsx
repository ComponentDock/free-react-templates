import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Read Recent Blog/i })).toBeInTheDocument()
  })

  it('renders three blog cards', () => {
    render(<Blog />)
    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles).toHaveLength(3)
  })

  it('renders blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('Renovating National Gallery')).toBeInTheDocument()
    expect(screen.getByText('Modern Interiors for Beginners')).toBeInTheDocument()
    expect(screen.getByText('Build Your Dream Space')).toBeInTheDocument()
  })

  it('renders dates', () => {
    render(<Blog />)
    const dates = screen.getAllByText('April 14, 2024')
    expect(dates).toHaveLength(3)
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
