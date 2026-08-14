import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen, fireEvent } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the first slide with a script line, large heading, and outline button', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Fusce erat dui')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Showcase your work' }),
    ).toBeInTheDocument()
    const button = screen.getByRole('link', { name: 'Read More' })
    expect(button).toHaveClass('uppercase')
    expect(button.querySelectorAll('span[aria-hidden="true"]')).toHaveLength(4)
  })

  it('shows a slide counter, a scroll hint, and the contact widget', () => {
    render(<HeroSlider />)
    expect(screen.getByLabelText('Slide 1 of 2')).toHaveTextContent('1 / 2')
    expect(screen.getByText('Discover')).toBeInTheDocument()
    expect(screen.getByText('Contact me')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Contact' })).toBeInTheDocument()
  })

  it('changes slides with the next/prev arrows and updates the counter', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 2, name: 'Creative natural short' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Slide 2 of 2')).toHaveTextContent('2 / 2')

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { level: 2, name: 'Showcase your work' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Slide 1 of 2')).toHaveTextContent('1 / 2')
  })

  it('marks the inactive slide as hidden from assistive tech', () => {
    render(<HeroSlider />)
    const hiddenHeading = screen.getByRole('heading', {
      level: 2,
      name: 'Creative natural short',
      hidden: true,
    })
    const slide = hiddenHeading.closest('[aria-hidden]')
    expect(slide).toHaveAttribute('aria-hidden', 'true')
  })

  it('autoplays to the next slide after the interval', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(
      screen.getByRole('heading', { level: 2, name: 'Creative natural short' }),
    ).toBeInTheDocument()
  })
})
