import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ItemCheckbox } from './ItemCheckbox'

describe('ItemCheckbox', () => {
  it('renders with the given label', () => {
    render(<ItemCheckbox label="Test Option" />)
    expect(screen.getByText('Test Option')).toBeInTheDocument()
  })

  it('renders a checkbox input', () => {
    render(<ItemCheckbox label="Test Option" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Test Option' })
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })

  it('starts unchecked by default', () => {
    render(<ItemCheckbox label="My Option" />)
    expect(screen.getByRole('checkbox', { name: 'My Option' })).not.toBeChecked()
  })

  it('respects defaultChecked prop', () => {
    render(<ItemCheckbox label="Pre-checked" defaultChecked />)
    expect(screen.getByRole('checkbox', { name: 'Pre-checked' })).toBeChecked()
  })

  it('toggles on click', async () => {
    const user = userEvent.setup()
    render(<ItemCheckbox label="Click Me" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Click Me' })

    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('toggles on Space key', async () => {
    const user = userEvent.setup()
    render(<ItemCheckbox label="Space Me" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Space Me' })

    checkbox.focus()
    expect(checkbox).not.toBeChecked()
    await user.keyboard(' ')
    expect(checkbox).toBeChecked()
    await user.keyboard(' ')
    expect(checkbox).not.toBeChecked()
  })

  it('renders optional description text', () => {
    render(<ItemCheckbox label="Option" description="Some detail" />)
    expect(screen.getByText('Some detail')).toBeInTheDocument()
  })

  it('does not render description when not provided', () => {
    const { container } = render(<ItemCheckbox label="Option" />)
    expect(container.querySelector('.text-xs')).not.toBeInTheDocument()
  })

  it('shows checkmark icon when checked', async () => {
    const user = userEvent.setup()
    render(<ItemCheckbox label="Check Icon" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Check Icon' })

    expect(document.querySelector('svg')).not.toBeInTheDocument()
    await user.click(checkbox)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})
