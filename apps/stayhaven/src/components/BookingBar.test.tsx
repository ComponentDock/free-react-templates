import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingBar } from './BookingBar'
import { GUEST_OPTIONS } from '../data'

describe('BookingBar', () => {
  it('renders date fields, guest selects and the availability button', () => {
    render(<BookingBar />)

    expect(screen.getByLabelText('Check In')).toBeInTheDocument()
    expect(screen.getByLabelText('Check Out')).toBeInTheDocument()

    for (const label of ['Adults', 'Children']) {
      const select = screen.getByLabelText(label)
      expect(within(select).getAllByRole('option')).toHaveLength(GUEST_OPTIONS.length)
      expect(select).toHaveDisplayValue(GUEST_OPTIONS[0])
    }

    expect(screen.getByRole('button', { name: 'Check Availability' })).toBeInTheDocument()
  })

  it('submits the form without reloading', async () => {
    const user = userEvent.setup()
    render(<BookingBar />)

    await user.click(screen.getByRole('button', { name: 'Check Availability' }))
    expect(screen.getByRole('button', { name: 'Check Availability' })).toBeInTheDocument()
  })
})
