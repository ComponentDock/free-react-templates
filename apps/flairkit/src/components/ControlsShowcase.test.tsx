import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ControlsShowcase } from './ControlsShowcase'

describe('ControlsShowcase', () => {
  it('renders the three control groups', () => {
    render(<ControlsShowcase />)

    expect(
      screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent),
    ).toEqual(['Checkboxes', 'Radioboxes', 'Toggle Buttons'])
  })

  it('renders the four checkbox rows, checked and disabled states included', () => {
    render(<ControlsShowcase />)

    expect(screen.getAllByRole('checkbox')).toHaveLength(4)
    expect(screen.getByRole('checkbox', { name: 'Unchecked' })).not.toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Checked' })).toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Unchecked (Disabled)' })).toBeDisabled()
    expect(screen.getByRole('checkbox', { name: 'Checked (Disabled)' })).toBeChecked()
  })

  it('flips an enabled checkbox and leaves the disabled one inert', async () => {
    const user = userEvent.setup()
    render(<ControlsShowcase />)

    const unchecked = screen.getByRole('checkbox', { name: 'Unchecked' })
    const disabled = screen.getByRole('checkbox', { name: 'Unchecked (Disabled)' })

    await user.click(unchecked)
    expect(unchecked).toBeChecked()

    await user.click(disabled)
    expect(disabled).not.toBeChecked()
  })

  it('selects within the enabled radio group only', async () => {
    const user = userEvent.setup()
    render(<ControlsShowcase />)

    expect(screen.getAllByRole('radio')).toHaveLength(4)
    expect(screen.getByRole('radio', { name: 'Radio is on' })).toBeChecked()

    await user.click(screen.getByRole('radio', { name: 'Radio is off' }))

    expect(screen.getByRole('radio', { name: 'Radio is off' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Radio is on' })).not.toBeChecked()
  })

  it('leaves the disabled radio group untouched', async () => {
    const user = userEvent.setup()
    render(<ControlsShowcase />)

    await user.click(screen.getByRole('radio', { name: 'Radio is off (Disabled)' }))

    expect(screen.getByRole('radio', { name: 'Radio is on (Disabled)' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Radio is off (Disabled)' })).not.toBeChecked()
  })

  it('flips the toggle switches', async () => {
    const user = userEvent.setup()
    render(<ControlsShowcase />)

    const off = screen.getByRole('switch', { name: 'Toggle this switch element' })
    const on = screen.getByRole('switch', { name: 'Checked switch element' })

    expect(off).not.toBeChecked()
    expect(on).toBeChecked()

    await user.click(off)
    await user.click(on)

    expect(off).toBeChecked()
    expect(on).not.toBeChecked()
  })
})
