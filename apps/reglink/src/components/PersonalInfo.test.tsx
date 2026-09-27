import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PersonalInfo } from './PersonalInfo'

describe('PersonalInfo', () => {
  const mockSubmit = vi.fn((e: React.FormEvent) => e.preventDefault())

  beforeEach(() => {
    mockSubmit.mockClear()
  })

  it('renders heading and description', () => {
    render(<PersonalInfo onSubmit={mockSubmit} />)
    expect(screen.getByText('Personal Information')).toBeInTheDocument()
    expect(screen.getByText(/Please enter your personal information/)).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<PersonalInfo onSubmit={mockSubmit} />)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('SSN')).toBeInTheDocument()
  })

  it('renders birth date selects', () => {
    render(<PersonalInfo onSubmit={mockSubmit} />)
    expect(screen.getByLabelText('Month')).toBeInTheDocument()
    expect(screen.getByLabelText('Day')).toBeInTheDocument()
    expect(screen.getByLabelText('Year')).toBeInTheDocument()
  })

  it('has fieldset borders on name fields', () => {
    const { container } = render(<PersonalInfo onSubmit={mockSubmit} />)
    const fieldsets = container.querySelectorAll('fieldset')
    expect(fieldsets.length).toBeGreaterThanOrEqual(4)
  })

  it('allows typing in First Name', async () => {
    const user = userEvent.setup()
    render(<PersonalInfo onSubmit={mockSubmit} />)
    await user.type(screen.getByLabelText('First Name'), 'John')
    expect(screen.getByLabelText('First Name')).toHaveValue('John')
  })

  it('allows selecting birth date', async () => {
    const user = userEvent.setup()
    render(<PersonalInfo onSubmit={mockSubmit} />)
    await user.selectOptions(screen.getByLabelText('Month'), '03')
    expect(screen.getByLabelText('Month')).toHaveValue('03')
  })
})
