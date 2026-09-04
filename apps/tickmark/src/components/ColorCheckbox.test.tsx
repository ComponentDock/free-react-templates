import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ColorCheckbox } from './ColorCheckbox'

describe('ColorCheckbox', () => {
  it('renders with the given label', () => {
    render(<ColorCheckbox label="Primary" variant="primary" />)
    expect(screen.getByText('Primary')).toBeInTheDocument()
  })

  it('is unchecked by default', () => {
    render(<ColorCheckbox label="Primary" variant="primary" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Primary' })
    expect(checkbox).not.toBeChecked()
  })

  it('toggles to checked when clicked', async () => {
    const user = userEvent.setup()
    render(<ColorCheckbox label="Primary" variant="primary" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Primary' })

    await user.click(checkbox)
    expect(checkbox).toBeChecked()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('respects defaultChecked prop', () => {
    render(<ColorCheckbox label="Success" variant="success" defaultChecked />)
    expect(screen.getByRole('checkbox', { name: 'Success' })).toBeChecked()
  })

  it('is disabled when disabled prop is true', async () => {
    const user = userEvent.setup()
    render(<ColorCheckbox label="Disabled" variant="disabled" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Disabled' })

    expect(checkbox).toBeDisabled()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders all variant labels', () => {
    render(
      <>
        <ColorCheckbox label="Primary" variant="primary" />
        <ColorCheckbox label="Success" variant="success" />
        <ColorCheckbox label="Danger" variant="danger" />
        <ColorCheckbox label="Warning" variant="warning" />
        <ColorCheckbox label="Info" variant="info" />
        <ColorCheckbox label="Disabled" variant="disabled" />
      </>,
    )

    expect(screen.getByText('Primary')).toBeInTheDocument()
    expect(screen.getByText('Success')).toBeInTheDocument()
    expect(screen.getByText('Danger')).toBeInTheDocument()
    expect(screen.getByText('Warning')).toBeInTheDocument()
    expect(screen.getByText('Info')).toBeInTheDocument()
    expect(screen.getByText('Disabled')).toBeInTheDocument()
  })

  it('shows a checkmark SVG when checked', async () => {
    const user = userEvent.setup()
    render(<ColorCheckbox label="Primary" variant="primary" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Primary' })

    expect(screen.queryByRole('checkbox', { name: 'Primary' })).not.toBeChecked()
    await user.click(checkbox)

    // SVG checkmark is visible
    const svg = document.querySelector('svg polyline')
    expect(svg).toBeInTheDocument()
  })
})
