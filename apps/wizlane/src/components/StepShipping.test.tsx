import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StepShipping, type ShippingData } from './StepShipping'

const emptyData: ShippingData = {
  fullName: '',
  address: '',
  city: '',
  postalCode: '',
  phone: '',
  country: '',
}

describe('StepShipping', () => {
  it('renders the heading', () => {
    render(<StepShipping data={emptyData} onChange={() => {}} errors={{}} />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Shipping Details')
  })

  it('renders all shipping fields', () => {
    render(<StepShipping data={emptyData} onChange={() => {}} errors={{}} />)
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Street Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Postal Code')).toBeInTheDocument()
  })

  it('calls onChange when typing', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepShipping data={emptyData} onChange={onChange} errors={{}} />)
    await user.type(screen.getByPlaceholderText('Full Name'), 'John Doe')
    expect(onChange).toHaveBeenCalled()
  })

  it('displays error messages', () => {
    render(
      <StepShipping
        data={emptyData}
        onChange={() => {}}
        errors={{ fullName: 'Required', phone: 'Required' }}
      />,
    )
    expect(screen.getAllByText('Required').length).toBeGreaterThanOrEqual(1)
  })
})
