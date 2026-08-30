import { render, screen, fireEvent } from '@testing-library/react'
import { DatePicker } from './DatePicker'

// Mock date: Feb 16, 2021 (matching the source screenshot date)
const MOCK_DATE = new Date(2021, 1, 16)

describe('DatePicker', () => {
  const defaultProps = { value: '', onChange: vi.fn() }

  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(MOCK_DATE)
    defaultProps.onChange.mockClear()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  function openPicker() {
    const input = screen.getByPlaceholderText('Pick A Date')
    fireEvent.focus(input)
    return input
  }

  describe('input', () => {
    it('renders with placeholder "Pick A Date"', () => {
      render(<DatePicker {...defaultProps} />)
      expect(screen.getByPlaceholderText('Pick A Date')).toBeInTheDocument()
    })

    it('displays the current value', () => {
      render(<DatePicker {...defaultProps} value="16 February, 2021" />)
      expect(screen.getByPlaceholderText('Pick A Date')).toHaveValue('16 February, 2021')
    })

    it('opens picker on focus', () => {
      render(<DatePicker {...defaultProps} />)
      openPicker()
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('sets aria-expanded to true when open', () => {
      render(<DatePicker {...defaultProps} />)
      const input = openPicker()
      expect(input).toHaveAttribute('aria-expanded', 'true')
    })

    it('sets aria-expanded to false when closed', () => {
      render(<DatePicker {...defaultProps} />)
      expect(screen.getByPlaceholderText('Pick A Date')).toHaveAttribute('aria-expanded', 'false')
    })

    it('is read-only (cannot type)', () => {
      render(<DatePicker {...defaultProps} />)
      expect(screen.getByPlaceholderText('Pick A Date')).toHaveAttribute('readonly')
    })
  })

  describe('picker shell and header', () => {
    beforeEach(() => {
      render(<DatePicker {...defaultProps} />)
      openPicker()
    })

    it('shows current month and year in header', () => {
      expect(screen.getByText('February')).toBeInTheDocument()
      expect(screen.getByText('2021')).toBeInTheDocument()
    })

    it('has prev/next navigation buttons', () => {
      expect(screen.getByRole('button', { name: /previous month/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /next month/i })).toBeInTheDocument()
    })

    it('navigates to next month', () => {
      fireEvent.click(screen.getByRole('button', { name: /next month/i }))
      expect(screen.getByText('March')).toBeInTheDocument()
    })

    it('navigates to previous month', () => {
      fireEvent.click(screen.getByRole('button', { name: /previous month/i }))
      expect(screen.getByText('January')).toBeInTheDocument()
    })

    it('wraps from January to December of previous year', () => {
      fireEvent.click(screen.getByRole('button', { name: /previous month/i }))
      fireEvent.click(screen.getByRole('button', { name: /previous month/i }))
      expect(screen.getByText('December')).toBeInTheDocument()
    })

    it('wraps from December to January of next year', () => {
      for (let i = 0; i < 10; i++) {
        fireEvent.click(screen.getByRole('button', { name: /next month/i }))
      }
      expect(screen.getByText('December')).toBeInTheDocument()
      fireEvent.click(screen.getByRole('button', { name: /next month/i }))
      expect(screen.getByText('January')).toBeInTheDocument()
    })
  })

  describe('weekday row', () => {
    it('displays Sun through Sat', () => {
      render(<DatePicker {...defaultProps} />)
      openPicker()
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      for (const day of days) {
        expect(screen.getAllByText(day).length).toBeGreaterThanOrEqual(1)
      }
    })
  })

  describe('day grid', () => {
    it('shows 28 days for February 2021', () => {
      render(<DatePicker {...defaultProps} />)
      openPicker()
      for (let d = 1; d <= 28; d++) {
        expect(
          screen.getByRole('button', {
            name: new RegExp(`February ${d}, 2021`),
          }),
        ).toBeInTheDocument()
      }
    })

    it('does not show out-of-month days as buttons', () => {
      render(<DatePicker {...defaultProps} />)
      openPicker()
      const allCells = screen.getAllByRole('button', { name: /February/ })
      // 28 days for Feb 2021
      expect(allCells.length).toBe(28)
    })

    it('marks today with a corner triangle', () => {
      render(<DatePicker {...defaultProps} />)
      openPicker()
      const todayBtn = screen.getByRole('button', {
        name: 'February 16, 2021',
      })
      const triangle = todayBtn.querySelector('[aria-hidden="true"]')
      expect(triangle).toBeInTheDocument()
    })

    it('selects a day and closes picker', () => {
      render(<DatePicker {...defaultProps} />)
      openPicker()
      fireEvent.click(screen.getByRole('button', { name: 'February 16, 2021' }))
      expect(defaultProps.onChange).toHaveBeenCalledWith('16 February, 2021')
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('highlights selected day with accent background', () => {
      render(<DatePicker {...defaultProps} value="16 February, 2021" />)
      openPicker()
      const selected = screen.getByRole('button', {
        name: 'February 16, 2021',
      })
      expect(selected.className).toContain('bg-accent')
    })
  })

  describe('footer buttons', () => {
    it('Today button jumps to current month and fills input', () => {
      render(<DatePicker {...defaultProps} />)
      openPicker()
      // Navigate to March first
      fireEvent.click(screen.getByRole('button', { name: /next month/i }))
      expect(screen.getByText('March')).toBeInTheDocument()

      // Click Today
      fireEvent.click(screen.getByText('Today'))
      expect(defaultProps.onChange).toHaveBeenCalledWith('16 February, 2021')
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('Clear button empties input', () => {
      render(<DatePicker {...defaultProps} value="16 February, 2021" />)
      openPicker()
      fireEvent.click(screen.getByText('Clear'))
      expect(defaultProps.onChange).toHaveBeenCalledWith('')
    })

    it('Close button closes picker without changing value', () => {
      render(<DatePicker {...defaultProps} />)
      openPicker()
      fireEvent.click(screen.getByRole('button', { name: /close/i }))
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(defaultProps.onChange).not.toHaveBeenCalled()
    })
  })

  describe('open/close behavior', () => {
    it('closes on Escape key', () => {
      render(<DatePicker {...defaultProps} />)
      openPicker()
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      fireEvent.keyDown(screen.getByRole('dialog').parentElement!, {
        key: 'Escape',
      })
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('does not close on non-Escape key', () => {
      render(<DatePicker {...defaultProps} />)
      openPicker()
      fireEvent.keyDown(screen.getByRole('dialog').parentElement!, {
        key: 'Enter',
      })
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('closes on backdrop mousedown', () => {
      render(<DatePicker {...defaultProps} />)
      openPicker()
      const backdrop = document.querySelector('.fixed.inset-0')
      expect(backdrop).toBeInTheDocument()
      fireEvent.mouseDown(backdrop!)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('closes on document mousedown outside picker and input', () => {
      render(<DatePicker {...defaultProps} />)
      openPicker()
      // Simulate a mousedown on the document body (outside picker and input)
      fireEvent.mouseDown(document.body)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('does not close when clicking inside picker', () => {
      render(<DatePicker {...defaultProps} />)
      openPicker()
      const dialog = screen.getByRole('dialog')
      fireEvent.mouseDown(dialog)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('sets input border to active color when open', () => {
      render(<DatePicker {...defaultProps} />)
      const input = screen.getByPlaceholderText('Pick A Date')
      expect(input.className).toContain('border-border')
      openPicker()
      expect(input.className).toContain('border-border-active')
    })
  })
})
