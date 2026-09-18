import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { PortfolioFilter } from './PortfolioFilter'

describe('PortfolioFilter', () => {
  const categories = ['All', 'Post', 'Image', 'Video', 'Extern']
  const onFilter = vi.fn()

  beforeEach(() => {
    onFilter.mockClear()
  })

  it('renders all filter buttons', () => {
    render(<PortfolioFilter active="All" onFilter={onFilter} />)
    for (const cat of categories) {
      expect(screen.getByRole('button', { name: cat })).toBeInTheDocument()
    }
  })

  it('renders dot separators between buttons', () => {
    const { container } = render(<PortfolioFilter active="All" onFilter={onFilter} />)
    const separators = container.querySelectorAll('.text-separator')
    expect(separators.length).toBe(categories.length - 1)
  })

  it('highlights the active filter button', () => {
    render(<PortfolioFilter active="Image" onFilter={onFilter} />)
    const imageBtn = screen.getByRole('button', { name: 'Image' })
    expect(imageBtn).toHaveClass('text-brand')
  })

  it('does not highlight inactive filter buttons', () => {
    render(<PortfolioFilter active="All" onFilter={onFilter} />)
    const postBtn = screen.getByRole('button', { name: 'Post' })
    expect(postBtn).not.toHaveClass('text-brand')
  })

  it('calls onFilter when a button is clicked', () => {
    render(<PortfolioFilter active="All" onFilter={onFilter} />)
    fireEvent.click(screen.getByRole('button', { name: 'Video' }))
    expect(onFilter).toHaveBeenCalledWith('Video')
  })

  it('defaults to All active', () => {
    render(<PortfolioFilter active="All" onFilter={onFilter} />)
    const allBtn = screen.getByRole('button', { name: 'All' })
    expect(allBtn).toHaveClass('text-brand')
  })
})
