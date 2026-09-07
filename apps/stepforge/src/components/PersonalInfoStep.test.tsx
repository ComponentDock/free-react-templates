import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { PersonalInfoStep } from './PersonalInfoStep'
import { INITIAL_DATA } from '../types'

describe('PersonalInfoStep', () => {
  const defaultProps = {
    data: INITIAL_DATA,
    onChange: vi.fn(),
  }

  it('renders all form fields', () => {
    render(<PersonalInfoStep {...defaultProps} />)
    expect(screen.getByRole('heading', { name: 'Personal Info' })).toBeInTheDocument()
    expect(screen.getByText('1/3')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('E-Mail')).toBeInTheDocument()
    expect(screen.getByText('Date of Birth:')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Address Location')).toBeInTheDocument()
  })

  it('calls onChange when first name changes', async () => {
    const onChange = vi.fn()
    render(<PersonalInfoStep data={INITIAL_DATA} onChange={onChange} />)
    const input = screen.getByPlaceholderText('First Name')
    await userEvent.type(input, 'Alice')
    expect(onChange).toHaveBeenCalledWith('firstName', 'A')
  })

  it('calls onChange when last name changes', async () => {
    const onChange = vi.fn()
    render(<PersonalInfoStep data={INITIAL_DATA} onChange={onChange} />)
    const input = screen.getByPlaceholderText('Last Name')
    await userEvent.type(input, 'B')
    expect(onChange).toHaveBeenCalledWith('lastName', 'B')
  })

  it('calls onChange when phone changes', async () => {
    const onChange = vi.fn()
    render(<PersonalInfoStep data={INITIAL_DATA} onChange={onChange} />)
    const input = screen.getByPlaceholderText('Phone Number')
    await userEvent.type(input, '1')
    expect(onChange).toHaveBeenCalledWith('phone', '1')
  })

  it('calls onChange when email changes', async () => {
    const onChange = vi.fn()
    render(<PersonalInfoStep data={INITIAL_DATA} onChange={onChange} />)
    const input = screen.getByPlaceholderText('E-Mail')
    await userEvent.type(input, 'a')
    expect(onChange).toHaveBeenCalledWith('email', 'a')
  })

  it('calls onChange when dob day changes', async () => {
    const onChange = vi.fn()
    render(<PersonalInfoStep data={INITIAL_DATA} onChange={onChange} />)
    const selects = screen.getAllByRole('combobox')
    if (selects[0]) {
      await userEvent.selectOptions(selects[0], '20')
    }
    expect(onChange).toHaveBeenCalledWith('dobDay', '20')
  })

  it('calls onChange when dob month changes', async () => {
    const onChange = vi.fn()
    render(<PersonalInfoStep data={INITIAL_DATA} onChange={onChange} />)
    const selects = screen.getAllByRole('combobox')
    if (selects[1]) {
      await userEvent.selectOptions(selects[1], 'Feb')
    }
    expect(onChange).toHaveBeenCalledWith('dobMonth', 'Feb')
  })

  it('calls onChange when dob year changes', async () => {
    const onChange = vi.fn()
    render(<PersonalInfoStep data={INITIAL_DATA} onChange={onChange} />)
    const selects = screen.getAllByRole('combobox')
    if (selects[2]) {
      await userEvent.selectOptions(selects[2], '2020')
    }
    expect(onChange).toHaveBeenCalledWith('dobYear', '2020')
  })

  it('calls onChange when address changes', async () => {
    const onChange = vi.fn()
    render(<PersonalInfoStep data={INITIAL_DATA} onChange={onChange} />)
    const input = screen.getByPlaceholderText('Address Location')
    await userEvent.type(input, 'A')
    expect(onChange).toHaveBeenCalledWith('address', 'A')
  })
})
