import { act, fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { FeaturedCard } from './FeaturedCard'
import { featured } from '../data'

const slideVisible = (alt: string): boolean =>
  screen.getByAltText(alt).parentElement!.classList.contains('opacity-100')

describe('FeaturedCard', () => {
  it('renders the featured post on a blue content block', () => {
    const { container } = render(<FeaturedCard />)

    expect(screen.getByRole('heading', { level: 3, name: featured.post.title })).toBeInTheDocument()
    expect(screen.getByText(featured.post.date)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: featured.post.category })).toBeInTheDocument()
    expect(screen.getByText(`${featured.post.comments} Comment`)).toBeInTheDocument()
    expect(screen.getByText(featured.post.excerpt)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '#top')
    // All three slides are in the DOM; only the active one is exposed to the
    // accessibility tree (inactive slides are aria-hidden).
    expect(container.querySelectorAll('img')).toHaveLength(featured.images.length)
    expect(screen.getAllByRole('img')).toHaveLength(1)
    expect(screen.getByRole('article')).toHaveClass('bg-brand')
  })

  it('cycles the carousel with prev/next controls, wrapping at both ends', () => {
    render(<FeaturedCard />)

    expect(slideVisible(featured.images[0]!.alt)).toBe(true)

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(slideVisible(featured.images[1]!.alt)).toBe(true)

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(slideVisible(featured.images[2]!.alt)).toBe(true)

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(slideVisible(featured.images[0]!.alt)).toBe(true)

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(slideVisible(featured.images[2]!.alt)).toBe(true)

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(slideVisible(featured.images[1]!.alt)).toBe(true)
  })

  it('advances automatically every five seconds', () => {
    vi.useFakeTimers()
    try {
      render(<FeaturedCard />)

      expect(screen.getByAltText(featured.images[0]!.alt).parentElement).toHaveClass('opacity-100')

      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(screen.getByAltText(featured.images[1]!.alt).parentElement).toHaveClass('opacity-100')

      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(screen.getByAltText(featured.images[2]!.alt).parentElement).toHaveClass('opacity-100')
    } finally {
      vi.useRealTimers()
    }
  })
})
