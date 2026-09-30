import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChatToggleButton } from './ChatToggleButton'

describe('ChatToggleButton', () => {
  it('renders with chat icon', () => {
    render(<ChatToggleButton onClick={vi.fn()} />)
    expect(screen.getByRole('button', { name: /open contact form/i })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    render(<ChatToggleButton onClick={onClick} />)
    await userEvent.click(screen.getByRole('button', { name: /open contact form/i }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('applies custom className', () => {
    const { container } = render(<ChatToggleButton onClick={vi.fn()} className="custom" />)
    expect(container.firstChild).toHaveClass('custom')
  })
})
