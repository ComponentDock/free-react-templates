import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the title and two post cards with meta and read-more links', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Latest News From Blog' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 4, name: 'Ontouch App news from blog' }),
    ).toBeInTheDocument()
    expect(screen.getByText('August 5, 2026 · 25 Comment')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 4, name: 'On Graphics Design Post' }),
    ).toBeInTheDocument()
    expect(screen.getByText('July 28, 2026 · 12 Comment')).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: /Read More/i })).toHaveLength(2)
  })
})
