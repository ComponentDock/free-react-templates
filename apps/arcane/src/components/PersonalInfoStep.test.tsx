import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PersonalInfoStep } from './PersonalInfoStep'

const defaultProps = {
  data: { fullName: '', email: '', phone: '' },
  errors: {},
  onChange: vi.fn(),
}

describe('PersonalInfoStep', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all fields', () => {
    render(<PersonalInfoStep {...defaultProps} />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
  })

  it('calls onChange when typing', async () => {
    const onChange = vi.fn()
    render(<PersonalInfoStep {...defaultProps} onChange={onChange} />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John')
    expect(onChange).toHaveBeenCalledTimes(4)
    expect(onChange).toHaveBeenCalledWith({ fullName: 'J', email: '', phone: '' })
    expect(onChange).toHaveBeenCalledWith({ fullName: 'o', email: '', phone: '' })
    expect(onChange).toHaveBeenCalledWith({ fullName: 'h', email: '', phone: '' })
    expect(onChange).toHaveBeenCalledWith({ fullName: 'n', email: '', phone: '' })
  })

  it('displays validation errors', () => {
    const errors = {
      fullName: 'Name is required',
      email: 'Email is required',
      phone: 'Phone is required',
    }
    render(<PersonalInfoStep {...defaultProps} errors={errors} />)
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Phone is required')).toBeInTheDocument()
  })

  it('has a heading', () => {
    render(<PersonalInfoStep {...defaultProps} />)
    expect(screen.getByRole('heading', { name: /personal information/i })).toBeInTheDocument()
  })
})
