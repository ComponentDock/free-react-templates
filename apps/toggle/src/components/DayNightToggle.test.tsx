import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DayNightToggle } from './DayNightToggle'

describe('DayNightToggle', () => {
  it('renders unchecked by default', () => {
    render(<DayNightToggle />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('renders checked when defaultChecked is true', () => {
    render(<DayNightToggle defaultChecked />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('toggles from unchecked to checked on click', async () => {
    const user = userEvent.setup()
    render(<DayNightToggle />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('toggles from checked to unchecked on click', async () => {
    const user = userEvent.setup()
    render(<DayNightToggle defaultChecked />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('shows moon icon when unchecked', () => {
    const { container } = render(<DayNightToggle />)
    const moonSvg = container.querySelector('svg')
    expect(moonSvg).toBeInTheDocument()
  })

  it('shows sun icon when checked', () => {
    const { container } = render(<DayNightToggle defaultChecked />)
    const sunSvg = container.querySelector('svg')
    expect(sunSvg).toBeInTheDocument()
  })

  it('has an accessible label', () => {
    render(<DayNightToggle label="Theme switch" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Theme switch' })
    expect(checkbox).toBeInTheDocument()
  })

  it('uses default label when none provided', () => {
    render(<DayNightToggle />)
    const checkbox = screen.getByRole('checkbox', { name: 'Toggle' })
    expect(checkbox).toBeInTheDocument()
  })

  it('toggles on keyboard Space', async () => {
    const user = userEvent.setup()
    render(<DayNightToggle />)
    const checkbox = screen.getByRole('checkbox')
    checkbox.focus()
    await user.keyboard(' ')
    expect(checkbox).toBeChecked()
  })
})
