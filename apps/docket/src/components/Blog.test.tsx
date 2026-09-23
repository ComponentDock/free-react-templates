import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /recent blog/i })).toBeInTheDocument()
  })

  it('renders all three blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('Understanding Your Rights in Criminal Defense')).toBeInTheDocument()
    expect(screen.getByText('How to Choose the Right Family Lawyer')).toBeInTheDocument()
    expect(screen.getByText('Business Legal Compliance Checklist')).toBeInTheDocument()
  })

  it('renders blog post metadata', () => {
    render(<Blog />)
    expect(screen.getByText(/October 15, 2026/)).toBeInTheDocument()
    expect(screen.getByText(/September 28, 2026/)).toBeInTheDocument()
    expect(screen.getByText(/September 10, 2026/)).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)
    readMoreLinks.forEach((link) => {
      expect(link.closest('a')).toHaveAttribute('href', '#blog')
    })
  })
})
