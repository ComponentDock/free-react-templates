import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuickBook } from './QuickBook'
import { bookingReasons } from '../data'

describe('QuickBook', () => {
  it('renders three required controls with the placeholder select and six reasons', () => {
    render(<QuickBook />)

    expect(screen.getByLabelText('Your name')).toBeRequired()
    expect(screen.getByLabelText('Phone')).toBeRequired()

    const select = screen.getByLabelText('What is it for?')
    expect(select).toBeRequired()
    expect(select).toHaveValue('')

    const options = Array.from(select.querySelectorAll('option')).map((option) => option.textContent)
    expect(options).toEqual(['Choose the closest match', ...bookingReasons.map((r) => r.label)])
    expect(select.querySelectorAll('option')).toHaveLength(7)
  })

  it('confirms a complete request without navigating', async () => {
    const user = userEvent.setup()
    render(<QuickBook />)

    await user.type(screen.getByLabelText('Your name'), 'Dana Whitlock')
    await user.type(screen.getByLabelText('Phone'), '5551501500')
    await user.selectOptions(screen.getByLabelText('What is it for?'), 'annual-test')
    await user.click(screen.getByRole('button', { name: 'Book the test' }))

    expect(screen.getByRole('status')).toHaveTextContent('this demo card does not send anything')
  })

  it('blocks an incomplete request and shows no confirmation', async () => {
    const user = userEvent.setup()
    render(<QuickBook />)

    await user.type(screen.getByLabelText('Your name'), 'Dana Whitlock')
    await user.type(screen.getByLabelText('Phone'), '5551501500')
    await user.click(screen.getByRole('button', { name: 'Book the test' }))

    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    // A programmatic submit bypasses the browser's own block, so the card's guard must hold.
    fireEvent.submit(screen.getByLabelText('Your name').closest('form')!)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('prints the fixed-price note under the button', () => {
    render(<QuickBook />)

    expect(
      screen.getByText(/Fixed price. If the device fails you pay the test fee/),
    ).toBeInTheDocument()
  })
})
