import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Step1About } from './Step1About'
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

describe('Step1About', () => {
  it('renders the section heading', () => {
    render(<Step1About data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByRole('heading', { name: 'Personal Information' })).toBeInTheDocument()
  })

  it('renders all 5 fields', () => {
    render(<Step1About data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Zip Code')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
  })

  it('renders all fields as required', () => {
    render(<Step1About data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('First Name')).toHaveAttribute('aria-required', 'true')
    expect(screen.getByLabelText('Last Name')).toHaveAttribute('aria-required', 'true')
    expect(screen.getByLabelText('Address')).toHaveAttribute('aria-required', 'true')
    expect(screen.getByLabelText('Zip Code')).toHaveAttribute('aria-required', 'true')
    expect(screen.getByLabelText('Phone Number')).toHaveAttribute('aria-required', 'true')
  })

  it('renders phone input with tel type', () => {
    render(<Step1About data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Phone Number')).toHaveAttribute('type', 'tel')
  })

  it('displays existing values', () => {
    const data = { ...defaultData, firstName: 'John', lastName: 'Doe' }
    render(<Step1About data={data} onChange={vi.fn()} />)
    expect(screen.getByLabelText('First Name')).toHaveValue('John')
    expect(screen.getByLabelText('Last Name')).toHaveValue('Doe')
  })

  it('calls onChange when typing in first name', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step1About data={defaultData} onChange={onChange} />)
    await user.type(screen.getByLabelText('First Name'), 'J')
    expect(onChange).toHaveBeenCalledWith({ firstName: 'J' })
  })

  it('calls onChange when typing in last name', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step1About data={defaultData} onChange={onChange} />)
    await user.type(screen.getByLabelText('Last Name'), 'D')
    expect(onChange).toHaveBeenCalledWith({ lastName: 'D' })
  })

  it('calls onChange when typing in address', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step1About data={defaultData} onChange={onChange} />)
    await user.type(screen.getByLabelText('Address'), '123')
    expect(onChange).toHaveBeenCalledWith({ address: '1' })
  })

  it('calls onChange when typing in zip code', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step1About data={defaultData} onChange={onChange} />)
    await user.type(screen.getByLabelText('Zip Code'), '1')
    expect(onChange).toHaveBeenCalledWith({ zipCode: '1' })
  })

  it('calls onChange when typing in phone number', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step1About data={defaultData} onChange={onChange} />)
    await user.type(screen.getByLabelText('Phone Number'), '5')
    expect(onChange).toHaveBeenCalledWith({ phone: '5' })
  })

  it('applies inline style to Address field', () => {
    const { container } = render(<Step1About data={defaultData} onChange={vi.fn()} />)
    const addressWrapper = container
      .querySelector('#step1-address')
      ?.closest('.floating-input-wrapper')
    expect(addressWrapper).toHaveStyle({ width: '84.1%' })
  })

  it('applies inline style to Zip Code field', () => {
    const { container } = render(<Step1About data={defaultData} onChange={vi.fn()} />)
    const zipWrapper = container.querySelector('#step1-zipCode')?.closest('.floating-input-wrapper')
    expect(zipWrapper).toHaveStyle({ width: '50%' })
  })

  it('applies inline style to Phone Number field', () => {
    const { container } = render(<Step1About data={defaultData} onChange={vi.fn()} />)
    const phoneWrapper = container.querySelector('#step1-phone')?.closest('.floating-input-wrapper')
    expect(phoneWrapper).toHaveStyle({ width: '50%' })
  })

  it('renders First Name and Last Name side by side in a flex row', () => {
    const { container } = render(<Step1About data={defaultData} onChange={vi.fn()} />)
    const firstNameWrapper = container
      .querySelector('#step1-firstName')
      ?.closest('.floating-input-wrapper')
    const lastNameWrapper = container
      .querySelector('#step1-lastName')
      ?.closest('.floating-input-wrapper')
    expect(firstNameWrapper?.parentElement).toHaveClass('flex', 'gap-4')
    expect(lastNameWrapper?.parentElement).toHaveClass('flex', 'gap-4')
  })
})
