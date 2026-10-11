import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ControlsShowcase } from './ControlsShowcase'

describe('ControlsShowcase', () => {
  it('renders the checkbox, radio and toggle variants', () => {
    const { container } = render(<ControlsShowcase />)

    expect(container.querySelector('section')!.id).toBe('checkRadios')
    for (const group of ['Checkboxes', 'Radio Buttons', 'Toggle Buttons']) {
      expect(screen.getByRole('heading', { name: group })).toBeInTheDocument()
    }

    expect(screen.getByLabelText('Unchecked')).not.toBeChecked()
    expect(screen.getByLabelText('Checked')).toBeChecked()
    expect(screen.getByLabelText('Disabled Unchecked')).toBeDisabled()
    expect(screen.getByLabelText('Disabled Checked')).toBeDisabled()
    expect(screen.getByLabelText('Disabled Checked')).toBeChecked()

    expect(screen.getByLabelText('Radio is on')).toBeChecked()
    expect(screen.getByLabelText('Radio os off')).not.toBeChecked()
    expect(screen.getByLabelText('Disabled radio is off')).toBeDisabled()
  })

  it('flips the switches on click', async () => {
    render(<ControlsShowcase />)

    const on = screen.getByRole('switch', { name: 'Toggle is on' })
    const off = screen.getByRole('switch', { name: 'Toggle is off' })
    expect(on).toBeChecked()
    expect(off).not.toBeChecked()

    await userEvent.click(on)
    await userEvent.click(off)

    expect(on).not.toBeChecked()
    expect(off).toBeChecked()
  })
})
