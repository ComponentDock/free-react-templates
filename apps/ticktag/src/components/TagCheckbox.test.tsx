import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TagCheckbox } from './TagCheckbox'

describe('TagCheckbox', () => {
  it('renders a checkbox with the given label', () => {
    render(<TagCheckbox label="Test Label" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Test Label' })
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })

  it('starts unchecked by default', () => {
    render(<TagCheckbox label="My Chip" />)
    expect(screen.getByRole('checkbox', { name: 'My Chip' })).not.toBeChecked()
  })

  it('respects defaultChecked prop', () => {
    render(<TagCheckbox label="Pre-checked" defaultChecked />)
    expect(screen.getByRole('checkbox', { name: 'Pre-checked' })).toBeChecked()
  })

  it('toggles on click', async () => {
    const user = userEvent.setup()
    render(<TagCheckbox label="Click Me" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Click Me' })

    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('toggles on Space key', async () => {
    const user = userEvent.setup()
    render(<TagCheckbox label="Space Me" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Space Me' })

    checkbox.focus()
    expect(checkbox).not.toBeChecked()
    await user.keyboard(' ')
    expect(checkbox).toBeChecked()
    await user.keyboard(' ')
    expect(checkbox).not.toBeChecked()
  })
})
