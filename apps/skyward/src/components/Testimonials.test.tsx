import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading and the first testimonial', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our satisfied customer says' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Mark Web')).toBeInTheDocument()
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
    expect(screen.getByLabelText('5 out of 5 stars')).toBeInTheDocument()
  })

  it('advances to the next and previous testimonial via the controls', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Interface Designer')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
  })

  it('wraps around when navigating past the last testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const next = screen.getByRole('button', { name: 'Next testimonial' })
    for (const role of ['Interface Designer', 'UI Designer', 'Web Developer', 'System Analyst']) {
      await user.click(next)
      expect(screen.getByText(role)).toBeInTheDocument()
    }

    // One more click wraps back to the first slide.
    await user.click(next)
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()

    // Wrapping backwards from the first slide lands on the last slide.
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('System Analyst')).toBeInTheDocument()
  })

  it('auto-advances the carousel on a timer', () => {
    vi.useFakeTimers()
    render(<Testimonials />)

    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(6000)
    })

    expect(screen.getByText('Interface Designer')).toBeInTheDocument()
  })
})
