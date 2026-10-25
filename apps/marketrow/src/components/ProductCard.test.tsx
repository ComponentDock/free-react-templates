import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { PRODUCTS } from '../content'
import { ProductCard } from './ProductCard'

const headphones = PRODUCTS[0]!
const watch = PRODUCTS[1]!

describe('ProductCard', () => {
  it('renders the whole anatomy: photo, flag, category, name, rating, price, button', () => {
    render(<ProductCard product={headphones} added={false} onToggle={() => {}} />)
    const card = screen.getByRole('article')

    expect(card).toHaveAttribute('data-product', 'Arc Wireless Headphones')
    expect(card).toHaveClass('product-card', 'flex-col', 'overflow-hidden', 'bg-surface', 'rounded-[18px]')
    expect(card).toHaveClass('shadow-[0_1px_2px_rgba(0,0,0,0.05)]', 'transition-shadow', 'duration-300')
    expect(screen.getByRole('img')).toHaveAttribute(
      'alt',
      'Black over-ear headphones on a yellow background',
    )
    expect(screen.getByRole('img')).toHaveClass('card-media-img')
    expect(screen.getByText('-25%')).toBeInTheDocument()
    expect(screen.getByText('Audio')).toHaveClass('uppercase', 'tracking-[0.06em]', 'text-muted')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Arc Wireless Headphones')
    expect(screen.getByText('$149')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Add to bag' })).toBeInTheDocument()
  })

  it('keeps the photo square and clipped by the plate, with a lazy image', () => {
    const { container } = render(<ProductCard product={headphones} added={false} onToggle={() => {}} />)
    const media = container.querySelector('.aspect-square')

    expect(media).toHaveClass('relative', 'aspect-square', 'overflow-hidden', 'bg-media')
    expect(screen.getByRole('img')).toHaveAttribute('loading', 'lazy')
  })

  it('shows no struck price on a full-price card', () => {
    const { container } = render(<ProductCard product={watch} added={false} onToggle={() => {}} />)

    expect(container.querySelector('del')).toBeNull()
    expect(screen.getByRole('img')).toHaveAttribute(
      'alt',
      'Minimal watch with a brown leather strap held in a hand',
    )
  })

  it('toggles through the card button', () => {
    const onToggle = vi.fn()
    render(<ProductCard product={watch} added onToggle={onToggle} />)

    const button = screen.getByRole('button', { name: 'Added to bag' })
    expect(button).toHaveAttribute('aria-pressed', 'true')
    fireEvent.click(button)
    expect(onToggle).toHaveBeenCalledWith('Meridian Leather Watch')
  })

  it('never wraps the card in a link — the only anchor is the page footer', () => {
    const { container } = render(<ProductCard product={headphones} added={false} onToggle={() => {}} />)

    expect(within(container).queryByRole('link')).toBeNull()
  })
})
