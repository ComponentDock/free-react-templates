import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the four service cards from the original template', () => {
    render(<Services />)
    for (const title of ['Finding Agency', 'Types of Modeling', 'Freelance', 'Search Models']) {
      const card = screen.getByRole('heading', { name: title }).closest('div')!
      expect(card.textContent).not.toBe('')
    }
  })

  it('renders an icon and a description inside every card', () => {
    render(<Services />)
    const cards = screen.getAllByRole('heading', { level: 3 })
    expect(cards).toHaveLength(4)
    for (const card of cards) {
      expect(card.parentElement!.querySelector('svg')).toBeInTheDocument()
    }
  })
})
