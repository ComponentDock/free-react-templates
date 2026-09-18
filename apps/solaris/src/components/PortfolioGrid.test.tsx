import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PortfolioGrid } from './PortfolioGrid'

describe('PortfolioGrid', () => {
  const items = [
    { id: 1, title: 'CLOCK', category: 'image', seed: 'solaris-1' },
    { id: 2, title: 'BAG', category: 'post', seed: 'solaris-2' },
    { id: 3, title: 'FISH', category: 'image', seed: 'solaris-3' },
    { id: 4, title: 'BOTTLE', category: 'video', seed: 'solaris-4' },
    { id: 5, title: 'PAPER', category: 'extern', seed: 'solaris-5' },
    { id: 6, title: 'BLUE ICE', category: 'image', seed: 'solaris-6' },
  ]

  it('renders all portfolio items', () => {
    render(<PortfolioGrid items={items} />)
    expect(screen.getAllByRole('img')).toHaveLength(6)
  })

  it('displays item captions', () => {
    render(<PortfolioGrid items={items} />)
    expect(screen.getByText('CLOCK')).toBeInTheDocument()
    expect(screen.getByText('BAG')).toBeInTheDocument()
    expect(screen.getByText('BLUE ICE')).toBeInTheDocument()
  })

  it('renders images with correct src', () => {
    render(<PortfolioGrid items={items} />)
    const imgs = screen.getAllByRole('img')
    expect(imgs[0]).toHaveAttribute('src', 'https://picsum.photos/seed/solaris-1/400/300')
  })

  it('shows overlay on hover', async () => {
    const user = userEvent.setup()
    render(<PortfolioGrid items={items} />)
    const imgs = screen.getAllByRole('img')
    const firstItem = imgs[0]!.closest('div')!
    await user.hover(firstItem)
    const caption = screen.getByText('CLOCK')
    expect(caption.closest('div')).toHaveClass('opacity-100')
  })

  it('hides overlay on mouse leave', async () => {
    const user = userEvent.setup()
    render(<PortfolioGrid items={items} />)
    const imgs = screen.getAllByRole('img')
    const firstItem = imgs[0]!.closest('div')!
    await user.hover(firstItem)
    await user.unhover(firstItem)
    const caption = screen.getByText('CLOCK')
    expect(caption.closest('div')).toHaveClass('opacity-0')
  })

  it('filters items by category', () => {
    const { rerender } = render(<PortfolioGrid items={items} activeFilter="image" />)
    expect(screen.getAllByRole('img')).toHaveLength(3)
    rerender(<PortfolioGrid items={items} activeFilter="All" />)
    expect(screen.getAllByRole('img')).toHaveLength(6)
  })

  it('renders 3-column grid', () => {
    const { container } = render(<PortfolioGrid items={items} />)
    const grid = container.querySelector('.columns-3')
    expect(grid).toBeInTheDocument()
  })
})
