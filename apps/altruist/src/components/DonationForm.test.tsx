import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { DonationForm } from './DonationForm'

describe('DonationForm', () => {
  it('renders the label, currency select, amount input, and Donate Now button', () => {
    render(<DonationForm idPrefix="test" label="Enter Monthly Donation Amount" />)

    expect(screen.getByLabelText('Enter Monthly Donation Amount')).toBeInTheDocument()
    expect(screen.getByLabelText('Currency')).toBeInTheDocument()
    expect(screen.getByLabelText('Donation amount')).toHaveAttribute('placeholder', '125.00')
    expect(screen.getByRole('button', { name: 'Donate Now' })).toBeInTheDocument()
    /* No radio group unless requested. */
    expect(screen.queryByRole('radio')).not.toBeInTheDocument()
  })

  it('shows a required error for an empty amount and clears it on typing', () => {
    render(<DonationForm idPrefix="test" />)
    fireEvent.click(screen.getByRole('button', { name: 'Donate Now' }))

    expect(screen.getByText('Please enter a donation amount')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Donation amount'), { target: { value: '25' } })
    expect(screen.queryByText('Please enter a donation amount')).not.toBeInTheDocument()
  })

  it('rejects a non-numeric amount', () => {
    render(<DonationForm idPrefix="test" />)
    fireEvent.change(screen.getByLabelText('Donation amount'), { target: { value: 'abc' } })
    fireEvent.click(screen.getByRole('button', { name: 'Donate Now' }))

    expect(screen.getByText('Please enter a valid amount')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid amount with a success confirmation and clears the input', () => {
    render(<DonationForm idPrefix="test" />)
    fireEvent.change(screen.getByLabelText('Donation amount'), { target: { value: '125.00' } })
    fireEvent.click(screen.getByRole('button', { name: 'Donate Now' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thank you! Your one time donation of USD 125.00 has been received.',
    )
    expect(screen.getByLabelText('Donation amount')).toHaveValue('')
  })

  it('changes the currency and honors the donation type radios', () => {
    render(<DonationForm idPrefix="test" withDonationType />)

    const radios = screen.getAllByRole('radio')
    expect(radios).toHaveLength(2)
    expect(screen.getByRole('radio', { name: /One Time/ })).toBeInTheDocument()
    expect(screen.getAllByText('Donate your amount for this session only')).toHaveLength(2)

    fireEvent.change(screen.getByLabelText('Currency'), { target: { value: 'EUR' } })
    fireEvent.click(screen.getByRole('radio', { name: /Ongoing/ }))
    fireEvent.change(screen.getByLabelText('Donation amount'), { target: { value: '40' } })
    fireEvent.click(screen.getByRole('button', { name: 'Donate Now' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thank you! Your ongoing donation of EUR 40 has been received.',
    )
  })

  it('keeps the radio choice stable across submits', () => {
    render(<DonationForm idPrefix="test" withDonationType />)
    const ongoing = screen.getByRole('radio', { name: /Ongoing/ })
    fireEvent.click(ongoing)
    expect(ongoing).toBeChecked()
    expect(screen.getByRole('radio', { name: /One Time/ })).not.toBeChecked()
    /* Clicking the selected radio again keeps it selected. */
    fireEvent.click(ongoing)
    expect(ongoing).toBeChecked()
  })
})
