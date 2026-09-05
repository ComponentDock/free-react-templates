import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SnapCheckbox } from './SnapCheckbox'

describe('SnapCheckbox', () => {
  it('renders with the given label', () => {
    render(<SnapCheckbox label="First checkbox" />)
    expect(screen.getByText('First checkbox')).toBeInTheDocument()
  })

  it('is unchecked by default', () => {
    render(<SnapCheckbox label="First checkbox" />)
    expect(screen.getByRole('checkbox', { name: 'First checkbox' })).not.toBeChecked()
  })

  it('toggles to checked when clicked', async () => {
    const user = userEvent.setup()
    render(<SnapCheckbox label="Second checkbox" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Second checkbox' })

    await user.click(checkbox)
    expect(checkbox).toBeChecked()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('respects defaultChecked prop', () => {
    render(<SnapCheckbox label="First checkbox" defaultChecked />)
    expect(screen.getByRole('checkbox', { name: 'First checkbox' })).toBeChecked()
  })

  it('is disabled when disabled prop is true', async () => {
    const user = userEvent.setup()
    render(<SnapCheckbox label="Disabled" disabled />)
    const checkbox = screen.getByRole('checkbox', { name: 'Disabled' })

    expect(checkbox).toBeDisabled()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('shows checked state when disabled and defaultChecked', () => {
    render(<SnapCheckbox label="Disabled & checked" defaultChecked disabled />)
    const checkbox = screen.getByRole('checkbox', { name: 'Disabled & checked' })
    expect(checkbox).toBeChecked()
    expect(checkbox).toBeDisabled()
  })
})
