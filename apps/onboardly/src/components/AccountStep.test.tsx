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
    expect(screen.getByPlaceholderText('Eg: aucreative@gmail.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()
  })

  it('renders heading', () => {
    render(<AccountStep {...defaultProps} />)
    expect(screen.getByText('Create your account')).toBeInTheDocument()
  })

  it('renders email input with correct type', () => {
    render(<AccountStep {...defaultProps} />)
    const emailInput = screen.getByPlaceholderText('Eg: aucreative@gmail.com')
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('renders password inputs with correct type', () => {
    render(<AccountStep {...defaultProps} />)
    const passwordInput = screen.getByPlaceholderText('Password')
    const confirmInput = screen.getByPlaceholderText('Confirm Password')
    expect(passwordInput).toHaveAttribute('type', 'password')
    expect(confirmInput).toHaveAttribute('type', 'password')
  })

  it('calls onChange when email is typed', async () => {
    const user = userEvent.setup()
    render(<AccountStep {...defaultProps} />)
    await user.type(screen.getByPlaceholderText('Eg: aucreative@gmail.com'), 't')
    expect(defaultProps.onChange).toHaveBeenCalledWith('email', 't')
  })

  it('calls onChange when password is typed', async () => {
    const user = userEvent.setup()
    render(<AccountStep {...defaultProps} />)
    await user.type(screen.getByPlaceholderText('Password'), 's')
    expect(defaultProps.onChange).toHaveBeenCalledWith('password', 's')
  })

  it('calls onChange when confirm password is typed', async () => {
    const user = userEvent.setup()
    render(<AccountStep {...defaultProps} />)
    await user.type(screen.getByPlaceholderText('Confirm Password'), 's')
    expect(defaultProps.onChange).toHaveBeenCalledWith('confirmPassword', 's')
  })

  it('displays provided field values', () => {
    render(
      <AccountStep
        {...defaultProps}
        data={{
          ...INITIAL_DATA,
          email: 'user@test.com',
          password: 'pass123',
          confirmPassword: 'pass123',
        }}
      />,
    )
    expect(screen.getByPlaceholderText('Eg: aucreative@gmail.com')).toHaveValue('user@test.com')
    expect(screen.getByPlaceholderText('Password')).toHaveValue('pass123')
    expect(screen.getByPlaceholderText('Confirm Password')).toHaveValue('pass123')
  })
})
