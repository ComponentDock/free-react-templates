import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { CalculatorCard } from './CalculatorCard'

describe('CalculatorCard', () => {
  it('renders the two pill selects, the amount slider, and the apply button', () => {
    render(<CalculatorCard />)

    expect(screen.getByText('How much you want?')).toBeInTheDocument()
    expect(screen.getByText('We provide online instant cash loans.')).toBeInTheDocument()

    const amountSelect = screen.getByLabelText('Amount you want')
    expect(amountSelect).toHaveDisplayValue('Select Amount')
    expect(screen.getByRole('option', { name: '$5,000' })).toBeInTheDocument()

    const monthSelect = screen.getByLabelText('Month')
    expect(monthSelect).toHaveDisplayValue('Select Month')
    expect(screen.getByRole('option', { name: '1 year' })).toBeInTheDocument()

    const slider = screen.getByRole('slider', { name: 'Loan amount' })
    fireEvent.change(slider, { target: { value: '75000' } })
    expect(screen.getByText('$75,000')).toBeInTheDocument()
    expect(screen.getByText('You have to pay:')).toBeInTheDocument()
  })

  it('blocks submission and shows validation errors when selects are empty', async () => {
    const user = userEvent.setup()
    render(<CalculatorCard />)

    await user.click(screen.getByRole('button', { name: 'Apply Now' }))

    const alerts = screen.getAllByRole('alert')
    expect(alerts[0]).toHaveTextContent('Please choose an amount.')
    expect(alerts[1]).toHaveTextContent('Please choose a term.')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('only complains about the field left empty', async () => {
    const user = userEvent.setup()
    render(<CalculatorCard />)

    await user.selectOptions(screen.getByLabelText('Amount you want'), '$25,000')
    await user.click(screen.getByRole('button', { name: 'Apply Now' }))

    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.getByRole('alert')).toHaveTextContent('Please choose a term.')
  })

  it('shows the success panel when both fields are filled', async () => {
    const user = userEvent.setup()
    render(<CalculatorCard />)

    await user.selectOptions(screen.getByLabelText('Amount you want'), '$25,000')
    await user.selectOptions(screen.getByLabelText('Month'), '1 year')
    await user.click(screen.getByRole('button', { name: 'Apply Now' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent('Request received')
    expect(status).toHaveTextContent(/loan specialist will contact you/)
    expect(screen.queryByLabelText('Amount you want')).not.toBeInTheDocument()
  })
})
