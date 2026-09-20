import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi, afterEach, describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('HeroSlider', () => {
  it('renders the first slide heading', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Best Online Learning System')).toBeInTheDocument()
  })

  it('renders subtitle text on all slides', () => {
    render(<HeroSlider />)
    const subtitles = screen.getAllByText('You only have to know one thing')
    expect(subtitles.length).toBe(4)
  })

  it('renders CTA buttons on all slides', () => {
    render(<HeroSlider />)
    const ctas = screen.getAllByText('Start Learning Now!')
    expect(ctas.length).toBe(4)
  })

  it('renders navigation dots', () => {
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(4)
  })

  it('advances to next slide on dot click', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    await user.click(dots[1]!)
    expect(screen.getByText('Online Free Courses')).toBeInTheDocument()
  })

  it('auto-advances slides', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    render(<HeroSlider />)
    vi.advanceTimersByTime(5500)
    expect(screen.getByText('Online Free Courses')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
