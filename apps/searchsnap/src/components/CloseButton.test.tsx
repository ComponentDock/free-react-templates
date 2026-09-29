import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CloseButton } from './CloseButton'

describe('CloseButton', () => {
  it('renders with accessible label', () => {
    render(<CloseButton onClose={vi.fn()} />)
    expect(screen.getByLabelText('Close search overlay')).toBeInTheDocument()
  })

  it('calls onClose when clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<CloseButton onClose={onClose} />)
    await user.click(screen.getByLabelText('Close search overlay'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('has gray text color', () => {
    render(<CloseButton onClose={vi.fn()} />)
    const button = screen.getByLabelText('Close search overlay')
    expect(button).toHaveClass('text-gray-400')
  })

  it('darkens on hover via class', () => {
    render(<CloseButton onClose={vi.fn()} />)
    const button = screen.getByLabelText('Close search overlay')
    expect(button).toHaveClass('hover:text-gray-700')
  })

  it('is positioned in the top-right corner', () => {
    render(<CloseButton onClose={vi.fn()} />)
    const button = screen.getByLabelText('Close search overlay')
    expect(button).toHaveClass('absolute', 'top-5', 'right-5')
  })
})
