import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NotificationsShowcase } from './NotificationsShowcase'

describe('NotificationsShowcase', () => {
  it('renders the four solid alerts with white text', () => {
    const { container } = render(<NotificationsShowcase />)

    expect(container.querySelector('section')!.id).toBe('notifications')
    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(4)

    const classes = alerts.map((alert) => alert.className)
    expect(classes[0]).toContain('bg-info')
    expect(classes[1]).toContain('bg-success')
    expect(classes[2]).toContain('bg-warning')
    expect(classes[3]).toContain('bg-danger')
    for (const alert of alerts) {
      expect(alert.className).toContain('text-white')
    }

    expect(screen.getByText(/You have got some friends nearby/)).toBeInTheDocument()
    expect(screen.getByText(/Yuhuuu!/)).toBeInTheDocument()
    expect(screen.getByText(/find a good sysadmin/)).toBeInTheDocument()
  })
})
