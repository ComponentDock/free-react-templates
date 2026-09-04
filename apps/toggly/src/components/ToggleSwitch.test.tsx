import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ToggleSwitch } from './ToggleSwitch'

describe('ToggleSwitch', () => {
  it('renders unchecked by default', () => {
    render(<ToggleSwitch label="Toggle 1" />)
    const input = screen.getByRole('checkbox', { name: 'Toggle 1' })
    expect(input).not.toBeChecked()
  })

  it('renders checked when defaultChecked is true', () => {
    render(<ToggleSwitch defaultChecked label="Toggle 2" />)
    const input = screen.getByRole('checkbox', { name: 'Toggle 2' })
    expect(input).toBeChecked()
  })

  it('toggles on click', async () => {
    const user = userEvent.setup()
    render(<ToggleSwitch label="Toggle 1" />)
    const input = screen.getByRole('checkbox', { name: 'Toggle 1' })

    expect(input).not.toBeChecked()
    await user.click(input)
    expect(input).toBeChecked()
    await user.click(input)
    expect(input).not.toBeChecked()
  })

  it('uses default aria-label when label prop is omitted', () => {
    render(<ToggleSwitch />)
    expect(screen.getByRole('checkbox', { name: 'Toggle' })).toBeInTheDocument()
  })

  it('has a visible focus indicator when focused via keyboard', async () => {
    const user = userEvent.setup()
    render(<ToggleSwitch label="Toggle 1" />)
    const input = screen.getByRole('checkbox', { name: 'Toggle 1' })

    await user.tab()
    expect(input).toHaveFocus()
  })

  it('has accessible name matching label prop', () => {
    render(<ToggleSwitch label="Custom Label" />)
    expect(screen.getByRole('checkbox', { name: 'Custom Label' })).toBeInTheDocument()
  })
})
