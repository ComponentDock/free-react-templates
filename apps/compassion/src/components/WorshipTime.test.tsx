import { render, screen, act } from '@testing-library/react'
import { describe, expect, it, vi, afterEach } from 'vitest'
import { WorshipTime } from './WorshipTime'

describe('WorshipTime', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('displays camp meeting heading', () => {
    render(<WorshipTime />)
    expect(screen.getByText('Camp Meeting Will Start Soon')).toBeInTheDocument()
  })

  it('displays upcoming events heading', () => {
    render(<WorshipTime />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })

  it('displays countdown labels', () => {
    render(<WorshipTime />)
    for (const label of ['Weeks', 'Days', 'Hours', 'Min', 'Sec']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('displays zero-padded countdown values', () => {
    render(<WorshipTime />)
    // The countdown uses padStart(2, '0') — at least some values should exist
    const weeks = screen.getByText('Weeks')
    const weeksValue = weeks.previousElementSibling
    expect(weeksValue).toBeInTheDocument()
    expect(weeksValue?.textContent).toMatch(/^\d{2}$/)
  })

  it('updates countdown when interval fires', () => {
    vi.useFakeTimers()
    render(<WorshipTime />)

    const secLabel = screen.getByText('Sec')
    const secParent = secLabel.parentElement!
    const beforeValue = secParent.querySelector('span')?.textContent

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    const afterValue = secParent.querySelector('span')?.textContent
    expect(afterValue).not.toBe(beforeValue)
  })

  it('displays all 4 events', () => {
    render(<WorshipTime />)
    expect(screen.getByText('Child Dedication')).toBeInTheDocument()
    expect(screen.getByText('Church Fellowship')).toBeInTheDocument()
    expect(screen.getByText('Mass Baptism')).toBeInTheDocument()
    expect(screen.getByText('School of the Prophets')).toBeInTheDocument()
  })

  it('displays event dates', () => {
    render(<WorshipTime />)
    expect(screen.getByText('APR 14')).toBeInTheDocument()
    expect(screen.getByText('MAY 03')).toBeInTheDocument()
    expect(screen.getByText('JUN 21')).toBeInTheDocument()
    expect(screen.getByText('JUL 15')).toBeInTheDocument()
  })

  it('has More Info links for each event', () => {
    render(<WorshipTime />)
    const links = screen.getAllByText('More Info')
    expect(links).toHaveLength(4)
  })

  it('displays Join Now button', () => {
    render(<WorshipTime />)
    expect(screen.getByRole('button', { name: /join now/i })).toBeInTheDocument()
  })

  it('cleans up interval on unmount', () => {
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval')
    const { unmount } = render(<WorshipTime />)
    unmount()
    expect(clearIntervalSpy).toHaveBeenCalled()
    clearIntervalSpy.mockRestore()
  })
})
