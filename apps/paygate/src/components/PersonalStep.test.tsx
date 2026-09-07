import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PersonalStep } from './PersonalStep'

describe('PersonalStep', () => {
  const defaultProps = {
    data: { fullName: '', email: '', phone: '' },
    onChange: vi.fn(),
  }

  it('renders the section heading', () => {
    render(<PersonalStep {...defaultProps} />)

    expect(screen.getByText('Personal Information')).toBeInTheDocument()
  })

  it('renders all three input fields', () => {
    render(<PersonalStep {...defaultProps} />)

    expect(screen.getByLabelText('Full Name *')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address *')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number *')).toBeInTheDocument()
  })

  it('displays placeholder text', () => {
    render(<PersonalStep {...defaultProps} />)

    expect(screen.getByPlaceholderText('Enter your full name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your phone number')).toBeInTheDocument()
  })

  it('calls onChange when typing in full name', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<PersonalStep data={defaultProps.data} onChange={onChange} />)

    await user.type(screen.getByLabelText('Full Name *'), 'John Doe')
    expect(onChange).toHaveBeenCalled()
  })

  it('calls onChange when typing in email', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<PersonalStep data={defaultProps.data} onChange={onChange} />)

    await user.type(screen.getByLabelText('Email Address *'), 'john@example.com')
    expect(onChange).toHaveBeenCalled()
  })

  it('calls onChange when typing in phone', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<PersonalStep data={defaultProps.data} onChange={onChange} />)

    await user.type(screen.getByLabelText('Phone Number *'), '555-1234')
    expect(onChange).toHaveBeenCalled()
  })

  it('displays current values', () => {
    render(
      <PersonalStep
        data={{ fullName: 'Jane', email: 'jane@test.com', phone: '555-0000' }}
        onChange={vi.fn()}
      />,
    )

    expect(screen.getByLabelText('Full Name *')).toHaveValue('Jane')
    expect(screen.getByLabelText('Email Address *')).toHaveValue('jane@test.com')
    expect(screen.getByLabelText('Phone Number *')).toHaveValue('555-0000')
  })

  it('inputs are required', () => {
    render(<PersonalStep {...defaultProps} />)

    expect(screen.getByLabelText('Full Name *')).toBeRequired()
    expect(screen.getByLabelText('Email Address *')).toBeRequired()
    expect(screen.getByLabelText('Phone Number *')).toBeRequired()
  })

  it('has accessible section landmark', () => {
    render(<PersonalStep {...defaultProps} />)

    expect(screen.getByRole('region', { name: 'Personal Information' })).toBeInTheDocument()
  })
})
