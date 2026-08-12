import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading, View All link and three bordered post cards', () => {
    const { container } = render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View All' })).toBeInTheDocument()

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(3)
    cards.forEach((card) => {
      expect(card).toHaveClass('border-brand')
    })

    expect(
      screen.getAllByRole('heading', { level: 3, name: 'Lorem ipsum dolor sit amet' }),
    ).toHaveLength(3)
    expect(screen.getAllByText('July 17, 2019 by Admin')).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(3)
  })
})
