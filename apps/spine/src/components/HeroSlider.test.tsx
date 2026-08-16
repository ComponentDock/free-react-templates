import { act, render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { HeroSlider } from './HeroSlider'
import { heroSlides } from '../data'

describe('HeroSlider', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders three slides with identical copy and exactly one visible', () => {
    render(<HeroSlider />)

    expect(screen.getAllByRole('group', { hidden: true })).toHaveLength(heroSlides.length)
    expect(screen.getByRole('group', { name: 'Slide 1 of 3' })).toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { level: 1, hidden: true })
    expect(headings).toHaveLength(3)
    expect(headings[0]!.textContent).toMatch(/The History of Phipino/)
    expect(screen.getAllByText('Science Fiction')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Browse Store', hidden: true })).toHaveLength(3)
  })

  it('navigates slides via the dots and marks the active dot', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('group', { name: 'Slide 1 of 3' })).toBeInTheDocument()
    const secondDot = screen.getByRole('button', { name: 'Go to slide 2' })
    expect(secondDot.getAttribute('aria-current')).toBeNull()

    fireEvent.click(secondDot)
    expect(screen.getByRole('group', { name: 'Slide 2 of 3' })).toBeInTheDocument()
    expect(secondDot.getAttribute('aria-current')).toBe('true')
    expect(
      screen.getByRole('button', { name: 'Go to slide 1' }).getAttribute('aria-current'),
    ).toBeNull()
  })

  it('auto-advances every five seconds and wraps around', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)

    expect(screen.getByRole('group', { name: 'Slide 1 of 3' })).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('group', { name: 'Slide 2 of 3' })).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(screen.getByRole('group', { name: 'Slide 1 of 3' })).toBeInTheDocument()
  })
})
