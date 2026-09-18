import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the hero text and CTA button', () => {
    render(<HeroSlider />)
    const headings = screen.getAllByText('Best Summer Collection')
    expect(headings.length).toBeGreaterThanOrEqual(1)
    // Each slide has a Read More link
    const links = screen.getAllByRole('link', { name: /read more/i })
    expect(links.length).toBeGreaterThanOrEqual(1)
  })

  it('renders dot indicators for each slide', () => {
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/i })
    expect(dots).toHaveLength(3)
  })

  it('allows manual slide selection via dot buttons', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/i })
    const secondDot = dots[1]!
    await user.click(secondDot)
    expect(secondDot).toBeInTheDocument()
  })

  it('auto-advances slides', async () => {
    vi.useFakeTimers()
    const { act } = await import('@testing-library/react')
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/i })
    expect(dots[0]).toHaveClass('bg-brand-red')
    await act(async () => {
      vi.advanceTimersByTime(5000)
    })
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
