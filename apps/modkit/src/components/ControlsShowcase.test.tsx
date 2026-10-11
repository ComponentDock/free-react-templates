import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { ControlsShowcase } from './ControlsShowcase'

describe('ControlsShowcase', () => {
  it('renders the checkbox family in checked and disabled states', () => {
    render(<ControlsShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
      'Checkboxes, Radios, Toggle Buttons',
    )

    expect(screen.getByLabelText('Unchecked')).not.toBeChecked()
    expect(screen.getByLabelText('Checked')).toBeChecked()
    expect(screen.getByLabelText('Unchecked (Disabled)')).toBeDisabled()
    expect(screen.getByLabelText('Checked (Disabled)')).toBeDisabled()
    expect(screen.getAllByRole('checkbox')).toHaveLength(4)
    expect(screen.getAllByRole('radio')).toHaveLength(4)
  })

  it('renders the radio groups and flips the enabled pair', () => {
    render(<ControlsShowcase />)

    const on = screen.getByLabelText('Radio is on')
    const off = screen.getByLabelText('Radio is off')

    expect(on).toBeChecked()
    expect(off).not.toBeChecked()
    expect(on.className).toContain('accent-kit-primary')

    fireEvent.click(off)
    expect(off).toBeChecked()

    expect(screen.getByLabelText('Radio is on (Disabled)')).toBeDisabled()
    expect(screen.getByLabelText('Radio is off (Disabled)')).toBeDisabled()
  })

  it('renders real switch inputs that flip on click', () => {
    render(<ControlsShowcase />)

    const switches = screen.getAllByRole('switch')
    expect(switches).toHaveLength(2)
    expect(switches[0]!.className).toContain('checked:bg-kit-primary')

    expect(screen.getByRole('switch', { name: 'Toggle this switch element' })).not.toBeChecked()
    expect(screen.getByRole('switch', { name: 'Checked switch element' })).toBeChecked()

    fireEvent.click(screen.getByRole('switch', { name: 'Toggle this switch element' }))
    expect(screen.getByRole('switch', { name: 'Toggle this switch element' })).toBeChecked()

    fireEvent.click(screen.getByRole('switch', { name: 'Checked switch element' }))
    expect(screen.getByRole('switch', { name: 'Checked switch element' })).not.toBeChecked()
  })
})
