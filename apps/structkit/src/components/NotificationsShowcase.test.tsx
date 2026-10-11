import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { NotificationsShowcase } from './NotificationsShowcase'

describe('NotificationsShowcase', () => {
  it('renders the four solid alerts in order', () => {
    render(<NotificationsShowcase />)

    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(4)
    expect(alerts[0]).toHaveTextContent('Info alert:')
    expect(alerts[1]).toHaveTextContent('Success Alert:')
    expect(alerts[2]).toHaveTextContent('Warning Alert:')
    expect(alerts[3]).toHaveTextContent('Error Alert:')
  })

  it('dismisses an alert and keeps the rest', async () => {
    const user = userEvent.setup()
    render(<NotificationsShowcase />)

    await user.click(screen.getByRole('button', { name: 'Dismiss warning alert' }))

    expect(screen.getAllByRole('alert')).toHaveLength(3)
    expect(screen.queryByText(/copyright ©/)).not.toBeInTheDocument()
    expect(screen.getByText(/You screwed up the server/)).toBeInTheDocument()
  })
})
