import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Step3Ownership } from './Step3Ownership'
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

describe('Step3Ownership', () => {
  it('renders the section heading', () => {
    render(<Step3Ownership data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByRole('heading', { name: 'More About Yourself' })).toBeInTheDocument()
  })

  it('renders first name and last name fields', () => {
    render(<Step3Ownership data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
  })

  it('renders Position dropdown with correct options', () => {
    render(<Step3Ownership data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Position')).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'CEO' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'CFO' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'CTO' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Owner' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Partner' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Director' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Manager' })).toBeInTheDocument()
  })

  it('renders Business Area dropdown with correct options', () => {
    render(<Step3Ownership data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Business Area')).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Sales' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Marketing' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Operations' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Finance' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Technology' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Human Resources' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Legal' })).toBeInTheDocument()
  })

  it('renders DOB dropdowns for Day, Month, Year', () => {
    render(<Step3Ownership data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Day')).toBeInTheDocument()
    expect(screen.getByLabelText('Month')).toBeInTheDocument()
    expect(screen.getByLabelText('Year')).toBeInTheDocument()
  })

  it('renders 31 day options', () => {
    render(<Step3Ownership data={defaultData} onChange={vi.fn()} />)
    const daySelect = screen.getByLabelText('Day')
    const dayOptions = daySelect.querySelectorAll('option')
    expect(dayOptions.length).toBe(32) // 1 placeholder + 31 days
  })

  it('renders 12 month options with names', () => {
    render(<Step3Ownership data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByRole('option', { name: 'January' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'December' })).toBeInTheDocument()
    const monthSelect = screen.getByLabelText('Month')
    const monthOptions = monthSelect.querySelectorAll('option')
    expect(monthOptions.length).toBe(13) // 1 placeholder + 12 months
  })

  it('renders year options going back from 2026', () => {
    render(<Step3Ownership data={defaultData} onChange={vi.fn()} />)
    const yearSelect = screen.getByLabelText('Year')
    const yearOptions = yearSelect.querySelectorAll('option')
    expect(yearOptions.length).toBe(101) // 1 placeholder + 100 years
    expect(screen.getByRole('option', { name: '2026' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '1927' })).toBeInTheDocument()
  })

  it('shows Date of Birth label', () => {
    render(<Step3Ownership data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByText('Date of Birth')).toBeInTheDocument()
  })

  it('calls onChange when selecting a position', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step3Ownership data={defaultData} onChange={onChange} />)
    await user.selectOptions(screen.getByLabelText('Position'), 'CEO')
    expect(onChange).toHaveBeenCalledWith({ position: 'ceo' })
  })

  it('calls onChange when selecting a business area', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step3Ownership data={defaultData} onChange={onChange} />)
    await user.selectOptions(screen.getByLabelText('Business Area'), 'sales')
    expect(onChange).toHaveBeenCalledWith({ businessArea: 'sales' })
  })

  it('calls onChange when typing in first name', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step3Ownership data={defaultData} onChange={onChange} />)
    await user.type(screen.getByLabelText('First Name'), 'J')
    expect(onChange).toHaveBeenCalledWith({ ownerFirstName: 'J' })
  })

  it('calls onChange when typing in last name', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step3Ownership data={defaultData} onChange={onChange} />)
    await user.type(screen.getByLabelText('Last Name'), 'D')
    expect(onChange).toHaveBeenCalledWith({ ownerLastName: 'D' })
  })

  it('calls onChange when selecting DOB day', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step3Ownership data={defaultData} onChange={onChange} />)
    await user.selectOptions(screen.getByLabelText('Day'), '15')
    expect(onChange).toHaveBeenCalledWith({ dobDay: '15' })
  })

  it('calls onChange when selecting DOB month', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step3Ownership data={defaultData} onChange={onChange} />)
    await user.selectOptions(screen.getByLabelText('Month'), '6')
    expect(onChange).toHaveBeenCalledWith({ dobMonth: '6' })
  })

  it('calls onChange when selecting DOB year', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step3Ownership data={defaultData} onChange={onChange} />)
    await user.selectOptions(screen.getByLabelText('Year'), '1990')
    expect(onChange).toHaveBeenCalledWith({ dobYear: '1990' })
  })

  it('marks all fields as required', () => {
    render(<Step3Ownership data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('First Name')).toHaveAttribute('aria-required', 'true')
    expect(screen.getByLabelText('Last Name')).toHaveAttribute('aria-required', 'true')
    expect(screen.getByLabelText('Position')).toHaveAttribute('aria-required', 'true')
    expect(screen.getByLabelText('Business Area')).toHaveAttribute('aria-required', 'true')
    expect(screen.getByLabelText('Day')).toHaveAttribute('aria-required', 'true')
    expect(screen.getByLabelText('Month')).toHaveAttribute('aria-required', 'true')
    expect(screen.getByLabelText('Year')).toHaveAttribute('aria-required', 'true')
  })

  it('displays existing values in inputs and selects', () => {
    const data = {
      ...defaultData,
      ownerFirstName: 'Jane',
      ownerLastName: 'Smith',
      position: 'ceo',
      businessArea: 'sales',
      dobDay: '15',
      dobMonth: '6',
      dobYear: '1990',
    }
    render(<Step3Ownership data={data} onChange={vi.fn()} />)
    expect(screen.getByLabelText('First Name')).toHaveValue('Jane')
    expect(screen.getByLabelText('Last Name')).toHaveValue('Smith')
    expect(screen.getByLabelText('Position')).toHaveValue('ceo')
    expect(screen.getByLabelText('Business Area')).toHaveValue('sales')
    expect(screen.getByLabelText('Day')).toHaveValue('15')
    expect(screen.getByLabelText('Month')).toHaveValue('6')
    expect(screen.getByLabelText('Year')).toHaveValue('1990')
  })
})
