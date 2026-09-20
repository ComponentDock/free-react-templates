import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders blog posts and Read more links', () => {
    render(<Blog />)
    expect(screen.getByText('Recent Post')).toBeInTheDocument()
    expect(screen.getByText('How to Start Your Online Learning Journey')).toBeInTheDocument()
    expect(screen.getByText('Top 5 Skills to Learn in 2026')).toBeInTheDocument()
    expect(screen.getByText('Benefits of Online Certifications')).toBeInTheDocument()
    const readMoreLinks = screen.getAllByText('Read more')
    expect(readMoreLinks.length).toBe(3)
  })
})
