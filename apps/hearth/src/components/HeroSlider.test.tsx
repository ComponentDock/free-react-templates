import { describe, expect, it, vi, afterEach } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the first slide with headline, paragraph, three thumbs and the booking CTA', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Eat Healthy and Natural Foods',
    )
    expect(screen.getByText(/A small river named Duden flows by their place/)).toBeInTheDocument()
    expect(screen.getAllByText('Australian Organic Beef')).toHaveLength(3)
    expect(screen.getByRole('link', { name: 'Book A Table' })).toHaveAttribute(
      'href',
      '#reservation',
    )
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('advances to the next slide and wraps back with the arrows', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Love Delicious Foods')

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Eat Healthy and Natural Foods',
    )

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Love Delicious Foods')
  })

  it('auto-advances every six seconds and pauses on hover', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Eat Healthy and Natural Foods',
    )

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Love Delicious Foods')

    fireEvent.mouseEnter(screen.getByRole('region', { name: 'Welcome' }))
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Love Delicious Foods')

    fireEvent.mouseLeave(screen.getByRole('region', { name: 'Welcome' }))
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Eat Healthy and Natural Foods',
    )
  })
})
