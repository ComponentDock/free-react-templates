import { describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReservationModal } from './ReservationModal'
import { GUEST_OPTIONS } from '../data'

describe('ReservationModal', () => {
  it('renders nothing when closed', () => {
    render(<ReservationModal open={false} onClose={() => {}} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders all reservation fields when open', () => {
    render(<ReservationModal open onClose={() => {}} />)

    expect(screen.getByRole('dialog', { name: 'Reservation' })).toBeInTheDocument()
    for (const label of ['Name', 'Phone', 'Email', 'Date Check In', 'Date Check Out']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
    for (const label of ['Adults', 'Children']) {
      const select = screen.getByLabelText(label)
      expect(within(select).getAllByRole('option')).toHaveLength(GUEST_OPTIONS.length)
      expect(select).toHaveDisplayValue(GUEST_OPTIONS[0])
    }
    expect(screen.getByRole('button', { name: 'Reserve Now' })).toBeInTheDocument()
  })

  it('closes via the close control, the backdrop, and submits without reloading', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ReservationModal open onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close reservation modal' }))
    expect(onClose).toHaveBeenCalledTimes(1)

    const backdrop = screen.getByRole('dialog').parentElement as HTMLElement
    await user.click(backdrop)
    expect(onClose).toHaveBeenCalledTimes(2)

    await user.click(screen.getByRole('button', { name: 'Reserve Now' }))
    expect(onClose).toHaveBeenCalledTimes(2)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
