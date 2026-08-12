import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Donate } from './Donate'

describe('Donate', () => {
  it('renders the band heading, paragraph and donation form', () => {
    render(<Donate />)

    expect(
      screen.getByRole('heading', { name: 'Your donation can save many lives' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'How much would you like to donate?' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Donation amount')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Donate Now' })).toBeInTheDocument()
  })

  it('shows an inline error for an empty or invalid amount', () => {
    render(<Donate />)

    fireEvent.click(screen.getByRole('button', { name: 'Donate Now' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/enter a valid donation amount/i)

    fireEvent.change(screen.getByLabelText('Donation amount'), { target: { value: 'abc' } })
    fireEvent.click(screen.getByRole('button', { name: 'Donate Now' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/enter a valid donation amount/i)
  })

  it('confirms a valid donation and resets the field', () => {
    render(<Donate />)

    fireEvent.change(screen.getByLabelText('Donation amount'), { target: { value: '50' } })
    fireEvent.click(screen.getByRole('button', { name: 'Donate Now' }))

    expect(screen.getByRole('status')).toHaveTextContent(/thank you/i)
    // The form swaps to the success message, unmounting the input.
    expect(screen.queryByLabelText('Donation amount')).not.toBeInTheDocument()
  })
})
