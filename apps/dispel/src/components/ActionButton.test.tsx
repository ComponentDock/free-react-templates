import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ActionButton } from './ActionButton'

describe('ActionButton', () => {
  it('renders with label', () => {
    render(<ActionButton label="Next" onClick={vi.fn()} variant="primary" />)
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<ActionButton label="Next" onClick={onClick} variant="primary" />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('applies primary variant styles', () => {
    render(<ActionButton label="Next" onClick={vi.fn()} variant="primary" />)
    const button = screen.getByRole('button', { name: /next/i })
    expect(button).toHaveClass('bg-brand')
  })

  it('applies muted variant styles', () => {
    render(<ActionButton label="Previous" onClick={vi.fn()} variant="muted" />)
    const button = screen.getByRole('button', { name: /previous/i })
    expect(button).toHaveClass('bg-muted')
  })
})
