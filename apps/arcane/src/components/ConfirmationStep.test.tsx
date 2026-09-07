import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConfirmationStep } from './ConfirmationStep'

const defaultData = {
  fullName: 'John Doe',
  email: 'john@example.com',
  phone: '+1 555 1234',
  date: '2026-10-01',
  timeSlot: '10:00',
  serviceType: 'consultation',
  notes: 'Need parking',
}

const defaultProps = {
  data: defaultData,
  termsAccepted: false,
  errors: {},
  onTermsChange: vi.fn(),
}

describe('ConfirmationStep', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the summary with entered data', () => {
    render(<ConfirmationStep {...defaultProps} />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
    expect(screen.getByText('+1 555 1234')).toBeInTheDocument()
    expect(screen.getByText('2026-10-01')).toBeInTheDocument()
    expect(screen.getByText('10:00')).toBeInTheDocument()
    expect(screen.getByText('consultation')).toBeInTheDocument()
    expect(screen.getByText('Need parking')).toBeInTheDocument()
  })

  it('renders empty data with dashes', () => {
    const emptyData = {
      fullName: '',
      email: '',
      phone: '',
      date: '',
      timeSlot: '',
      serviceType: '',
      notes: '',
    }
    render(<ConfirmationStep {...defaultProps} data={emptyData} />)
    const dashes = screen.getAllByText('—')
    expect(dashes.length).toBe(6)
  })

  it('renders the terms checkbox', () => {
    render(<ConfirmationStep {...defaultProps} />)
    expect(screen.getByRole('checkbox', { name: /terms/i })).toBeInTheDocument()
  })

  it('calls onTermsChange when checkbox is clicked', async () => {
    const onTermsChange = vi.fn()
    render(<ConfirmationStep {...defaultProps} onTermsChange={onTermsChange} />)
    const user = userEvent.setup()
    await user.click(screen.getByRole('checkbox', { name: /terms/i }))
    expect(onTermsChange).toHaveBeenCalledWith(true)
  })

  it('displays terms validation error', () => {
    const errors = { terms: 'You must accept the terms' }
    render(<ConfirmationStep {...defaultProps} errors={errors} />)
    expect(screen.getByText('You must accept the terms')).toBeInTheDocument()
  })

  it('has a heading', () => {
    render(<ConfirmationStep {...defaultProps} />)
    expect(screen.getByRole('heading', { name: /confirmation/i })).toBeInTheDocument()
  })
})
