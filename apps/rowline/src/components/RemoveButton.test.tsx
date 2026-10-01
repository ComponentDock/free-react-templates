import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RemoveButton } from './RemoveButton'

describe('RemoveButton', () => {
  it('renders a low-opacity button with a small red × icon', () => {
    const { container } = render(<RemoveButton onRemove={vi.fn()} />)
    const button = screen.getByRole('button', { name: 'Close' })
    expect(button).toHaveAttribute('type', 'button')
    expect(button.className).toContain('opacity-50')
    expect(button.className).toContain('hover:opacity-75')
    expect(button.className).toContain('focus-visible:opacity-75')
    const icon = container.querySelector('button svg') as HTMLElement
    expect(icon).toBeInTheDocument()
    expect(icon.getAttribute('width')).toBe('12')
    expect(icon.getAttribute('class')).toContain('text-danger')
  })

  it('calls onRemove when clicked', async () => {
    const user = userEvent.setup()
    const handleRemove = vi.fn()
    render(<RemoveButton onRemove={handleRemove} />)
    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(handleRemove).toHaveBeenCalledTimes(1)
  })
})
