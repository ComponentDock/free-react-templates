import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach } from 'vitest'
import { vi } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.setSystemTime(new Date(2026, 7, 15))
  })

  it('renders the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Select Your Dates')
  })

  it('renders two calendar widgets', () => {
    render(<App />)
    const monthLabels = screen.getAllByText('August 2026')
    expect(monthLabels.length).toBe(2)
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('has the correct page background', () => {
    render(<App />)
    const section = document.querySelector('section')
    expect(section).toHaveClass('bg-[#efefef]')
  })

  it('shows Check in and Check out inputs', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Check in')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Check out')).toBeInTheDocument()
  })

  it('preselects today in the from-calendar', () => {
    render(<App />)
    const fromInput = screen.getByPlaceholderText('Check in')
    expect(fromInput).toHaveValue('August 15, 2026')
  })

  it('preselects today in the to-calendar', () => {
    render(<App />)
    const toInput = screen.getByPlaceholderText('Check out')
    expect(toInput).toHaveValue('August 15, 2026')
  })

  it('displays day 15 as selected in both calendars', () => {
    render(<App />)
    const day15Buttons = screen
      .getAllByRole('button')
      .filter((btn) => btn.textContent === '15' && btn.className.includes('bg-[#f67280]'))
    expect(day15Buttons.length).toBe(2)
  })

  it('updates check in input when a from-calendar day is clicked', () => {
    render(<App />)
    const fromInput = screen.getByPlaceholderText('Check in')
    const tables = document.querySelectorAll('table')
    const firstTableButtons = tables[0]!.querySelectorAll('button')
    const day10 = Array.from(firstTableButtons).find(
      (btn) => btn.textContent === '10' && !btn.closest('th'),
    )
    expect(day10).toBeInTheDocument()
    fireEvent.click(day10!)
    expect(fromInput).toHaveValue('August 10, 2026')
  })

  it('updates check out input when a to-calendar day is clicked', () => {
    render(<App />)
    const toInput = screen.getByPlaceholderText('Check out')
    const tables = document.querySelectorAll('table')
    const secondTableButtons = tables[1]!.querySelectorAll('button')
    const day20 = Array.from(secondTableButtons).find(
      (btn) => btn.textContent === '20' && !btn.closest('th'),
    )
    expect(day20).toBeInTheDocument()
    fireEvent.click(day20!)
    expect(toInput).toHaveValue('August 20, 2026')
  })

  it('formats single-digit days with zero padding', () => {
    render(<App />)
    const fromInput = screen.getByPlaceholderText('Check in')
    const tables = document.querySelectorAll('table')
    const firstTableButtons = tables[0]!.querySelectorAll('button')
    const day5 = Array.from(firstTableButtons).find(
      (btn) => btn.textContent === '5' && !btn.closest('th'),
    )
    expect(day5).toBeInTheDocument()
    fireEvent.click(day5!)
    expect(fromInput).toHaveValue('August 05, 2026')
  })

  it('formats double-digit days without padding', async () => {
    const user = userEvent.setup()
    render(<App />)
    const fromInput = screen.getByPlaceholderText('Check in')
    const tables = document.querySelectorAll('table')
    // Navigate the to-calendar to September using its Next month button
    const allNextBtns = document.querySelectorAll('button[aria-label="Next month"]')
    const toCalendarNextBtn = allNextBtns[1] as HTMLButtonElement
    await user.click(toCalendarNextBtn)
    // Now in September, click day 25
    const secondTableButtons = tables[1]!.querySelectorAll('button')
    const day25 = Array.from(secondTableButtons).find(
      (btn) => btn.textContent === '25' && !btn.closest('th'),
    )
    expect(day25).toBeInTheDocument()
    expect(day25).not.toHaveClass('cursor-default')
    await user.click(day25!)
    expect(screen.getByPlaceholderText('Check out')).toHaveValue('September 25, 2026')
    // Now click day 25 in the from-calendar (disabledAfter=Sep 25, so Aug 25 is enabled)
    const firstTableButtons = tables[0]!.querySelectorAll('button')
    const fromDay25 = Array.from(firstTableButtons).find(
      (btn) => btn.textContent === '25' && !btn.closest('th'),
    )
    expect(fromDay25).toBeInTheDocument()
    expect(fromDay25).not.toHaveClass('cursor-default')
    await user.click(fromDay25!)
    expect(fromInput).toHaveValue('August 25, 2026')
  })

  it('disables days after to-date in from-calendar', async () => {
    const user = userEvent.setup()
    render(<App />)
    const tables = document.querySelectorAll('table')
    const secondTableButtons = tables[1]!.querySelectorAll('button')
    const day20 = Array.from(secondTableButtons).find(
      (btn) => btn.textContent === '20' && !btn.closest('th'),
    )
    await user.click(day20!)
    const firstTableButtons = tables[0]!.querySelectorAll('button')
    const day25 = Array.from(firstTableButtons).find(
      (btn) => btn.textContent === '25' && !btn.closest('th'),
    )
    expect(day25).toHaveClass('cursor-default')
  })

  it('disables days before from-date in to-calendar', async () => {
    const user = userEvent.setup()
    render(<App />)
    const tables = document.querySelectorAll('table')
    const firstTableButtons = tables[0]!.querySelectorAll('button')
    const day10 = Array.from(firstTableButtons).find(
      (btn) => btn.textContent === '10' && !btn.closest('th'),
    )
    await user.click(day10!)
    const secondTableButtons = tables[1]!.querySelectorAll('button')
    const day5 = Array.from(secondTableButtons).find(
      (btn) => btn.textContent === '5' && !btn.closest('th'),
    )
    expect(day5).toHaveClass('cursor-default')
  })
})
