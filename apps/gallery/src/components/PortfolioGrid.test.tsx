import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { PortfolioGrid } from './PortfolioGrid'

describe('PortfolioGrid', () => {
  it('shows every portfolio item when the "All" filter is active', () => {
    const { container } = render(<PortfolioGrid activeFilter="All" />)

    expect(screen.getByRole('region', { name: 'Portfolio' })).toBeInTheDocument()
    expect(container.querySelectorAll('a[href="#portfolio"]')).toHaveLength(12)
    expect(screen.getByRole('img', { name: /Sneakers floating/ })).toBeInTheDocument()
  })

  it('filters the grid to a single category', () => {
    const { container } = render(<PortfolioGrid activeFilter="Hand pens" />)

    expect(container.querySelectorAll('a[href="#portfolio"]')).toHaveLength(2)
    expect(screen.getByRole('img', { name: /Ink pen drawing studies/ })).toBeInTheDocument()
    expect(screen.queryByRole('img', { name: /Abstract canvas artwork/ })).not.toBeInTheDocument()
  })

  it('shows the title and category overlay on hover and focus, hiding it on leave and blur', () => {
    const { container } = render(<PortfolioGrid activeFilter="All" />)

    const first = container.querySelector('a[href="#portfolio"]') as HTMLElement
    const overlay = first.querySelector('span.absolute') as HTMLElement
    expect(overlay).toHaveClass('opacity-0')
    expect(overlay.textContent).toMatch(/Canvas No\. 7/)
    expect(overlay.textContent).toMatch(/Art/)

    fireEvent.mouseEnter(first)
    expect(overlay).toHaveClass('opacity-100')

    fireEvent.mouseLeave(first)
    expect(overlay).toHaveClass('opacity-0')

    fireEvent.focus(first)
    expect(overlay).toHaveClass('opacity-100')

    fireEvent.blur(first)
    expect(overlay).toHaveClass('opacity-0')
  })
})
