import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StepBasicDetails, type BasicDetailsData } from './StepBasicDetails'

const emptyData: BasicDetailsData = {
  firstName: '',
  lastName: '',
  email: '',
  userId: '',
  country: '',
  state: '',
  city: '',
}

describe('StepBasicDetails', () => {
  it('renders the heading', () => {
    render(<StepBasicDetails data={emptyData} onChange={() => {}} errors={{}} />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Basic Details')
  })

  it('renders all form fields', () => {
    render(<StepBasicDetails data={emptyData} onChange={() => {}} errors={{}} />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email ID')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your User ID')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Country')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('State')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument()
  })

  it('calls onChange when input changes', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepBasicDetails data={emptyData} onChange={onChange} errors={{}} />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    expect(onChange).toHaveBeenCalled()
  })

  it('displays error messages', () => {
    render(
      <StepBasicDetails
        data={emptyData}
        onChange={() => {}}
        errors={{ firstName: 'Required', email: 'Invalid email' }}
      />,
    )
    expect(screen.getByText('Required')).toBeInTheDocument()
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('displays existing values', () => {
    const data: BasicDetailsData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com',
      userId: 'jdoe',
      country: 'US',
      state: 'CA',
      city: 'LA',
    }
    render(<StepBasicDetails data={data} onChange={() => {}} errors={{}} />)
    expect(screen.getByDisplayValue('John')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Doe')).toBeInTheDocument()
    expect(screen.getByDisplayValue('john@test.com')).toBeInTheDocument()
  })
})
