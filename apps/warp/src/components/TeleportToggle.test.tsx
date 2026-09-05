import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TeleportToggle } from './TeleportToggle'

describe('TeleportToggle', () => {
  it('renders with caption and Off/On labels', () => {
    render(<TeleportToggle caption="Switch 1" />)
    expect(screen.getByText('Switch 1')).toBeInTheDocument()
    expect(screen.getByText('Off')).toBeInTheDocument()
    expect(screen.getByText('On')).toBeInTheDocument()
  })

  it('renders a checkbox with the caption as accessible name', () => {
    render(<TeleportToggle caption="Switch 2" />)
    expect(screen.getByRole('checkbox', { name: 'Switch 2' })).toBeInTheDocument()
  })

  it('can be toggled by click when enabled', async () => {
    const user = userEvent.setup()
    render(<TeleportToggle caption="Toggle me" defaultChecked={false} />)
    const checkbox = screen.getByRole('checkbox', { name: 'Toggle me' })
    expect(checkbox).not.toBeChecked()

    await user.click(checkbox)
    expect(checkbox).toBeChecked()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('respects defaultChecked', () => {
    render(<TeleportToggle caption="Pre-checked" defaultChecked={true} />)
    expect(screen.getByRole('checkbox', { name: 'Pre-checked' })).toBeChecked()
  })

  it('renders disabled and not toggleable', async () => {
    const user = userEvent.setup()
    render(<TeleportToggle caption="Disabled switch" defaultChecked={false} disabled />)
    const checkbox = screen.getByRole('checkbox', { name: 'Disabled switch' })
    expect(checkbox).toBeDisabled()
    expect(checkbox).not.toBeChecked()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders disabled + checked state', () => {
    render(<TeleportToggle caption="Disabled checked" defaultChecked={true} disabled />)
    const checkbox = screen.getByRole('checkbox', { name: 'Disabled checked' })
    expect(checkbox).toBeChecked()
    expect(checkbox).toBeDisabled()
  })

  it('applies opacity-40 to disabled tracks', () => {
    const { container } = render(<TeleportToggle caption="Disabled" disabled />)
    // The track span has the opacity class when disabled
    const track = container.querySelector('.opacity-40')
    expect(track).toBeInTheDocument()
  })

  it('toggle does not affect other switches', async () => {
    const user = userEvent.setup()
    render(
      <>
        <TeleportToggle caption="A" defaultChecked={false} />
        <TeleportToggle caption="B" defaultChecked={true} />
      </>,
    )
    const a = screen.getByRole('checkbox', { name: 'A' })
    const b = screen.getByRole('checkbox', { name: 'B' })

    await user.click(a)
    expect(a).toBeChecked()
    expect(b).toBeChecked()
  })
})
