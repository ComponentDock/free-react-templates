import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CloseButton } from './CloseButton'

describe('CloseButton', () => {
  it('renders with accessible label', () => {
    render(<CloseButton onClose={vi.fn()} />)
    expect(screen.getByLabelText('Close search')).toBeInTheDocument()
  })

  it('calls onClose when clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<CloseButton onClose={onClose} />)
    await user.click(screen.getByLabelText('Close search'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('has dark icon color', () => {
    render(<CloseButton onClose={vi.fn()} />)
    const button = screen.getByLabelText('Close search')
    expect(button).toHaveClass('text-close-icon')
  })

  it('darkens on hover via opacity', () => {
    render(<CloseButton onClose={vi.fn()} />)
    const button = screen.getByLabelText('Close search')
    expect(button).toHaveClass('hover:opacity-60')
  })

  it('is positioned in the top-right corner', () => {
    render(<CloseButton onClose={vi.fn()} />)
    const button = screen.getByLabelText('Close search')
    expect(button).toHaveClass('absolute', 'top-6', 'right-6')
  })

  it('renders an X icon from lucide-react', () => {
    render(<CloseButton onClose={vi.fn()} />)
    const button = screen.getByLabelText('Close search')
    const svg = button.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
