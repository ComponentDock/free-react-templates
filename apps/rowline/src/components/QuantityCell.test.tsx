import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuantityCell } from './QuantityCell'

describe('QuantityCell', () => {
  it('renders a bordered text input with the source min/max and focus ring', () => {
    render(<QuantityCell value={2} onChange={vi.fn()} />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('name', 'quantity')
    expect(input).toHaveAttribute('min', '1')
    expect(input).toHaveAttribute('max', '100')
    expect(input).toHaveValue('2')
    expect(input.className).toContain('border-input-border')
    expect(input.className).toContain('rounded-[0.25rem]')
    expect(input.className).toContain('focus:border-focus-border')
    expect(input.className).toContain('focus:shadow-[0_0_0_0.2rem_var(--color-focus-ring)]')
  })

  it('calls onChange with the parsed value when typing', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<QuantityCell value={1} onChange={handleChange} />)
    const input = screen.getByRole('textbox')
    await user.type(input, '4')
    expect(handleChange).toHaveBeenLastCalledWith(14)
  })

  it('clamps values below 1 up to the minimum', () => {
    const handleChange = vi.fn()
    render(<QuantityCell value={2} onChange={handleChange} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '0' } })
    expect(handleChange).toHaveBeenCalledWith(1)
  })

  it('clamps values above 100 down to the maximum', () => {
    const handleChange = vi.fn()
    render(<QuantityCell value={2} onChange={handleChange} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '101' } })
    expect(handleChange).toHaveBeenCalledWith(100)
  })

  it('ignores non-numeric input so the last valid quantity stands', () => {
    const handleChange = vi.fn()
    render(<QuantityCell value={2} onChange={handleChange} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '' } })
    expect(handleChange).not.toHaveBeenCalled()
  })
})
