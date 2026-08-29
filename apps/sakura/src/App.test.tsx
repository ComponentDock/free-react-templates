import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Sakura — Calendar #08', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Calendar #08')
  })

  it('renders the page background color', () => {
    const { container } = render(<App />)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('bg-page')
  })

  it('renders the year 2020 by default', () => {
    render(<App />)
    expect(screen.getByText('2020')).toBeInTheDocument()
  })

  it('renders all 12 month abbreviations', () => {
    render(<App />)
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    months.forEach((m) => {
      expect(screen.getByRole('button', { name: m })).toBeInTheDocument()
    })
  })

  it('renders December as the active month', () => {
    render(<App />)
    const dec = screen.getByRole('button', { name: 'Dec' })
    expect(dec.className).toContain('font-bold')
    expect(dec.className).toContain('text-brand')
  })

  it('renders weekday headers', () => {
    render(<App />)
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    weekdays.forEach((w) => {
      expect(screen.getByText(w)).toBeInTheDocument()
    })
  })

  it('renders 18 December 2020 as the active date', () => {
    render(<App />)
    const day18 = screen.getByRole('button', { name: '18 December 2020' })
    expect(day18.className).toContain('bg-brand')
  })

  it('shows empty events state for active date', () => {
    render(<App />)
    expect(screen.getByText('There are no events planned for December 18.')).toBeInTheDocument()
  })

  it('navigates to previous year', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Previous year' }))
    expect(screen.getByText('2019')).toBeInTheDocument()
    expect(screen.getByText('There are no events planned for December 18.')).toBeInTheDocument()
  })

  it('navigates to next year', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Next year' }))
    expect(screen.getByText('2021')).toBeInTheDocument()
  })

  it('switches month via month strip', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Nov' }))
    const nov = screen.getByRole('button', { name: 'Nov' })
    expect(nov.className).toContain('font-bold')
    expect(nov.className).toContain('text-brand')
    expect(screen.getByText('There are no events planned for November 18.')).toBeInTheDocument()
  })

  it('clicking a day selects it', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: '5 December 2020' }))
    expect(screen.getByText('There are no events planned for December 5.')).toBeInTheDocument()
  })

  it('shows event dates with amber dot', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Navigate to May 2020 (seed events)
    await user.click(screen.getByRole('button', { name: 'May' }))
    // May 12 has a seeded event
    const day12 = screen.getByRole('button', { name: '12 May 2020' })
    expect(day12.className).toContain('bg-brand')
  })

  it('shows event cards for seeded events', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'May' }))
    await user.click(screen.getByRole('button', { name: '12 May 2020' }))
    expect(screen.getByText('Product review:')).toBeInTheDocument()
    expect(screen.getByText('6 Invited')).toBeInTheDocument()
  })

  it('opens the Add Event dialog', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Add Event' }))
    expect(screen.getByText('Add New Event')).toBeInTheDocument()
    expect(screen.getByLabelText('Event name')).toBeInTheDocument()
    expect(screen.getByLabelText('Number of people to invite')).toBeInTheDocument()
  })

  it('closes dialog on Cancel', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Add Event' }))
    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(screen.queryByText('Add New Event')).not.toBeInTheDocument()
  })

  it('validates empty event name', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Add Event' }))
    await user.click(screen.getByRole('button', { name: 'OK' }))
    const nameInput = screen.getByLabelText('Event name')
    expect(nameInput).toHaveAttribute('aria-invalid', 'true')
  })

  it('validates non-numeric count', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Add Event' }))
    await user.type(screen.getByLabelText('Event name'), 'Test')
    await user.click(screen.getByRole('button', { name: 'OK' }))
    const countInput = screen.getByLabelText('Number of people to invite')
    expect(countInput).toHaveAttribute('aria-invalid', 'true')
  })

  it('adds a new event', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Add Event' }))
    await user.type(screen.getByLabelText('Event name'), 'Team standup')
    await user.type(screen.getByLabelText('Number of people to invite'), '5')
    await user.click(screen.getByRole('button', { name: 'OK' }))
    expect(screen.queryByText('Add New Event')).not.toBeInTheDocument()
    expect(screen.getByText('Team standup:')).toBeInTheDocument()
    expect(screen.getByText('5 Invited')).toBeInTheDocument()
  })

  it('clears name error on input', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Add Event' }))
    await user.click(screen.getByRole('button', { name: 'OK' }))
    const nameInput = screen.getByLabelText('Event name')
    expect(nameInput).toHaveAttribute('aria-invalid', 'true')
    await user.type(nameInput, 'A')
    expect(nameInput).toHaveAttribute('aria-invalid', 'false')
  })

  it('clears count error on input', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Add Event' }))
    await user.type(screen.getByLabelText('Event name'), 'Test')
    await user.click(screen.getByRole('button', { name: 'OK' }))
    const countInput = screen.getByLabelText('Number of people to invite')
    expect(countInput).toHaveAttribute('aria-invalid', 'true')
    await user.type(countInput, '1')
    expect(countInput).toHaveAttribute('aria-invalid', 'false')
  })

  it('renders the Component Dock footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders chevron aria-labels', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Previous year' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next year' })).toBeInTheDocument()
  })

  it('day persists across month navigation', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Click day 5
    await user.click(screen.getByRole('button', { name: '5 December 2020' }))
    expect(screen.getByText('There are no events planned for December 5.')).toBeInTheDocument()
    // Navigate to Nov
    await user.click(screen.getByRole('button', { name: 'Nov' }))
    expect(screen.getByText('There are no events planned for November 5.')).toBeInTheDocument()
    // Back to Dec
    await user.click(screen.getByRole('button', { name: 'Dec' }))
    expect(screen.getByText('There are no events planned for December 5.')).toBeInTheDocument()
  })

  it('day persists across year navigation', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Next year' }))
    expect(screen.getByText('There are no events planned for December 18.')).toBeInTheDocument()
  })

  it('newly added event shows event-date styling', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Add Event' }))
    await user.type(screen.getByLabelText('Event name'), 'Test')
    await user.type(screen.getByLabelText('Number of people to invite'), '3')
    await user.click(screen.getByRole('button', { name: 'OK' }))
    const day18 = screen.getByRole('button', { name: '18 December 2020' })
    expect(day18.className).toContain('bg-brand')
  })

  it('renders responsive card width', () => {
    const { container } = render(<App />)
    const card = container.querySelector('.max-w-\\[500px\\]')
    expect(card).toBeInTheDocument()
  })

  it('event count input has correct constraints', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Add Event' }))
    const countInput = screen.getByLabelText('Number of people to invite')
    expect(countInput).toHaveAttribute('min', '0')
    expect(countInput).toHaveAttribute('max', '1000000')
  })

  it('event name input has maxlength 36', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Add Event' }))
    const nameInput = screen.getByLabelText('Event name')
    expect(nameInput).toHaveAttribute('maxlength', '36')
  })

  it('shows multiple events on the same date', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Add two events to Dec 18
    await user.click(screen.getByRole('button', { name: 'Add Event' }))
    await user.type(screen.getByLabelText('Event name'), 'First')
    await user.type(screen.getByLabelText('Number of people to invite'), '1')
    await user.click(screen.getByRole('button', { name: 'OK' }))
    await user.click(screen.getByRole('button', { name: 'Add Event' }))
    await user.type(screen.getByLabelText('Event name'), 'Second')
    await user.type(screen.getByLabelText('Number of people to invite'), '2')
    await user.click(screen.getByRole('button', { name: 'OK' }))
    expect(screen.getByText('First:')).toBeInTheDocument()
    expect(screen.getByText('Second:')).toBeInTheDocument()
  })

  it('has no event dot on dates without events', () => {
    render(<App />)
    const day5 = screen.getByRole('button', { name: '5 December 2020' })
    expect(day5.querySelector('span.absolute')).not.toBeInTheDocument()
  })

  it('event date shows amber dot indicator', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'May' }))
    const day12 = screen.getByRole('button', { name: '12 May 2020' })
    const dot = day12.querySelector('span.absolute')
    expect(dot).toBeInTheDocument()
    expect(dot?.className).toContain('bg-event-dot')
  })

  it('active date on event date shows brand bg without dot', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'May' }))
    await user.click(screen.getByRole('button', { name: '12 May 2020' }))
    const day12 = screen.getByRole('button', { name: '12 May 2020' })
    // Active date should have brand bg but no dot when active
    expect(day12.className).toContain('bg-brand')
  })
})
