import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeaturedWeek } from './FeaturedWeek'
import { featured, scrollLeftLabel, scrollRightLabel } from '../data'

describe('FeaturedWeek', () => {
  it('renders the title row with the View All text link', () => {
    render(<FeaturedWeek />)

    expect(screen.getByRole('heading', { level: 2, name: featured.title })).toBeInTheDocument()
    const viewAll = screen.getByRole('link', { name: featured.viewAllLabel })
    expect(viewAll).toHaveAttribute('href', '#latest')
  })

  it('renders two identical split cards with a solid red panel', () => {
    const { container } = render(<FeaturedWeek />)

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(2)
    for (const card of cards) {
      expect(card.className).toContain('bg-brand')
      expect(card.querySelector('img')).toHaveAttribute('src', featured.cover)
      const panel = card.querySelector('div')!
      expect(
        within(panel).getByRole('heading', { level: 3, name: featured.bookTitle }),
      ).toBeInTheDocument()
      expect(within(panel).getByText(featured.author)).toBeInTheDocument()
      expect(within(panel).getByText(featured.price)).toBeInTheDocument()
      expect(within(panel).getByText(featured.reviews)).toBeInTheDocument()
      expect(
        within(panel).getByRole('link', { name: featured.viewDetailsLabel }),
      ).toBeInTheDocument()
      expect(panel.querySelectorAll('svg')).toHaveLength(5)
    }
  })

  it('scrolls the row by one window with the arrow buttons', () => {
    const { container } = render(<FeaturedWeek />)
    const track = screen.getByTestId('featured-track')
    Object.defineProperty(track, 'clientWidth', { value: 1000, configurable: true })

    expect(track.scrollLeft).toBe(0)
    fireEvent.click(screen.getByRole('button', { name: scrollRightLabel }))
    expect(track.scrollLeft).toBe(1000)
    fireEvent.click(screen.getByRole('button', { name: scrollLeftLabel }))
    expect(track.scrollLeft).toBe(0)

    expect(container.querySelectorAll('button')).toHaveLength(2)
  })
})
