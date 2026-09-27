import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Blog Update/i })).toBeInTheDocument()
  })

  it('renders all three blog post titles', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { name: 'The Art of Cinematic Color Grading' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Behind the Scenes: Our Latest Project' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Essential Gear for Indie Filmmakers' }),
    ).toBeInTheDocument()
  })

  it('renders Read more links for each post', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read more')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('renders blog post dates', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
  })
})
