import { describe, expect, it, vi, afterEach } from 'vitest'
import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { HERO_SLIDES } from '../data'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the split hero with the first slide visible', () => {
    render(<Hero />)

    const first = HERO_SLIDES[0]!
    expect(screen.getByRole('heading', { level: 1, name: first.headline })).toBeInTheDocument()
    expect(screen.getByText(first.eyebrow)).toBeInTheDocument()
    expect(screen.getByText(first.paragraph)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join with us' })).toBeInTheDocument()
    expect(screen.getByText(first.keyword)).toBeInTheDocument()
  })

  it('renders the oversized rotated keyword on both slides', () => {
    const { container } = render(<Hero />)

    const keywords = container.querySelectorAll('span')
    const texts = Array.from(keywords).map((el) => el.textContent)
    expect(texts).toContain('Strength')
    expect(texts).toContain('Workout')
  })

  it('switches to the second slide with the next button', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const second = HERO_SLIDES[1]!
    expect(
      screen.queryByRole('heading', { level: 1, name: second.headline }),
    ).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))

    expect(screen.getByRole('heading', { level: 1, name: second.headline })).toBeInTheDocument()
    expect(screen.getByText(second.eyebrow)).toBeInTheDocument()
    const first = HERO_SLIDES[0]!
    expect(
      screen.queryByRole('heading', { level: 1, name: first.headline }),
    ).not.toBeInTheDocument()
  })

  it('navigates to a slide via the dots', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))

    const second = HERO_SLIDES[1]!
    expect(screen.getByRole('heading', { level: 1, name: second.headline })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances every six seconds', () => {
    vi.useFakeTimers()
    render(<Hero />)

    const second = HERO_SLIDES[1]!
    expect(
      screen.queryByRole('heading', { level: 1, name: second.headline }),
    ).not.toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(6000)
    })

    expect(screen.getByRole('heading', { level: 1, name: second.headline })).toBeInTheDocument()
  })

  it('wraps around from the second slide back to the first', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))

    const first = HERO_SLIDES[0]!
    expect(screen.getByRole('heading', { level: 1, name: first.headline })).toBeInTheDocument()
  })

  it('goes back to the previous slide with the previous button', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))

    const first = HERO_SLIDES[0]!
    expect(screen.getByRole('heading', { level: 1, name: first.headline })).toBeInTheDocument()
  })

  it('renders a photo column per slide', () => {
    const { container } = render(<Hero />)

    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(HERO_SLIDES.length)
    expect(images[0]).toHaveAttribute('src', HERO_SLIDES[0]!.photo)
  })

  it('wraps the visible slide in an aria-labelled section', () => {
    render(<Hero />)
    const section = screen.getByRole('region', { name: 'Hero slider' })
    expect(within(section).getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
