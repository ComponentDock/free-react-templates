import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Step3 } from './Step3'

const defaultProps = {
  activeField: null,
  onFocusField: vi.fn(),
  streetName: '',
  streetNumber: '',
  city: '',
  country: '',
  onStreetNameChange: vi.fn(),
  onStreetNumberChange: vi.fn(),
  onCityChange: vi.fn(),
  onCountryChange: vi.fn(),
}

describe('Step3', () => {
  it('renders all address fields', () => {
    render(<Step3 {...defaultProps} />)
    expect(screen.getByPlaceholderText('Street Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Street Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Country')).toBeInTheDocument()
  })

  it('calls onFocusField when a field is focused', async () => {
    const user = userEvent.setup()
    const onFocusField = vi.fn()
    render(<Step3 {...defaultProps} onFocusField={onFocusField} />)
    await user.click(screen.getByPlaceholderText('City'))
    expect(onFocusField).toHaveBeenCalledWith('city')
  })

  it('passes values to inputs', () => {
    render(<Step3 {...defaultProps} streetName="Main" city="Portland" />)
    expect(screen.getByDisplayValue('Main')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Portland')).toBeInTheDocument()
  })

  it('displays active field dot correctly', () => {
    render(<Step3 {...defaultProps} activeField="country" />)
    const countryInput = screen.getByPlaceholderText('Country')
    const countryDot = countryInput.closest('.relative')?.querySelector('span[aria-hidden="true"]')
    expect(countryDot).toHaveClass('bg-dot-active')
  })

  it('calls onFocusField for street number', async () => {
    const user = userEvent.setup()
    const onFocusField = vi.fn()
    render(<Step3 {...defaultProps} onFocusField={onFocusField} />)
    await user.click(screen.getByPlaceholderText('Street Number'))
    expect(onFocusField).toHaveBeenCalledWith('streetNumber')
  })

  it('calls onStreetNumberChange when typing', async () => {
    const user = userEvent.setup()
    const onStreetNumberChange = vi.fn()
    render(<Step3 {...defaultProps} onStreetNumberChange={onStreetNumberChange} />)
    await user.type(screen.getByPlaceholderText('Street Number'), '1')
    expect(onStreetNumberChange).toHaveBeenCalled()
  })

  it('calls onFocusField for country', async () => {
    const user = userEvent.setup()
    const onFocusField = vi.fn()
    render(<Step3 {...defaultProps} onFocusField={onFocusField} />)
    await user.click(screen.getByPlaceholderText('Country'))
    expect(onFocusField).toHaveBeenCalledWith('country')
  })

  it('calls onCountryChange when typing', async () => {
    const user = userEvent.setup()
    const onCountryChange = vi.fn()
    render(<Step3 {...defaultProps} onCountryChange={onCountryChange} />)
    await user.type(screen.getByPlaceholderText('Country'), 'U')
    expect(onCountryChange).toHaveBeenCalled()
  })
})
