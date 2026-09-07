import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ConfirmStep } from './ConfirmStep'
import { INITIAL_DATA } from '../types'
import type { BookingData } from '../types'

describe('ConfirmStep', () => {
  const filledData: BookingData = {
    ...INITIAL_DATA,
    firstName: 'Alice',
    lastName: 'Smith',
    room: 'Single',
    day: '25 / 12 / 2024',
    time: '10:00am - 22:00pm',
  }

  it('renders confirm heading and step indicator', () => {
    render(<ConfirmStep data={INITIAL_DATA} />)
    expect(screen.getByRole('heading', { name: 'Confirm Details' })).toBeInTheDocument()
    expect(screen.getByText('3/3')).toBeInTheDocument()
  })

  it('shows full name from data', () => {
    render(<ConfirmStep data={filledData} />)
    expect(screen.getByText('Alice Smith')).toBeInTheDocument()
  })

  it('shows room from data', () => {
    render(<ConfirmStep data={filledData} />)
    expect(screen.getByText('Single')).toBeInTheDocument()
  })

  it('shows day from data', () => {
    render(<ConfirmStep data={filledData} />)
    expect(screen.getByText('25 / 12 / 2024')).toBeInTheDocument()
  })

  it('shows time from data', () => {
    render(<ConfirmStep data={filledData} />)
    expect(screen.getByText('10:00am - 22:00pm')).toBeInTheDocument()
  })

  it('shows price', () => {
    render(<ConfirmStep data={INITIAL_DATA} />)
    expect(screen.getByText('$40.00')).toBeInTheDocument()
  })

  it('shows placeholder dash when name is empty', () => {
    render(<ConfirmStep data={INITIAL_DATA} />)
    const dashes = screen.getAllByText('—')
    expect(dashes.length).toBeGreaterThanOrEqual(1)
  })

  it('shows placeholder dash when room is empty', () => {
    const emptyRoomData: BookingData = { ...INITIAL_DATA, room: '' }
    render(<ConfirmStep data={emptyRoomData} />)
    const dashes = screen.getAllByText('—')
    expect(dashes.length).toBeGreaterThanOrEqual(1)
  })

  it('shows placeholder dash when day is empty', () => {
    const emptyDayData: BookingData = { ...INITIAL_DATA, day: '' }
    render(<ConfirmStep data={emptyDayData} />)
    const dashes = screen.getAllByText('—')
    expect(dashes.length).toBeGreaterThanOrEqual(1)
  })

  it('shows placeholder dash when time is empty', () => {
    const emptyTimeData: BookingData = { ...INITIAL_DATA, time: '' }
    render(<ConfirmStep data={emptyTimeData} />)
    const dashes = screen.getAllByText('—')
    expect(dashes.length).toBeGreaterThanOrEqual(1)
  })

  it('renders table headers', () => {
    render(<ConfirmStep data={INITIAL_DATA} />)
    expect(screen.getByText('Full Name:')).toBeInTheDocument()
    expect(screen.getByText('Room:')).toBeInTheDocument()
    expect(screen.getByText('Day:')).toBeInTheDocument()
    expect(screen.getByText('Time:')).toBeInTheDocument()
    expect(screen.getByText('Price:')).toBeInTheDocument()
  })
})
