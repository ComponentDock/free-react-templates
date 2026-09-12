import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog heading and post titles', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Our Blog/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Managing Your Finances in 2024' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Tips for Smart Investing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Understanding Credit Scores' })).toBeInTheDocument()
  })

  it('has Continue Reading links for each post', () => {
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: /Continue Reading/i })
    expect(links).toHaveLength(3)
  })
})
