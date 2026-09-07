import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DateGroup } from './DateGroup'

describe('DateGroup', () => {
  const defaultProps = {
    day: '',
    month: '',
    year: '',
    onDayChange: vi.fn(),
    onMonthChange: vi.fn(),
    onYearChange: vi.fn(),
  }

  it('renders day, month, and year selects', () => {
    render(<DateGroup {...defaultProps} />)
    expect(screen.getByLabelText(/day/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/month/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/year/i)).toBeInTheDocument()
  })

  it('renders default placeholder options', () => {
    render(<DateGroup {...defaultProps} />)
    expect(screen.getByText('Day')).toBeInTheDocument()
    expect(screen.getByText('Month')).toBeInTheDocument()
    expect(screen.getByText('Year')).toBeInTheDocument()
  })

  it('calls onDayChange when day is selected', async () => {
    const user = userEvent.setup()
    const onDayChange = vi.fn()
    render(<DateGroup {...defaultProps} onDayChange={onDayChange} />)
    await user.selectOptions(screen.getByLabelText(/day/i), '15')
    expect(onDayChange).toHaveBeenCalledWith('15')
  })

  it('calls onMonthChange when month is selected', async () => {
    const user = userEvent.setup()
    const onMonthChange = vi.fn()
    render(<DateGroup {...defaultProps} onMonthChange={onMonthChange} />)
    await user.selectOptions(screen.getByLabelText(/month/i), 'Mar')
    expect(onMonthChange).toHaveBeenCalledWith('Mar')
  })

  it('calls onYearChange when year is selected', async () => {
    const user = userEvent.setup()
    const onYearChange = vi.fn()
    render(<DateGroup {...defaultProps} onYearChange={onYearChange} />)
    const yearSelect = screen.getByLabelText(/year/i)
    const options = yearSelect.querySelectorAll('option')
    // First option is "Year" placeholder, second is current year
    const currentYear = new Date().getFullYear().toString()
    expect(options[1]).toHaveValue(currentYear)
    await user.selectOptions(yearSelect, currentYear)
    expect(onYearChange).toHaveBeenCalledWith(currentYear)
  })

  it('renders 31 day options', () => {
    render(<DateGroup {...defaultProps} />)
    const daySelect = screen.getByLabelText(/day/i)
    const options = daySelect.querySelectorAll('option')
    // 31 days + 1 placeholder = 32
    expect(options).toHaveLength(32)
  })

  it('renders 12 month options', () => {
    render(<DateGroup {...defaultProps} />)
    const monthSelect = screen.getByLabelText(/month/i)
    const options = monthSelect.querySelectorAll('option')
    // 12 months + 1 placeholder = 13
    expect(options).toHaveLength(13)
  })

  it('renders year options spanning 121 years', () => {
    render(<DateGroup {...defaultProps} />)
    const yearSelect = screen.getByLabelText(/year/i)
    const options = yearSelect.querySelectorAll('option')
    // 121 years + 1 placeholder = 122
    expect(options).toHaveLength(122)
  })

  it('displays selected values', () => {
    render(<DateGroup {...defaultProps} day="05" month="Jun" year="1990" />)
    expect(screen.getByLabelText(/day/i)).toHaveValue('05')
    expect(screen.getByLabelText(/month/i)).toHaveValue('Jun')
    expect(screen.getByLabelText(/year/i)).toHaveValue('1990')
  })
})
