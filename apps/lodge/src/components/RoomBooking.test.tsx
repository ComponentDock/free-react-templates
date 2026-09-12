import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RoomBooking } from './RoomBooking'

describe('RoomBooking', () => {
  it('renders room details and form', () => {
    render(<RoomBooking />)
    expect(screen.getByText('Junior Suite')).toBeDefined()
    expect(screen.getByText('$252')).toBeDefined()
    expect(screen.getAllByText('Check Availability').length).toBeGreaterThanOrEqual(1)
  })

  it('renders amenity icons', () => {
    render(<RoomBooking />)
    expect(screen.getByText('Smart TV')).toBeDefined()
    expect(screen.getByText('WiFi')).toBeDefined()
    expect(screen.getByText('AC')).toBeDefined()
    expect(screen.getByText('Parking')).toBeDefined()
    expect(screen.getByText('Pool')).toBeDefined()
  })

  it('allows incrementing and decrementing adults counter', async () => {
    const user = userEvent.setup()
    render(<RoomBooking />)
    const incBtn = screen.getByRole('button', { name: /increase adults/i })
    const decBtn = screen.getByRole('button', { name: /decrease adults/i })
    await user.click(incBtn)
    await user.click(incBtn)
    const adultsText = screen.getAllByText('4')
    expect(adultsText.length).toBeGreaterThanOrEqual(1)
    await user.click(decBtn)
    const threeText = screen.getAllByText('3')
    expect(threeText.length).toBeGreaterThanOrEqual(1)
  })

  it('allows incrementing and decrementing children counter', async () => {
    const user = userEvent.setup()
    render(<RoomBooking />)
    const incBtn = screen.getByRole('button', { name: /increase children/i })
    const decBtn = screen.getByRole('button', { name: /decrease children/i })
    // Children starts at 0, decrement should stay at 0
    await user.click(decBtn)
    expect(screen.getAllByText('0').length).toBeGreaterThanOrEqual(1)
    await user.click(incBtn)
    expect(screen.getAllByText('1').length).toBeGreaterThanOrEqual(1)
  })

  it('allows incrementing and decrementing rooms counter', async () => {
    const user = userEvent.setup()
    render(<RoomBooking />)
    const incBtn = screen.getByRole('button', { name: /increase rooms/i })
    const decBtn = screen.getByRole('button', { name: /decrease rooms/i })
    await user.click(incBtn)
    expect(screen.getAllByText('2').length).toBeGreaterThanOrEqual(1)
    await user.click(decBtn)
    expect(screen.getAllByText('1').length).toBeGreaterThanOrEqual(1)
  })

  it('allows selecting room type', async () => {
    const user = userEvent.setup()
    render(<RoomBooking />)
    const select = screen.getByRole('combobox')
    await user.selectOptions(select, 'Double Room')
    expect((select as HTMLSelectElement).value).toBe('Double Room')
  })

  it('allows filling in date inputs', async () => {
    const user = userEvent.setup()
    render(<RoomBooking />)
    const dates = screen.getAllByDisplayValue('')
    expect(dates.length).toBeGreaterThanOrEqual(2)
    // Fill in the first date input
    await user.type(dates[0]!, '2024-12-25')
    expect((dates[0] as HTMLInputElement).value).toBe('2024-12-25')
    // Fill in the second date input (check-out)
    await user.type(dates[1]!, '2024-12-30')
    expect((dates[1] as HTMLInputElement).value).toBe('2024-12-30')
  })

  it('submits the form without error', async () => {
    const user = userEvent.setup()
    render(<RoomBooking />)
    const submitBtn = screen.getByRole('button', { name: /check availability/i })
    await user.click(submitBtn)
    // Form should not throw
  })
})
