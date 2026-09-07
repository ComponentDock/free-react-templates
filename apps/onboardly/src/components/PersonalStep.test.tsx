import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PersonalStep } from './PersonalStep'
import { INITIAL_DATA } from '../types'

describe('PersonalStep', () => {
  const defaultProps = {
    data: INITIAL_DATA,
    onChange: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all form fields', () => {
    render(<PersonalStep {...defaultProps} />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Address')).toBeInTheDocument()
  })

  it('renders heading', () => {
    render(<PersonalStep {...defaultProps} />)
    expect(screen.getByText('Personal Details')).toBeInTheDocument()
  })

  it('renders text inputs', () => {
    render(<PersonalStep {...defaultProps} />)
    expect(screen.getByPlaceholderText('Your name')).toHaveAttribute('type', 'text')
    expect(screen.getByPlaceholderText('Phone')).toHaveAttribute('type', 'text')
    expect(screen.getByPlaceholderText('Address')).toHaveAttribute('type', 'text')
  })

  it('calls onChange when name is typed', async () => {
    const user = userEvent.setup()
    render(<PersonalStep {...defaultProps} />)
    await user.type(screen.getByPlaceholderText('Your name'), 'J')
    expect(defaultProps.onChange).toHaveBeenCalledWith('name', 'J')
  })

  it('calls onChange when phone is typed', async () => {
    const user = userEvent.setup()
    render(<PersonalStep {...defaultProps} />)
    await user.type(screen.getByPlaceholderText('Phone'), '5')
    expect(defaultProps.onChange).toHaveBeenCalledWith('phone', '5')
  })

  it('calls onChange when address is typed', async () => {
    const user = userEvent.setup()
    render(<PersonalStep {...defaultProps} />)
    await user.type(screen.getByPlaceholderText('Address'), '1')
    expect(defaultProps.onChange).toHaveBeenCalledWith('address', '1')
  })

  it('displays provided field values', () => {
    render(
      <PersonalStep
        {...defaultProps}
        data={{
          ...INITIAL_DATA,
          name: 'John',
          phone: '555-1234',
          address: '123 Main St',
        }}
      />,
    )
    expect(screen.getByPlaceholderText('Your name')).toHaveValue('John')
    expect(screen.getByPlaceholderText('Phone')).toHaveValue('555-1234')
    expect(screen.getByPlaceholderText('Address')).toHaveValue('123 Main St')
  })
})
