import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Step2Account } from './Step2Account'
import type { FormData } from '../App'

const defaultData: FormData = {
  firstName: '',
  lastName: '',
  address: '',
  zipCode: '',
  phone: '',
  accountType: 'individual',
  email: '',
  password: '',
  confirmPassword: '',
  ownerFirstName: '',
  ownerLastName: '',
  position: '',
  businessArea: '',
  dobDay: '',
  dobMonth: '',
  dobYear: '',
  inventoryType: '',
  existingFinancing: false,
  businessName: '',
  currentBalance: '',
}

describe('Step2Account', () => {
  it('renders the section heading', () => {
    render(<Step2Account data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByRole('heading', { name: 'Do you have an account?' })).toBeInTheDocument()
  })

  it('renders Existing and Newbie radio options', () => {
    render(<Step2Account data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByText('Existing')).toBeInTheDocument()
    expect(screen.getByText('Newbie')).toBeInTheDocument()
  })

  it('defaults to Existing selected (individual)', () => {
    render(<Step2Account data={defaultData} onChange={vi.fn()} />)
    const radios = screen.getAllByRole('radio')
    expect(radios[0]).toBeChecked() // Existing = individual
    expect(radios[1]).not.toBeChecked()
  })

  it('calls onChange when Newbie radio is clicked', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step2Account data={defaultData} onChange={onChange} />)
    await user.click(screen.getByText('Newbie'))
    expect(onChange).toHaveBeenCalledWith({ accountType: 'business' })
  })

  it('calls onChange when Existing radio is clicked', async () => {
    const onChange = vi.fn()
    const data = { ...defaultData, accountType: 'business' as const }
    const user = userEvent.setup()
    render(<Step2Account data={data} onChange={onChange} />)
    await user.click(screen.getByText('Existing'))
    expect(onChange).toHaveBeenCalledWith({ accountType: 'individual' })
  })

  it('renders email, password, and confirmPassword fields', () => {
    render(<Step2Account data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument()
  })

  it('renders email as email type', () => {
    render(<Step2Account data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email')
  })

  it('renders password fields as password type', () => {
    render(<Step2Account data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
    expect(screen.getByLabelText('Confirm Password')).toHaveAttribute('type', 'password')
  })

  it('marks all fields as required', () => {
    render(<Step2Account data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-required', 'true')
    expect(screen.getByLabelText('Password')).toHaveAttribute('aria-required', 'true')
    expect(screen.getByLabelText('Confirm Password')).toHaveAttribute('aria-required', 'true')
  })

  it('displays existing values', () => {
    const data = {
      ...defaultData,
      email: 'test@example.com',
      password: 'secret',
      confirmPassword: 'secret',
    }
    render(<Step2Account data={data} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Email')).toHaveValue('test@example.com')
    expect(screen.getByLabelText('Password')).toHaveValue('secret')
    expect(screen.getByLabelText('Confirm Password')).toHaveValue('secret')
  })

  it('calls onChange when typing in email field', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step2Account data={defaultData} onChange={onChange} />)
    await user.type(screen.getByLabelText('Email'), 'a')
    expect(onChange).toHaveBeenCalledWith({ email: 'a' })
  })

  it('calls onChange when typing in password field', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step2Account data={defaultData} onChange={onChange} />)
    await user.type(screen.getByLabelText('Password'), 'p')
    expect(onChange).toHaveBeenCalledWith({ password: 'p' })
  })

  it('calls onChange when typing in confirm password field', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step2Account data={defaultData} onChange={onChange} />)
    await user.type(screen.getByLabelText('Confirm Password'), 'c')
    expect(onChange).toHaveBeenCalledWith({ confirmPassword: 'c' })
  })

  it('shows Newbie as selected when accountType is business', () => {
    const data = { ...defaultData, accountType: 'business' as const }
    render(<Step2Account data={data} onChange={vi.fn()} />)
    const radios = screen.getAllByRole('radio')
    expect(radios[0]).not.toBeChecked() // Existing
    expect(radios[1]).toBeChecked() // Newbie
  })
})
