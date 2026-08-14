import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the headline and opens the reservation modal from the CTA button', async () => {
    const user = userEvent.setup()
    render(<CtaBand />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'A Best Place To Stay. Reserve Now!' }),
    ).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    const reserve = screen.getByRole('button', { name: 'Reserve Now' })
    await user.click(reserve)

    const dialog = screen.getByRole('dialog', { name: 'Reservation' })
    expect(dialog).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
  })

  it('closes the modal via the close control and via the backdrop', async () => {
    const user = userEvent.setup()
    render(<CtaBand />)

    await user.click(screen.getByRole('button', { name: 'Reserve Now' }))
    await user.click(screen.getByRole('button', { name: 'Close reservation modal' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Reserve Now' }))
    const backdrop = screen.getByRole('dialog').parentElement as HTMLElement
    await user.click(backdrop)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
