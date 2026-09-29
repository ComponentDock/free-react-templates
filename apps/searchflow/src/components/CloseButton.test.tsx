import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { CloseButton } from './CloseButton'

describe('CloseButton', () => {
  it('renders X icon button', () => {
    render(<CloseButton onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Close search overlay' })).toBeInTheDocument()
  })

  it('calls onClose when clicked', async () => {
    const onClose = vi.fn()
    render(<CloseButton onClose={onClose} />)
    await userEvent.click(screen.getByRole('button', { name: 'Close search overlay' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('has gray color', () => {
    render(<CloseButton onClose={vi.fn()} />)
    const button = screen.getByRole('button', { name: 'Close search overlay' })
    expect(button.className).toContain('text-[#999999]')
  })
})
