import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'
import { heroSlides } from '../data'

function slides() {
  return screen
    .getAllByRole('group', { hidden: true })
    .filter((el) => el.getAttribute('data-slide') !== null)
}

afterEach(() => {
  vi.useRealTimers()
})

describe('HeroSlider', () => {
  it('renders all three slides with kicker, headline and copy', () => {
    render(<HeroSlider />)
    const headings = screen.getAllByRole('heading', { level: 1, hidden: true })
    expect(headings).toHaveLength(heroSlides.length)
    for (const slide of heroSlides) {
      expect(screen.getAllByText(slide.headline).length).toBeGreaterThan(0)
      expect(screen.getAllByText(slide.kicker).length).toBeGreaterThan(0)
    }
  })

  it('renders the Active Causes CTA', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('link', { name: 'Active Causes' })).toHaveAttribute('href', '#causes')
  })

  it('shows the first slide as active and the others hidden', () => {
    render(<HeroSlider />)
    const visible = slides()
    expect(visible).toHaveLength(3)
    expect(visible[0]).toHaveAttribute('aria-hidden', 'false')
    expect(visible[1]).toHaveAttribute('aria-hidden', 'true')
    expect(visible[2]).toHaveAttribute('aria-hidden', 'true')
  })

  it('switches slides when a dot is clicked', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/i })
    expect(dots).toHaveLength(3)
    await user.click(dots[2] as HTMLElement)
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
    const visible = slides()
    expect(visible[2]).toHaveAttribute('aria-hidden', 'false')
    expect(visible[0]).toHaveAttribute('aria-hidden', 'true')
  })

  it('auto-advances to the next slide on a timer', async () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    expect(slides()[0]).toHaveAttribute('aria-hidden', 'false')
    await act(async () => {
      await vi.advanceTimersByTimeAsync(6000)
    })
    expect(slides()[1]).toHaveAttribute('aria-hidden', 'false')
    await act(async () => {
      await vi.advanceTimersByTimeAsync(6000)
    })
    expect(slides()[2]).toHaveAttribute('aria-hidden', 'false')
  })
})
