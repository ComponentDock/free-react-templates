import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NotificationsShowcase } from './NotificationsShowcase'

describe('NotificationsShowcase', () => {
  it('renders the four labeled contextual alerts', () => {
    render(<NotificationsShowcase />)

    expect(screen.getByRole('heading', { level: 2, name: 'Notifications' })).toBeInTheDocument()
    expect(screen.getAllByRole('alert')).toHaveLength(4)
    expect(screen.getByText('Info alert:')).toBeInTheDocument()
    expect(screen.getByText('Success Alert:')).toBeInTheDocument()
    expect(screen.getByText('Warning Alert:')).toBeInTheDocument()
    expect(screen.getByText('Error Alert:')).toBeInTheDocument()
  })

  it('dismisses an alert with its close control', async () => {
    render(<NotificationsShowcase />)

    await userEvent.click(screen.getByRole('button', { name: 'Dismiss Info alert' }))

    expect(screen.getAllByRole('alert')).toHaveLength(3)
    expect(screen.queryByText('Info alert:')).not.toBeInTheDocument()
  })

  it('dismisses every alert', async () => {
    render(<NotificationsShowcase />)

    for (const label of ['Info alert', 'Success Alert', 'Warning Alert', 'Error Alert']) {
      await userEvent.click(screen.getByRole('button', { name: `Dismiss ${label}` }))
    }

    expect(screen.queryAllByRole('alert')).toHaveLength(0)
  })
})
