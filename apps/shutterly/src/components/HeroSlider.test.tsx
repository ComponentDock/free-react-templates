import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the first slide with caption, arrows, dots, and scroll link', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('heading', { level: 1, name: 'Miami Lake' })).toBeInTheDocument()
    expect(screen.getByText('Nature Beauty')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Miami Lake' })).toHaveAttribute(
      'src',
      expect.stringContaining('shutterly-hero-1'),
    )

    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).not.toHaveAttribute(
      'aria-current',
    )
    expect(screen.getByRole('link', { name: /scroll to about/i })).toBeInTheDocument()
  })

  it('cycles forward through the slides and wraps to the first', () => {
    render(<HeroSlider />)

    const next = screen.getByRole('button', { name: 'Next slide' })
    fireEvent.click(next)
    expect(screen.getByRole('heading', { level: 1, name: 'Kayaking on Lakee' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Kayaking on Lakee' })).toHaveAttribute(
      'src',
      expect.stringContaining('shutterly-hero-2'),
    )
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(next)
    expect(screen.getByRole('heading', { level: 1, name: 'Electricity' })).toBeInTheDocument()
    expect(screen.getByText('Action Shot')).toBeInTheDocument()

    // Wraps back to the first slide
    fireEvent.click(next)
    expect(screen.getByRole('heading', { level: 1, name: 'Miami Lake' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('cycles backward and wraps from the first slide to the last', () => {
    render(<HeroSlider />)

    const prev = screen.getByRole('button', { name: 'Previous slide' })
    // From slide 1, previous wraps to slide 3
    fireEvent.click(prev)
    expect(screen.getByRole('heading', { level: 1, name: 'Electricity' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    // Back to slide 2
    fireEvent.click(prev)
    expect(screen.getByRole('heading', { level: 1, name: 'Kayaking on Lakee' })).toBeInTheDocument()
  })

  it('jumps directly to a slide via the dots', () => {
    render(<HeroSlider />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Electricity' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Kayaking on Lakee' })).toBeInTheDocument()
  })
})
