import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Latest News/i })).toBeInTheDocument()
  })

  it('renders all three blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('Understanding Your Rights in Criminal Defense')).toBeInTheDocument()
    expect(screen.getByText('Family Law: Navigating Custody Arrangements')).toBeInTheDocument()
    expect(screen.getByText('Business Law Essentials for Startups')).toBeInTheDocument()
  })

  it('renders the blog images', () => {
    render(<Blog />)
    expect(screen.getByRole('img', { name: /Understanding Your Rights/i })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/statute-blog1/600/400',
    )
    expect(screen.getByRole('img', { name: /Family Law/i })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/statute-blog2/600/400',
    )
    expect(screen.getByRole('img', { name: /Business Law Essentials/i })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/statute-blog3/600/400',
    )
  })

  it('renders the blog excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/fundamental rights/i)).toBeInTheDocument()
    expect(screen.getByText(/child custody laws/i)).toBeInTheDocument()
    expect(screen.getByText(/intellectual property/i)).toBeInTheDocument()
  })

  it('renders the blog dates', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
    expect(screen.getByText('Aug 28, 2026')).toBeInTheDocument()
  })
})
