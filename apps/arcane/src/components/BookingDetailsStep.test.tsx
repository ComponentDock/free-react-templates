import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingDetailsStep } from './BookingDetailsStep'

const defaultProps = {
  data: { date: '', timeSlot: '', serviceType: '', notes: '' },
  errors: {},
  onChange: vi.fn(),
}

describe('BookingDetailsStep', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all fields', () => {
    render(<BookingDetailsStep {...defaultProps} />)
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/time slot/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/service type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/notes/i)).toBeInTheDocument()
  })

  it('calls onChange when selecting time slot', async () => {
    const onChange = vi.fn()
    render(<BookingDetailsStep {...defaultProps} onChange={onChange} />)
    const user = userEvent.setup()
    await user.selectOptions(screen.getByLabelText(/time slot/i), '10:00')
    expect(onChange).toHaveBeenCalledWith({
      date: '',
      timeSlot: '10:00',
      serviceType: '',
      notes: '',
    })
  })

  it('calls onChange when selecting service type', async () => {
    const onChange = vi.fn()
    render(<BookingDetailsStep {...defaultProps} onChange={onChange} />)
    const user = userEvent.setup()
    await user.selectOptions(screen.getByLabelText(/service type/i), 'consultation')
    expect(onChange).toHaveBeenCalledWith({
      date: '',
      timeSlot: '',
      serviceType: 'consultation',
      notes: '',
    })
  })

  it('calls onChange when typing notes', async () => {
    const onChange = vi.fn()
    render(<BookingDetailsStep {...defaultProps} onChange={onChange} />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/notes/i), 'Need parking')
    expect(onChange).toHaveBeenCalled()
  })

  it('displays validation errors', () => {
    const errors = {
      date: 'Date is required',
      timeSlot: 'Time is required',
      serviceType: 'Service is required',
    }
    render(<BookingDetailsStep {...defaultProps} errors={errors} />)
    expect(screen.getByText('Date is required')).toBeInTheDocument()
    expect(screen.getByText('Time is required')).toBeInTheDocument()
    expect(screen.getByText('Service is required')).toBeInTheDocument()
  })

  it('has a heading', () => {
    render(<BookingDetailsStep {...defaultProps} />)
    expect(screen.getByRole('heading', { name: /booking details/i })).toBeInTheDocument()
  })
})
