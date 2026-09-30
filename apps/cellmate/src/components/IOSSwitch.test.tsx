import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { IOSSwitch } from './IOSSwitch'

describe('IOSSwitch', () => {
  it('renders an OFF switch with an accessible label', () => {
    render(<IOSSwitch checked={false} onChange={() => {}} label="Toggle James Yates" />)
    const input = screen.getByRole('checkbox', { name: 'Toggle James Yates' })
    expect(input).not.toBeChecked()
  })

  it('renders the OFF track as a white pill with a left knob', () => {
    const { container } = render(
      <IOSSwitch checked={false} onChange={() => {}} label="Off switch" />,
    )
    const track = container.querySelector('label > span')
    expect(track).toHaveClass('border-switch-border', 'bg-white')
    const knob = container.querySelector('label > span > span')
    expect(knob).toHaveClass('left-[2px]')
  })

  it('renders the ON track as a green pill with the knob slid right', () => {
    const { container } = render(<IOSSwitch checked onChange={() => {}} label="On switch" />)
    const track = container.querySelector('label > span')
    expect(track).toHaveClass('border-switch-on', 'bg-switch-on')
    const knob = container.querySelector('label > span > span')
    expect(knob).toHaveClass('left-[14px]')
  })

  it('calls onChange when the switch is toggled', async () => {
    let calls = 0
    const user = userEvent.setup()
    render(
      <IOSSwitch
        checked={false}
        onChange={() => {
          calls += 1
        }}
        label="Toggle me"
      />,
    )
    await user.click(screen.getByRole('checkbox', { name: 'Toggle me' }))
    expect(calls).toBe(1)
  })

  it('the hidden native input is keyboard focusable', () => {
    render(<IOSSwitch checked={false} onChange={() => {}} label="Focusable switch" />)
    const input = screen.getByRole('checkbox', { name: 'Focusable switch' })
    input.focus()
    expect(input).toHaveFocus()
  })
})
