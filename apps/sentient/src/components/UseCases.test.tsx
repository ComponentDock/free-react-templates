import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { UseCases } from './UseCases'

describe('UseCases', () => {
  it('renders the section heading and four industry cards with images and bullets', () => {
    render(<UseCases />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'AI for Every Industry' }),
    ).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)

    for (const title of ['Healthcare', 'Finance', 'E-commerce', 'Manufacturing']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: title })).toBeInTheDocument()
    }

    const healthcare = cards.find(
      (card) => within(card).queryByRole('heading', { level: 3, name: 'Healthcare' }) !== null,
    )!
    expect(within(healthcare).getByText(/clinical documentation/i)).toBeInTheDocument()
    expect(within(healthcare).getAllByRole('listitem')).toHaveLength(3)
  })
})
