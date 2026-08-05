import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three post cards with category, date, and title', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Read Our Latest News' }),
    ).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)

    for (const title of [
      'How to launch a product users actually remember',
      'The simple growth playbook behind our best quarter',
      'Five lessons from shipping software at scale',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByText('Software / Business')).toHaveLength(3)
    expect(screen.getAllByText('March 10, 2019')).toHaveLength(3)
    expect(screen.getAllByText('02 Comments')).toHaveLength(3)
  })
})
