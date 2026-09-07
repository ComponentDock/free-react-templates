import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { BookingStep } from './BookingStep'
import { INITIAL_DATA } from '../types'

describe('BookingStep', () => {
  const defaultProps = {
    data: INITIAL_DATA,
    onChange: vi.fn(),
  }

  it('renders booking heading and step indicator', () => {
    render(<BookingStep {...defaultProps} />)
    expect(screen.getByRole('heading', { name: 'Booking Information' })).toBeInTheDocument()
    expect(screen.getByText('2/3')).toBeInTheDocument()
  })

  it('renders room selection', () => {
    render(<BookingStep {...defaultProps} />)
    expect(screen.getByText('Choose a Room')).toBeInTheDocument()
    expect(screen.getAllByRole('combobox').length).toBeGreaterThanOrEqual(1)
  })

  it('renders organization day input', () => {
    render(<BookingStep {...defaultProps} />)
    expect(screen.getByText('Organization Day')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('15 / 08 / 2024')).toBeInTheDocument()
  })

  it('renders time selection', () => {
    render(<BookingStep {...defaultProps} />)
    expect(screen.getByText('Time Open')).toBeInTheDocument()
  })

  it('renders booking image', () => {
    render(<BookingStep {...defaultProps} />)
    const img = screen.getByRole('img', { name: 'Booking' })
    expect(img).toBeInTheDocument()
    expect(img.getAttribute('src')).toContain('picsum.photos')
  })

  it('calls onChange when room changes', async () => {
    const onChange = vi.fn()
    render(<BookingStep data={INITIAL_DATA} onChange={onChange} />)
    const selects = screen.getAllByRole('combobox')
    if (selects[0]) {
      await userEvent.selectOptions(selects[0], 'Single')
    }
    expect(onChange).toHaveBeenCalledWith('room', 'Single')
  })

  it('calls onChange when day changes', async () => {
    const onChange = vi.fn()
    render(<BookingStep data={INITIAL_DATA} onChange={onChange} />)
    const dayInput = screen.getByPlaceholderText('15 / 08 / 2024')
    await userEvent.type(dayInput, '20')
    expect(onChange).toHaveBeenCalledWith('day', '2')
  })

  it('calls onChange when time changes', async () => {
    const onChange = vi.fn()
    render(<BookingStep data={INITIAL_DATA} onChange={onChange} />)
    const selects = screen.getAllByRole('combobox')
    const timeSelect = selects[1]
    if (timeSelect) {
      await userEvent.selectOptions(timeSelect, '9:00am - 21:00pm')
    }
    expect(onChange).toHaveBeenCalledWith('time', '9:00am - 21:00pm')
  })
})
