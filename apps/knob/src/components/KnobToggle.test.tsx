import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { KnobToggle } from './KnobToggle'

describe('KnobToggle', () => {
  it('renders with the given label', () => {
    render(<KnobToggle label="Notifications" />)
    expect(screen.getByText('Notifications')).toBeInTheDocument()
  })

  it('has a checkbox input with accessible name', () => {
    render(<KnobToggle label="Notifications" />)
    expect(screen.getByRole('checkbox', { name: 'Notifications' })).toBeInTheDocument()
  })

  it('is unchecked by default', () => {
    render(<KnobToggle label="Test" />)
    expect(screen.getByRole('checkbox', { name: 'Test' })).not.toBeChecked()
  })

  it('toggles to checked when clicked', async () => {
    const user = userEvent.setup()
    render(<KnobToggle label="Test" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Test' })

    await user.click(checkbox)
    expect(checkbox).toBeChecked()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('respects defaultChecked prop', () => {
    render(<KnobToggle label="Test" defaultChecked />)
    expect(screen.getByRole('checkbox', { name: 'Test' })).toBeChecked()
  })

  it('is disabled when disabled prop is true', async () => {
    const user = userEvent.setup()
    render(<KnobToggle label="Disabled" disabled />)
    const checkbox = screen.getByRole('checkbox', { name: 'Disabled' })

    expect(checkbox).toBeDisabled()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('shows checked state when disabled and defaultChecked', () => {
    render(<KnobToggle label="Disabled & checked" defaultChecked disabled />)
    const checkbox = screen.getByRole('checkbox', { name: 'Disabled & checked' })
    expect(checkbox).toBeChecked()
    expect(checkbox).toBeDisabled()
  })

  it('renders the visible label element', () => {
    render(<KnobToggle label="My toggle" />)
    const labels = screen.getAllByText('My toggle')
    expect(labels.length).toBeGreaterThanOrEqual(1)
  })

  it('applies disabled opacity styling to the track', () => {
    const { container } = render(<KnobToggle label="Disabled" disabled />)
    const track = container.querySelector('label[aria-hidden="true"]')
    expect(track).toHaveClass('opacity-50')
  })

  it('applies checked track color when defaultChecked', () => {
    const { container } = render(<KnobToggle label="On" defaultChecked />)
    const track = container.querySelector('label[aria-hidden="true"]')
    expect(track).toHaveClass('bg-track-on')
  })

  it('applies unchecked track color when not checked', () => {
    const { container } = render(<KnobToggle label="Off" />)
    const track = container.querySelector('label[aria-hidden="true"]')
    expect(track).toHaveClass('bg-track-off')
  })
})
