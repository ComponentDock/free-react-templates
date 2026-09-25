import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and all three blog post cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'From Our Blog' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Healthy Living Tips for a Better Tomorrow' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Understanding Heart Disease Prevention' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'The Importance of Regular Checkups' }),
    ).toBeInTheDocument()
  })

  it('shows author names and dates', () => {
    render(<Blog />)

    expect(screen.getByText('Dr. Sarah Wilson')).toBeInTheDocument()
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
  })

  it('has Read More links for each post', () => {
    render(<Blog />)

    const readMoreLinks = screen.getAllByRole('link', { name: 'Read More →' })
    expect(readMoreLinks).toHaveLength(3)
  })
})
