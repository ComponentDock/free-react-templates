import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageTopRecipes } from './PageTopRecipes'
import { pageTopLarge, pageTopSmallLeft, pageTopSmallRight } from '../data'

describe('PageTopRecipes', () => {
  it('renders the large center card with meta and headline', () => {
    const { container } = render(<PageTopRecipes />)
    expect(screen.getByRole('heading', { level: 3, name: pageTopLarge.title })).toBeInTheDocument()
    expect(screen.getByText(pageTopLarge.meta)).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(5)
  })

  it('overlaps the white text card onto the large image bottom', () => {
    render(<PageTopRecipes />)
    const card = screen.getByRole('heading', { level: 3, name: pageTopLarge.title }).closest('div')
    expect(card).toHaveClass('-mt-[56px]')
  })

  it('renders two small cards in the left column and two in the right', () => {
    render(<PageTopRecipes />)
    for (const card of pageTopSmallLeft) {
      expect(screen.getByRole('heading', { level: 4, name: card.title })).toBeInTheDocument()
    }
    for (const card of pageTopSmallRight) {
      expect(screen.getByRole('heading', { level: 4, name: card.title })).toBeInTheDocument()
    }
  })
})
