import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders the section heading', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: 'Recent Blog Posts' })).toBeInTheDocument()
  })

  it('renders all blog post titles', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: 'Modern Construction Trends' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Sustainable Building Materials' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Smart Home Construction' })).toBeInTheDocument()
  })

  it('renders blog post dates', () => {
    render(<BlogSection />)
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 05, 2026')).toBeInTheDocument()
    expect(screen.getByText('Aug 28, 2026')).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<BlogSection />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
