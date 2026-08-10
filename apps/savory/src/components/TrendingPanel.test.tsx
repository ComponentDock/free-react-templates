import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TrendingPanel } from './TrendingPanel'

describe('TrendingPanel', () => {
  it('slides in with a title, close icon and trending post rows when open', () => {
    render(<TrendingPanel open onClose={vi.fn()} />)

    const panel = screen.getByRole('complementary', { name: 'Trending posts panel' })
    expect(panel).not.toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText('Trending Posts')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close trending panel' })).toBeInTheDocument()

    expect(screen.getAllByText('The Best').length).toBeGreaterThanOrEqual(6)
    expect(screen.getByText('Chicken Salad')).toBeInTheDocument()
  })

  it('is hidden from assistive tech when closed', () => {
    const { container } = render(<TrendingPanel open={false} onClose={vi.fn()} />)

    const panel = container.querySelector('aside[aria-label="Trending posts panel"]')
    expect(panel).toHaveAttribute('aria-hidden', 'true')
  })

  it('calls onClose when the close icon is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<TrendingPanel open onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close trending panel' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when the Escape key is pressed', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<TrendingPanel open onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('ignores other keys while open', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<TrendingPanel open onClose={onClose} />)

    await user.keyboard('{Enter}')
    expect(onClose).not.toHaveBeenCalled()
  })
})
