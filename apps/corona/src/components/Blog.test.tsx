import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the canonical section title', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Latest Posts From Our Blog' }),
    ).toBeInTheDocument()
  })

  it('renders three post cards with meta, title, blurb and View Details', () => {
    render(<Blog />)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)

    const first = cards[0]!
    expect(within(first).getByRole('heading', { name: 'Smart Kitchen Setup' })).toBeInTheDocument()
    expect(within(first).getByText('29th, oct, 2018')).toBeInTheDocument()
    expect(within(first).getByText('121 likes')).toBeInTheDocument()
    expect(within(first).getByText('05 comments')).toBeInTheDocument()
    expect(within(first).getByRole('link', { name: /View Details/ })).toBeInTheDocument()
  })
})
