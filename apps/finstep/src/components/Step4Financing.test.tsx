import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Step4Financing } from './Step4Financing'
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

describe('Step4Financing', () => {
  it('renders the section heading', () => {
    render(<Step4Financing data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByRole('heading', { name: 'Financing Information' })).toBeInTheDocument()
  })

  it('renders the Buy Inventory dropdown', () => {
    render(<Step4Financing data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Buy Inventory')).toBeInTheDocument()
  })

  it('renders inventory options: New, Used, Certified Pre-Owned', () => {
    render(<Step4Financing data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByRole('option', { name: 'New' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Used' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Certified Pre-Owned' })).toBeInTheDocument()
  })

  it('renders the Existing business financing checkbox', () => {
    render(<Step4Financing data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByText('Existing business financing?')).toBeInTheDocument()
  })

  it('checkbox is unchecked by default', () => {
    render(<Step4Financing data={defaultData} onChange={vi.fn()} />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('checkbox is checked when existingFinancing is true', () => {
    const data = { ...defaultData, existingFinancing: true }
    render(<Step4Financing data={data} onChange={vi.fn()} />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('calls onChange when checkbox is toggled', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step4Financing data={defaultData} onChange={onChange} />)
    await user.click(screen.getByRole('checkbox'))
    expect(onChange).toHaveBeenCalledWith({ existingFinancing: true })
  })

  it('calls onChange when checkbox is untoggled', async () => {
    const onChange = vi.fn()
    const data = { ...defaultData, existingFinancing: true }
    const user = userEvent.setup()
    render(<Step4Financing data={data} onChange={onChange} />)
    await user.click(screen.getByRole('checkbox'))
    expect(onChange).toHaveBeenCalledWith({ existingFinancing: false })
  })

  it('renders Existing Balance sub-heading', () => {
    render(<Step4Financing data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByRole('heading', { name: 'Existing Balance' })).toBeInTheDocument()
  })

  it('renders Business Name and Current Balance fields', () => {
    render(<Step4Financing data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Business Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Current Balance')).toBeInTheDocument()
  })

  it('renders Current Balance as number type', () => {
    render(<Step4Financing data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Current Balance')).toHaveAttribute('type', 'number')
  })

  it('calls onChange when selecting inventory type', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step4Financing data={defaultData} onChange={onChange} />)
    await user.selectOptions(screen.getByLabelText('Buy Inventory'), 'new')
    expect(onChange).toHaveBeenCalledWith({ inventoryType: 'new' })
  })

  it('calls onChange when typing in Business Name', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step4Financing data={defaultData} onChange={onChange} />)
    await user.type(screen.getByLabelText('Business Name'), 'Acme')
    expect(onChange).toHaveBeenCalledWith({ businessName: 'A' })
  })

  it('calls onChange when typing in Current Balance', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Step4Financing data={defaultData} onChange={onChange} />)
    await user.type(screen.getByLabelText('Current Balance'), '5')
    expect(onChange).toHaveBeenCalledWith({ currentBalance: '5' })
  })

  it('displays existing inventory type value', () => {
    const data = { ...defaultData, inventoryType: 'used' }
    render(<Step4Financing data={data} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Buy Inventory')).toHaveValue('used')
  })

  it('displays existing business name and balance', () => {
    const data = { ...defaultData, businessName: 'Acme', currentBalance: '50000' }
    render(<Step4Financing data={data} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Business Name')).toHaveValue('Acme')
    expect(screen.getByLabelText('Current Balance')).toHaveValue(50000)
  })

  it('marks Buy Inventory, Business Name, and Current Balance as required', () => {
    render(<Step4Financing data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByLabelText('Buy Inventory')).toHaveAttribute('aria-required', 'true')
    expect(screen.getByLabelText('Business Name')).toHaveAttribute('aria-required', 'true')
    expect(screen.getByLabelText('Current Balance')).toHaveAttribute('aria-required', 'true')
  })
})
