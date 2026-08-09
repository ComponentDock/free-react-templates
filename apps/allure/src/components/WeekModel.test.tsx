import { describe, expect, it, vi, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WeekModel } from './WeekModel'

function currentPhoto(container: HTMLElement) {
  return container.querySelector('img')!.getAttribute('src')
}

afterEach(() => {
  vi.useRealTimers()
})

describe('WeekModel', () => {
  it('renders the rotated title, profile, stats, link, and bookings button', () => {
    const { container } = render(<WeekModel />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/model of the week/i)

    expect(screen.getByRole('heading', { level: 3, name: 'Samantha Smith' })).toBeInTheDocument()
    expect(screen.getByText(/milan favorite/i)).toBeInTheDocument()

    for (const stat of ['Age', 'Height', 'Shoes', 'Hair', 'Eyes']) {
      expect(screen.getByText(stat)).toBeInTheDocument()
    }
    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.getByText('1.79m / 5\'10"')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Full Profile' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Bookings' })).toBeInTheDocument()
    expect(container.querySelector('img')!.getAttribute('src')).toContain('allure-week-1')
  })

  it('advances and wraps the photo slider with Next and Previous', async () => {
    const user = userEvent.setup()
    const { container } = render(<WeekModel />)

    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(currentPhoto(container)).toContain('allure-week-2')

    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(currentPhoto(container)).toContain('allure-week-1')

    await user.click(screen.getByRole('button', { name: 'Previous' }))
    expect(currentPhoto(container)).toContain('allure-week-3')
  })

  it('autoplays the photo slider', () => {
    vi.useFakeTimers()
    const { container } = render(<WeekModel />)
    expect(currentPhoto(container)).toContain('allure-week-1')
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(currentPhoto(container)).toContain('allure-week-2')
  })
})
