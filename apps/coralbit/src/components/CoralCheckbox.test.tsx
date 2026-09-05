import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CoralCheckbox } from './CoralCheckbox'

describe('CoralCheckbox', () => {
  it('renders with the given label', () => {
    render(<CoralCheckbox label="Accept terms" />)
    expect(screen.getByText('Accept terms')).toBeInTheDocument()
  })

  it('renders unchecked by default', () => {
    render(<CoralCheckbox label="Option" />)
    const input = screen.getByRole('checkbox', { name: 'Option' })
    expect(input).not.toBeChecked()
  })

  it('renders checked when defaultChecked is true', () => {
    render(<CoralCheckbox label="Option" defaultChecked />)
    const input = screen.getByRole('checkbox', { name: 'Option' })
    expect(input).toBeChecked()
  })

  it('toggles when clicked', async () => {
    const user = userEvent.setup()
    render(<CoralCheckbox label="Toggle me" />)
    const input = screen.getByRole('checkbox', { name: 'Toggle me' })

    expect(input).not.toBeChecked()
    await user.click(input)
    expect(input).toBeChecked()
    await user.click(input)
    expect(input).not.toBeChecked()
  })

  it('renders disabled checkbox', () => {
    render(<CoralCheckbox label="Locked" disabled />)
    const input = screen.getByRole('checkbox', { name: 'Locked' })
    expect(input).toBeDisabled()
  })

  it('does not toggle when disabled checkbox is clicked', async () => {
    const user = userEvent.setup()
    render(<CoralCheckbox label="Locked" disabled />)
    const input = screen.getByRole('checkbox', { name: 'Locked' })

    expect(input).not.toBeChecked()
    await user.click(input)
    expect(input).not.toBeChecked()
  })

  it('does not toggle when disabled checked checkbox is clicked', async () => {
    const user = userEvent.setup()
    render(<CoralCheckbox label="Locked on" defaultChecked disabled />)
    const input = screen.getByRole('checkbox', { name: 'Locked on' })

    expect(input).toBeChecked()
    await user.click(input)
    expect(input).toBeChecked()
  })

  it('shows checkmark SVG when checked', () => {
    render(<CoralCheckbox label="With check" defaultChecked />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.querySelector('polyline')).toBeInTheDocument()
  })

  it('hides checkmark SVG when unchecked', () => {
    render(<CoralCheckbox label="No check" />)
    const svg = document.querySelector('svg')
    expect(svg).not.toBeInTheDocument()
  })

  it('applies opacity class when disabled', () => {
    const { container } = render(<CoralCheckbox label="Faded" disabled />)
    const label = container.querySelector('label')
    expect(label?.className).toContain('opacity-60')
  })

  it('does not apply opacity class when enabled', () => {
    const { container } = render(<CoralCheckbox label="Active" />)
    const label = container.querySelector('label')
    expect(label?.className).not.toContain('opacity-60')
  })
})
