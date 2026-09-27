import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PortfolioFilter } from './PortfolioFilter'

describe('PortfolioFilter', () => {
  it('renders all five filter buttons', () => {
    render(<PortfolioFilter />)
    for (const name of ['All', 'Post', 'Image', 'Video', 'Extern']) {
      expect(screen.getByRole('button', { name })).toBeInTheDocument()
    }
  })

  it('has "All" active by default', () => {
    render(<PortfolioFilter />)
    const allBtn = screen.getByRole('button', { name: 'All' })
    expect(allBtn).toHaveAttribute('aria-pressed', 'true')
  })

  it('switches active filter on click', async () => {
    const user = userEvent.setup()
    render(<PortfolioFilter />)

    await user.click(screen.getByRole('button', { name: 'Image' }))
    expect(screen.getByRole('button', { name: 'Image' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('calls onFilterChange callback', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<PortfolioFilter onFilterChange={onChange} />)

    await user.click(screen.getByRole('button', { name: 'Video' }))
    expect(onChange).toHaveBeenCalledWith('Video')
  })
})
