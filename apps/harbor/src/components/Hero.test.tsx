import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide with eyebrow, heading, CTA and the divider', () => {
    const { container } = render(<Hero />)
    expect(screen.getByText('Starting at only $2.80/month')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Welcome to the best hosting company')
    expect(screen.getByRole('link', { name: 'Get started now' })).toHaveAttribute(
      'href',
      '#pricing',
    )
    expect(container.querySelectorAll('svg')).toHaveLength(2)
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/harbor-hero/1920/1080',
    )
  })

  it('exposes one labelled dot per slide and marks the active one', () => {
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /Show slide/ })
    expect(dots).toHaveLength(2)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    expect(dots[1]).not.toHaveAttribute('aria-current')
  })

  it('switches slides when a dot is used', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /Show slide 2/ }))

    expect(screen.getByText('Free domain for the first year')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Fast, secure cloud hosting for every site')
    expect(screen.queryByText('Starting at only $2.80/month')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Show slide 2/ })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('advances the carousel on its own', () => {
    vi.useFakeTimers()
    render(<Hero />)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Free domain for the first year')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Starting at only $2.80/month')).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('cleans up its autoplay timer when it unmounts', () => {
    const { unmount } = render(<Hero />)
    unmount()
    expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument()
  })
})
