import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Carousel } from './Carousel'

const slides = [
  <div key="a">Slide Alpha</div>,
  <div key="b">Slide Beta</div>,
  <div key="c">Slide Gamma</div>,
]

describe('Carousel', () => {
  it('renders the region label and first slide', () => {
    render(<Carousel slides={slides} regionLabel="Featured" />)
    expect(screen.getByRole('region', { name: 'Featured' })).toBeInTheDocument()
    expect(screen.getByText('Slide Alpha')).toBeInTheDocument()
  })

  it('moves forward with the next button and wraps around', async () => {
    const user = userEvent.setup()
    render(<Carousel slides={slides} regionLabel="Featured" />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('Slide Beta')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('Slide Alpha')).toBeInTheDocument()
  })

  it('moves backward with the previous button and wraps around', async () => {
    const user = userEvent.setup()
    render(<Carousel slides={slides} regionLabel="Featured" />)
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('Slide Gamma')).toBeInTheDocument()
  })

  it('supports custom prev/next labels', async () => {
    const user = userEvent.setup()
    render(<Carousel slides={slides} regionLabel="Featured" prevLabel="Back" nextLabel="Forward" />)
    await user.click(screen.getByRole('button', { name: 'Forward' }))
    expect(screen.getByText('Slide Beta')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Back' }))
    expect(screen.getByText('Slide Alpha')).toBeInTheDocument()
  })

  it('renders dots and jumps to a slide when one is clicked', async () => {
    const user = userEvent.setup()
    render(<Carousel slides={slides} regionLabel="Featured" showDots />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(3)
    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByText('Slide Gamma')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('autoplays when autoplayMs is provided', () => {
    vi.useFakeTimers()
    render(<Carousel slides={slides} regionLabel="Featured" autoplayMs={500} />)
    vi.advanceTimersByTime(501)
    expect(screen.getByText('Slide Beta')).toBeInTheDocument()
  })

  it('clears the autoplay timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Carousel slides={slides} regionLabel="Featured" autoplayMs={500} />)
    unmount()
    vi.advanceTimersByTime(1000)
    expect(screen.queryByText('Slide Beta')).not.toBeInTheDocument()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('clamps navigation when slides fit on one screen', async () => {
    const user = userEvent.setup()
    render(<Carousel slides={slides} regionLabel="Featured" visibleCount={3} />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('Slide Alpha')).toBeInTheDocument()
  })

  it('renders no dots when showDots is false', () => {
    render(<Carousel slides={slides} regionLabel="Featured" />)
    expect(screen.queryByRole('button', { name: /Go to slide/ })).not.toBeInTheDocument()
  })
})
