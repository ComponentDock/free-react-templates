import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ProductGrid } from './ProductGrid'

describe('ProductGrid', () => {
  it('is one auto-fill grid with a 236px track and a 20px gap', () => {
    const { container } = render(<ProductGrid added={[]} onToggle={() => {}} />)
    const grid = container.querySelector('ul')

    expect(grid?.className).toContain('grid-cols-[repeat(auto-fill,minmax(236px,1fr))]')
    expect(grid).toHaveClass('grid', 'gap-5', 'list-none', 'm-0', 'p-0')
  })

  it('lists the four products in catalogue order, each in its own flex li', () => {
    const { container } = render(<ProductGrid added={[]} onToggle={() => {}} />)
    const items = container.querySelectorAll('li')

    expect(items).toHaveLength(4)
    expect(items[0]).toHaveClass('flex')
    expect(screen.getAllByRole('article').map((card) => card.getAttribute('data-product'))).toEqual([
      'Arc Wireless Headphones',
      'Meridian Leather Watch',
      'Commuter Backpack 22L',
      'Canvas Market Tote',
    ])
  })

  it('marks only the cards that are in the bag', () => {
    render(<ProductGrid added={['Canvas Market Tote', 'Arc Wireless Headphones']} onToggle={() => {}} />)

    const pressed = screen.getAllByRole('button').map((button) => button.getAttribute('aria-pressed'))
    expect(pressed).toEqual(['true', 'false', 'false', 'true'])
  })

  it('passes the toggle handler down to every card', () => {
    const onToggle = vi.fn()
    render(<ProductGrid added={[]} onToggle={onToggle} />)

    fireEvent.click(screen.getAllByRole('button')[2]!)

    expect(onToggle).toHaveBeenCalledWith('Commuter Backpack 22L')
  })
})
