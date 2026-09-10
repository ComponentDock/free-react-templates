import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StepPayment, type PaymentData } from './StepPayment'

const emptyData: PaymentData = {
  cardNumber: '',
  cardName: '',
  expiry: '',
  cvv: '',
}

describe('StepPayment', () => {
  it('renders the heading', () => {
    render(<StepPayment data={emptyData} onChange={() => {}} errors={{}} />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Payment Details')
  })

  it('renders all payment fields', () => {
    render(<StepPayment data={emptyData} onChange={() => {}} errors={{}} />)
    expect(screen.getByPlaceholderText('Card Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Cardholder Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('MM / YY')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('CVV')).toBeInTheDocument()
  })

  it('calls onChange when typing', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepPayment data={emptyData} onChange={onChange} errors={{}} />)
    await user.type(screen.getByPlaceholderText('Card Number'), '4111')
    expect(onChange).toHaveBeenCalled()
  })

  it('displays error messages', () => {
    render(<StepPayment data={emptyData} onChange={() => {}} errors={{ cardNumber: 'Required' }} />)
    expect(screen.getByText('Required')).toBeInTheDocument()
  })
})
