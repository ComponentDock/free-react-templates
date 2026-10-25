import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from '../components/Faq'
import { Testimonials } from '../components/Testimonials'
import { faq, testimonials } from '../content'
import { resizeTo } from './helpers'

describe('Faq', () => {
  it('renders five closed rows divided by hairlines', () => {
    render(<Faq />)

    const toggles = screen.getAllByRole('button', { expanded: false })
    expect(toggles).toHaveLength(5)
    toggles.forEach((toggle) => expect(toggle).toHaveAttribute('aria-controls'))

    screen.getAllByTestId('faq-panel').forEach((panel) => {
      expect(panel).toHaveStyle({ maxHeight: '0px', opacity: '0' })
    })
  })

  it('opens one answer, closes a sibling and rotates the plus', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: faq.items[0].question })
    await user.click(first)

    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(first.querySelector('[data-faq-icon]')).toHaveClass('rotate-45')
    const firstPanel = screen.getByText(faq.items[0].answer).parentElement as HTMLElement
    expect(firstPanel).toHaveStyle({ opacity: '1' })

    const third = screen.getByRole('button', { name: faq.items[2].question })
    await user.click(third)

    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(third).toHaveAttribute('aria-expanded', 'true')
    expect(third.querySelector('[data-faq-icon]')).toHaveClass('rotate-45')
    expect(firstPanel).toHaveStyle({ opacity: '0' })
  })

  it('closes the open row when it is activated again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const second = screen.getByRole('button', { name: faq.items[1].question })
    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(second.querySelector('[data-faq-icon]')).not.toHaveClass('rotate-45')
  })
})

describe('Testimonials', () => {
  it('renders three reviews with initials, locations and terracotta stars', () => {
    render(<Testimonials />)

    expect(screen.getAllByTestId('carousel-slide')).toHaveLength(3)
    testimonials.items.forEach((item) => {
      expect(screen.getByText(`“${item.quote}”`)).toBeInTheDocument()
      expect(screen.getByText(item.name)).toBeInTheDocument()
      expect(screen.getByText(item.location)).toBeInTheDocument()
    })
    expect(screen.getByText('Reviews')).toHaveClass('bg-primary-100')
  })

  it('is a static grid at lg: no dots and no arrows at 1440', () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1440 })
    render(<Testimonials />)

    expect(screen.queryByTestId('carousel-dots')).toBeNull()
    expect(screen.queryByRole('button', { name: 'Next review' })).toBeNull()
    expect(screen.getByTestId('carousel-track')).toHaveStyle({ transform: 'translateX(-0%)' })
  })

  it('builds two dots at 768 and moves the track by one slide', async () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 768 })
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.getAllByRole('button', { name: /Go to review/ })).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: 'Next review' }))
    expect(screen.getByTestId('carousel-track')).toHaveStyle({ transform: 'translateX(-50%)' })
    expect(screen.getByRole('button', { name: 'Go to review 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(screen.getByTestId('carousel-track')).toHaveStyle({ transform: 'translateX(-0%)' })
  })

  it('shows three dots at 390 and hides the off-screen slides from assistive tech', async () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 })
    const user = userEvent.setup()
    render(<Testimonials />)

    const dots = screen.getAllByRole('button', { name: /Go to review/ })
    expect(dots).toHaveLength(3)

    const slides = screen.getAllByTestId('carousel-slide')
    expect(slides[0]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')

    await user.click(dots[2]!)
    expect(screen.getByTestId('carousel-track')).toHaveStyle({ transform: 'translateX(-200%)' })
  })

  it('re-measures when the window is resized', () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 })
    render(<Testimonials />)
    expect(screen.getAllByRole('button', { name: /Go to review/ })).toHaveLength(3)

    resizeTo(1440)

    expect(screen.queryByTestId('carousel-dots')).toBeNull()
  })
})
