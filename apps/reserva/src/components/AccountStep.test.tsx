import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AccountStep } from './AccountStep'
import { INITIAL_DATA } from '../types'

describe('AccountStep', () => {
  const defaultProps = {
    data: INITIAL_DATA,
    onChange: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all form fields', () => {
    render(<AccountStep {...defaultProps} />)
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Country')).toBeInTheDocument()
    expect(screen.getByLabelText('Your password')).toBeInTheDocument()
    expect(screen.getByLabelText('Daily budget')).toBeInTheDocument()
    expect(screen.getByLabelText('Subscribe to our newsletter')).toBeInTheDocument()
  })

  it('renders email input with correct type', () => {
    render(<AccountStep {...defaultProps} />)
    const emailInput = screen.getByLabelText('Your Email')
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('renders password input with correct type', () => {
    render(<AccountStep {...defaultProps} />)
    const passwordInput = screen.getByLabelText('Your password')
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('renders country dropdown with options', () => {
    render(<AccountStep {...defaultProps} />)
    const countrySelect = screen.getByLabelText('Country')
    expect(countrySelect.tagName).toBe('SELECT')
    expect(screen.getByText('Viet Nam')).toBeInTheDocument()
    expect(screen.getByText('United States America')).toBeInTheDocument()
  })

  it('renders budget dropdown with options', () => {
    render(<AccountStep {...defaultProps} />)
    const budgetSelect = screen.getByLabelText('Daily budget')
    expect(budgetSelect.tagName).toBe('SELECT')
    expect(screen.getByText('$40')).toBeInTheDocument()
    expect(screen.getByText('$60')).toBeInTheDocument()
  })

  it('renders newsletter checkbox', () => {
    render(<AccountStep {...defaultProps} />)
    const checkbox = screen.getByLabelText('Subscribe to our newsletter')
    expect(checkbox).toHaveAttribute('type', 'checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('calls onChange when email is typed', async () => {
    const user = userEvent.setup()
    render(<AccountStep {...defaultProps} />)
    await user.type(screen.getByLabelText('Your Email'), 'test@example.com')
    expect(defaultProps.onChange).toHaveBeenCalledWith('email', 't')
  })

  it('calls onChange when country is selected', async () => {
    const user = userEvent.setup()
    render(<AccountStep {...defaultProps} />)
    await user.selectOptions(screen.getByLabelText('Country'), 'US')
    expect(defaultProps.onChange).toHaveBeenCalledWith('country', 'US')
  })

  it('calls onChange when password is typed', async () => {
    const user = userEvent.setup()
    render(<AccountStep {...defaultProps} />)
    await user.type(screen.getByLabelText('Your password'), 'secret123')
    expect(defaultProps.onChange).toHaveBeenCalledWith('password', 's')
  })

  it('calls onChange when budget is selected', async () => {
    const user = userEvent.setup()
    render(<AccountStep {...defaultProps} />)
    await user.selectOptions(screen.getByLabelText('Daily budget'), '40$')
    expect(defaultProps.onChange).toHaveBeenCalledWith('budget', '40$')
  })

  it('calls onChange when newsletter is toggled', async () => {
    const user = userEvent.setup()
    render(<AccountStep {...defaultProps} />)
    await user.click(screen.getByLabelText('Subscribe to our newsletter'))
    expect(defaultProps.onChange).toHaveBeenCalledWith('newsletter', true)
  })

  it('displays provided field values', () => {
    render(
      <AccountStep
        {...defaultProps}
        data={{
          ...INITIAL_DATA,
          email: 'user@test.com',
          country: 'Vn',
          password: 'pass123',
          budget: '60$',
          newsletter: true,
        }}
      />,
    )
    expect(screen.getByLabelText('Your Email')).toHaveValue('user@test.com')
    expect(screen.getByLabelText('Country')).toHaveValue('Vn')
    expect(screen.getByLabelText('Your password')).toHaveValue('pass123')
    expect(screen.getByLabelText('Daily budget')).toHaveValue('60$')
    expect(screen.getByLabelText('Subscribe to our newsletter')).toBeChecked()
  })
})
