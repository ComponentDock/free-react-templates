import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ApplicationForm } from './ApplicationForm'

describe('ApplicationForm', () => {
  it('renders form heading and inputs', () => {
    render(<ApplicationForm />)

    expect(screen.getByText(/Apply in Three Easy Steps/i)).toBeInTheDocument()
    expect(screen.getByText(/Easy Application Process/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Select Amount/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Duration Month/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Return Amount/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /apply for loan/i })).toBeInTheDocument()
  })

  it('allows selecting amount', async () => {
    const user = userEvent.setup()
    render(<ApplicationForm />)

    const amountSelect = screen.getByLabelText(/Select Amount/i)
    await user.selectOptions(amountSelect, '$25,000')
    expect(amountSelect).toHaveValue('$25,000')
  })

  it('allows selecting duration', async () => {
    const user = userEvent.setup()
    render(<ApplicationForm />)

    const durationSelect = screen.getByLabelText(/Duration Month/i)
    await user.selectOptions(durationSelect, '12 Months')
    expect(durationSelect).toHaveValue('12 Months')
  })

  it('allows typing in return amount', async () => {
    const user = userEvent.setup()
    render(<ApplicationForm />)

    const returnInput = screen.getByLabelText(/Return Amount/i)
    await user.type(returnInput, '5000')
    expect(returnInput).toHaveValue('5000')
  })

  it('prevents form default submission', async () => {
    const user = userEvent.setup()
    render(<ApplicationForm />)

    const submitBtn = screen.getByRole('button', { name: /apply for loan/i })
    await user.click(submitBtn)
  })
})
