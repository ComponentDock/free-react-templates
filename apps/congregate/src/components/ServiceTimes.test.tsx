import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServiceTimes } from './ServiceTimes'

describe('ServiceTimes', () => {
  it('shows the eyebrow, heading and intro', () => {
    render(<ServiceTimes />)

    expect(screen.getByText('Join Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Service Times/ })).toBeInTheDocument()
    expect(
      screen.getByText(/Whether in person or online, we'd love to worship with you/),
    ).toBeInTheDocument()
  })

  it('shows the Sunday and Wednesday service cards', () => {
    render(<ServiceTimes />)

    expect(screen.getByRole('heading', { level: 3, name: 'Sunday' })).toBeInTheDocument()
    expect(screen.getByText('9:00 AM & 11:00 AM')).toBeInTheDocument()
    expect(screen.getByText('In-person & Online')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Wednesday' })).toBeInTheDocument()
    expect(screen.getByText('7:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Midweek Service')).toBeInTheDocument()
  })

  it('shows the location card with address and Get Directions link', () => {
    render(<ServiceTimes />)

    expect(screen.getByRole('heading', { level: 3, name: /Our Location/ })).toBeInTheDocument()
    expect(screen.getByText(/1200 Grace Avenue/)).toBeInTheDocument()
    expect(screen.getByText(/Austin, TX 78701/)).toBeInTheDocument()
    const directions = screen.getByRole('link', { name: /Get Directions/ })
    expect(directions).toHaveAttribute('href', expect.stringContaining('maps.google.com'))
    expect(directions).toHaveAttribute('target', '_blank')
  })
})
