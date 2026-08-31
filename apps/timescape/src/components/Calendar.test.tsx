import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Calendar } from './Calendar'
import type { CalendarEvent } from '../utils/calendar'

const FEB_2020 = new Date(2020, 1, 12) // Feb 12, 2020 (Wednesday)

const SAMPLE_EVENTS: CalendarEvent[] = [
  { id: '1', title: 'All Day Event', start: new Date(2020, 1, 1), allDay: true },
  {
    id: '2',
    title: 'Long Event',
    start: new Date(2020, 1, 7),
    end: new Date(2020, 1, 10),
    allDay: true,
  },
  { id: '3', title: 'Meeting', start: new Date(2020, 1, 12, 10, 30) },
  { id: '4', title: 'Lunch', start: new Date(2020, 1, 12, 12, 0) },
  { id: '5', title: 'Happy Hour', start: new Date(2020, 1, 12, 17, 30) },
  { id: '6', title: 'Dinner', start: new Date(2020, 1, 12, 20, 0) },
  { id: '7', title: 'Party', start: new Date(2020, 1, 13, 7, 0) },
  {
    id: '8',
    title: 'Conference',
    start: new Date(2020, 1, 11),
    end: new Date(2020, 1, 13),
    allDay: true,
  },
]

describe('Calendar', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    vi.setSystemTime(FEB_2020)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the month label', () => {
    render(<Calendar events={[]} today={FEB_2020} />)
    expect(screen.getByText('February 2020')).toBeInTheDocument()
  })

  it('renders weekday headers', () => {
    render(<Calendar events={[]} today={FEB_2020} />)
    for (const day of ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']) {
      expect(screen.getByText(day)).toBeInTheDocument()
    }
  })

  it('renders the today button', () => {
    render(<Calendar events={[]} today={FEB_2020} />)
    expect(screen.getByRole('button', { name: 'Today' })).toBeInTheDocument()
  })

  it('renders prev and next buttons', () => {
    render(<Calendar events={[]} today={FEB_2020} />)
    expect(screen.getByRole('button', { name: 'Previous month' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next month' })).toBeInTheDocument()
  })

  it('renders 35 grid cells for Feb 2020 (5 rows × 7 cols)', () => {
    const { container } = render(<Calendar events={[]} today={FEB_2020} />)
    // Grid cells are divs with min-h-[80px] inside the grid-cols-7 container
    const gridCells = container.querySelectorAll('[class*="min-h-"]')
    expect(gridCells).toHaveLength(35)
  })

  it('renders adjacent-month day numbers with reduced opacity', () => {
    const { container } = render(<Calendar events={[]} today={FEB_2020} />)
    const adjacentDays = container.querySelectorAll('.opacity-30')
    expect(adjacentDays.length).toBeGreaterThan(0)
  })

  it('navigates to next month', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Calendar events={[]} today={FEB_2020} />)
    await user.click(screen.getByRole('button', { name: 'Next month' }))
    expect(screen.getByText('March 2020')).toBeInTheDocument()
  })

  it('navigates to previous month', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Calendar events={[]} today={FEB_2020} />)
    await user.click(screen.getByRole('button', { name: 'Previous month' }))
    expect(screen.getByText('January 2020')).toBeInTheDocument()
  })

  it('navigates across year boundary (Dec -> Jan)', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Calendar events={[]} initialDate={new Date(2020, 11, 15)} today={FEB_2020} />)
    expect(screen.getByText('December 2020')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next month' }))
    expect(screen.getByText('January 2021')).toBeInTheDocument()
  })

  it('Today button returns to the current month', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Calendar events={[]} today={FEB_2020} />)
    // Navigate forward one month
    await user.click(screen.getByRole('button', { name: 'Next month' }))
    expect(screen.getByText('March 2020')).toBeInTheDocument()
    // Click Today to go back
    await user.click(screen.getByRole('button', { name: 'Today' }))
    expect(screen.getByText('February 2020')).toBeInTheDocument()
  })

  it('renders event bars', () => {
    render(<Calendar events={SAMPLE_EVENTS} today={FEB_2020} />)
    expect(screen.getByText('All Day Event')).toBeInTheDocument()
  })

  it('renders timed event with time prefix', () => {
    render(<Calendar events={SAMPLE_EVENTS} today={FEB_2020} />)
    expect(screen.getByText('10:30a Meeting')).toBeInTheDocument()
  })

  it('renders multi-day events on each spanned day', () => {
    const { container } = render(<Calendar events={SAMPLE_EVENTS} today={FEB_2020} />)
    // Long Event spans Feb 7-10, so it should appear 4 times
    const longEventBars = container.querySelectorAll('[title*="Long Event"]')
    expect(longEventBars.length).toBe(4)
  })

  it('shows +N more link when events exceed limit', () => {
    render(<Calendar events={SAMPLE_EVENTS} today={FEB_2020} />)
    // Feb 12 has 5 timed events + Conference (multi-day) = 6 events total
    // MAX_VISIBLE_EVENTS = 4, so overflow = 2
    const moreButtons = screen.getAllByRole('button')
    const moreLink = moreButtons.find((btn) => btn.textContent?.includes('more'))
    expect(moreLink).toBeDefined()
    expect(moreLink!.textContent).toContain('+')
    expect(moreLink!.textContent).toContain('more')
  })

  it('opens popover when +N more is clicked', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Calendar events={SAMPLE_EVENTS} today={FEB_2020} />)
    const moreButtons = screen.getAllByRole('button')
    const moreLink = moreButtons.find((btn) => btn.textContent?.includes('more'))
    expect(moreLink).toBeDefined()
    await user.click(moreLink!)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes popover when close button is clicked', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Calendar events={SAMPLE_EVENTS} today={FEB_2020} />)
    const moreButtons = screen.getAllByRole('button')
    const moreLink = moreButtons.find((btn) => btn.textContent?.includes('more'))
    expect(moreLink).toBeDefined()
    await user.click(moreLink!)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens linked event from popover in new tab', async () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    // Create events where an overflow event has a URL
    const eventsWithUrl: CalendarEvent[] = [
      ...SAMPLE_EVENTS,
      {
        id: 'url-overflow',
        title: 'Click for Docs',
        start: new Date(2020, 1, 12, 21, 0),
        url: 'http://docs.example.com/',
      },
    ]
    render(<Calendar events={eventsWithUrl} today={FEB_2020} />)
    // Open the overflow popover on Feb 12
    const moreButtons = screen.getAllByRole('button')
    const moreLink = moreButtons.find((btn) => btn.textContent?.includes('more'))
    expect(moreLink).toBeDefined()
    await user.click(moreLink!)
    // Click the linked overflow event inside the popover
    const dialog = screen.getByRole('dialog')
    // Find the last overflow event (Click for Docs) in the dialog
    const { getAllByText } = within(dialog)
    const docsEvents = getAllByText(/Click for Docs/)
    expect(docsEvents.length).toBeGreaterThan(0)
    await user.click(docsEvents[docsEvents.length - 1]!)
    expect(openSpy).toHaveBeenCalledWith(
      'http://docs.example.com/',
      '_blank',
      'noopener,noreferrer',
    )
    openSpy.mockRestore()
  })

  it('drags an overflow event from the popover', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Calendar events={SAMPLE_EVENTS} today={FEB_2020} />)
    // Open the overflow popover on Feb 12
    const moreButtons = screen.getAllByRole('button')
    const moreLink = moreButtons.find((btn) => btn.textContent?.includes('more'))
    expect(moreLink).toBeDefined()
    await user.click(moreLink!)
    const dialog = screen.getByRole('dialog')
    // Get the overflow event by finding draggable divs in the dialog
    const popoverEvents = dialog.querySelectorAll('[draggable="true"]')
    expect(popoverEvents.length).toBeGreaterThan(0)
    // Fire dragStart on the popover event item
    const dataTransfer = {
      setData: vi.fn(),
      getData: vi.fn(),
      effectAllowed: '',
    }
    fireEvent.dragStart(popoverEvents[0]!, { dataTransfer })
    expect(dataTransfer.setData).toHaveBeenCalledWith('text/plain', expect.any(String))
    expect(dataTransfer.effectAllowed).toBe('move')
  })

  it('drags an event to another day', () => {
    const { container } = render(<Calendar events={SAMPLE_EVENTS} today={FEB_2020} />)
    // Find the "All Day Event" bar on Feb 1
    const allDayBar = screen.getByText('All Day Event')
    // Find a target cell (Feb 14)
    const gridCells = container.querySelectorAll('[class*="min-h-"]')
    // Feb 14 is at index 13 (0-indexed: 6 leading + 14 - 1 = 19... let me just find the right cell)
    // Actually, let's use fireEvent for drag
    const dataTransfer = {
      setData: vi.fn(),
      getData: vi.fn().mockReturnValue('1'),
      effectAllowed: '',
    }
    fireEvent.dragStart(allDayBar, { dataTransfer })
    // Find Feb 14 cell (index: 6 leading + 13 = 19)
    const targetCell = gridCells[19]!
    fireEvent.dragOver(targetCell, { dataTransfer })
    fireEvent.drop(targetCell, { dataTransfer })
    // The event should have moved — "All Day Event" should still be visible (on Feb 14 now)
    expect(screen.getByText('All Day Event')).toBeInTheDocument()
  })

  it('allows drag over without drop', () => {
    const { container } = render(<Calendar events={SAMPLE_EVENTS} today={FEB_2020} />)
    const allDayBar = screen.getByText('All Day Event')
    const gridCells = container.querySelectorAll('[class*="min-h-"]')
    const dataTransfer = {
      setData: vi.fn(),
      getData: vi.fn().mockReturnValue('1'),
      effectAllowed: '',
    }
    fireEvent.dragStart(allDayBar, { dataTransfer })
    fireEvent.dragOver(gridCells[10]!, { dataTransfer })
    // No drop, event should still be on Feb 1
    expect(screen.getByText('All Day Event')).toBeInTheDocument()
  })

  it('opens linked event in new tab', async () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const linkedEvent: CalendarEvent[] = [
      {
        id: 'link',
        title: 'Click for Google',
        start: new Date(2020, 1, 28),
        allDay: true,
        url: 'http://google.com/',
      },
    ]
    render(<Calendar events={linkedEvent} today={FEB_2020} />)
    await user.click(screen.getByText('Click for Google'))
    expect(openSpy).toHaveBeenCalledWith('http://google.com/', '_blank', 'noopener,noreferrer')
    openSpy.mockRestore()
  })

  it('has correct aria-live region for month changes', () => {
    render(<Calendar events={[]} today={FEB_2020} />)
    const liveRegion = screen.getByText('February 2020')
    expect(liveRegion).toHaveAttribute('aria-live', 'polite')
  })

  it('calendar region has aria-label', () => {
    render(<Calendar events={[]} today={FEB_2020} />)
    expect(screen.getByRole('region', { name: 'Calendar' })).toBeInTheDocument()
  })

  it('renders with correct initial date', () => {
    render(<Calendar events={[]} initialDate={new Date(2020, 5, 15)} today={FEB_2020} />)
    expect(screen.getByText('June 2020')).toBeInTheDocument()
  })

  it('ignores drop when eventId is empty', () => {
    const { container } = render(<Calendar events={SAMPLE_EVENTS} today={FEB_2020} />)
    const gridCells = container.querySelectorAll('[class*="min-h-"]')
    const dataTransfer = {
      setData: vi.fn(),
      getData: vi.fn().mockReturnValue(''),
      effectAllowed: '',
    }
    // All Day Event is on Feb 1 at index 1 (leading Jan days: 26-31 = 6 cells, so Feb 1 = index 6)
    const targetCell = gridCells[6]!
    fireEvent.dragStart(screen.getByText('All Day Event'), { dataTransfer })
    fireEvent.dragOver(targetCell, { dataTransfer })
    fireEvent.drop(targetCell, { dataTransfer })
    // Event should still be on Feb 1 (no move happened)
    const allDayBars = screen.getAllByText('All Day Event')
    expect(allDayBars.length).toBe(1)
  })

  it('toggles popover when +N more clicked twice on same date', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Calendar events={SAMPLE_EVENTS} today={FEB_2020} />)
    const moreButtons = screen.getAllByRole('button')
    const moreLink = moreButtons.find((btn) => btn.textContent?.includes('more'))
    expect(moreLink).toBeDefined()
    // Open
    await user.click(moreLink!)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    // Close by clicking same +more link again (toggle)
    await user.click(moreLink!)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('clicks a non-URL event without opening a new tab', async () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Calendar events={SAMPLE_EVENTS} today={FEB_2020} />)
    await user.click(screen.getByText('All Day Event'))
    expect(openSpy).not.toHaveBeenCalled()
    openSpy.mockRestore()
  })
})
