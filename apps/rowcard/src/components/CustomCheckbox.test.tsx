import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CustomCheckbox } from './CustomCheckbox'

describe('CustomCheckbox', () => {
  it('renders an unchecked custom checkbox with an accessible label', () => {
    render(<CustomCheckbox checked={false} onChange={() => {}} label="Select row Elena Marsh" />)
    const input = screen.getByRole('checkbox', { name: 'Select row Elena Marsh' })
    expect(input).not.toBeChecked()
  })

  it('renders a checked state with a checkmark icon', () => {
    const { container } = render(
      <CustomCheckbox checked onChange={() => {}} label="Select all rows" />,
    )
    const input = screen.getByRole('checkbox', { name: 'Select all rows' })
    expect(input).toBeChecked()
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('calls onChange when the checkbox is toggled', async () => {
    let calls = 0
    const user = userEvent.setup()
    render(
      <CustomCheckbox
        checked={false}
        onChange={() => {
          calls += 1
        }}
        label="Toggle me"
      />,
    )
    await user.click(screen.getByRole('checkbox', { name: 'Toggle me' }))
    expect(calls).toBe(1)
  })

  it('renders a disabled unchecked state', () => {
    render(<CustomCheckbox checked={false} onChange={() => {}} disabled label="Disabled one" />)
    expect(screen.getByRole('checkbox', { name: 'Disabled one' })).toBeDisabled()
  })

  it('renders a disabled checked state', () => {
    render(<CustomCheckbox checked onChange={() => {}} disabled label="Disabled two" />)
    expect(screen.getByRole('checkbox', { name: 'Disabled two' })).toBeDisabled()
  })

  it('the hidden native input is keyboard focusable', () => {
    render(<CustomCheckbox checked={false} onChange={() => {}} label="Focusable" />)
    const input = screen.getByRole('checkbox', { name: 'Focusable' })
    input.focus()
    expect(input).toHaveFocus()
  })
})
