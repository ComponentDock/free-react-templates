import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ControlsShowcase } from './ControlsShowcase'

describe('ControlsShowcase', () => {
  it('renders the four checkbox states, three enabled', () => {
    render(<ControlsShowcase />)

    expect(screen.getByRole('heading', { level: 2, name: 'Checkboxes' })).toBeInTheDocument()
    expect(screen.getByLabelText('Unchecked')).not.toBeChecked()
    expect(screen.getByLabelText('Checked')).toBeChecked()
    expect(screen.getByLabelText('Disabled Unchecked')).toBeDisabled()
    expect(screen.getByLabelText('Disabled Checked')).toBeDisabled()
  })

  it('toggles an enabled checkbox', async () => {
    render(<ControlsShowcase />)

    const checkbox = screen.getByLabelText('Unchecked')
    await userEvent.click(checkbox)

    expect(checkbox).toBeChecked()
  })

  it('moves the radio selection inside the group', async () => {
    render(<ControlsShowcase />)

    expect(screen.getByRole('heading', { level: 2, name: 'Radio Buttons' })).toBeInTheDocument()
    const off = screen.getByLabelText('Radio is off')
    const on = screen.getByLabelText('Radio is on')
    expect(on).toBeChecked()
    expect(screen.getByLabelText('Disabled Radio is off')).toBeDisabled()
    expect(screen.getByLabelText('Disabled radio is on')).toBeDisabled()

    await userEvent.click(off)

    expect(off).toBeChecked()
    expect(on).not.toBeChecked()
  })

  it('flips both switches and shows the ON thumb', async () => {
    render(<ControlsShowcase />)

    expect(screen.getByRole('heading', { level: 2, name: 'Toggle Buttons' })).toBeInTheDocument()
    const on = screen.getByRole('switch', { name: 'Toggle is on' })
    const off = screen.getByRole('switch', { name: 'Toggle is Off' })
    expect(on).toHaveAttribute('aria-checked', 'true')
    expect(off).toHaveAttribute('aria-checked', 'false')
    expect(screen.getByText('ON')).toBeInTheDocument()

    await userEvent.click(on)

    expect(on).toHaveAttribute('aria-checked', 'false')
    expect(screen.queryByText('ON')).not.toBeInTheDocument()
  })
})
