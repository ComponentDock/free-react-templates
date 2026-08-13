import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the eyebrow, heading, and two post cards with meta and links', () => {
    render(<Blog />)

    expect(screen.getByText('Latest Blog Posts')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Blog' })).toBeInTheDocument()

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2)
    expect(
      screen.getAllByRole('link', { name: 'How to Invest In Investing Company' }),
    ).toHaveLength(2)
    expect(screen.getByText('Apr 19, 2019 · Admin')).toBeInTheDocument()
    expect(screen.getByText('Apr 18, 2019 · Admin')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Get Started' })).toHaveLength(2)
  })
})
