import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BestSelling } from './BestSelling'
import { bestSellingBooks, bestSellingTitle, scrollLeftLabel, scrollRightLabel } from '../data'

describe('BestSelling', () => {
  it('renders the pink band title and eight identical book cards', () => {
    const { container } = render(<BestSelling />)

    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-section')
    expect(screen.getByRole('heading', { level: 2, name: bestSellingTitle })).toBeInTheDocument()

    expect(container.querySelectorAll('img')).toHaveLength(bestSellingBooks.length)
    const cards = screen.getAllByRole('heading', { level: 3 })
    expect(cards).toHaveLength(bestSellingBooks.length)
    for (const card of cards) {
      expect(card).toHaveTextContent('Moon Dance')
    }

    const firstCard = cards[0]!.closest('article')!
    expect(within(firstCard).getByText('J. R Rain')).toBeInTheDocument()
    expect(within(firstCard).getByText('(120 Review)')).toBeInTheDocument()
    expect(within(firstCard).getByText('$50')).toBeInTheDocument()
    expect(firstCard.querySelectorAll('svg')).toHaveLength(5)
  })

  it('scrolls the row by one window with the arrow buttons', () => {
    const { container } = render(<BestSelling />)
    const track = screen.getByTestId('best-selling-track')
    Object.defineProperty(track, 'clientWidth', { value: 800, configurable: true })

    expect(track.scrollLeft).toBe(0)
    fireEvent.click(screen.getByRole('button', { name: scrollRightLabel }))
    expect(track.scrollLeft).toBe(800)
    fireEvent.click(screen.getByRole('button', { name: scrollLeftLabel }))
    expect(track.scrollLeft).toBe(0)

    expect(container.querySelectorAll('button')).toHaveLength(2)
  })
})
