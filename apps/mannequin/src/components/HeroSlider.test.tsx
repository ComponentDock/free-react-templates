import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('shows the first slide label, headline and Shop Now button', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Women Collection 2030')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /New Season/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Shop Now' }).length).toBeGreaterThan(0)
  })

  it('advances with the next arrow and wraps around', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    expect(screen.getByRole('heading', { level: 2, name: /New Season/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 2, name: /Jackets & Coats/i })).toBeInTheDocument()

    const previous = screen.getByRole('button', { name: 'Previous slide' })
    await user.click(previous)
    await user.click(previous)
    expect(screen.getByRole('heading', { level: 2, name: /New arrivals/i })).toBeInTheDocument()
  })

  it('jumps to a slide via pagination dots', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    const dots = screen.getAllByRole('button', { name: /Go to slide/i })
    expect(dots).toHaveLength(3)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('heading', { level: 2, name: /New arrivals/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('announces the active slide via a live region', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('status')).toHaveTextContent('New Season')
  })
})
