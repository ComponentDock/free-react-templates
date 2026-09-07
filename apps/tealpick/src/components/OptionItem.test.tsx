import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { OptionItem } from './OptionItem'

describe('OptionItem', () => {
  it('renders label', () => {
    render(<OptionItem label="Joefrey" checked={false} onClick={vi.fn()} />)
    expect(screen.getByRole('option', { name: 'Joefrey' })).toBeInTheDocument()
  })

  it('shows checked state', () => {
    render(<OptionItem label="Joefrey" checked={true} onClick={vi.fn()} />)
    expect(screen.getByRole('option', { name: 'Joefrey' })).toHaveAttribute('aria-selected', 'true')
  })

  it('shows unchecked state', () => {
    render(<OptionItem label="Joefrey" checked={false} onClick={vi.fn()} />)
    expect(screen.getByRole('option', { name: 'Joefrey' })).toHaveAttribute(
      'aria-selected',
      'false',
    )
  })

  it('calls onClick', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    render(<OptionItem label="Joefrey" checked={false} onClick={onClick} />)
    await user.click(screen.getByRole('option', { name: 'Joefrey' }))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('shows disabled state', () => {
    render(<OptionItem label="Locked" checked={false} disabled={true} onClick={vi.fn()} />)
    expect(screen.getByRole('option', { name: 'Locked' })).toBeDisabled()
    expect(screen.getByRole('option', { name: 'Locked' })).toHaveAttribute('aria-disabled', 'true')
  })

  it('shows focused state', () => {
    render(<OptionItem label="Joefrey" checked={false} focused={true} onClick={vi.fn()} />)
    expect(screen.getByRole('option', { name: 'Joefrey' })).toBeInTheDocument()
  })
})
