import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CarouselShowcase } from './CarouselShowcase'

describe('CarouselShowcase', () => {
  it('starts on the first of three slides', () => {
    render(<CarouselShowcase />)

    expect(screen.getByRole('heading', { level: 3, name: 'Carousel' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 5 }).textContent).toBe('First slide label')
    expect(screen.getByRole('img').getAttribute('src')).toContain('flairkit-slide-1')
  })

  it('cycles with the previous and next controls, wrapping around', async () => {
    const user = userEvent.setup()
    render(<CarouselShowcase />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 5 }).textContent).toBe('Second slide label')

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 5 }).textContent).toBe('Third slide label')
    expect(screen.getByText(/cold granite/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 5 }).textContent).toBe('First slide label')

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 5 }).textContent).toBe('Third slide label')
  })

  it('jumps to a slide with the indicator buttons', async () => {
    const user = userEvent.setup()
    render(<CarouselShowcase />)

    const indicators = screen.getAllByRole('button', { name: /Go to slide/ })

    expect(indicators).toHaveLength(3)

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))

    expect(screen.getByRole('heading', { level: 5 }).textContent).toBe('Second slide label')
    expect(screen.getByRole('img').getAttribute('src')).toContain('flairkit-slide-2')
    expect(screen.getByRole('button', { name: 'Go to slide 2' }).className).toContain(
      'bg-flair-primary',
    )
  })
})
