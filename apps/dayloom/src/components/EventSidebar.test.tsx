import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EventSidebar } from './EventSidebar'

function toLocalDateString(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

describe('EventSidebar', () => {
  const selectedDate = new Date(2026, 7, 29)
  let mockAddEvent: ReturnType<
    typeof vi.fn<(event: { date: string; title: string; time?: string }) => void>
  >
  let mockDeleteEvent: ReturnType<typeof vi.fn<(index: number) => void>>

  beforeEach(() => {
    cleanup()
    mockAddEvent = vi.fn()
    mockDeleteEvent = vi.fn()
  })

  it('renders the sidebar header with selected date', () => {
    render(
      <EventSidebar
        selectedDate={selectedDate}
        events={[]}
        onAddEvent={mockAddEvent}
        onDeleteEvent={mockDeleteEvent}
      />,
    )
    expect(
      screen.getByRole('complementary', { name: /event schedule sidebar/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/August 29, 2026/i)).toBeInTheDocument()
  })

  it('renders empty state when no events exist for selected date', () => {
    render(
      <EventSidebar
        selectedDate={selectedDate}
        events={[]}
        onAddEvent={mockAddEvent}
        onDeleteEvent={mockDeleteEvent}
      />,
    )
    expect(screen.getByText(/No events scheduled for this day/i)).toBeInTheDocument()
  })

  it('renders events list when events exist', () => {
    const dateString = toLocalDateString(selectedDate)
    const events = [{ date: dateString, title: 'Sprint Review', time: '10:00' }]
    render(
      <EventSidebar
        selectedDate={selectedDate}
        events={events}
        onAddEvent={mockAddEvent}
        onDeleteEvent={mockDeleteEvent}
      />,
    )
    expect(screen.getByText('Sprint Review')).toBeInTheDocument()
    expect(screen.getByText('10:00')).toBeInTheDocument()
  })

  it('calls onAddEvent when submitting new event form', async () => {
    const user = userEvent.setup()
    render(
      <EventSidebar
        selectedDate={selectedDate}
        events={[]}
        onAddEvent={mockAddEvent}
        onDeleteEvent={mockDeleteEvent}
      />,
    )

    const titleInput = screen.getByRole('textbox', { name: /event title/i })
    const submitBtn = screen.getByRole('button', { name: /add event/i })

    await user.type(titleInput, 'Design Sync')
    await user.click(submitBtn)

    expect(mockAddEvent).toHaveBeenCalledWith({
      date: toLocalDateString(selectedDate),
      title: 'Design Sync',
      time: '09:00',
    })
  })

  it('does not call onAddEvent if title is empty', async () => {
    const user = userEvent.setup()
    render(
      <EventSidebar
        selectedDate={selectedDate}
        events={[]}
        onAddEvent={mockAddEvent}
        onDeleteEvent={mockDeleteEvent}
      />,
    )

    const submitBtn = screen.getByRole('button', { name: /add event/i })
    await user.click(submitBtn)

    expect(mockAddEvent).not.toHaveBeenCalled()
  })

  it('calls onDeleteEvent when delete button is clicked', async () => {
    const user = userEvent.setup()
    const dateString = toLocalDateString(selectedDate)
    const events = [{ date: dateString, title: 'Sprint Review', time: '10:00' }]
    render(
      <EventSidebar
        selectedDate={selectedDate}
        events={events}
        onAddEvent={mockAddEvent}
        onDeleteEvent={mockDeleteEvent}
      />,
    )

    const deleteBtn = screen.getByRole('button', { name: /delete event sprint review/i })
    await user.click(deleteBtn)

    expect(mockDeleteEvent).toHaveBeenCalledWith(0)
  })

  it('updates time when time input is changed', async () => {
    const user = userEvent.setup()
    render(
      <EventSidebar
        selectedDate={selectedDate}
        events={[]}
        onAddEvent={mockAddEvent}
        onDeleteEvent={mockDeleteEvent}
      />,
    )

    const timeInput = screen.getByLabelText(/time/i)
    await user.clear(timeInput)
    await user.type(timeInput, '14:30')

    const titleInput = screen.getByRole('textbox', { name: /event title/i })
    await user.type(titleInput, 'Afternoon Meeting')
    await user.click(screen.getByRole('button', { name: /add event/i }))

    expect(mockAddEvent).toHaveBeenCalledWith({
      date: toLocalDateString(selectedDate),
      title: 'Afternoon Meeting',
      time: '14:30',
    })
  })
})
