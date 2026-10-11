import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AlertsShowcase } from './AlertsShowcase'

describe('AlertsShowcase', () => {
  it('renders the eight contextual alerts, the icon alert, and the dismissible pair', () => {
    render(<AlertsShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Alerts')
    expect(screen.getByText(/provide contextual feedback messages/i)).toBeInTheDocument()

    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(10)
    expect(alerts[0]!.className).toContain('bg-kit-primary')
    expect(alerts[6]!.className).toContain('bg-kit-light')

    expect(screen.getByText('A simple warning alert—check it out!')).toBeInTheDocument()
    expect(screen.getByText(/info:/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dismiss primary alert' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dismiss secondary alert' })).toBeInTheDocument()
  })

  it('dismisses each alert with its close button without touching the demo rows', async () => {
    const user = userEvent.setup()
    render(<AlertsShowcase />)

    await user.click(screen.getByRole('button', { name: 'Dismiss primary alert' }))

    expect(screen.getAllByRole('alert')).toHaveLength(9)
    expect(screen.queryByRole('button', { name: 'Dismiss primary alert' })).not.toBeInTheDocument()
    expect(screen.getAllByText('A simple primary alert—check it out!')).toHaveLength(1)

    await user.click(screen.getByRole('button', { name: 'Dismiss secondary alert' }))

    expect(screen.getAllByRole('alert')).toHaveLength(8)
    expect(screen.getAllByText('A simple secondary alert—check it out!')).toHaveLength(1)
  })
})
