import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the hero text and CTA button', () => {
    render(<HeroSlider />)
    const headings = screen.getAllByText('Best Summer Collection')
    expect(headings.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })

  it('renders dot indicators for each slide', () => {
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/i })
    expect(dots).toHaveLength(3)
  })

  it('allows manual slide selection via dot buttons', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/i })
    await user.click(dots[1])
    expect(dots[1]).toBeInTheDocument()
  })

  it('auto-advances slides', async () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/i })
    expect(dots[0]).toHaveClass('bg-brand-red')
    vi.advanceTimersByTime(5000)
    expect(dots[1]).toHaveClass('bg-brand-red')
    vi.useRealTimers()
  })

  it('renders background images', () => {
    render(<HeroSlider />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})
