import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders and shows Step 1 (Choose Date) by default', () => {
    render(<App />)
    expect(screen.getAllByText('Choose Date').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('button', { name: /Book Now/i })).toBeInTheDocument()
  })

  it('shows 4 steps in the indicator with Step 1 highlighted', () => {
    render(<App />)
    expect(screen.getAllByText('Choose Date').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Choose Room').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Make a Reservation').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Confirmation').length).toBeGreaterThanOrEqual(1)
  })

  it('has check-in, check-out, duration, room count fields and Book Now button on Step 1', () => {
    render(<App />)
    expect(screen.getByLabelText('Check In')).toBeInTheDocument()
    expect(screen.getByLabelText('Check Out')).toBeInTheDocument()
    expect(screen.getByLabelText('Duration')).toBeInTheDocument()
    expect(screen.getByLabelText('Rooms')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Book Now/i })).toBeInTheDocument()
  })

  it('Step 1 inputs are interactive and update values', async () => {
    const user = userEvent.setup()
    render(<App />)
    const checkIn = screen.getByLabelText('Check In')
    await user.type(checkIn, '2026-01-15')
    expect(checkIn).toHaveValue('2026-01-15')

    const checkOut = screen.getByLabelText('Check Out')
    await user.type(checkOut, '2026-01-20')
    expect(checkOut).toHaveValue('2026-01-20')

    await user.selectOptions(screen.getByLabelText('Duration'), '3')
    expect(screen.getByLabelText('Duration')).toHaveValue('3')

    await user.selectOptions(screen.getByLabelText('Rooms'), '2')
    expect(screen.getByLabelText('Rooms')).toHaveValue('2')
  })

  it('clicking Book Now advances to Step 2 (Choose Room)', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    expect(screen.getByText('Your Boarding Summary')).toBeInTheDocument()
  })

  it('Step 2 has boarding summary, room dropdowns, and back/forward buttons', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    expect(screen.getByText('Your Boarding Summary')).toBeInTheDocument()
    expect(screen.getByLabelText('Adults', { selector: '#room-1-adults' })).toBeInTheDocument()
    expect(screen.getByLabelText('Children', { selector: '#room-1-children' })).toBeInTheDocument()
    expect(screen.getByLabelText('Adults', { selector: '#room-2-adults' })).toBeInTheDocument()
    expect(screen.getByLabelText('Children', { selector: '#room-2-children' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Back/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument()
  })

  it('Step 2 dropdowns are interactive', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))

    await user.selectOptions(screen.getByLabelText('Adults', { selector: '#room-1-adults' }), '2')
    expect(screen.getByLabelText('Adults', { selector: '#room-1-adults' })).toHaveValue('2')

    await user.selectOptions(
      screen.getByLabelText('Children', { selector: '#room-1-children' }),
      '1',
    )
    expect(screen.getByLabelText('Children', { selector: '#room-1-children' })).toHaveValue('1')

    await user.selectOptions(screen.getByLabelText('Adults', { selector: '#room-2-adults' }), '3')
    expect(screen.getByLabelText('Adults', { selector: '#room-2-adults' })).toHaveValue('3')

    await user.selectOptions(
      screen.getByLabelText('Children', { selector: '#room-2-children' }),
      '2',
    )
    expect(screen.getByLabelText('Children', { selector: '#room-2-children' })).toHaveValue('2')
  })

  it('clicking back from Step 2 returns to Step 1', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    await user.click(screen.getByRole('button', { name: /Back/i }))
    expect(screen.getByRole('button', { name: /Book Now/i })).toBeInTheDocument()
  })

  it('Step 2 forward goes to Step 3 (Make a Reservation)', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    await user.click(screen.getByRole('button', { name: /Next/i }))
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
  })

  it('Step 3 has all reservation fields, terms checkbox, and back/forward buttons', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    await user.click(screen.getByRole('button', { name: /Next/i }))
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Address')).toBeInTheDocument()
    expect(screen.getByLabelText('City')).toBeInTheDocument()
    expect(screen.getByLabelText('Country')).toBeInTheDocument()
    expect(screen.getByLabelText('Zip Code')).toBeInTheDocument()
    expect(screen.getByLabelText('Special Requests')).toBeInTheDocument()
    expect(screen.getByLabelText(/I agree to the Terms/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Back/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument()
  })

  it('Step 3 inputs are interactive and update values', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    await user.click(screen.getByRole('button', { name: /Next/i }))

    await user.type(screen.getByLabelText('First Name'), 'John')
    expect(screen.getByLabelText('First Name')).toHaveValue('John')

    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    expect(screen.getByLabelText('Last Name')).toHaveValue('Doe')

    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    expect(screen.getByLabelText('Email')).toHaveValue('john@example.com')

    await user.type(screen.getByLabelText('Phone'), '+1234567890')
    expect(screen.getByLabelText('Phone')).toHaveValue('+1234567890')

    await user.type(screen.getByLabelText('Address'), '123 Main St')
    expect(screen.getByLabelText('Address')).toHaveValue('123 Main St')

    await user.type(screen.getByLabelText('City'), 'New York')
    expect(screen.getByLabelText('City')).toHaveValue('New York')

    await user.type(screen.getByLabelText('Country'), 'USA')
    expect(screen.getByLabelText('Country')).toHaveValue('USA')

    await user.type(screen.getByLabelText('Zip Code'), '10001')
    expect(screen.getByLabelText('Zip Code')).toHaveValue('10001')

    await user.type(screen.getByLabelText('Special Requests'), 'Late check-in please')
    expect(screen.getByLabelText('Special Requests')).toHaveValue('Late check-in please')

    const terms = screen.getByLabelText(/I agree to the Terms/i)
    expect(terms).not.toBeChecked()
    await user.click(terms)
    expect(terms).toBeChecked()
  })

  it('Step 3 back button returns to Step 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    await user.click(screen.getByRole('button', { name: /Next/i }))
    await user.click(screen.getByRole('button', { name: /Back/i }))
    expect(screen.getByText('Your Boarding Summary')).toBeInTheDocument()
  })

  it('Step 3 forward goes to Step 4 (Confirmation)', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    await user.click(screen.getByRole('button', { name: /Next/i }))
    await user.click(screen.getByRole('button', { name: /Next/i }))
    expect(screen.getByText('Boarding Summary')).toBeInTheDocument()
  })

  it('Step 4 has boarding summary and confirmation checkboxes', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    await user.click(screen.getByRole('button', { name: /Next/i }))
    await user.click(screen.getByRole('button', { name: /Next/i }))
    expect(screen.getByText('Boarding Summary')).toBeInTheDocument()
    expect(
      screen.getByLabelText(/I have read and accept terms and conditions/i),
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText(/I understand that my booking may be subject to availability/i),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/I agree with privacy policy/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(/I agree with cancellation and refund policy/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument()
  })

  it('Step 4 checkboxes are interactive', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    await user.click(screen.getByRole('button', { name: /Next/i }))
    await user.click(screen.getByRole('button', { name: /Next/i }))

    const terms = screen.getByLabelText(/I have read and accept terms and conditions/i)
    expect(terms).toBeChecked()
    await user.click(terms)
    expect(terms).not.toBeChecked()

    const avail = screen.getByLabelText(
      /I understand that my booking may be subject to availability/i,
    )
    expect(avail).toBeChecked()
    await user.click(avail)
    expect(avail).not.toBeChecked()

    const privacy = screen.getByLabelText(/I agree with privacy policy/i)
    expect(privacy).toBeChecked()
    await user.click(privacy)
    expect(privacy).not.toBeChecked()

    const cancel = screen.getByLabelText(/I agree with cancellation and refund policy/i)
    expect(cancel).toBeChecked()
    await user.click(cancel)
    expect(cancel).not.toBeChecked()
  })

  it('Step 4 back button returns to Step 3', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    await user.click(screen.getByRole('button', { name: /Next/i }))
    await user.click(screen.getByRole('button', { name: /Next/i }))
    await user.click(screen.getByRole('button', { name: /Back/i }))
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
  })

  it('Step 4 submit shows success state', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    await user.click(screen.getByRole('button', { name: /Next/i }))
    await user.click(screen.getByRole('button', { name: /Next/i }))
    await user.click(screen.getByRole('button', { name: /Submit/i }))
    expect(screen.getByText(/Booking Confirmed/i)).toBeInTheDocument()
  })

  it('boarding summary shows plural nights when duration > 1', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.selectOptions(screen.getByLabelText('Duration'), '3')
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    expect(screen.getByText('3 Nights')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Next/i }))
    // Step 3 has no boarding summary
    await user.click(screen.getByRole('button', { name: /Next/i }))
    expect(screen.getByText('3 Nights')).toBeInTheDocument()
  })

  it('responsive: on mobile viewport, layout stacks vertically', () => {
    render(<App />)
    const container = screen.getByTestId('hexcraft-layout')
    expect(container).toHaveClass('flex-col')
  })

  it('footer shows Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
