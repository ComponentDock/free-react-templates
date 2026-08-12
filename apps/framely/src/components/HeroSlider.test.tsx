import { describe, expect, it, vi, afterEach } from 'vitest'
import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all photo slides with the first caption', () => {
    render(<HeroSlider />)
    const slides = screen.getAllByRole('button', { name: /open photo/i })
    expect(slides).toHaveLength(7)
    expect(screen.getByRole('heading', { level: 1, name: 'Nature' })).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
  })

  it('advances the centered slide and caption on autoplay', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1, name: 'Nature' })).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByRole('heading', { level: 1, name: 'Red Heartbeat' })).toBeInTheDocument()
  })

  it('navigates with the next and previous arrow buttons', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByRole('heading', { level: 1, name: 'Red Heartbeat' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(screen.getByRole('heading', { level: 1, name: 'Nature' })).toBeInTheDocument()
  })

  it('wraps around the last slide back to the first', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    for (let i = 0; i < 6; i += 1) {
      await user.click(screen.getByRole('button', { name: /next slide/i }))
    }
    expect(screen.getByRole('heading', { level: 1, name: 'Remarkable' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByRole('heading', { level: 1, name: 'Nature' })).toBeInTheDocument()
  })

  it('opens a lightbox when a slide is clicked and closes it via the close button', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const slides = screen.getAllByRole('button', { name: /open photo/i })
    await user.click(slides[2]!)
    const lightbox = screen.getByRole('dialog', { name: /Blue Dreem/i })
    expect(lightbox).toBeInTheDocument()
    expect(within(lightbox).getByRole('img')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close lightbox/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the lightbox with the Escape key', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const slides = screen.getAllByRole('button', { name: /open photo/i })
    await user.click(slides[0]!)
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    // A non-Escape key leaves the lightbox open.
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
