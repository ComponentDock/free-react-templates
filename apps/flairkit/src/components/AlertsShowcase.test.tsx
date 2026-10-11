import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AlertsShowcase } from './AlertsShowcase'

describe('AlertsShowcase', () => {
  it('renders the five solid alert variants in reference order', () => {
    render(<AlertsShowcase />)

    expect(screen.getByRole('heading', { level: 3, name: 'Alerts' })).toBeInTheDocument()

    const alerts = screen.getAllByRole('alert')

    expect(alerts).toHaveLength(5)
    expect(alerts.map((alert) => alert.textContent)).toEqual([
      'A simple primary alert with an example link. Give it a click if you like.',
      'A simple success alert with an example link. Give it a click if you like.',
      'A simple danger alert with an example link. Give it a click if you like.',
      'A simple warning alert with an example link. Give it a click if you like.',
      'A simple info alert with an example link. Give it a click if you like.',
    ])
    expect(alerts[0]).toHaveClass('bg-flair-primary')
    expect(alerts[1]).toHaveClass('bg-flair-success')
    expect(alerts[2]).toHaveClass('bg-flair-danger')
    expect(alerts[3]).toHaveClass('bg-flair-warning')
    expect(alerts[4]).toHaveClass('bg-flair-info')
  })

  it('links the example phrase inside each alert', () => {
    render(<AlertsShowcase />)

    expect(screen.getAllByRole('link', { name: 'an example link' })).toHaveLength(5)
  })

  it('dismisses an alert with its close control', async () => {
    const user = userEvent.setup()
    render(<AlertsShowcase />)

    await user.click(screen.getByRole('button', { name: 'Close primary alert' }))

    expect(screen.getAllByRole('alert')).toHaveLength(4)
    expect(screen.queryByText(/A simple primary alert/)).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close info alert' }))

    expect(screen.getAllByRole('alert')).toHaveLength(3)
  })
})
