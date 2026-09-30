import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { CloseButton } from './CloseButton'

describe('CloseButton', () => {
  it('renders close icon when sidebar is open', () => {
    render(<CloseButton isOpen={true} onToggle={vi.fn()} />)
    expect(screen.getByRole('button', { name: /close sidebar/i })).toBeInTheDocument()
  })

  it('renders menu icon when sidebar is closed', () => {
    render(<CloseButton isOpen={false} onToggle={vi.fn()} />)
    expect(screen.getByRole('button', { name: /open sidebar/i })).toBeInTheDocument()
  })

  it('calls onToggle when clicked', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(<CloseButton isOpen={true} onToggle={onToggle} />)
    await user.click(screen.getByRole('button', { name: /close sidebar/i }))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('applies custom className', () => {
    const { container } = render(
      <CloseButton isOpen={true} onToggle={vi.fn()} className="custom-class" />,
    )
    const button = container.querySelector('button')
    expect(button).toHaveClass('custom-class')
  })
})
