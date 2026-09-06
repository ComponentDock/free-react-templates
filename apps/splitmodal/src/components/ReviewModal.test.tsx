import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReviewModal } from './ReviewModal'

describe('ReviewModal', () => {
  it('does not render when isOpen is false', () => {
    render(<ReviewModal isOpen={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the dialog when isOpen is true', () => {
    render(<ReviewModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('renders the product title', () => {
    render(<ReviewModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByText('Grand Prix 4000')).toBeInTheDocument()
  })

  it('renders the price badge', () => {
    render(<ReviewModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByText('$2,000')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<ReviewModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByText(/Complete with lightweight carbon frames/)).toBeInTheDocument()
  })

  it('renders the star rating', () => {
    render(<ReviewModal isOpen={true} onClose={vi.fn()} />)
    const ratingDiv = screen.getByLabelText('Rating: 4 out of 5 stars')
    expect(ratingDiv).toBeInTheDocument()
    const stars = ratingDiv.querySelectorAll('svg')
    expect(stars).toHaveLength(5)
  })

  it('renders the social counters', () => {
    render(<ReviewModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('55')).toBeInTheDocument()
  })

  it('renders the share button', () => {
    render(<ReviewModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Share' })).toBeInTheDocument()
  })

  it('renders the close button', () => {
    render(<ReviewModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ReviewModal isOpen={true} onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ReviewModal isOpen={true} onClose={onClose} />)
    const dialog = screen.getByRole('dialog')
    await user.click(dialog)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when Escape is pressed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ReviewModal isOpen={true} onClose={onClose} />)
    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when clicking inside the dialog content', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ReviewModal isOpen={true} onClose={onClose} />)
    await user.click(screen.getByText('Grand Prix 4000'))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('does not call onClose when a non-Escape key is pressed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ReviewModal isOpen={true} onClose={onClose} />)
    await user.keyboard('{Enter}')
    expect(onClose).not.toHaveBeenCalled()
  })
})
