import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StepAddress } from './StepAddress'
import type { AddressData } from './StepAddress'

const defaultData: AddressData = {
  country: 'United States',
  streetAddress: '',
  apartment: '',
  townCity: '',
  county: '',
  postcodeZip: '',
}

describe('StepAddress', () => {
  it('renders the heading', () => {
    render(<StepAddress data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Residential Address')
  })

  it('renders country dropdown with options', () => {
    render(<StepAddress data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByRole('combobox')).toHaveValue('United States')
    expect(screen.getByRole('option', { name: 'United States' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'United Kingdom' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Viet Nam' })).toBeInTheDocument()
  })

  it('renders input fields', () => {
    render(<StepAddress data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByPlaceholderText('Street Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Apartment')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Town / City')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('County')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Postcode / Zip')).toBeInTheDocument()
  })

  it('calls onChange when country changes', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepAddress data={defaultData} onChange={onChange} />)
    await user.selectOptions(screen.getByRole('combobox'), 'United Kingdom')
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ country: 'United Kingdom' }))
  })

  it('calls onChange when typing in street address', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepAddress data={defaultData} onChange={onChange} />)
    await user.type(screen.getByPlaceholderText('Street Address'), '123 Main')
    expect(onChange).toHaveBeenCalled()
  })

  it('toggles postcode visibility', async () => {
    const user = userEvent.setup()
    render(<StepAddress data={defaultData} onChange={vi.fn()} />)
    const toggle = screen.getByRole('button', { name: /show postcode/i })
    expect(screen.getByPlaceholderText('Postcode / Zip')).toHaveAttribute('type', 'password')
    await user.click(toggle)
    expect(screen.getByPlaceholderText('Postcode / Zip')).toHaveAttribute('type', 'text')
    expect(screen.getByRole('button', { name: /hide postcode/i })).toBeInTheDocument()
  })
})
