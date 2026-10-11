import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CarouselShowcase } from './CarouselShowcase'

describe('CarouselShowcase', () => {
  it('renders the first slide, its caption, and three indicator dots', () => {
    render(<CarouselShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Carousel')
    expect(screen.getByRole('heading', { level: 5 }).textContent).toBe('First slide label')
    expect(screen.getByText(/nulla vitae elit libero/i)).toBeInTheDocument()
    expect(screen.getByAltText('')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/modkit-slide-1/1200/560',
    )

    expect(screen.getAllByRole('button', { name: /^Go to slide/ })).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('cycles with the next and previous controls, wrapping around', async () => {
    const user = userEvent.setup()
    render(<CarouselShowcase />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 5 }).textContent).toBe('Second slide label')

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 5 }).textContent).toBe('Third slide label')

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 5 }).textContent).toBe('First slide label')

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 5 }).textContent).toBe('Third slide label')

    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide through its indicator dot', async () => {
    const user = userEvent.setup()
    render(<CarouselShowcase />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))

    expect(screen.getByRole('heading', { level: 5 }).textContent).toBe('Second slide label')
    expect(screen.getByRole('button', { name: 'Go to slide 2' }).className).toContain('w-6')
    expect(screen.getByRole('button', { name: 'Go to slide 1' }).className).toContain('w-2')
  })
})
