import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { DonationFormSection } from './DonationFormSection'

describe('DonationFormSection', () => {
  it('renders the overlapping donation box with One Time/Ongoing radios', () => {
    render(<DonationFormSection />)

    expect(screen.getByLabelText('Currency')).toBeInTheDocument()
    expect(screen.getByLabelText('Donation amount')).toHaveAttribute('placeholder', '125.00')
    expect(screen.getByRole('radio', { name: /One Time/ })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /Ongoing/ })).toBeInTheDocument()
    expect(screen.getAllByText('Donate your amount for this session only')).toHaveLength(2)
    expect(screen.getByRole('button', { name: 'Donate Now' })).toBeInTheDocument()
  })

  it('submits an ongoing donation with a confirmation', () => {
    render(<DonationFormSection />)

    fireEvent.click(screen.getByRole('radio', { name: /Ongoing/ }))
    fireEvent.change(screen.getByLabelText('Donation amount'), { target: { value: '75' } })
    fireEvent.click(screen.getByRole('button', { name: 'Donate Now' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thank you! Your ongoing donation of USD 75 has been received.',
    )
  })
})
