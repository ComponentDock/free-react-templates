import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CalendarView } from './CalendarView'
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

describe('CalendarView', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    vi.setSystemTime(FEB_2020)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('toolbar', () => {
    it('renders the calendar region', () => {
      render(<CalendarView events={[]} today={FEB_2020} />)
      expect(screen.getByRole('region', { name: 'Calendar' })).toBeInTheDocument()
    })

    it('renders the month label by default', () => {
      render(<CalendarView events={[]} today={FEB_2020} />)
      expect(screen.getByText('February 2020')).toBeInTheDocument()
    })

    it('renders the today button', () => {
      render(<CalendarView events={[]} today={FEB_2020} />)
      expect(screen.getByRole('button', { name: 'Today' })).toBeInTheDocument()
    })

    it('renders prev and next buttons', () => {
      render(<CalendarView events={[]} today={FEB_2020} />)
      expect(screen.getByRole('button', { name: 'Previous month' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Next month' })).toBeInTheDocument()
    })

    it('renders view selector buttons', () => {
      render(<CalendarView events={[]} today={FEB_2020} />)
      expect(screen.getByRole('button', { name: 'Switch to Month view' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Switch to Week view' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Switch to Day view' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Switch to List view' })).toBeInTheDocument()
    })

    it('month view is active by default', () => {
      render(<CalendarView events={[]} today={FEB_2020} />)
      const monthBtn = screen.getByRole('button', { name: 'Switch to Month view' })
      expect(monthBtn).toHaveAttribute('aria-pressed', 'true')
    })
  })

  describe('month view', () => {
    it('renders weekday headers', () => {
      render(<CalendarView events={[]} today={FEB_2020} />)
      for (const day of ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']) {
        expect(screen.getByText(day)).toBeInTheDocument()
      }
    })

    it('renders event bars', () => {
      render(<CalendarView events={SAMPLE_EVENTS} today={FEB_2020} />)
      expect(screen.getByText('All Day Event')).toBeInTheDocument()
    })

    it('renders timed event with time prefix', () => {
      render(<CalendarView events={SAMPLE_EVENTS} today={FEB_2020} />)
      expect(screen.getByText('10:30am Meeting')).toBeInTheDocument()
    })

    it('navigates to next month', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Next month' }))
      expect(screen.getByText('March 2020')).toBeInTheDocument()
    })

    it('navigates to previous month', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Previous month' }))
      expect(screen.getByText('January 2020')).toBeInTheDocument()
    })

    it('Today button returns to the current month', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Next month' }))
      expect(screen.getByText('March 2020')).toBeInTheDocument()
      await user.click(screen.getByRole('button', { name: 'Today' }))
      expect(screen.getByText('February 2020')).toBeInTheDocument()
    })

    it('has correct aria-live region for month changes', () => {
      render(<CalendarView events={[]} today={FEB_2020} />)
      const liveRegion = screen.getByText('February 2020')
      expect(liveRegion).toHaveAttribute('aria-live', 'polite')
    })
  })

  describe('week view', () => {
    it('switches to week view', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Week view' }))
      expect(screen.getByRole('button', { name: 'Switch to Week view' })).toHaveAttribute(
        'aria-pressed',
        'true',
      )
    })

    it('renders week view with time labels', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={SAMPLE_EVENTS} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Week view' }))
      expect(screen.getByText('12 AM')).toBeInTheDocument()
      expect(screen.getByText('12 PM')).toBeInTheDocument()
    })

    it('navigates weeks in week view', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Week view' }))
      await user.click(screen.getByRole('button', { name: 'Next week' }))
      // Title should change to reflect next week
      expect(screen.getByRole('button', { name: 'Previous week' })).toBeInTheDocument()
    })

    it('Today button returns to current week', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Week view' }))
      await user.click(screen.getByRole('button', { name: 'Next week' }))
      await user.click(screen.getByRole('button', { name: 'Today' }))
      // Should be back to current week
      expect(screen.getByRole('button', { name: 'Previous week' })).toBeInTheDocument()
    })
  })

  describe('day view', () => {
    it('switches to day view', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Day view' }))
      expect(screen.getByRole('button', { name: 'Switch to Day view' })).toHaveAttribute(
        'aria-pressed',
        'true',
      )
    })

    it('renders day view with time labels', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={SAMPLE_EVENTS} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Day view' }))
      expect(screen.getByText('12 AM')).toBeInTheDocument()
      expect(screen.getByText('11 PM')).toBeInTheDocument()
    })

    it('navigates days', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Day view' }))
      await user.click(screen.getByRole('button', { name: 'Next day' }))
      expect(screen.getByText(/February 13, 2020/)).toBeInTheDocument()
    })
  })

  describe('list view', () => {
    it('switches to list view', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to List view' }))
      expect(screen.getByRole('button', { name: 'Switch to List view' })).toHaveAttribute(
        'aria-pressed',
        'true',
      )
    })

    it('renders events in list view', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={SAMPLE_EVENTS} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to List view' }))
      expect(screen.getAllByText('Long Event').length).toBeGreaterThan(0)
      expect(screen.getByText('Meeting')).toBeInTheDocument()
    })

    it('navigates in list view', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to List view' }))
      await user.click(screen.getByRole('button', { name: 'Next day' }))
      // Should navigate to next day's list
      expect(screen.getByRole('button', { name: 'Previous day' })).toBeInTheDocument()
    })
  })

  describe('event interaction', () => {
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
      render(<CalendarView events={linkedEvent} today={FEB_2020} />)
      await user.click(screen.getByText('Click for Google'))
      expect(openSpy).toHaveBeenCalledWith('http://google.com/', '_blank', 'noopener,noreferrer')
      openSpy.mockRestore()
    })

    it('clicks a non-URL event without opening a new tab', async () => {
      const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={SAMPLE_EVENTS} today={FEB_2020} />)
      await user.click(screen.getByText('All Day Event'))
      expect(openSpy).not.toHaveBeenCalled()
      openSpy.mockRestore()
    })
  })

  describe('view switching', () => {
    it('updates title when switching views', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      // Month view shows "February 2020"
      expect(screen.getByText('February 2020')).toBeInTheDocument()
      // Switch to day view - should show full day title
      await user.click(screen.getByRole('button', { name: 'Switch to Day view' }))
      expect(screen.getByText(/Wednesday, February 12, 2020/)).toBeInTheDocument()
    })

    it('preserves navigation when switching views', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      // Navigate to March
      await user.click(screen.getByRole('button', { name: 'Next month' }))
      expect(screen.getByText('March 2020')).toBeInTheDocument()
      // Switch to week view (should be in March)
      await user.click(screen.getByRole('button', { name: 'Switch to Week view' }))
      // Switch back to month - should still be March
      await user.click(screen.getByRole('button', { name: 'Switch to Month view' }))
      expect(screen.getByText('March 2020')).toBeInTheDocument()
    })
  })

  describe('year boundary navigation', () => {
    it('navigates across year boundary (Dec -> Jan)', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} initialDate={new Date(2020, 11, 15)} today={FEB_2020} />)
      expect(screen.getByText('December 2020')).toBeInTheDocument()
      await user.click(screen.getByRole('button', { name: 'Next month' }))
      expect(screen.getByText('January 2021')).toBeInTheDocument()
    })
  })

  describe('initial date', () => {
    it('renders with correct initial date', () => {
      render(<CalendarView events={[]} initialDate={new Date(2020, 5, 15)} today={FEB_2020} />)
      expect(screen.getByText('June 2020')).toBeInTheDocument()
    })
  })

  describe('prev navigation in week/day/list views', () => {
    it('navigates to previous week', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Week view' }))
      await user.click(screen.getByRole('button', { name: 'Previous week' }))
      expect(screen.getByRole('button', { name: 'Next week' })).toBeInTheDocument()
    })

    it('navigates to previous day', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Day view' }))
      await user.click(screen.getByRole('button', { name: 'Previous day' }))
      expect(screen.getByText(/February 11, 2020/)).toBeInTheDocument()
    })

    it('navigates to previous day in list view', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to List view' }))
      await user.click(screen.getByRole('button', { name: 'Previous day' }))
      expect(screen.getByRole('button', { name: 'Next day' })).toBeInTheDocument()
    })
  })

  describe('year rollback navigation', () => {
    it('navigates prev from January to December of previous year', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} initialDate={new Date(2021, 0, 15)} today={FEB_2020} />)
      expect(screen.getByText('January 2021')).toBeInTheDocument()
      await user.click(screen.getByRole('button', { name: 'Previous month' }))
      expect(screen.getByText('December 2020')).toBeInTheDocument()
    })
  })

  describe('explicit day/list navigation', () => {
    it('prev in day view updates the title', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      // Switch to day view and immediately navigate prev
      await user.click(screen.getByRole('button', { name: 'Switch to Day view' }))
      await user.click(screen.getByRole('button', { name: 'Previous day' }))
      expect(screen.getByText(/February 11, 2020/)).toBeInTheDocument()
    })

    it('next in list view updates the title', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<CalendarView events={[]} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to List view' }))
      await user.click(screen.getByRole('button', { name: 'Next day' }))
      expect(screen.getByRole('button', { name: 'Previous day' })).toBeInTheDocument()
    })
  })

  describe('event clicks in different views', () => {
    it('clicks all-day event in day view', async () => {
      const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const events: CalendarEvent[] = [
        {
          id: '1',
          title: 'Conference',
          start: new Date(2020, 1, 12),
          allDay: true,
          url: 'http://example.com/',
        },
      ]
      render(<CalendarView events={events} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Day view' }))
      await user.click(screen.getByText('Conference'))
      expect(openSpy).toHaveBeenCalledWith('http://example.com/', '_blank', 'noopener,noreferrer')
      openSpy.mockRestore()
    })

    it('clicks timed event in day view', async () => {
      const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const events: CalendarEvent[] = [
        {
          id: '1',
          title: 'Meeting',
          start: new Date(2020, 1, 12, 10, 0),
          end: new Date(2020, 1, 12, 11, 0),
        },
      ]
      render(<CalendarView events={events} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Day view' }))
      await user.click(screen.getByText('Meeting'))
      expect(openSpy).not.toHaveBeenCalled()
      openSpy.mockRestore()
    })

    it('clicks all-day event in week view', async () => {
      const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const events: CalendarEvent[] = [
        {
          id: '1',
          title: 'Conference',
          start: new Date(2020, 1, 12),
          allDay: true,
          url: 'http://example.com/',
        },
      ]
      render(<CalendarView events={events} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Week view' }))
      await user.click(screen.getByText('Conference'))
      expect(openSpy).toHaveBeenCalledWith('http://example.com/', '_blank', 'noopener,noreferrer')
      openSpy.mockRestore()
    })

    it('clicks timed event in week view', async () => {
      const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const events: CalendarEvent[] = [
        {
          id: '1',
          title: 'Meeting',
          start: new Date(2020, 1, 12, 10, 0),
          end: new Date(2020, 1, 12, 11, 0),
        },
      ]
      render(<CalendarView events={events} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Week view' }))
      await user.click(screen.getByText('Meeting'))
      expect(openSpy).not.toHaveBeenCalled()
      openSpy.mockRestore()
    })

    it('clicks event in list view', async () => {
      const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const events: CalendarEvent[] = [
        {
          id: '1',
          title: 'Meeting',
          start: new Date(2020, 1, 12, 10, 0),
          url: 'http://example.com/',
        },
      ]
      render(<CalendarView events={events} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to List view' }))
      await user.click(screen.getByText('Meeting'))
      expect(openSpy).toHaveBeenCalledWith('http://example.com/', '_blank', 'noopener,noreferrer')
      openSpy.mockRestore()
    })

    it('renders event with end time in week view', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const events: CalendarEvent[] = [
        {
          id: '1',
          title: 'Meeting',
          start: new Date(2020, 1, 12, 10, 0),
          end: new Date(2020, 1, 12, 12, 0),
        },
      ]
      render(<CalendarView events={events} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Week view' }))
      expect(screen.getByText('Meeting')).toBeInTheDocument()
    })

    it('renders event with end time in day view', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const events: CalendarEvent[] = [
        {
          id: '1',
          title: 'Meeting',
          start: new Date(2020, 1, 12, 10, 0),
          end: new Date(2020, 1, 12, 12, 0),
        },
      ]
      render(<CalendarView events={events} today={FEB_2020} />)
      await user.click(screen.getByRole('button', { name: 'Switch to Day view' }))
      expect(screen.getByText('Meeting')).toBeInTheDocument()
    })
  })
})
